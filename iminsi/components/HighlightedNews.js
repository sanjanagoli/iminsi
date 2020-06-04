import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import { LinearGradient } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';

import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*
 * Linear Gradient inspired by this stackoverflow post and this medium article:
 * https://stackoverflow.com/questions/35097220/how-to-have-a-transparent-gradient-over-an-image-in-react-native-ios
 * https://medium.com/@chsvk/react-native-gradient-backgrounds-b9f1f14bfe7b
 */
class HighlightedNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  dateRender = (dateStr) => {
    const x = new Date(dateStr);
    const dates = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (`${dates[x.getDate()]} of ${months[x.getMonth()]} ${x.getFullYear()}`);
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.seperator} />
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>
            {' '}
            {this.props.title}
            {' '}
          </Text>
          <TouchableOpacity style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25%', height: '150%',
          }}
            onPress={() => { this.props.navTrigger(); }}
          >
            <AntDesign name="arrowright" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />
        <ScrollView
          horizontal
          contentContainerStyle={styles.scroll}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
          alwaysBounceHorizontal
        >
          {this.props.articles.map((article) => {
            return (
              <TouchableOpacity style={styles.article} key={article.id} onPress={() => { this.props.articleNav(article); }}>
                <ImageBackground source={{ url: article.imageURL }} style={{ width: '100%', height: '100%' }} imageStyle={{ width: '100%' }}>
                  <LinearGradient style={styles.linearGrad} colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,1)']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                    <View style={styles.articleContent}>
                      <View style={styles.bottomContent}>
                        <View style={styles.tags}>
                          {/* article.tags.map((tag) => { return <Text key={tag} style={{ fontSize: 15, color: 'white', paddingLeft:'2%'}}>{tag}</Text>}) */}
                          <Text style={styles.tagsText}>{(article.tags === '') ? article.tags : '#NoTags #Tagless'}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                          <MaterialIcons name="verified-user" size={24} color="white" />
                          <FontAwesome name="bookmark-o" size={24} color="white" />
                        </View>
                      </View>

                      <Text style={styles.articleTitle}>
                        {article.title}
                      </Text>

                      <View style={styles.topContent}>
                        <Text style={styles.newsOrg}>{article.newsOrganization.orgName}</Text>
                        <Text style={styles.date}>{this.dateRender(article.date)}</Text>
                      </View>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: (windowHeight * 0.35),
    width: windowWidth,
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  topBar: {
    width: '100%',
    height: '15%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topBarTitle: {
    paddingLeft: '4%',
    fontFamily: 'Baskerville',
    fontWeight: '100',
    fontSize: 20,
  },
  scroll: {
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: (windowWidth * 0.02),
  },
  article: {
    width: (windowWidth * 0.8),
    height: '100%',
    paddingRight: (windowWidth * 0.03),
  },
  linearGrad: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  articleContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'column-reverse',
  },
  bottomContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowWidth / 35,
  },
  tags: {
    flexWrap: 'wrap',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tagsText: {
    fontSize: 10,
    fontFamily: 'Baskerville',
    fontWeight: '100',
    color: 'white',
    paddingLeft: '2%',
  },
  iconContainer: {
    flexWrap: 'wrap',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {

  },
  articleTitle: {
    fontFamily: 'Baskerville',
    fontWeight: '100',
    fontSize: 20,
    color: 'white',
    width: '100%',
    padding: windowWidth / 50,
  },
  topContent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: windowWidth / 35,
  },
  newsOrg: {
    fontFamily: 'Baskerville',
    fontWeight: '100',
    fontSize: 15,
    flexWrap: 'wrap',
    color: 'white',
  },
  date: {
    fontFamily: 'Baskerville',
    fontWeight: '100',
    flexWrap: 'wrap',
    fontSize: 15,
    color: 'white',
  },
  contentContainer: {
    width: '100%',
    paddingTop: 15,
  },
});

export default HighlightedNews;
