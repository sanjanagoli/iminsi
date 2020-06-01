/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
} from 'react-native';
// import { LinearGradient } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../stylesheets/HighlightedNewsStyleManzi';

class HighlightedNewsManzi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsOrganization: 'The New Times',
      date: '4 Aug 2078',
    };
  }

  render() {
    return (
      <View style={styles.container}
        key={this.props.id}
      >
        <ImageBackground
            // eslint-disable-next-line global-require
          source={{ url: this.props.imageURL }}
          style={styles.picture}
          imageStyle={{
            width: '100%', // works only here!
          }}
        >
          <LinearGradient
            style={styles.linearGradient}
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >

            <View style={styles.TitleTagsOrganization}>

              <Text style={styles.tags}>#FakeTags #WeNeedToFormatThese</Text>

              <Text style={styles.title}>
                {this.props.title}
              </Text>

              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.newsOrganization}>
                  {this.state.newsOrganization}

                </Text>
                <Text style={styles.date}>
                  {this.state.date}

                </Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default HighlightedNewsManzi;
