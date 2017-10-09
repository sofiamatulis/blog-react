import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
       return (
         <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
         </li>
       );
    });
  }

  render() {
    return (
      // console.log(this.props.posts);
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3> Posts </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// instead of map dispatch to props you can do this:
//connect is taking care of the step for us

// lifecycle is a method that automatically gets called by react
//example of it is component did mount
// this function is called immediately after DOM loads

//fetching the data is an asychronous thing
// react doesnt know when to load application.
// it will load as soon as it can
// component will mount: before the component shows in the DOM
// COMPONENT RENDERED AND THEN WE FETCH THE DATA

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

// Link tag (prevents the browser to issue another http request, prevents some of the default behavior) vs anchor tag
