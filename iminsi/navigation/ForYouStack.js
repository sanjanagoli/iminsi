/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions/index';
import { createStackNavigator } from '@react-navigation/stack';
import ForYouScreen from '../screens/ForYouScreen';
import InterestScreen from '../screens/InterestScreen';
import { Dimensions, Text, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();


class ForYouStack extends Component {

  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="For You" options={{
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight), },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 35,
            color: 'black',
          },
          title: <Text style={{fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)',}}>For You</Text>,
        }} component={ForYouScreen} />
        <Stack.Screen name="Interest Screen"
          options={({ route }) => ({
            title: <Text style={{fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)',}}>{route.params.name}</Text>,
            headerTitleAlign: 'center',
            headerBackTitle: <AntDesign name="arrowleft" size={30} color="black" />,
            headerBackTitleStyle: {
              color: 'black',
            },
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight), },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: "200",
              fontSize: 35,
              color: 'black',
            },
          })}
          component={InterestScreen} />
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
