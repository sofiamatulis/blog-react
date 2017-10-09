import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component {
  componentDidMount() {
    // provided by react-router
    // this.props.match.params.id;
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
      // fetching the individual post
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
      //aftet its deleting, sending the user back to the index
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div> Loading...</div>;
    }
    return (
      <div>
        <Link to="/"> Back to Index </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
        Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6> Categories: {post.categories} </h6>
        <p> {post.content} </p>
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

// this.props === ownProps
// map state to props to get specific compoentns and global ones

export default connect(mapStateToProps, { fetchPost, deletePost }) (PostsShow);
