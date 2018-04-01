import React, { Component } from 'react';
import Link from 'gatsby-link';
import PostCard from '../components/PostCard';
import Pagination from '../components/Pagination';
import BgImg from '../assets/images/bg-img.png';
import Header from '../components/Header';




class BlogList extends React.Component {
  state = { color: "red" }
  componentDidMount() {
    this.props.data.site.siteMetadata.menu.map(({ subMenu }) => {
      return (
        subMenu.map((item) => {
          if (item.title === this.props.pathContext.category) {
            this.setState({ color: item.color });
          }
        })
      )
    })
  }
  render() {
    const { pathContext, data } = this.props;
    const { allMarkdownRemark } = data;
    const { edges } = allMarkdownRemark;
    return (
      <div>
        <Header />
        <div className="section section1 main-slider" style={{backgroundImage: `url(${BgImg})`}}>
          <div className="main-header-title">
            <h2>WelCome! han.Blog</h2>
            <p>
              <a href="https://github.com/jaehanjung" className="fab fa-github git-button">GitHub</a>
            </p>
            <Link className="about-btn" to="/about">About Me</Link>
            {/* <div className="bgi-button">
              <button className="left-button"></button>
              <button className="center-button"></button>
              <button className="right-button"></button>
            </div> */}
          </div>
        </div>
        <div className="section section2 clearfix">
          <div className="card-more content clearfix">
            { edges.map((item, index)=>{
              return (<PostCard key={`postcard${index}s`} date={item.node.frontmatter.date} title={item.node.frontmatter.title} content={item.node.excerpt} link={item.node.fields.slug}  thumbnail={item.node.frontmatter.thumbnail}/>)
            })}
          </div>
        </div>
      </div>
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
  allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}, limit: 12) {
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
