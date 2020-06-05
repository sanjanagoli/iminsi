/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Dimensions, Text,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SignupScreen from '../screens/Signup/SignupScreen';
import SigninScreen from '../screens/Signup/SigninScreen';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();


class LoginStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Sign In"
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
          component={SigninScreen}
        />
        <Stack.Screen name="Sign Up"
          options={({ route }) => ({
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
          component={SignupScreen}
        />
      </Stack.Navigator>
    );
  }
}


export default connect(null, null)(LoginStack);
