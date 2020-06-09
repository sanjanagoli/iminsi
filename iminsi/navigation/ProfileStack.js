import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  Text, Image, Dimensions,
} from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import VerifiedScreen from '../screens/VerifiedScreen';
import ArticleDetail from '../screens/ArticleDetail';
import ProfileScreen from '../screens/ProfileScreen';
import onBoardingInterest from '../components/onboarding/onBoardingInterest';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const ProfileScreenTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        options={{
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '200',
            fontSize: 35,
            color: 'black',
          },
          title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>Profile</Text>,
        }}
        component={ProfileScreen}
      />
      <Stack.Screen name="ArticleDetail"
        options={({ route }) => ({
          headerTitleAlign: 'center',
          title: <FontAwesome name="newspaper-o" size={24} color="white" />,
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
          headerRight: () => { return (<FontAwesome name="bookmark-o" style={{ marginRight: 25 }} size={24} color="white" />); },
        })}
        component={ArticleDetail}
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
    </Stack.Navigator>
  );
};

export default ProfileScreenTab;
