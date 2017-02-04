

import React from 'react';

import {hashHistory} from 'react-router';


class Post extends React.Component{
constructor(props) {
  super(props);

    this.state = {

    };

  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>"Testing Post Component"</p>
        <div>
          {this.props.post.username}
          <br></br>
          {this.props.post.title}
          <br></br>
          <br></br>
          {this.props.post.body}
        </div>
        
      </div>
    );
  }

}

export default Post;
