/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { getArticles } from '../actions/index';
import styles from '../stylesheets/ForYouStyle';

class ForYouScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>
          {' '}
          Hello world
          {' '}
          {JSON.stringify(this.props.articles)}
        </Text>
      </ScrollView>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    articles: reduxState.article.articles,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(ForYouScreen);
