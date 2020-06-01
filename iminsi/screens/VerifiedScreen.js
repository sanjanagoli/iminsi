/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { getArticles } from '../actions/index';
import HighlightedNewsManzi from '../components/HighlightedNewsManzi';
import smallStoryStyles from '../stylesheets/SmallNewsStyle';


class VerifiedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getArticles();
  }

  showArticleDetail(article) {
    this.props.navigation.navigate('ArticleDetail', { article });
  }

  smallArticle(article) {
    return (
      <TouchableOpacity key={article.id} onPress={() => { this.showArticleDetail(article); }} underlayColor="none">
        <View style={smallStoryStyles.container}>
          <View style={smallStoryStyles.titleTagsAndOrg}>
            <Text style={smallStoryStyles.newsOrganization}>{article.newsOrganization}</Text>
            <Text style={smallStoryStyles.title}>{article.title}</Text>
            <Text style={smallStoryStyles.tags}>{article.tags}</Text>
          </View>
          <View style={smallStoryStyles.pictureDate}>
            <Image style={smallStoryStyles.picture} source={{ url: article.imageURL }} />
            <Text style={smallStoryStyles.date}>{article.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Trending</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            height: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column',
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
        >
          {this.props.articles.map((article) => {
            return (
              <HighlightedNewsManzi key={article.id} title={article.title} tags={article.tags} newsOrganization={article.newsOrganization} imageURL={article.imageURL} date={article.date} />
            );
          })}
        </ScrollView>
        {this.props.articles.map((article) => {
          return (
            this.smallArticle(article)
            // <SmallNews key={article.id} title={article.title} tags={article.tags} newsOrganization={article.newsOrganization} imageURL={article.imageURL} date={article.date} />
          );
        })}
      </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    articles: reduxState.article.articles,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(VerifiedScreen);
