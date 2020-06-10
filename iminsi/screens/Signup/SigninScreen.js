/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   Text,
// } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import styles from '../../stylesheets/LoginStyle';
import SignIn from '../../components/onboarding/components/SignIn';


class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SignIn navigation={this.props.navigation} route={this.props.route} />
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(SigninScreen);
