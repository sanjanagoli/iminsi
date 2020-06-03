import React from 'react';
// import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { connect } from 'react-redux';
import ForYouScreen from '../screens/ForYouScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VerifiedScreenTab from './VerifiedTab';
import VerifiedScreen from '../screens/VerifiedScreen';
import ForYouStack from '../navigation/ForYouStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign, FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

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
          <Tab.Screen name="For You" options={{tabBarIcon: () => {return (<AntDesign name="staro" size={24} color="black" />)}}} component={ForYouStack} />
          <Tab.Screen name="Profile" options={{tabBarIcon: () => {return (<MaterialIcons name="person-outline" size={24} color="black" />)}}} component={ProfileScreen} />
          <Tab.Screen name="Verified" options={{tabBarIcon: () => {return (<MaterialCommunityIcons name="fire" size={24} color="black" />)}}} component={VerifiedScreenTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default connect(null, null)(BottomNavigation);
