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
import { incrementScore, decrementScore } from '../actions/index';

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
    width: '90%',
    alignContent: 'center',
    paddingLeft: '10%',
    paddingBottom: '10%',
  },

  horizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  question: {
    fontWeight: '600',
    fontSize: 15,
    borderTopWidth: 20,
    borderTopColor: 'red',
  },

  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '70%',
    alignSelf: 'center',
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
});

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      htmlContent: '',
      userRatedArticle: false,
    }
  }

  showSpinner() {
    console.log('Show Spinner');
    this.setState(() => ({ ...this.state, visible: true }));
  }

  hideSpinner() {
    console.log('Hide Spinner');
    this.setState(() => ({ ...this.state, visible: false }));
  }
  // example of destructuring, the below is equivalent to props.route.params.video
  //   filterRequest = (request) => {
  //     return !request.url.includes("ad");
  // };

  updateScoreIncrease(score, id) {
    this.setState({
      userRatedArticle: true,
    });
    let i = 0;
    while (i < score) {
      this.props.incrementScore(score, id);
      i += 1;
    }
  }

  updateScoreDecrease(score, id) {
    this.setState({
      userRatedArticle: true,
    });
    let i = 0;
    while (i > score) {
      this.props.incrementScore(score, id);
      i -= 1;
    }
  }

  ArticleReliable(id) {
    const { userRatedArticle } = this.state;
    if (userRatedArticle) {
      return (
        <Text>Thanks!</Text>
      );
    }
    return (
      <View>
        <View
          style={styles.line}
        />
        <Text style={styles.question}>How reliable is this Article?</Text>
        <View style={styles.horizontal}>
          <Button
            title="-2"
            onPress={() => this.updateScoreDecrease(-2, id)}
          />
          <Button
            title="-1"
            onPress={() => this.updateScoreDecrease(-2, id)}
          />
          <Button
            title="0"
          />
          <Button
            title="1"
            onPress={() => this.updateScoreIncrease(1, id)}
          />
          <Button
            title="2"
            onPress={() => this.updateScoreIncrease(2, id)}
          />
        </View>
        <View
          style={styles.line}
        />
      </View>
    );
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
          {this.state.visible && (
            <ActivityIndicator
              style={{ position: "absolute", top: windowHeight / 2, left: windowWidth / 2.7 }}
              size="large"
            />
          )}
        </View>

        // <WebView
        //   source={{ uri: article.urlSource }}
        //   originWhitelist ={['*']}
        //   automaticallyAdjustContentInsets={false}
        //   // onShouldStartLoadWithRequest={this.filterRequest}
        // />
      );
    } else {
      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.text}>
            <Text style={styles.title}>{article.title}</Text>
            <HTML html={article.content} imagesMaxWidth={Dimensions.get('window').width} />
            <Text style={{margin: 50}}>
              Score is
            {' '}
              {article.score}
              {' '}
            </Text>
            {this.ArticleReliable(article.id)}
          </View>
        </ScrollView>
      );
    }

  }

};


function mapReduxStateToProps(reduxState) {
  return {
    webView: reduxState.user.webView,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementScore: () => {
      dispatch(incrementScore());
    },
    decrementScore: () => {
      dispatch(decrementScore());
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(ArticleDetail);

// /* eslint-disable react/destructuring-assignment */


// class ArticleDetail extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       
//     };
//   }





//   render() {
//     const { route } = this.props;
//     const { article } = route.params;

//   }
// }




// // export default connect(mapReduxStateToProps, mapDispatchToProps)(ArticleDetail);
// export default connect(null, mapDispatchToProps)(ArticleDetail);


