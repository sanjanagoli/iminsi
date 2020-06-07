/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet, Text, View, Image, Dimensions,
} from 'react-native';
import { getArticles, getVerifiedArticles } from '../actions/index';
import HighlightedNewsTrending from '../components/HighlightedNewsTrending';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class VerifiedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getVerifiedArticles();
    this.props.getArticles();
  }

  dateRender = (dateStr) => {
    const x = new Date(dateStr);
    const dates = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (`${dates[x.getDate()]} of ${months[x.getMonth()]} ${x.getFullYear()}`);
  }


  smallArticle = (article) => {
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
  };

  showArticleDetail(article) {
    this.props.navigation.navigate('ArticleDetail', { article });
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    // replace with verified articles later
    if (this.props.verifiedArticles !== undefined && this.props.verifiedArticles !== null && this.props.verifiedArticles.length >= 3) {
      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{ flexDirection: 'column', width: windowWidth, height: windowHeight * 2 }}>
            {console.log('here in highlighted')}
            {console.log(this.props.verifiedArticles)}
            <HighlightedNewsTrending key={this.props.verifiedArticles[0].id} h={0.9} article={this.props.verifiedArticles[0]} navigation={this.props.navigation} />
            <HighlightedNewsTrending key={this.props.verifiedArticles[1].id} h={0.7} article={this.props.verifiedArticles[1]} navigation={this.props.navigation} />
            <HighlightedNewsTrending key={this.props.verifiedArticles[2].id} h={0.4} article={this.props.verifiedArticles[2]} navigation={this.props.navigation} />
          </View>
          {this.props.verifiedArticles.map((article) => {
            return (
              this.smallArticle(article)
              // <SmallNews key={article.id} title={article.title} tags={article.tags} newsOrganization={article.newsOrganization} imageURL={article.imageURL} date={article.date} />
            );
          })}
        </ScrollView>
      );
    } else {
      return (
        <Text>Loading...</Text>
      );
    }
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    verifiedArticles: reduxState.article.verified,
    articles: reduxState.article.articles,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVerifiedArticles: () => {
      dispatch(getVerifiedArticles());
    },
    getArticles: () => {
      dispatch(getArticles());
    },
  };
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: '#383C6C',
    paddingTop: 36,
    paddingLeft: 16,
    fontFamily: 'Baskerville',
    paddingBottom: 20,
  },
});

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
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tagsText: {
    fontSize: 10,
    fontFamily: 'Baskerville',
    fontWeight: '100',
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


export default connect(mapReduxStateToProps, mapDispatchToProps)(VerifiedScreen);
