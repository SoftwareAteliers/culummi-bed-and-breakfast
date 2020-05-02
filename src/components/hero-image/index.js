import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import topImage from 'img/index/hero_4.jpg'
import Breadcrumbs from 'components/breadcrumbs'
import { Link } from 'gatsby'

const HeroImage = ({ heading, breadcrumbs }) => (
  <section
    className="site-hero inner-page overlay"
    style={{ backgroundImage: 'url(' + topImage + ')' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row site-hero-inner justify-content-center align-items-center">
        <ScrollAnimation
          animateOnce
          className="col-md-10 text-center"
          animateIn="fadeIn"
          duration={0.5}
        >
          <h1 className="heading mb-3">{heading}</h1>
          <Breadcrumbs data={breadcrumbs} />
        </ScrollAnimation>
      </div>
    </div>

    {/* <a className="mouse smoothscroll" href="#next">
      <div className="mouse-icon">
        <span className="mouse-wheel" />
      </div>
    </a> */}
  </section>
)

export default HeroImage
