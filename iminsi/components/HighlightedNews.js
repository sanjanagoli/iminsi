/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
// import { LinearGradient } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
// import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
// import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

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

  render() {
    return (
      <View style={{ height: '4%', width: '100%' }}>
        <View style={{ marginVertical: 8, borderBottomColor: '#737373', borderBottomWidth: StyleSheet.hairlineWidth }} />
        <View style={{
          width: '100%', height: '15%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
        }}
        >
          <Text
            style={{
              paddingLeft: '4%',
              fontWeight: 'bold',
              fontSize: 20,
            }}

          >
            {this.props.title}
          </Text>
          <Button
            title="Read More"
            color="grey"
            onPress={() => {}}
          />
        </View>
        <View style={{ marginVertical: 8, borderBottomColor: '#737373', borderBottomWidth: StyleSheet.hairlineWidth }} />
        <ScrollView
          horizontal
          contentContainerStyle={{
            width: `${100 * this.props.numberOfArticles}%`, height: '100%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row',
          }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={200}
          decelerationRate="fast"
        >
          {this.props.articles.map((article) => {
            return (
              <View
                style={{
                  width: `${(80 / this.props.numberOfArticles)}%`,
                  height: '100%',
                  paddingLeft: `${(4 / this.props.numberOfArticles)}%`,
                }}
                key={article.id}
              >
                <ImageBackground
                  // eslint-disable-next-line global-require
                  source={{ url: article.imageURL }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  imageStyle={{
                    width: '100%', // works only here!
                  }}
                >
                  <LinearGradient
                    style={{
                      flex: 1,
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                    }}
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <View style={{ width: '100%', height: '100%', flexDirection: 'column-reverse' }}>
                      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{
                          flexWrap: 'wrap', width: '80%', flexDirection: 'row', justifyContent: 'flex-start',
                        }}
                        >
                          {/* article.tags.map((tag) => { return <Text key={tag} style={{ fontSize: 15, color: 'white', paddingLeft:'2%'}}>{tag}</Text>}) */}
                          <Text style={{ fontSize: 10, color: 'white', paddingLeft: '2%' }}>#FakeTags #WeNeedToFormatThese</Text>
                        </View>

                        <View style={{
                          flexWrap: 'wrap', width: '20%', flexDirection: 'row', justifyContent: 'space-around',
                        }}
                        />
                      </View>

                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 20,
                          color: 'white',
                          width: '100%',
                        }}
                      >
                        {article.title}
                      </Text>

                      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: 'white',
                        }}
                        >
                          {article.newsOrganization}

                        </Text>
                        <Text style={{
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: 'white',
                        }}
                        >
                          {article.date.slice(0, 10)}

                        </Text>
                      </View>
                    </View>
                  </LinearGradient>
                </ImageBackground>
              </View>
            );
          })}
          <Text style={{ width: `${(15 / this.props.numberOfArticles)}%`, textAlignVertical: 'center', textAlign: 'center' }}>
            No more posts
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default HighlightedNews;
