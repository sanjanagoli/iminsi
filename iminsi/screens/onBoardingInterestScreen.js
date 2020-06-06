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
    // this.props.getInterests(); // get interests from database
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
    if (this.props.currentUser !== undefined && this.props.currentUser !== null) {
      return (
        <View style={styles.onboardingForm}>
          <Text style={styles.titleText}>Pick three topics you want to read about </Text>
          {this.props.allInterests.map((interest) => { // allInterests rather than user interests
            return (
              <Pill key={interest.interestName} interestObj={interest} name={interest.interestName} pillClick={this.pillClick} /> // onclick adds to selected Interests
            );
          })}
          <TouchableOpacity
            style={styles.button}
            onPress={() => { updateUser(this.props.currentUser.id, this.state.selectedInterests); }} // ? do I need currentUser.id
          >
            <Text style={styles.buttonText}> Next</Text>
            {/* navTrigger={() => { this.props.navigation.navigate('onboarding Sources Screen', {}); }} what to pass in the params */}
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <Text>Loading...</Text>
      ); // should the else be error?
    }
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    allInterests: reduxState.interest.interests,
    currentUser: reduxState.user.currentUser,


    // interests: [{ interestName: 'Politics' },
    //   { interestName: 'Sports' },
    //   { interestName: 'International' },
    //   { interestName: 'Health' },
    //   { interestName: 'Economics' },
    //   { interestName: 'Stocks' },
    //   { interestName: 'Fashion' },
    // ],
  };
}
const mapDispatchToProps = (dispatch) => { // ?
  return {
    updateUser: () => {
      dispatch(updateUser());
    },
    getInterests: () => {
      dispatch(getInterests());
    },
  };
};
export default connect(mapReduxStateToProps, mapDispatchToProps)(onBoardingInterestScreen);


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
