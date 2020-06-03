import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, View,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getArticles } from '../actions/index';
import smallStoryStyles from '../stylesheets/SmallNewsStyle';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTrustedSources: true,
    };
  }

  flip() {
    const { onTrustedSources } = this.state;
    if (onTrustedSources) {
      this.setState({
        onTrustedSources: false,
      });
    } else {
      this.setState({
        onTrustedSources: true,
      });
    }
  }

  smallArticle(article) {
    return (
      <TouchableOpacity key={article.id} onPress={() => { this.showArticleDetail(article); }} underlayColor="none">
        <View style={smallStoryStyles.container}>
          <Text style={smallStoryStyles.newsOrganization}>{article.newsOrganization}</Text>
          <View style={smallStoryStyles.titleAndPicture}>
            <Image style={smallStoryStyles.picture} source={{ url: article.imageURL }} />
            <Text style={smallStoryStyles.title}>{article.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  newsOrgs() {
    // const myorgs = ['Ethiopian Times', 'New Times Rwanda', 'Al Jazeera', 'CNBC Africa', 'Africa News'];
    return (
      <View>
        <View style={styles.tiles}>
          <View style={styles.tile}>
            <Text style={styles.newsOrg}>New Times Rwanda</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.newsOrg}>Ethiopian Times</Text>
          </View>
        </View>
        <View style={styles.tiles}>
          <View style={styles.tile}>
            <Text style={styles.newsOrg}>Soft Power Uganda</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.newsOrg}>New Vision</Text>
          </View>
        </View>
        <View style={styles.tiles}>
          <View style={styles.tile}>
            <Text style={styles.newsOrg}>Africa News</Text>
          </View>
          <View style={styles.tile}>
            <Text style={styles.newsOrg}>CNBC Africa</Text>
          </View>
        </View>
      </View>
    );
  }

  bookmarked() {
    const { articles } = this.props;
    return (
      articles.map((article) => {
        return (
          this.smallArticle(article)
          // <SmallNews key={article.id} title={article.title} tags={article.tags} newsOrganization={article.newsOrganization} imageURL={article.imageURL} date={article.date} />
        );
      })
    );
  }

  bottomScreen() {
    const { onTrustedSources } = this.state;
    if (onTrustedSources) {
      return (
        <View>
          <View
            style={styles.line}
          />
          <View style={styles.toggles}>
            <Text style={styles.toggleElementActive}>Trusted Sources</Text>
            <Text style={styles.toggleElementInactive} onPress={() => { this.flip(); }}>Bookmarked</Text>
          </View>
          <View
            style={styles.line}
          />
          {this.newsOrgs()}

          {/* <View style={styles.tiles} /> */}
        </View>
      );
    } else {
      return (
        <View>
          <View
            style={styles.line}
          />
          <View style={styles.toggles}>
            <Text style={styles.toggleElementInactive} onPress={() => { this.flip(); }}>Trusted Sources</Text>
            <Text style={styles.toggleElementActive}>Bookmarked</Text>
          </View>
          <View
            style={styles.line}
          />
          {this.bookmarked()}
        </View>
      );
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.pictureBackground}>
          <ImageBackground
            source={{ url: 'https://i.pinimg.com/474x/a9/db/c3/a9dbc3dc7f47333d554a0c9e1cee8ba0--african-fabric-african-art.jpg' }}
            style={styles.picture}
          />
        </View>
        {this.bottomScreen()}
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


const ratio = 150 / 418; // 418 is actual image width
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: '#383C6C',
    paddingTop: 34,
    paddingLeft: 16,
    fontFamily: 'Baskerville',
    paddingBottom: 20,
    height: 80,
  },
  picture: {
    width: 150,
    height: 500 * ratio,
    backgroundColor: 'green',
    flex: 2,
  },
  pictureBackground: {
    width: '100%',
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    paddingBottom: 20,
  },
  toggles: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    height: 45,
    alignItems: 'center',
  },
  toggleElementActive: {
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#383C6C',
    width: 150,
    paddingLeft: 25,
  },
  toggleElementInactive: {
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 16,
    width: 150,
    paddingLeft: 25,
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
  },
  tiles: {
    height: 150,
    width: 370,
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 20,
    // alignContent: 'center',
  },
  tile: {
    backgroundColor: '#383C6C',
    width: 150,
    height: 150,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsOrg: {
    color: 'white',
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default connect(mapReduxStateToProps, mapDispatchToProps)(ProfileScreen);
