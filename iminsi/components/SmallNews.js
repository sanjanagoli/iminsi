/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from '../stylesheets/SmallNewsStyle';


class SmallNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: '#NoCoffee   #Sleep',
      newsOrganization: 'The New Times',
      date: '4 Aug 2000078',
    };
  }

  // componentDidMount() {
  // const formattedDate = new Date(this.props.date);
  // const newDate = `${formattedDate.getDay().toString()} ${formattedDate.getMonth().toString()} ${formattedDate.getYear().toString()}`;
  // this.setState({ date: newDate });
  // }

  render() {
    return (
      <TouchableHighlight onPress={() => { this.props.showArticleDetail(this.props.article); }} underlayColor="blue">
        <View style={styles.container}>
          <View style={styles.titleTagsAndOrg}>
            <Text style={styles.newsOrganization}>{this.state.newsOrganization}</Text>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.tags}>{this.state.tags}</Text>
          </View>
          <View style={styles.pictureDate}>
            <Image style={styles.picture} source={{ url: this.props.imageURL }} />
            <Text style={styles.date}>{this.state.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default SmallNews;
