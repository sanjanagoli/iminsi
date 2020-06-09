/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { addUserArticles, removeUserArticles, } from '../actions/index';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false,
    };
  }

  componentDidMount() {

    this.props.currentUser.profileArticles.forEach((art) => {
      if (art.id === this.props.article.id) {
        this.setState({ bookmarked: true });
      }
    });


  }

  handleClick = () => {
    if (this.state.bookmarked) {
      this.props.removeUserArticles(this.props.currentUser, this.props.article);
    } else {
      this.props.addUserArticles(this.props.currentUser, this.props.article);
    }
    this.setState((prev) => ({ bookmarked: !prev.bookmarked }));
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>
        {
          (this.state.bookmarked) ?
            <FontAwesome name="bookmark" style={{ marginRight: 25 }} size={24} color="white" />
            :
            <FontAwesome name="bookmark-o" style={{ marginRight: 25 }} size={24} color="white" />
        }
      </TouchableOpacity>

    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    currentUser: reduxState.user.currentUser,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => {
      dispatch(getArticles());
    },
    addUserArticles: (user, article) => {
      dispatch(addUserArticles(user, article));
    },
    removeUserArticles: (user, article) => {
      dispatch(removeUserArticles(user, article));
    },
  };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(Bookmark);