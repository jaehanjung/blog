import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const SearchContent = styled.div`
  margin-top: 100px;
`

const LinkItem = styled(Link)`

`

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newList: []
    };

  }
  componentDidMount(){
    let newPostList=[];
    let searchValue = this.props.location.state == null ?  "" : this.props.location.state.value;
    this.props.data.allMarkdownRemark.edges.forEach(({node}) => {
      const {frontmatter} = node;
      let {title} = frontmatter;
      title = title.toLowerCase()
      if(title.match(searchValue.toLowerCase())){
        newPostList.push(node);
      }
    });
    this.setState({newList: newPostList});
  }

  render() {
    return(
      <SearchContent>
        {this.state.newList.map((item, index)=>{
          return (<Link key={`link${index}`} to={item.fields.slug}>{item.frontmatter.title}</Link>)
        })}
      </SearchContent>
    );
  }
}

SearchPage.propTypes = {

};

export default SearchPage;

export const pageQuery = graphql`
  query SearchBlogList {
    allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
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
