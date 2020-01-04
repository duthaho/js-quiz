import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout location={this.props.location} siteMetadata={data.site.siteMetadata}>
        <SEO title="404: Not Found" />
        <p>Mày chỉ là ngọn cỏ ven đường quanh năm ngửi cứt chó, với thế nào được mây như tao.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        social {
          facebook {
            appId
          }
        }
      }
    }
  }
`
