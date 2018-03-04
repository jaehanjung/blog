import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

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
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <Content>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Top3Column xs={12} sm={12} md={4} lg={3.5}>
          <h1>{post.frontmatter.title}</h1>
          <p
          style={{
            display: 'block',
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
        >
          {post.frontmatter.date}
        </p>
        </Top3Column>
        <PostList xs={12} sm={12} md={8} lg={8.5}>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: "2rem",
          }}
        />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
        </PostList>
      </Content>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
