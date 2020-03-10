import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
// import ScrollAnimation from 'react-animate-on-scroll'

import Meta from 'components/meta'
import Layout from 'components/layout'
import HeroImage from 'components/hero-image'
import Comments from 'components/comments'
import RoomsFull from 'components/room-overview'
import ReservationBanner from 'components/reservation-banner'

const RoomsPage = ({ data, location }) => {
  const rooms = get(data, 'remark.docs').filter(
    x => x.doc.frontmatter.layout === 'room'
  )
  return (
    <Layout location={location} site={get(data, 'site.meta')}>
      <Meta site={get(data, 'site.meta')} />
      <HeroImage
        heading={'Le Camere'}
        breadcrumbs={[{ name: 'home', url: '/' }, { name: 'Le Camere' }]}
      />
      <RoomsFull rooms={rooms} />
      {/* <Comments /> */}
      <ReservationBanner />
    </Layout>
  )
}

export default RoomsPage

export const pageQuery = graphql`
  query RoomsQuery {
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
