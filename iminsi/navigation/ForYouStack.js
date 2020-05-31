/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticles } from '../actions/index';
import { createStackNavigator } from '@react-navigation/stack';
import ForYouScreen from '../screens/ForYouScreen';
import InterestScreen from '../screens/InterestScreen';
import { Dimensions, Text, Button } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();


class ForYouStack extends Component {

  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="For You" options={{
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight), },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 35,
            color: 'black',
          },
          title: <Text style={{/*fontFamily: 'PlayfairDisplay_400Regular',*/ }}>For You</Text>,
        }} component={ForYouScreen} />
        <Stack.Screen name="Interest Screen"
          options={({ route }) => ({
            title: <Text style={{/*fontFamily: 'PlayfairDisplay_400Regular',*/ }}>{route.params.name}</Text>,
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: 'white', height: ((71 / 640) * windowHeight), },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 35,
              color: 'black',
            },
            headerLeft: () => (<Button  title="Return" onPress={() => this.props.navigation.goBack()} />),
          })}
          component={InterestScreen} />
      </Stack.Navigator>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    articles: reduxState.article.articles,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(ForYouStack);
