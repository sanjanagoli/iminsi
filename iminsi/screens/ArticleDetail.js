import React, { Component } from 'react';
import {
  ActivityIndicator, 
  View,
  Dimensions,
  ScrollView, 
  StyleSheet,
  Text, 
  Button, 
} from 'react-native';
import WebView from 'react-native-webview';
import HTML from 'react-native-render-html';
import { connect } from 'react-redux';
import { incrementScore, addUserOrganizations } from '../actions/index';
import Emoji from 'react-native-emoji';
import { AntDesign } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  contentContainer: {
    width: '100%',
    // height: 300,
    paddingBottom: 20,
    paddingTop: 20,
  },
  text: {
    flex: 1,
    alignContent: 'center',
    paddingBottom: '10%',
  },

  horizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  question: {
    fontWeight: '600',
    paddingLeft: 20,
    fontSize: 15,
    width: 110,
    color: 'white',
  },

  picture: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Baskerville',
    width: '90%',
    paddingBottom: 5,
  },
  newsOrganization: {
    fontWeight: 'bold',
    fontFamily: 'Baskerville',
    fontSize: 12,
    color: 'white',
    paddingBottom: 5,
  },
  tags: {
    fontSize: 10,
    color: 'white',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
    color: 'white',
    paddingRight: 25,
  },
  reliable: {
    position: "absolute",
    width: '90%',
    backgroundColor: 'rgb(56, 60, 108)',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    top: windowHeight/2,
    alignContent: "center",
    flex: 1,
    height: 60,
    marginLeft: '10%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
  },
  arrow: {
    position: "absolute",
    width: '3%',
    backgroundColor: 'rgb(56, 60, 108)',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    top: windowHeight/2,
    justifyContent: "center",
    right: 0,
    flex: 1,
    height: 60,
    marginLeft: '10%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
  },
});

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      htmlContent: '',
      userRatedArticle: false,
      poll: false,
    }
  }

  showSpinner() {
    console.log('Show Spinner');
    this.setState(() => ({ ...this.state, visible: true }));
  }

  hideSpinner() {
    this.setState(() => ({ ...this.state, visible: false }));
  }

  updateScoreIncrease(score, id) {
    this.setState({
      userRatedArticle: true,
    });

    if (score > 0){
      if (this.props.loaded){
        const { route } = this.props;
      const creatingOrgId  = route.params.article.newsOrganization.id;
      const orgObjectArray = [creatingOrgId]
      this.props.addUserOrganizations(this.props.currentUser.id, orgObjectArray);
      }
    }
    this.props.incrementScore(id, score);
  }

  readPoll(){
    if (this.state.poll){
      this.setState({poll: false});
    }
    else{
      this.setState({poll: true});
    }
  }

  ArticleReliable(id) {
    const { userRatedArticle } = this.state;
    if (userRatedArticle) {
      return (
        <View style={styles.arrow}>
          <AntDesign name="check" size={30} color="white" style={{marginLeft: 10}}/>
      </View>
      );
    }

    else if (!userRatedArticle && this.state.poll){
      return (
        <View style={styles.reliable}>
          <View style={styles.horizontal}>
            <AntDesign name="right" size={30} color="white" onPress={() => this.readPoll()} style={{marginLeft: 10}}/>
            <Text style={styles.question}>Do you trust this Article?</Text>
            <View style={{justifyContent: "space-between", flexDirection: "row", width: '60%'}}>
              <Emoji name="rage" style={{fontSize: 30}} 
                onPress={() => this.updateScoreIncrease(-2, id)}/>
              <Emoji name="angry" style={{fontSize: 30}} 
                onPress={() => this.updateScoreIncrease(-1, id)} />
              <Emoji name="neutral_face" style={{fontSize: 30}} 
              onPress={() => this.updateScoreIncrease(0, id)}/>
              <Emoji name="grinning" style={{fontSize: 30}} 
                onPress={() => this.updateScoreIncrease(1, id)}/>
              <Emoji name="innocent" style={{fontSize: 30}} 
                onPress={() => this.updateScoreIncrease(2, id)}/>
            </View>
          </View>
        </View>
      );
    }
    else{
      return (
      <View style={styles.arrow}>
          <AntDesign name="left" size={30} color="white" onPress={() => this.readPoll()}/>
      </View>
      );
    }
  }

  showVerified() {
    this.props.navigation.navigate('Verified');
  }

  render() {
    const { route } = this.props;
    const { article } = route.params;
    if (this.props.webView) {
      return (
        <View style={{ flex: 1 }}>
            <WebView
              onLoad={() => this.hideSpinner()}
              style={{ flex: 1 }}
              source={{ uri: article.urlSource }}
          />
          {this.ArticleReliable(article.id)}
          {this.state.visible && (
            <ActivityIndicator
              style={{ position: "absolute", top: windowHeight / 2, left: windowWidth / 2 }}
              size="large"
            />
          )}
        </View>
      );
    } else {
      return (
        <View>
          
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
            <View style={styles.text}>
              <Text style={styles.title}>{article.title}</Text>
              <Text>
                Score is
                {' '}
                {article.score}
                {' '}
              </Text>
              <HTML html={article.content} imagesMaxWidth={Dimensions.get('window').width} containerStyle={{width: '90%', marginLeft: '5%', marginRight: '5%'}}/>
            </View>
          </ScrollView>
          {this.ArticleReliable(article.id)}
        </View>
      );
    }
  }

};


function mapReduxStateToProps(reduxState) {
  return {
    webView: reduxState.user.webView,
    loaded: reduxState.user.loaded,
    currentUser: reduxState.user.currentUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    incrementScore: (id, score) => {
      dispatch(incrementScore(id, score));
    },
    addUserOrganizations: (userid, organizationid) => {
      dispatch(addUserOrganizations(userid, organizationid));
    },
  }
}


export default connect(mapReduxStateToProps, {incrementScore, addUserOrganizations})(ArticleDetail);



