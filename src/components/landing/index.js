import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import topImage from 'img/index/hero_4.jpg'

const LandingPage = () => (
  <section
    className="site-hero overlay"
    style={{ backgroundImage: 'url(' + topImage + ')' }}
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row site-hero-inner justify-content-center align-items-center">
        <ScrollAnimation
          animateOnce
          className="col-md-10 text-center"
          animateIn="fadeInUp"
          duration={0.5}
        >
          <span className="custom-caption text-uppercase text-white d-block  mb-3">
            Welcome To 5 <span className="fa fa-star text-primary" /> Hotel
          </span>
          <h1 className="heading">A Best Place To Stay</h1>
        </ScrollAnimation>
      </div>
    </div>

    <a className="mouse smoothscroll" href="#next">
      <div className="mouse-icon">
        <span className="mouse-wheel" />
      </div>
    </a>
  </section>
)

export default LandingPage
