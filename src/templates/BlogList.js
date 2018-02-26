import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Pagination from '../components/Pagination';
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    const {pathContext} = this.props;
    return (
      <div>
        list
        <Pagination category={pathContext.category} current={pathContext.current} totalPage={pathContext.totalPage} />
      </div>
    );
  }
}

BlogList.propTypes = {

};

export default BlogList;

export const query = graphql`
query BlogPostByList($category: String!, $skip: Int!, $postLimit: Int!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  allMarkdownRemark(filter: {frontmatter: { category: { eq: $category }}}, sort: {fields:[frontmatter___date], order: DESC}, limit:  $postLimit, skip: $skip) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          category
        }
      }
    }
  }
}
`
