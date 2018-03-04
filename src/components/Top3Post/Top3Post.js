import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import BgImg from '../../assets/images/1.jpg'

const Content = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`

const Slider = styled.ul`
  width: 100%;
  height: 100%;
`

const SliderItem = styled.li`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  &::before{
    display: block;
    content: "";
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
  }
`

const PostLink = styled(Link) `
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  z-index:1;
  color: white;
`

const BtnWrap = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`

const Btn = styled.button`

`

const PostContent = styled.div`
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`

class Top3Post extends React.Component {
  render() {
    console.log(this.props.content);
    const { content } = this.props;
    return (
      <Content>
        <Slider>
          {content == null ? null : content.map(({ node }) => {
            let thumbnail = null;
            node.frontmatter.hasOwnProperty("thumbnail")
              ? thumbnail = node.frontmatter.thumbnail
              : thumbnail = BgImg;
            return (<SliderItem style={{ backgroundImage: `url(${thumbnail})` }}>
              <PostLink to={node.fields.slug}>
                <PostContent>
                  <h1>{node.frontmatter.title}</h1>
                  <p>{node.frontmatter.category}</p>
                </PostContent>
              </PostLink>
            </SliderItem>)
          })}
        </Slider>
        <BtnWrap>
          <Btn>left</Btn>
          <Btn>right</Btn>
        </BtnWrap>
      </Content>
    );
  }
}

export default Top3Post;
