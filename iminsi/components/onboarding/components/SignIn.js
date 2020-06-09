/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text, Alert, TextInput, Dimensions, KeyboardAvoidingView
} from 'react-native';
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
    if (this.state.username != '' && this.state.password != '') {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      this.props.signInUser(data, this.props.navigation, this.props.route.params.parent);

      this.setState({ username: '', password: '' });
    } else {
      Alert.alert('Warning!',  'Both username and password must be provided',
      [{text: 'OK', onPress: () => console.log('OK pressed')}]
      
      );
    }
  }

  render() {
    if (this.props.userLoaded) {
      this.props.navigation.navigate(this.props.route.params.parent);
      return (
        <Text>
          BUG ? BUG = FEATURE : NO PROBLEM
        </Text>
      );
    } else {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <TextInput
            value = {this.state.username}
            placeholder="Username"
            autoCapitalize="none"
            style={styles.userInput}
            onChangeText={(text) => { this.setState({ username: text }); }}
          />

          <TextInput
            value = {this.state.password}
            placeholder="Password"
            secureTextEntry
            autoCapitalize="none"
            style={styles.userInput}
            onChangeText={(text) => { this.setState({ password: text }); }}
          />

          <TouchableOpacity style={styles.button} onPress={() => { this.onSignin(); }}>
            <Text style={styles.buttonText}>
              Sign in

              {/* ON PRESS create navTrigger={() => { this.props.navigation.navigate('onboarding Sources Screen', {}); }} what to pass in the params */}

            </Text>
          </TouchableOpacity> 
          <Text>Don't have an account?</Text>
          <Text onPress={() => { this.props.navigation.navigate('Sign Up', { parent: 'Sign In' }); }} style={{ color: 'rgb(56, 60, 108)', fontSize: 20 }}> Sign Up Now</Text>

        </KeyboardAvoidingView>

      );
    }
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    userLoaded: reduxState.user.loaded,
  };
}

export default connect(mapReduxStateToProps, { signInUser })(SignIn);

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
    marginBottom: 20,
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
