import React from 'react'
import get from 'lodash/get'
import Meta from 'components/meta'
import Layout from 'components/layout'
import HeroImage from 'components/hero-image'
import ReservationBanner from 'components/reservation-banner'
import Experiences from 'components/experiences'

const ExperiencesPage = ({ data, location }) => {
  return (
    <Layout location={location} site={get(data, 'site.meta')}>
      <Meta site={get(data, 'site.meta')} />
      <HeroImage
        heading={'Esplora / Esperienze'}
        breadcrumbs={[{ name: 'home', url: '/' }, { name: 'Esperienze' }]}
      />
      <Experiences />
      <ReservationBanner />
    </Layout>
  )
}

export default ExperiencesPage
