/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
//sign in 
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'username',
      password: 'Password',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="username"
          placeholderTextColor="rgba(255,255,255,0.2)"
          style={style.input}
          onChange={(event) => { this.setState({ username: event.target.value }); }}
        />

        <TextInput
          placeholder="password"
          style={style.input}
          secureTextEntry={true}
          onChange={(event) => { this.setState({ password: event.target.value }); }}
        />

        <TouchableOpacity>
          {/* Modify the signInUser parameters depending on actions/index.js */}
          <Text style={styles.buttonText} onPress= {() => { this.signInUser(); }}> LOGIN
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  
  header: {
      fontSize: 24,
  },

  input: {},

  buttonText: {},
});
