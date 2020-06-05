/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
// sign in
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text, Alert,
} from 'react-native';
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import { signInUser } from '../../../actions/user';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onSignin = () => {
    if (this.state.username !== '' && this.state.password !== '') {
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
        <Text style={styles.header}> Sign In to your Iminsi Account </Text>
        <TextInput style={styles.input} autoCapitalize="none" placeholder="Your Username" onChangeText={(text) => { this.setState({ username: text }); }} />

        <TextInput
          placeholder="password"
          style={styles.input}
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => { this.setState({ password: text }); }}
        />

        <TouchableOpacity>
          {/* Modify the signInUser parameters depending on actions/index.js */}
          <Text style={styles.buttonText} onPress={() => { this.onSignin(); }}>
            {' '}
            LOGIN
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
    fontSize: 24,
  },

  input: {},

  buttonText: {},
});
