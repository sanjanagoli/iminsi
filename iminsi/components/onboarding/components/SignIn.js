/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
//sign in 
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';
import { connect } from 'react-redux';


export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'username',
      password: 'Password',
    };
  }

  const handleSignIn = () => {
    const fields = {
      username: this.state.username, password: this.state.password,
    };
    this.props.signinUser(fields, this.props.history);
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
          onChange={(event) => { this.setState({ password: event.target.value }); }}
        />

        <TouchableOpacity>
          <Text style={styles.buttonText} onPress={handleSignIn}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
