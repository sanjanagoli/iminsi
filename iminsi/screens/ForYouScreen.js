/* eslint-disable array-callback-return */
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
import { getArticles } from '../actions/index';
import styles from '../stylesheets/ForYouStyle';
// import HighlightedNews from '../components/HighlightedNews';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Pill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      color: 'rgb(158, 158, 158)',
    };
  }

  colorFlip = () => {
    if (this.state.clicked) {
      this.setState(() => ({
        clicked: false,
        color: 'rgb(158, 158, 158)',
      }));
    } else {
      this.setState(() => ({
        clicked: true,
        color: 'rgb(56, 60, 108)',
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
        <Text style={styles.pillText}>
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
    this.props.getArticles();
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
    if (x == 0) {
      // ADDS TO IT from top
      newStateArray.unshift(interest);
      this.setState(() => ({
        selectedInterests: newStateArray,
      }));
    }
  }


  render() {
    // eslint-disable-next-line prefer-destructuring
    /*
    <Text>
          {' '}
          Hello world
          {' '}
          {JSON.stringify(this.props.articles)}
        </Text>
    */
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
            {this.props.user.interests.map((interest) => {
              return (
                <Pill key={interest.interestName} interestObj={interest} name={interest.interestName} pillClick={this.pillClick} />
              );
            })}
          </ScrollView>
        </View>
        {this.state.selectedInterests.map((interest) => {
          // return (
          //   <HighlightedNews navTrigger={() => { this.props.navigation.navigate('Interest Screen', { name: interest.interestName, articles: this.props.articles }); }} title={interest.interestName} key={interest.interestName} articles={this.props.articles.slice(1, -1)} numberOfArticles={this.props.articles.slice(1, -1).length} />
          // );
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(ForYouScreen);
