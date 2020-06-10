import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  Text, Dimensions,
} from 'react-native';
// import { AntDesign, FontAwesome } from '@expo/vector-icons';
import VerifiedScreen from '../screens/VerifiedScreen';
import ArticleDetail from '../screens/ArticleDetail';
import ArticleToggle from '../components/articleToggle';

// const windowWidth = Dimensions.get('window').width;
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
          headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight) },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '200',
            fontSize: 35,
            color: 'black',
          },
          title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>Trending</Text>,
        }}
        component={VerifiedScreen}
      />
      <Stack.Screen name="ArticleDetail"
        options={({ route }) => ({
          headerTitleAlign: 'center',
          headerBackTitle: null,
          headerBackTitleStyle: {
            color: 'white',
          },
          headerStyle: { backgroundColor: 'rgba(0,0,45,0.8)', height: ((71 / 640) * windowHeight) },
          headerTintColor: 'white',
          headerTitleStyle: {
          // fontWeight: '200',
          // fontSize: 35,
          // color: 'black',
          },
          headerTitle: () => { return <ArticleToggle />; },
        })}
        component={ArticleDetail}
      />
    </Stack.Navigator>
  );
};

export default VerifiedScreenTab;
