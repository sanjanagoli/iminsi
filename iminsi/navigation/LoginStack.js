/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Dimensions,
} from 'react-native';
import SignupScreen from '../screens/Signup/SignupScreen';
import SigninScreen from '../screens/Signup/SigninScreen';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();


class LoginStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Sign Up"
          options={{
            headerTitleAlign: 'left',
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '200',
              fontSize: 35,
              color: 'black',
            },
          }}
          component={SignupScreen}
        />
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
          }}
          component={SigninScreen}
        />
      </Stack.Navigator>
    );
  }
}


export default connect(null, null)(LoginStack);
