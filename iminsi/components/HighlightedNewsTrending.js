/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet, Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    width: windowWidth,
    height: windowHeight,
    alignContent: 'center',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picture: {
    minHeight: '50%',
    width: '100%',

  },
  // summary: {
  //   color: #000;
  // },
  // summary::first-letter {
  // float:left;
  // font-weight: bold;
  // font-size: 60px;
  // font-size: 6rem;
  // line-height: 40px;
  // line-height: 4rem;
  // height:4rem;
  // text-transform: uppercase;
  // },
  summary: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Baskerville',
    paddingRight: 25,
    paddingLeft: 25,
  },
  newsOrganization: {
    fontWeight: 'bold',
    fontFamily: 'Baskerville',
    fontSize: 12,
    color: 'black',
    paddingBottom: 5,
    paddingLeft: 25,
  },
  tags: {
    fontSize: 10,
    color: 'white',
  },
  titleTextOrg: {
    width: '100%',
    height: '40%',
    paddingTop: 10,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Baskerville',
    color: 'black',
    paddingRight: 25,
  },
  firstLetter: {
    fontSize: 30,
  },
});

class HighlightedNewsManzi extends Component {
  dateRender = (dateStr) => {
    const x = new Date(dateStr);
    const dates = ['', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (`${months[x.getMonth()]} ${dates[x.getDate()]} ${x.getFullYear()}`);
  }

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
    const cleanedtext = text.split('[');
    /* https://stackoverflow.com/questions/44257982/react-native-nested-text-with-differnt-fontsizes-initial-first-letter */
    return (
      <View style={styles.summary}>
        <Text style={{ fontFamily: 'Baskerville', fontSize: 18 }}>
          <Text style={[styles.firstLetter]}>{cleanedtext[0][0]}</Text>
          {cleanedtext[0].slice(1, 130)}
          ...

        </Text>
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
      <TouchableOpacity key={article.id} onPress={() => { this.showArticleDetail(article); }} underlayColor="none">
        <View style={styles.container}
          key={article.id}
        >
          <Image
            // eslint-disable-next-line global-require
            source={{ url: (article.imageURL === undefined) ? 'https://fromhazeleyes.files.wordpress.com/2010/07/africa.jpg' : article.imageURL }}
            style={styles.picture}
          />
          <View style={styles.titleTextOrg}>
            <Text style={styles.title}>
              {article.title}
            </Text>
            {this.bulletPoint(article.summary)}
            <View style={styles.horizontal}>
              <Text style={styles.newsOrganization}>
                {article.newsOrganization.orgName}
              </Text>
              <Text style={styles.date}>{this.dateRender(article.date)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default HighlightedNewsManzi;
