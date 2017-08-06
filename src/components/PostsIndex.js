import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (

      <div>Posts Index</div>

    )
  }
}


//passing the fetchposts method as props to component
export default connect(null, {
  fetchPosts
})(PostsIndex)
