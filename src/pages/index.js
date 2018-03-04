import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Top3Post from '../components/Top3Post';
import Pagination from '../components/Pagination';
import PostListItem from '../components/PostListItem';
import styled from 'styled-components';
import { Columns } from '../styled-components/grid';

const Content = styled.div`
  width: calc(100% - 70px);
  &::after{
    content: "";
    display:block;
    clear: both;
  }
  margin-left: 70px;
`

const Top3Column = Columns.extend`
`

const PostList = Columns.extend`
  height: 100vh;
  overflow-y: scroll;
`
class BlogList extends React.Component {
  state = { color: "red" }
  componentDidMount(){
    this.props.data.site.siteMetadata.menu.map(({subMenu})=>{
      return (
        subMenu.map((item)=>{
          if(item.title === this.props.pathContext.category){
            this.setState({color: item.color});
          }
        })
      )
    })
    console.log(this.color);
  }
  render() {
    const {pathContext, data} = this.props;
    const {allMarkdownRemark} = data;
    const {edges} = allMarkdownRemark;
    return (
      <Content>
        <Top3Column xs="none" sm="none" md={4} lg={3.5}>
          <Top3Post/>
        </Top3Column>
        <PostList xs={12} sm={12} md={8} lg={8.5}>
          {edges.map(({node}, index)=>{
            return (<PostListItem key={`item${index}`}
                                  title={node.frontmatter.title}
                                  content={node.excerpt}
                                  date={node.frontmatter.date}
                                  slug={node.fields.slug}
                                  category={node.frontmatter.category}
                                  categoryColor={this.state.color}/>)
          })}
        </PostList>
      </Content>
    );
  }
}

export default BlogList;

export const query = graphql`
query MainBlogList{
  site {
    siteMetadata {
      menu{
        subMenu{
          title,
          color
        }
      }
    }
  }
  allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}, limit:  1000) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          category
        }
      }
    }
  }
}
`
