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
import { getArticles, getUserArticles, getOrganizations } from '../actions/index';

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
    marginTop: 5,
  },

  newsOrganization: {
    marginTop: 10,
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
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
    padding: 3,
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
          backgroundColor: 'white', width: windowWidth, height: windowHeight / 5, paddingLeft: windowWidth / 45, paddingRight: windowWidth / 45,
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
    // const profileArticles = this.props.currentUser.profileArticles;
    const trustedSources = this.props.currentUser.trustedOrganizations;
    return (
      trustedSources.map((newsOrgname) => {
        return (
          <View key={newsOrgname.organization.id} style={styles.tile}>
            <Text style={styles.newsOrg}>{newsOrgname.organization.orgName}</Text>
          </View>
        );
      })
    );
  }

  bookmarked() {
    const profileArticles = this.props.currentUser.profileArticles;
    return (
      profileArticles.map((article) => {
        return (
          this.smallArticle(article)
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
          <View style={styles.tiles}>
            {this.newsOrgs()}
          </View>
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
    if (this.props.userLoaded) {
      this.props.getUserArticles(this.props.currentUser);
      this.props.getOrganizations(this.props.currentUser);

      return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.pictureBackground}>
            <Text style={styles.username}>
              Hi, {this.props.currentUser.username}
            </Text>
            <Text style={styles.username}>
              {this.props.currentUser.country}
            </Text>

          </View>
          {this.bottomScreen()}
        </ScrollView>
      );
    }
    else {
      return (
        <View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: windowWidth, height: windowHeight }} >
          <Text style={{
            fontFamily: 'Baskerville',
            fontWeight: '300',
            color: 'rgb(56, 60, 108)',
            fontSize: 30,
            textAlign: 'center',
            paddingTop: '15%',
            paddingBottom: '5%',
          }}
          >
            You are not logged in yet.  {"\n"}Please SignIn - SignUp
            </Text>
          <TouchableOpacity key={this.props.name}
            style={{

              marginTop: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(56, 60, 108)', width: (0.4 * windowWidth), height: (0.1 * windowHeight), marginRight: windowHeight / 50,
            }}
            onPress={() => { this.props.navigation.navigate('Sign In', { parent: 'Profile' }); }}
          >
            <Text style={{
              fontFamily: 'Baskerville',
              fontWeight: '200',
              fontSize: 20,
              color: 'white',
            }}
            >
              SignIn - SignUp
            </Text>
          </TouchableOpacity>
        </View>

      );
    }
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    articles: reduxState.article.articles,
    currentUser: reduxState.user.currentUser,
    userLoaded: reduxState.user.loaded,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
    getUserArticles: (user) => {
      dispatch(getUserArticles(user));
    },
    getOrganizations: (user) => {
      dispatch(getOrganizations(user));
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
    height: 180,
    flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: 'center',
  },
  toggles: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    height: 45,
    alignItems: 'center',
    flex: 1,
    justifyContent: "space-around",
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
  username: {
    fontFamily: 'Baskerville',
    fontSize: 30,
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
  },
  tiles: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: "center",
  },
  tile: {
    // backgroundColor: '#383C6C',
    borderColor: '#383C6C',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderRadius: 10,
    width: 150,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsOrg: {
    color: '#383C6C',
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    fontSize: 16,
    width: 100,
  },

});


export default connect(mapReduxStateToProps, mapDispatchToProps)(ProfileScreen);
