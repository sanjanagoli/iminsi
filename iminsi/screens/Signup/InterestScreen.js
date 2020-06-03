import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {
//   Text,
// } from 'react-native';
import onBoardingInterest from '../../components/onboarding/onBoardingInterest';


class InterestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <onBoardingInterest />
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(InterestScreen);
