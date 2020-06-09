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
import onBoardingInterest from '../components/onboarding/onBoardingInterest';
import InterestAdder from '../components/AddInterests';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const capitalizeTag = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Stack = createStackNavigator();


class ForYouStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="For You"
          options={{
            headerTitleAlign: 'left',
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: 'rgb(56, 60, 108)',
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
            title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>{capitalizeTag(route.params.name)}</Text>,
            headerTitleAlign: 'center',
            headerBackTitle: null,
            headerBackTitleStyle: {
              color: 'rgb(56, 60, 108)',
            },
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: 'rgb(56, 60, 108)',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
          })}
          component={InterestScreen}
        />
        <Stack.Screen name="On Boarding"
          options={({ route }) => ({
            headerTitleAlign: 'center',
            headerBack: null,
            headerBackTitleStyle: {
              color: 'rgb(56, 60, 108)',
            },
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: 'rgb(56, 60, 108)',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
            title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>Add Interests</Text>,
          })}
          component={onBoardingInterest}
        />
        <Stack.Screen name="Interest Adder"
          options={({ route }) => ({
            headerTitleAlign: 'center',
            headerBack: null,
            headerBackTitleStyle: {
              color: 'rgb(56, 60, 108)',
            },
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: 'rgb(56, 60, 108)',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
            title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>Add Interests</Text>,
          })}
          component={InterestAdder}
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
