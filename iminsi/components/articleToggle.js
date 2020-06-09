/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { toggleWebView } from '../actions/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

class ArticleToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      webView: true,
    };
  }

  handleClick = () => {
    this.setState((prev) => ({ webView: !prev.webView }));
    this.props.toggleWebView();
  }
  //   style={{width: 24, height: 24,}}

  swap = (boool) => {
    if(boool){
      return <FontAwesome name="newspaper-o" size={24} color="white" />;
    } else {
      return <MaterialCommunityIcons name="web" size={24} color="white" />;
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        {
          (this.state.webView)?
          <FontAwesome name="newspaper-o" size={34} color="white" />
          :
          <MaterialCommunityIcons name="web" size={34} color="white" />
        }
      </TouchableOpacity>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleWebView: () => {
      dispatch(toggleWebView());
    },
  };
};

export default connect(null, mapDispatchToProps)(ArticleToggle);