/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Dimensions, Text,
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { getArticles } from '../actions/index';
import ForYouScreen from '../screens/ForYouScreen';
import InterestScreen from '../screens/InterestScreen';
import ArticleDetail from '../screens/ArticleDetail';
import LoginStack from './LoginStack';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();


class ForYouStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="For You"
          options={{
            headerTitleAlign: 'left',
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
            title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>For You</Text>,
          }}
          component={ForYouScreen}
        />
        <Stack.Screen name="Interest Screen"
          options={({ route }) => ({
            title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>{route.params.name}</Text>,
            headerTitleAlign: 'center',
            headerBackTitle: <AntDesign name="arrowleft" size={30} color="black" />,
            headerBackTitleStyle: {
              color: 'black',
            },
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
          })}
          component={InterestScreen}
        />
        <Stack.Screen name="ArticleDetail"
          options={({ route }) => ({
            headerTitleAlign: 'center',
            headerBackTitleStyle: {
              color: 'black',
            },
            headerStyle: { backgroundColor: 'rgba(0,0,45,0.8)', height: ((71 / 640) * windowHeight) },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
            title: <Text style={{ fontFamily: 'Baskerville', color: 'black' }}>Article</Text>,
            headerRight: () => { return (<FontAwesome name="bookmark-o" style={{ marginRight: 25 }} size={24} color="white" />); },
          })}
          component={ArticleDetail}
        />
        <Stack.Screen name="Login"
          component={LoginStack}
        />
      </Stack.Navigator>


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

export default connect(mapReduxStateToProps, mapDispatchToProps)(ForYouStack);
