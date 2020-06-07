/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions, StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getArticles } from '../actions/index';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const smallStoryStyles = StyleSheet.create({

  title: {
    fontSize: 16,
    fontFamily: 'Baskerville',
    fontWeight: '200',
    textAlign: 'left',
    width: '70%',
    flexWrap: 'wrap',
  },

  newsOrganization: {
    fontFamily: 'Baskerville',
    fontSize: 12,
  },
  tags: {
    color: 'grey',
    fontSize: 10,
    fontFamily: 'Baskerville',
  },
  pictureDate: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  picture: {
    backgroundColor: 'black',
    width: '20%',
    height: '100%',
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
  },
  seperator: {
    marginVertical: 2,
    // borderBottomColor: '#737373',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tagsText: {
    fontSize: 10,
    fontFamily: 'Baskerville',
    fontWeight: '100',
    color: 'black',
  },
  date: {
    fontFamily: 'Baskerville',
    fontWeight: '100',
    flexWrap: 'wrap',
    fontSize: 15,
    color: 'black',
  },
  titleAndPicture: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '70%',
  },
  tagDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
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

  dateRender = (dateStr) => {
    const x = new Date(dateStr);
    const dates = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (`${dates[x.getDate()]} of ${months[x.getMonth()]} ${x.getFullYear()}`);
  }

  showArticleDetail(article) {
    this.props.navigation.navigate('ArticleDetail', { article });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: windowWidth,
        backgroundColor: 'white',
      }}
      >
        {this.props.route.params.articles.map((article) => {
          return (
            <View key={article.id}>

              <TouchableOpacity style={{
                backgroundColor: 'white', width: windowWidth, height: windowHeight / 7, paddingLeft: windowWidth / 45, paddingRight: windowWidth / 45,
              }}
                onPress={() => { this.showArticleDetail(article); }}
                underlayColor="none"
              >

                <View style={smallStoryStyles.container}>
                  <Text style={smallStoryStyles.newsOrganization}>{article.newsOrganization.orgName}</Text>
                  <View style={smallStoryStyles.titleAndPicture}>
                    <Text style={smallStoryStyles.title}>{article.title}</Text>
                    <Image style={smallStoryStyles.picture} source={{ url: ((article.imageURL) ? article.imageURL : 'https://i.stack.imgur.com/y9DpT.jpg') }} />
                  </View>
                  <View style={smallStoryStyles.tagDate}>
                    <Text style={smallStoryStyles.tagsText}>{(article.tags === '') ? article.tags : '#NoTags #Tagless'}</Text>
                    <Text style={smallStoryStyles.date}>{this.dateRender(article.date)}</Text>
                  </View>
                </View>

              </TouchableOpacity>
              <View style={smallStoryStyles.seperator} />
            </View>

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
      interests: [{ interestName: 'Politics', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
        { interestName: 'Sports', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
        { interestName: 'International', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
        { interestName: 'Health', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
        { interestName: 'Economics', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
        { interestName: 'Stocks', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
        { interestName: 'Fashion', articles: [{ date: 'ereerdsfsfs' }, { date: 'ereerdsfsfs' }] },
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
