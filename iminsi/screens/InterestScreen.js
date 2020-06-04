/* eslint-disable max-classes-per-file */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { updateUser, getInterests } from '../actions/index';

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
          borderRadius: '5%', justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.color, width: ((74 / 360) * windowWidth), height: ((26 / 640) * windowHeight), marginRight: windowHeight / 50,
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

class onBoardingInterestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: [],
    };
  }

  componentDidMount() {
    // this.props.getInterests(); // interests instead of articles
    this.setState(() => ({
      selectedInterests: [],
    }));
  }

  pillClick = (interest) => {
    const newStateArray = this.state.selectedInterests.slice();
    if (newStateArray.includes(interest)) {
      // remove it
      newStateArray.splice(newStateArray.indexOf(interest), 1);
      this.setState(() => ({
        selectedInterests: newStateArray,
      }));
    } else {
      // ADDS TO IT from top
      newStateArray.unshift(interest);
      this.setState(() => ({
        selectedInterests: newStateArray,
      }));
    }
  }


  render() {
    return (
    // <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.onboardingForm}>
        <Text style={styles.titleText}>Pick three topics you want to read about </Text>
        {console.log('im hree')}
        {this.props.interests.map((interest) => {
          return (
            <Pill key={interest.interestName} interestObj={interest} name={interest.interestName} pillClick={this.pillClick} />
          );
        })}
        <TouchableOpacity
          style={styles.button}
          onPress={() => { updateUser(this.props.user.id, this.state.selectedInterests); }}
        >
          <Text style={styles.buttonText}> Next</Text>
        </TouchableOpacity>
      </View>
    // </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    // interests: reduxState.interests

    interests: [{ interestName: 'Politics' },
      { interestName: 'Sports' },
      { interestName: 'International' },
      { interestName: 'Health' },
      { interestName: 'Economics' },
      { interestName: 'Stocks' },
      { interestName: 'Fashion' },
    ],
  };/* reduxState.user */ // the list from database? - how to do on press, send the interests to the user's profile;
}

export default connect(mapReduxStateToProps, { updateUser, getInterests })(onBoardingInterestScreen);


const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  onboardingForm: {
    display: 'flex',
    flexWrap: 'wrap', // check
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight / 10,
  },
  scroll: {
    paddingLeft: windowWidth / 50,
  },
  pillText: {
    // fontFamily: 'PlayfairDisplay_400Regular',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: windowWidth,
    backgroundColor: 'rgb(250,250,250)',
    paddingHorizontal: 10,
    flex: 1,
    margin: 6,
    marginBottom: 5,
    // marginLeft: 4,

  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 42,
    backgroundColor: 'rgb(56, 60, 108)',
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',

  },
});
