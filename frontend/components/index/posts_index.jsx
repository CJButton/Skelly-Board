

import React from 'react';
import { Link } from 'react-router';
// import Modal from 'react-modal';

class PostsIndex extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    };


  }


  render() {
    console.log(this.props);
    console.log(this.state);
    return (
    <div className="postsIndexWrapper">
      {this.props.posts.map((post, i) => {
        return(
          <div key={i}>{post.title}</div>
        );
      })}
    </div>

    );
  }
}

export default PostsIndex;
