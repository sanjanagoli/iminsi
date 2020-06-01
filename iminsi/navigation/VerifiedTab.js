import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

import VerifiedScreen from '../screens/VerifiedScreen';
import ArticleDetail from '../screens/ArticleDetail';


const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const VerifiedScreenTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Verified"
        component={VerifiedScreen}
      />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
    </Stack.Navigator>
  );
};

export default VerifiedScreenTab;
