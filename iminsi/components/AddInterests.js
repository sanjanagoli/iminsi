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
import { updateUser, signUpUser, getAvailableCountries, addInterests, getUserInterests } from '../actions/user';
import { getInterests } from '../actions/interest';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Pill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: props.clicked,
      color: props.initColor,
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

  capitalizeTag = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <TouchableOpacity key={this.props.name}
        style={{
          borderRadius: '5%', justifyContent: 'center', alignItems: 'center', backgroundColor: this.state.color, width: ((74 / 360) * windowWidth), height: ((26 / 640) * windowHeight), marginRight: windowHeight / 50,
        }}
        onPress={() => { this.colorFlip(); this.props.pillClick(this.props.interestObj); }}
      >
        <Text style={stylesTwo.pillText}>
          {this.capitalizeTag(this.props.name)}
        </Text>
      </TouchableOpacity>
    );
  }
}

class InterestAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: [],
    };
  }

  componentDidMount() {
    this.props.getInterests(); // interests instead of articles

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


  render() {
    // Do not render any interests which we have already seleted 
    let diff = this.props.interests.filter(({ interestName: name1 }) => !this.props.currentUser.interests.some(({ interestName: name2 }) => name2 === name1));
    return (
      <ScrollView contentContainerStyle={stylesTwo.contentContainer}>
        <View style={stylesTwo.onboardingForm}>
          {
            diff.map((interest) => {
              return <Pill key={interest.interestName} initColor='rgb(158, 158, 158)' clicked={false} interestObj={interest} name={interest.interestName} pillClick={this.pillClick} />;
            })
          }
        </View>
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
            Add some new interests
          </Text>
          <TouchableOpacity key={this.props.name}
            style={{
              marginTop: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(56, 60, 108)', width: (0.4 * windowWidth), height: (0.1 * windowHeight), marginRight: windowHeight / 50,
            }}
            onPress={() => { this.props.addInterests(this.props.currentUser, this.state.selectedInterests); this.props.getUserInterests(this.props.currentUser); this.props.navigation.navigate("For You") }}
          >
            <Text style={{
              fontFamily: 'Baskerville',
              fontWeight: '200',
              fontSize: 20,
              color: 'white',
            }}
            >
              Next
          </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    allCountries: reduxState.user.availableCountries,
    interests: reduxState.interest.interests,
    currentUser: reduxState.user.currentUser,

  };
}


export default connect(mapReduxStateToProps, { addInterests, updateUser, getInterests, signUpUser, getAvailableCountries, getUserInterests })(InterestAdder);


const stylesTwo = StyleSheet.create({
  onboardingForm: {
    display: 'flex',
    flexWrap: 'wrap', // check
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight / 10,
    margin: '5%',
  },
  scroll: {
    paddingLeft: windowWidth / 50,
  },
  pillText: {
    fontFamily: 'Baskerville',
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: windowWidth,
    backgroundColor: 'rgb(250,250,250)',
  },
});
