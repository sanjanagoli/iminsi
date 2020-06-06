/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
// sign in
import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text, Alert, TextInput, Dimensions,
} from 'react-native';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import { signInUser } from '../../../actions/user';
// import 'fontsource-roboto';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onSignin = () => {
    if (this.state.username != '' && this.state.password != '') {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.signInUser(data);
      this.setState({ username: '', password: '' });
    } else {
      Alert.alert('Required: username and password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Sign in </Text>
        <View style={styles.inputContainer}>
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
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { this.onSignin(); }}>
            <Text style={styles.buttonText}>
              Sign in
              {/* ON PRESS create navTrigger={() => { this.props.navigation.navigate('onboarding Sources Screen', {}); }} what to pass in the params */}

            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Sign Up'); }}>
            <Text style={styles.buttonText}>
              Sign up
              {/* ON PRESS create navTrigger={() => { this.props.navigation.navigate('onboarding Sources Screen', {}); }} what to pass in the params */}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.underlineButton}>

          <Text style={styles.underlineButtonText}>
            {' '}
            Click here to sign up instead
          </Text>
        </TouchableOpacity> */}

      </View>
    );
  }
}

export default connect(null, { signInUser })(SignIn);

const styles = StyleSheet.create({
  container: {
    padding: 30,
    justifyContent: 'center',
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
    height: '17%',
    borderColor: 'rgb(56, 60, 108)',
    borderWidth: 1,
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
