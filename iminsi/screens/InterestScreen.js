/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getArticles } from '../actions/index';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { StyleSheet } from 'react-native';

const smallStoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderTopColor: '#000000',
    borderTopWidth: 0.2,
    borderBottomColor: '#000000',
    borderBottomWidth: 0.2,
    minHeight: windowHeight/6,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Baskerville',
    fontWeight: "100",
    justifyContent: 'center',
    width: '70%',
    paddingLeft: 15,
  },

  newsOrganization: {
    fontFamily: 'Baskerville',
    fontWeight: "100",
    fontSize: 15,
    paddingLeft: 15,
    marginTop: 15,
  },
  tags: {
    color: 'grey',
    fontSize: 10,
    fontFamily: 'Baskerville',
    fontWeight: "100",
  },
  pictureDate: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 10,
  },
  picture: {
    flex: 1,
    backgroundColor: 'black',
    maxWidth: '30%',
    justifyContent: 'flex-start',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
    fontFamily: 'Baskerville',
    fontWeight: "100",
  },
  titleAndPicture: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingLeft: '8.5%',
    paddingBottom: 10,
    paddingTop: 10,
    minHeight: windowHeight/15,
  },
  content: {
    backgroundColor: '#fff',
    padding: 30,
  },
});

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
        backgroundColor: 'white',
      }}>
        {/*this.props.route.params.articles*/ [{id: 1, newsOrganization: "The NewYork Times", title: 'Fake Article', tags: '#Tag1 #Tag2', imageURL: 'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1'}, {id: 2, newsOrganization: "The NewYork Times", title: 'Fake Article',}, {id: 3, newsOrganization: "The NewYork Times", title: 'Fake Article',},].map((article) => {
          return (
            <TouchableOpacity key={article.id} onPress={() => {  }} underlayColor="none">
              <View style={smallStoryStyles.container}>
                <Text style={smallStoryStyles.newsOrganization}>{article.newsOrganization}</Text>
                <View style={smallStoryStyles.titleAndPicture}>
                  <Image style={smallStoryStyles.picture} source={{ url: article.imageURL }} />
                  <Text style={smallStoryStyles.title}>{article.title}</Text>
                </View>
                <Text style={smallStoryStyles.tags}>{article.tags}</Text>
              </View>
            </TouchableOpacity>
        );
        })}
      </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    articles: reduxState.article.articles,
    user: {
      interests: [{ interestName: 'Politics', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
      { interestName: 'Sports', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
      { interestName: 'International', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
      { interestName: 'Health', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
      { interestName: 'Economics', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
      { interestName: 'Stocks', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
      { interestName: 'Fashion', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' },] },
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
