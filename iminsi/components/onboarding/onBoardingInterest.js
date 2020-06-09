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
import { updateUser, getUserInterests } from '../../actions/index';


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

class onBoardingInterest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: [],
    };
  }

  componentDidMount() {
    this.props.getUserInterests(); // interests instead of articles
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.onboardingForm}>
          {this.props.interests.map((interest) => {
            return (
              <Pill key={interest.interestName} interestObj={interest} name={interest.interestName} pillClick={this.pillClick} />
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { updateUser(this.props.user.id, this.state.selectedInterests); }} // how put selected interests in store?
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInterests: () => {
      dispatch(getUserInterests());
    },
    

  }
};

export default connect(null, mapDispatchToProps )(onBoardingInterest);


const styles = StyleSheet.create({
  onboardingForm: {
    display: 'flex',
    // flexWrap: true, // check
    flexDirection: 'row',
    alignItems: 'center',
    height: windowHeight / 10,
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
