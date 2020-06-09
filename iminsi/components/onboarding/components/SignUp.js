/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
// sign up
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';
import { updateUser, signUpUser, getAvailableCountries } from '../../../actions/user';
import { getInterests } from '../../../actions/interest';
import { ScrollView } from 'react-native-gesture-handler';

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
        <Text style={stylesTwo.pillText}>
          {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
};

class OnBoardingInterest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInterests: [],
    };
  }

  componentDidMount() {
     // interests instead of articles
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
      <ScrollView contentContainerStyle={stylesTwo.contentContainer}>
        <View style={stylesTwo.onboardingForm}>
          {this.props.props.interests.map((interest) => {
            return (
              <Pill key={interest.interestName} interestObj={interest} name={interest.interestName} pillClick={this.pillClick} />
            );
          })}
        </View>
        <TouchableOpacity
          style={stylesTwo.button}
          onPress={() => { updateUser(this.props.props.currentUser.id, this.state.selectedInterests); }} // how put selected interests in store?
        >
          <Text>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
};


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      country: '',
      phaseOne: true,
    };
  }

  componentDidMount() {
    this.props.getInterests();
  }

  onSignup = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      const data = {
        username: this.state.username,
        password: this.state.password,
        country: this.state.country,
      };
      this.props.signUpUser(data);
      this.setState({ username: '', password: '', country: '', phaseOne: false });
    } else {
      Alert.alert('Required: username and password');
    }
  }

  renderCountries = () => {
    if (this.props.allCountries) {
      const data = this.props.allCountries;
      return (
        <Autocomplete
          data={data}
          defaultValue={this.state.country}
          onChangeText={(text) => this.setState({ country: text })}
          renderItem={({ item, i }) => (
            <TouchableOpacity onPress={() => this.setState({ country: item })}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
      );
    }
  }

  render() {
    if (this.state.phaseOne) {
      return (
        <View style={styles.container}>
          <TextInput
            placeholder="Username"
            autoCapitalize="none"
            style={styles.userInput}
            onChangeText={(text) => { this.setState({ username: text }); }}
          />

          <TextInput
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            style={styles.userInput}
            onChangeText={(text) => { this.setState({ password: text }); }}
          />
          <TouchableOpacity style={styles.button} onPress={() => { this.onSignup(); }}>
            <Text style={styles.buttonText}>
              Next
                </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      console.log("ce", this.props.interests);
      return (<OnBoardingInterest props={this.props} />);
    }
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    allCountries: reduxState.user.availableCountries,
    interests: reduxState.interest.interests,
    currentUser: reduxState.user.currentUser,
  };
}

export default connect(mapReduxStateToProps, { updateUser, getInterests, signUpUser, getAvailableCountries })(SignUp);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: Dimensions.get('screen').height * 0.05,
  },
  header: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: Dimensions.get('screen').height * 0.1,
  },
  userInput: {
    margin: 15,
    paddingHorizontal: '4%',
    height: '10%',
    borderRadius: 10,
    borderColor: 'rgb(56, 60, 108)',
    borderWidth: 1,
    width: '70%'
  },

  contentContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    // width: windowWidth,
    backgroundColor: 'rgb(250,250,250)',
    paddingHorizontal: 10,
    flex: 1,
    margin: 6,
    marginBottom: 5,
    // marginLeft: 4,

  },
  button: {
    // display: 'flex',
    // justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: '10%',
    height: 50,
    width: '30%',
    // marginTop: '-10%',
    backgroundColor: '#383C6C',
    borderRadius: 5,
    // position: 'absolute',
    // bottom: 20,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  underlineButtonText: {
    fontSize: 12,
    color: 'black',
    position: 'absolute',
    bottom: 5,
  },
  underlineButton: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 42,
    textDecorationLine: 'underline',
    borderRadius: 40,
    position: 'absolute',
    bottom: 5,
  },
});

const stylesTwo = StyleSheet.create({
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
