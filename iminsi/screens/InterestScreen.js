/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getArticles } from '../actions/index';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class InterestScreen extends Component {
  componentDidMount() {
    this.props.getArticles();
  }


  render() {
    return (
      <ScrollView contentContainerStyle={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: windowWidth,
      }}>
        {this.props.route.params.articles.map((article) => { return (
            <Text>
                {article.title}
            </Text>
        );})}
      </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    articles: reduxState.article.articles,
    user: {
      interests: [{ interestName: 'Politics', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      { interestName: 'Sports', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      { interestName: 'International', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      { interestName: 'Health', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      { interestName: 'Economics', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      { interestName: 'Stocks', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      { interestName: 'Fashion', articles: [{date: 'ereerdsfsfs'}, {date: 'ereerdsfsfs'},] },
      ],
    }/* reduxState.user.user */,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(InterestScreen);
