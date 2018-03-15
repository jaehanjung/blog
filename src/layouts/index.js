import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Header from '../components/Header'
import Footer from '../components/Footer'
import get from 'lodash/get'
import '../assets/css/font.css'
import '../assets/css/common.css'
import '../assets/css/markdown.css'


// import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  state = {
    category: [],
    menu: []
  };
  componentDidMount() {
    let category = new Set();
    this.props.data.allMarkdownRemark.edges.forEach(({ node }) => {
      category.add(node.frontmatter.category);
    });
    this.setState({
      category: category,
      menu: this.props.data.site.siteMetadata.menu
    })
    setTimeout(() => {
    }, 100);
  }
  render() {
    const { location, children } = this.props;
    let rootPath = `/`
    let isRoot = false;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div>
        {children()}
        <Footer />
      </div>
    )
  }
}

export default Template;


export const pageQuery = graphql`
  query GetCategory {
    site{
      siteMetadata{
        menu{
          title
          subMenu{
            title
          }
        }
      }
    }
    allMarkdownRemark{
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`
