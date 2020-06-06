/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
// sign in
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text, Alert,
} from 'react-native';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import { signInUser } from '../../../actions/user';
import 'fontsource-roboto';

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
    } else {
      Alert.alert('Required: username and password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Sign in </Text>
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

        <TouchableOpacity style={styles.button}>

          {/* Modify the signInUser parameters depending on actions/index.js */}
          <Text style={styles.buttonText} onPress={() => { this.onSignin(); }}>
            {' '}
            Sign in
            {/* ON PRESS create navTrigger={() => { this.props.navigation.navigate('onboarding Sources Screen', {}); }} what to pass in the params */}

          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.underlineButton}>

          {/* Modify the signInUser parameters depending on actions/index.js */}
          <Text style={styles.underlineButtonText}>
            {' '}
            Click here to sign up instead
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default connect(null, { signInUser })(SignIn);

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
    fontSize: 14,
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
