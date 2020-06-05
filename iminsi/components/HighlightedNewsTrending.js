/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet, Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    width: windowWidth,
    height: 0.7 * windowHeight,
    paddingBottom: 20,
  },
  picture: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Baskerville',
    width: 260,
    paddingBottom: 5,
  },
  newsOrganization: {
    fontWeight: 'bold',
    fontFamily: 'Baskerville',
    fontSize: 12,
    color: 'white',
    paddingBottom: 5,
  },
  tags: {
    fontSize: 10,
    color: 'white',
  },
  TitleTagsOrganization: {
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',
    paddingLeft: 25,
    paddingBottom: 15,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
    color: 'white',
    paddingRight: 25,
  },
});

class HighlightedNewsManzi extends Component {
  fillContent() {
    const { article } = this.props;
    if (!article.newsOrganization || article.newsOrganization.orgName.length === 0) {
      article.newsOrganization.orgName = 'PlaceHolder Times';
    }
    if (article.content === undefined || article.content.length === 0) {
      article.content = 'Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.';
    }
  }

  bulletPoint(text) {
    const twoBulletPoints = text.split('. ', 3);

    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text>{'\u2022'}</Text>
          <Text style={{ flex: 1, paddingLeft: 5 }}>{twoBulletPoints[0]}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>{'\u2022'}</Text>
          <Text style={{ flex: 1, paddingLeft: 5 }}>{twoBulletPoints[1]}</Text>
        </View>
      </View>
    );
  }

  showArticleDetail(article) {
    this.props.navigation.navigate('ArticleDetail', { article });
  }

  render() {
    this.fillContent();
    const { article } = this.props;
    return (
      <TouchableOpacity style={{ height: windowHeight * this.props.h }} key={article.id} onPress={() => { this.showArticleDetail(article); }} underlayColor="none">
        <View style={styles.container}
          key={article.id}
        >
          <ImageBackground
            // eslint-disable-next-line global-require
            source={{ url: article.imageURL }}
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
                <Text style={styles.date}>
                  {article.date}

                </Text>
                <Text style={styles.title}>
                  {article.title}
                </Text>

                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.newsOrganization}>
                    {article.newsOrganization.orgName}

                  </Text>
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
          {this.bulletPoint(article.content)}
        </View>
      </TouchableOpacity>
    );
  }
}

export default HighlightedNewsManzi;