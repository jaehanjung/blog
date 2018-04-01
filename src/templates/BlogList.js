import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Pagination from '../components/Pagination';
import ImgHeader from '../components/ImgHeader';
import PostCard from '../components/PostCard';



class BlogList extends React.Component {

  render() {
    const { pathContext, data } = this.props;
    const { allMarkdownRemark } = data;
    const { edges } = allMarkdownRemark;
    return (
      <div>
        <ImgHeader />
        <div className="section section2">
          <div className="posts-list content clearfix">
            <div className="post-list-box clearfix">
              {edges.map((item, index) => {
                return (<PostCard key={`postcard${index}`} date={item.node.frontmatter.date} title={item.node.frontmatter.title} content={item.node.excerpt} link={item.node.fields.slug} thumbnail={item.node.frontmatter.thumbnail} />)
              })}
            </div>
            <Pagination category={pathContext.category} current={pathContext.current} totalPage={pathContext.totalPage} />
          </div>
        </div>
      </div>

    );
  }
}

export default BlogList;

export const query = graphql`
query BlogPostByList($category: String!, $skip: Int!, $postLimit: Int!) {
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
  allMarkdownRemark(filter: {frontmatter: { category: { eq: $category }}}, sort: {fields:[frontmatter___date], order: DESC}, limit:  $postLimit, skip: $skip) {
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
          thumbnail{
            publicURL
          }
        }
      }
    }
  }
}
`
