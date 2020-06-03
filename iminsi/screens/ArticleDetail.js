/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  ScrollView, StyleSheet, Dimensions, View, Text, Button, Image,
} from 'react-native';
import HTML from 'react-native-render-html';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { incrementScore, decrementScore } from '../actions/index';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: '',
      userRatedArticle: false,
    };
  }

  showVerified() {
    this.props.navigation.navigate('Verified');
  }

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

  render() {
    const { route } = this.props;
    const { article } = route.params;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.text}>
          <Text style={styles.title}>{article.title}</Text>
          <HTML html={article.content} imagesMaxWidth={Dimensions.get('window').width} />
          <Text>
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

// export default connect(mapReduxStateToProps, mapDispatchToProps)(ArticleDetail);
export default connect(null, mapDispatchToProps)(ArticleDetail);
