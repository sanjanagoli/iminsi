/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
// sign up
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text, Alert,
} from 'react-native';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { signUpUser } from '../../../actions/user';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  onSignup = () => {
    if (this.state.username != '' && this.state.password != '') {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.signUpUser(data);
    } else {
      Alert.alert('Required: username and password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Create your Iminsi Account </Text>
        <div>
          <TextField id="standard-basic"
            label="Username"
            onChange={(event) => { this.setState({ username: event.target.value }); }}
          />

          <TextField id="standard-basic"
            label="Password"
            type="password"
            onChange={(event) => { this.setState({ password: event.target.value }); }}
          />
        </div>
        {/* Alternatively, the onPress could read as "Next" and navigate to the onboarding survey and the real "Sign Up" happends after onboarding survey */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => { this.onSignup(); }}> Sign Up </Text>
          {/* ON PRESS create navTrigger={() => { this.props.navigation.navigate('onboarding Sources Screen', {}); }} what to pass in the params */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.underlineButton}>
          {/* Modify the signInUser parameters depending on actions/index.js */}
          <Text style={styles.underlineButtonText}>
            {' '}
            Click here to sign in instead
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { signUpUser })(SignUp);

// to do: add more styles as we see fit
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  header: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {},

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 42,
    backgroundColor: 'rgb(56, 60, 108)',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 15,
  },
  underlineButtonText: {
    fontSize: 12,
    color: 'black',
    position: 'absolute',
    bottom: 5,
  },
});
