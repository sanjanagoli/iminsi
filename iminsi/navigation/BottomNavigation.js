import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AntDesign, MaterialIcons, MaterialCommunityIcons,
} from '@expo/vector-icons';
import ForYouStack from './ForYouStack';
import ProfileStack from './ProfileStack';
import VerifiedScreenTab from './VerifiedTab';
import LoginStack from './LoginStack';
// import SigninScreen from '../screens/Signup/SigninScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
        })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          {/* <Tab.Screen name="For You" options={{ tabBarIcon: () => { return (<AntDesign name="staro" size={24} color="black" />); } }} component={ForYouStack} /> */}
          {/* <Tab.Screen name="Profile" options={{ tabBarIcon: () => { return (<MaterialIcons name="person-outline" size={24} color="black" />); } }} component={ProfileStack} /> */}
          <Tab.Screen name="Verified" options={{ tabBarIcon: () => { return (<MaterialCommunityIcons name="fire" size={24} color="black" />); } }} component={VerifiedScreenTab} />
          {/* <Tab.Screen name="Login" options={{ tabBarIcon: () => { return (<MaterialCommunityIcons name="fire" size={24} color="black" />); } }} component={LoginStack} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default connect(null, null)(BottomNavigation);
