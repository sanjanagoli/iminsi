import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../stylesheets/LoginStyle';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>Profile page</Text>
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

export default connect(mapReduxStateToProps, mapDispatchToProps)(ProfileScreen);
