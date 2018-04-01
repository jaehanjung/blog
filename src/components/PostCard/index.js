import React, { Component } from 'react';
import Link from 'gatsby-link';
import defaultImg from '../../assets/images/2.jpg';

class PostCard extends React.Component {
  render() {
    const {thumbnail} = this.props;
    let thumbnailImg = null;
    if(thumbnail){
      thumbnailImg = thumbnail.publicURL;
    } else {
      thumbnailImg = defaultImg;
    }
    return (
        <a href={this.props.link} className="card-box clearfix">
              <div className="card-img" style={{backgroundImage: `url("${thumbnailImg}")`}}></div>
              <div className="card-box-text">
                <p className="card-date">{this.props.date}</p>
                <h3>{this.props.title}</h3>
                <p className="card-box-p">{this.props.content}</p>
              </div>
            </a>
    );
  }
}

export default PostCard;

