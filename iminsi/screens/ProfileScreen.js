/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, View,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTrustedSources: true,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
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

  fillInBlanks(article) {
    if (!article.id) {
      article.id = article.newsOrganization.orgName;
    }
    if (!article.imageURL) {
      article.imageURL = 'https://pics.me.me/nope-nothing-here-9281424.png';
    }
    if (!article.newsOrg.orgName || !article.newsOrganization.orgName) {
      article.newsOrganization.orgName = 'PlaceHolder Times';
    }

    if (!article.content) {
      article.content = 'Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.';
    }
    if (!article.title) {
      article.title = 'Article Title';
    }
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
          {this.props.articles.map((article) => {
            return (
              this.smallArticle(article)
            // <SmallNews key={article.id} title={article.title} tags={article.tags} newsOrganization={article.newsOrganization} imageURL={article.imageURL} date={article.date} />
            );
          })}
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