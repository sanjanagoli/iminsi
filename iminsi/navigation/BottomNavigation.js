import React from 'react';
// import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { connect } from 'react-redux';
import ForYouScreen from '../screens/ForYouScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VerifiedScreenTab from './VerifiedTab';


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="For You" component={ForYouScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Verified" component={VerifiedScreenTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default connect(null, null)(BottomNavigation);
