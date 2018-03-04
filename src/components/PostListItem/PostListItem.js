import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';

const ListItem = styled.article`
  width: 100%;

`

const LinkItem = styled(Link) `
  width: 100%;
  box-sizing: border-box;
  padding: 30px 50px 30px 40px;
  display:block;
  border-bottom: 1px solid #f1f1f1;
  &:hover{
    border-right: 3px solid #d71b22;
    background-color: #fafafc;
  }
`
const PostTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 1rem;
`

const PostContent = styled.p`
  font-size: 15px;
  color: #66696f;
  line-height: 30px;
  letter-spacing: 0.2px;
  margin-bottom: 1rem;
`

const PostDate = styled.p`
  color: #a2a9b3;
  font-size: 15px;
`

const PostCategory = styled.span`
  display: block;
  font-size: 12px;
  box-sizing: border-box;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 1rem;
  text-transform: uppercase;
  &::before{
    display:block;
    content: "";
    border-radius: 50%;
    width: 7px;
    height: 7px;
    position: absolute;
    top: 3px;
    left: 0;
    ${(props) => props.categoryColor && `background-color:${props.categoryColor}`};
  }
`

class PostListItem extends React.Component {
  render() {
    const { title, content, date, slug, categoryColor } = this.props;
    return (
      <ListItem>
        <LinkItem to={slug}>
          <PostCategory categoryColor={categoryColor}>javascript</PostCategory>
          <PostTitle>{title}</PostTitle>
          <PostContent>{content}</PostContent>
          <PostDate>Date : {date}</PostDate>
        </LinkItem>
      </ListItem>
    );
  }
}
export default PostListItem;
