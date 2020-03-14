import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/post'
import Room from 'templates/room'
import Meta from 'components/meta'
import Layout from 'components/layout'
import Landing from 'components/landing'
import Booking from 'components/booking'
import Welcome from 'components/welcome'
import Breakfast from 'components/breakfast'
import Rooms from 'components/rooms'
import Comments from 'components/comments'
import ExperiencesWidget from 'components/experiences-widget'
import Gallery from 'components/gallery'
import ReservationBanner from 'components/reservation-banner'

const IndexPage = ({ data, location }) => {
  const posts = get(data, 'remark.docs').filter(
    x => x.doc.frontmatter.layout === 'post'
  )
  const rooms = get(data, 'remark.docs').filter(
    x => x.doc.frontmatter.layout === 'room'
  )
  return (
    <Layout location={location} site={get(data, 'site.meta')}>
      <Meta site={get(data, 'site.meta')} />
      <Landing />
      <Booking />
      <Welcome />
      <Breakfast />
      <Rooms rooms={rooms} />
      <Gallery />
      <ExperiencesWidget />
      <Comments />
      <ReservationBanner />
      {/* {posts.map(({ doc }, i) => (
        <Post
          data={doc}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))} */}
      {/* {rooms.map(({ doc }, i) => (
        <Room
          data={doc}
          options={{
            isIndex: true,
          }}
          key={i}
        />
      ))} */}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        adsense
        phone
        email
        name
        vat
        address {
          street
          number
          postalCode
          city
          province
          country
        }
        social {
          facebook
          tripadvisor
          instagram
        }
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      docs: edges {
        doc: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            services
            price
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
