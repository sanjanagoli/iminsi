import React from 'react';
// import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { connect } from 'react-redux';
// import ForYouScreen from '../screens/ForYouScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import VerifiedScreen from '../screens/VerifiedScreen';

// const AboutTab = (props) => {
//   return <View style={{ flex: 1, justifyContent: 'center' }}><Text>about</Text></View>;
// };

// const SearchTab = (props) => {
//   return <View style={{ flex: 1, justifyContent: 'center' }}><Text>Search</Text></View>;
// };

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  console.log('bye');
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="For You" component={ForYouScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Verified" component={VerifiedScreen} />
          {/* <Tab.Screen name="For You" component={AboutTab} />
          <Tab.Screen name="Profile" component={AboutTab} />
          <Tab.Screen name="Verified" component={SearchTab} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default connect(null, null)(BottomNavigation);
