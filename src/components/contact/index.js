import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ReservationForm from 'components/reservation-form'
import Address from 'components/address'

const Contact = ({ site }) => {
  return (
    <section className="section contact-section">
      <ScrollAnimation animateOnce animateIn="fadeInclassNameUp" duration={0.5}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <ReservationForm />
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <Address site={site} />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Contact
