/* eslint-disable react/destructuring-assignment */
// sign up
import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text, Alert,
} from 'react-native';
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
    if (this.state.username !== '' && this.state.password !== '') {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      // console.log(data);
      this.props.signUpUser(data);
    } else {
      Alert.alert('Required: username and password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> Create your Iminsi Account </Text>
        <TextInput style={styles.input} placeholder="Your Username" autoCapitalize="none" onChangeText={(text) => { this.setState({ username: text }); }} />
        <TextInput style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => { this.setState({ password: text }); }} secureTextEntry />
        {/* Alternatively, the onPress could read as "Next" and navigate to the onboarding survey and the real "Sign Up" happends after onboarding survey */}
        <TouchableOpacity>
          <Text style={styles.buttonText} onPress={() => { this.onSignup(); }}> Sign Up </Text>
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
    fontSize: 24,
  },

  input: {},

  buttonText: {},
});
