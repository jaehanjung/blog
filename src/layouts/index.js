import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Header from '../components/Header'
import get from 'lodash/get'

// import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  state = {
    category : [],
    menu : []
  };
  componentDidMount(){
    let category = new Set();
    this.props.data.allMarkdownRemark.edges.forEach(({node}) => {
      category.add(node.frontmatter.category);
    });
    this.setState({
      category : category,
      menu : this.props.data.site.siteMetadata.menu
    })
    setTimeout(()=>{
      console.log(this.state);
    }, 100);
  }
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }


    return (
      <Container>
        <Header history={this.props.history} menu={this.state.menu} category={this.state.category}/>
        {children()}
      </Container>
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
