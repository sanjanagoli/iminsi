import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../../stylesheets/LoginStyle';
import SignUp from '../../components/onboarding/components/SignUp';


class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SignUp />
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(SignupScreen);
