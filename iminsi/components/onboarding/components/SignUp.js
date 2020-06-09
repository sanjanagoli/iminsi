/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
// sign up
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text, Alert, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import Autocomplete from 'react-native-autocomplete-input';
import { signUpUser, getAvailableCountries, getUserInterests } from '../../../actions/user';
import InterestScreen from '../onBoardingInterest';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      country: '',
    };
  }

  componentDidMount() {
    this.props.getAvailableCountries();
  }

  onSignup = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      const data = {
        username: this.state.username,
        password: this.state.password,
        country: this.state.country,
      };
      this.props.signUpUser(data, this.props.navigation, 'On Boarding');
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
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    allCountries: reduxState.user.availableCountries,
  };
}

export default connect(mapReduxStateToProps, { signUpUser, getAvailableCountries })(SignUp);

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
