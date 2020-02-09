import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import backgroundImage from 'img/index/hero_4.jpg'

const ReservationBanner = () => {
  return (
    <section
      className="section bg-image overlay"
      style={{ backgroundImage: 'url(' + backgroundImage + ')' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <Fade top>
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left">
              <h2 className="text-white font-weight-bold">
                A Best Place To Stay. Reserve Now!
              </h2>
            </div>
          </Fade>
          <Fade top>
            <div className="col-12 col-md-6 text-center text-md-right">
              <Link
                to={'/contact'}
                className="btn btn-outline-white-primary py-3 text-white px-5"
              >
                Reserve Now
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ReservationBanner
