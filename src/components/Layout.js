import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import './Layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
        allStrapiLink(sort: { fields: created_at, order: ASC }) {
          edges {
            node {
              id
              title
              url
              created_at
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.description },
            { name: 'keywords', content: data.site.keywords },
          ]}
        />
        <Header />
        {children}
        <Footer data={data}>
          Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{' '}
          <a href="mailto:support@designcode.io">Email us</a> to ask anything. ©
          2018
        </Footer>
      </>
    )}
  />
)

export default Layout
