import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../stylesheets/LoginStyle';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>Login page</Text>
        <TouchableOpacity>
          <Text>New User?</Text>
          <Text>
            Create Account (leads to Sign up)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(LoginScreen);
