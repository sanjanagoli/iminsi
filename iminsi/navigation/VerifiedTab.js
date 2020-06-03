import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  Text, Image, Dimensions,
} from 'react-native';
import VerifiedScreen from '../screens/VerifiedScreen';
import ArticleDetail from '../screens/ArticleDetail';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const VerifiedScreenTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Verified"
        options={{
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight), },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 35,
            color: 'black',
          },
          title: <Text style={{fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)',}}>Trending</Text>,
        }}
        component={VerifiedScreen}
      />
      <Stack.Screen name="ArticleDetail"
          options={({ route }) => ({
            headerTitleAlign: 'center',
            headerBackTitleStyle: {
              color: 'black',
            },
            headerStyle: { backgroundColor: 'rgba(0,0,45,0.8)', height: ((71 / 640) * windowHeight), },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: "200",
              fontSize: 35,
              color: 'black',
            },
          title: <Text style={{ fontFamily: 'Baskerville', color: 'black', }}>Article</Text>,
            headerRight: () => { return (<FontAwesome name="bookmark-o" style={{marginRight: 25}} size={24} color="black" />) }
          })}
          component={ArticleDetail} />
    </Stack.Navigator>
  );
};

export default VerifiedScreenTab;
