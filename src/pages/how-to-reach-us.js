import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
// import ScrollAnimation from 'react-animate-on-scroll'

import Meta from 'components/meta'
import Layout from 'components/layout'
import HeroImage from 'components/hero-image'
import Comments from 'components/comments'
import Contact from 'components/contact'
import ReservationBanner from 'components/reservation-banner'

const HowToReachUsPage = ({ data, location }) => {
  return (
    <Layout location={location} site={get(data, 'site.meta')}>
      <Meta site={get(data, 'site.meta')} />
      <HeroImage
        heading={'Contact'}
        breadcrumbs={[{ name: 'home', url: '/' }, { name: 'contact' }]}
      />
      <Contact site={get(data, 'site.meta')} />
      {/* <Comments /> */}
      {/* <ReservationBanner /> */}
    </Layout>
  )
}

export default HowToReachUsPage

export const pageQuery = graphql`
  query HowToReachUsQuery {
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
  }
`
