/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  getArticles, getInterests, getUserArticles, getUserInterests, addSelectedInterest,
} from '../actions/index';
import styles from '../stylesheets/ForYouStyle';
import HighlightedNews from '../components/HighlightedNews';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Pill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      color: 'rgb(158, 158, 158)',
      textColor: 'black',
    };
  }

  colorFlip = () => {
    if (this.state.clicked) {
      this.setState(() => ({
        clicked: false,
        color: 'rgb(158, 158, 158)',
        textColor: 'black',
      }));
    } else {
      this.setState(() => ({
        clicked: true,
        color: 'rgb(56, 60, 108)',
        textColor: 'white',
      }));
    }
  }

  render() {
    return (
      <TouchableOpacity key={this.props.name}
        style={{
          borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.color, width: ((74 / 360) * windowWidth), height: ((26 / 640) * windowHeight), marginRight: windowHeight / 50,
        }}
        onPress={() => { this.colorFlip(); this.props.pillClick(this.props.interestObj); }}
      >
        <Text style={{
          fontFamily: 'Baskerville',
          fontWeight: '200',
          color: this.state.textColor,
        }}
        >
          {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

class ForYouScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   selectedInterests: [],
    // });
    // / this.props.getArticles();
    if (this.props.currentUser != null && this.props.currentUser != undefined) {
      if (this.props.currentUser.id != undefined && this.props.currentUser.id != null) {
        console.log('before', this.props.currentUser.id);
        const userId = this.props.currentUser.id;
        this.props.getUserInterests(userId);
        console.log('after');
      }
    }
    this.props.getInterests();
  }

  pillClick = (interest) => {
    const newStateArray = this.state.selectedInterests.slice();
    let x = 0;
    this.state.selectedInterests.forEach((int, idx) => {
      if (int.interestName === interest.interestName) {
        // remove it
        newStateArray.splice(idx, 1);
        this.setState(() => ({
          selectedInterests: newStateArray,
        }));
        x++;
      }
    });
    if (x === 0) {
      // ADDS TO IT from top
      newStateArray.unshift(interest);
      this.setState(() => ({
        selectedInterests: newStateArray,
      }));
    }
  }

  capitalizeTag = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getArticlesForInterest = (interest) => {
    return this.props.articles;
  }

  render() {
    console.log('is loaded', this.props.userLoaded);
    if (this.props.userLoaded) {
      if (this.props.allInterests != undefined && this.props.allInterests != null) {
        console.log('length of interests', this.props.allInterests.length);
        return (
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.topBar}>
              <ScrollView
                horizontal
                contentContainerStyle={styles.scroll}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                alwaysBounceHorizontal
              >
                {this.props.allInterests.map((interest) => {
                  return (
                    <Pill key={interest.interestName} interestObj={interest} name={this.capitalizeTag(interest.interestName)} pillClick={this.pillClick} />
                  );
                })}
                <TouchableOpacity key="addInterests"
                  style={{
                    borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(158, 158, 158)', width: ((74 / 360) * windowWidth), height: ((26 / 640) * windowHeight), marginRight: windowHeight / 50,
                  }}
                  onPress={() => { this.props.navigation.navigate('Interest Adder'); }}
                >
                  <Text style={{
                    fontFamily: 'Baskerville',
                    fontWeight: '900',
                    fontSize: 24,
                    color: 'black',
                  }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
            {this.state.selectedInterests.map((interest) => {
              return (
                <HighlightedNews
                  articleNav={(article) => { this.props.navigation.navigate('ArticleDetail', { article }); }}
                  navTrigger={() => { this.props.navigation.navigate('Interest Screen', { name: interest.interestName, articles: interest.articles }); }}
                  title={this.capitalizeTag(interest.interestName)}
                  key={interest.interestName}
                  articles={interest.articles.slice()}
                  numberOfArticles={interest.articles.slice().length}
                  bookmarked={this.props.currentUser.profileArticles}
                />
              );
            })}
          </ScrollView>
        );
      } else if (this.props.currentUser.interests != undefined && this.props.currentUser.interests != null) {
        return (
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.topBar}>
              <ScrollView
                horizontal
                contentContainerStyle={styles.scroll}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                alwaysBounceHorizontal
              >
                {this.props.currentUser.interests.map((interest) => {
                  return (
                    <Pill key={interest.interestName} interestObj={interest} name={this.capitalizeTag(interest.interestName)} pillClick={this.pillClick} />
                  );
                })}
                <TouchableOpacity key="addInterests"
                  style={{
                    borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(158, 158, 158)', width: ((74 / 360) * windowWidth), height: ((26 / 640) * windowHeight), marginRight: windowHeight / 50,
                  }}
                  onPress={() => { this.props.navigation.navigate('Interest Adder'); }}
                >
                  <Text style={{
                    fontFamily: 'Baskerville',
                    fontWeight: '900',
                    fontSize: 24,
                    color: 'black',
                  }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
            {this.state.selectedInterests.map((interest) => {
              return (
                <HighlightedNews
                  articleNav={(article) => { this.props.navigation.navigate('ArticleDetail', { article }); }}
                  navTrigger={() => { this.props.navigation.navigate('Interest Screen', { name: interest.interestName, articles: interest.articles }); }}
                  title={this.capitalizeTag(interest.interestName)}
                  key={interest.interestName}
                  articles={interest.articles.slice()}
                  numberOfArticles={interest.articles.slice().length}
                  bookmarked={this.props.currentUser.profileArticles}
                />
              );
            })}
          </ScrollView>
        );
      } else {
        return (
          <View style={{
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: windowWidth, height: windowHeight,
          }}
          >
            <TouchableOpacity key={this.props.name}
              style={{
                marginTop: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(56, 60, 108)', width: (0.4 * windowWidth), height: (0.1 * windowHeight), marginRight: windowHeight / 50,
              }}
              onPress={() => { this.props.navigation.navigate('On Boarding'); }}
            >
              <Text style={{
                fontFamily: 'Baskerville',
                fontWeight: '200',
                fontSize: 20,
                color: 'white',
              }}
              >
                Refresh
              </Text>
            </TouchableOpacity>
          </View>

        );
      }
    } else {
      return (
        <View style={{
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: windowWidth, height: windowHeight,
        }}
        >
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
            You are not logged in yet.
            {' '}
            {'\n'}
            Please SignIn - SignUp
          </Text>
          <TouchableOpacity key={this.props.name}
            style={{

              marginTop: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(56, 60, 108)', width: (0.4 * windowWidth), height: (0.1 * windowHeight), marginRight: windowHeight / 50,
            }}
            onPress={() => {
              this.props.navigation.navigate('Sign In', { parent: 'For You' });
              this.setState({
                selectedInterests: [],
              });
            }}
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
    // selectedInterestProp: reduxState.user.selectedInterests,
    allInterests: reduxState.user.interests,
    interests: reduxState.interest.interests,
    bookmarked: reduxState.user.articles,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
    getUserInterests: () => {
      dispatch(getUserInterests());
    },
    getInterests: () => {
      dispatch(getInterests());
    },
    getUserArticles: (user) => {
      dispatch(getUserArticles(user));
    },
    addSelectedInterest: () => {
      dispatch(addSelectedInterest());
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(ForYouScreen);
