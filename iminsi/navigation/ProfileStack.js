import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  Text, Image, Dimensions, TouchableOpacity, View,
} from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import VerifiedScreen from '../screens/VerifiedScreen';
import ArticleDetail from '../screens/ArticleDetail';
import { connect } from 'react-redux';
import ProfileScreen from '../screens/ProfileScreen';
import onBoardingInterest from '../components/onboarding/onBoardingInterest';
import signOut from '../actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const ProfileScreenTab = (props) => {
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
          // headerRight: () => { return ( (props.userLoaded)?<TouchableOpacity onPress={() => {props.signOut()}}><Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)', marginRight: 20, fontSize: 20 }}>Sign Out</Text></TouchableOpacity>: <View /> );},
        }}
        component={ProfileScreen}
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

function mapReduxStateToProps(reduxState) {
  return {
    userLoaded: reduxState.user.loaded,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(ProfileScreenTab);
