import React from 'react';
// import { View, Text } from 'react-native';
// import HTML from 'react-native-render-html';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  Dimensions, Text,
} from 'react-native';
import BottomNavigation from './navigation/BottomNavigation';
import rootReducer from './reducers/index';
import SignupScreen from './screens/Signup/SignupScreen';
import SigninScreen from './screens/Signup/SigninScreen';
// import onBoardingInterest from './components/onboarding/onBoardingInterest';
import ArticleDetail from './screens/ArticleDetail';
import Bookmark from './components/bookmark';
import ArticleToggle from './components/articleToggle';

console.disableYellowBox = true;
const store = createStore(rootReducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

const windowHeight = Dimensions.get('window').height;


export default function App(props) {
  return (
    <Provider store={store}>
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Iminsi" component={BottomNavigation} />
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
                headerRight: () => { return (<Bookmark article={route.params.article} />); },
              })}
              component={ArticleDetail}
            />
            <Stack.Screen name="Sign In"
              options={({ route }) => ({
                headerTitleAlign: 'center',
                headerBackTitle: null,

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
                title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>Sign In</Text>,
              })}
              component={SigninScreen}
            />
            <Stack.Screen name="Sign Up"
              options={({ route }) => ({
                headerTitleAlign: 'center',
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
                title: <Text style={{ fontFamily: 'Baskerville', color: 'rgb(56, 60, 108)' }}>Sign Up</Text>,
              })}
              component={SignupScreen}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </>


    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
