import React, { Component } from 'react';
import Link from 'gatsby-link'

class PostCard extends React.Component {
  render() {
    return (
        <a href={this.props.link} className="card-box clearfix">
              <img src="https://source.unsplash.com/random/700x500" alt="" />
              <div className="card-box-text">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
              </div>
            </a>
    );
  }
}

export default PostCard;

