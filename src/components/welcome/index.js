import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import foodImage from 'img/index/food-1.jpg'
import room1Image from 'img/rooms/room_1.jpg'

const Welcome = ({ module }) => (
  <section className="py-5 bg-light">
    <div className="container">
      <div className="row align-items-center">
        <ScrollAnimation
          animateOnce
          className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
          animateIn="fadeInUp"
          duration={0.5}
        >
          <figure className="img-absolute">
            <img src={foodImage} alt="Image" className="img-fluid" />
          </figure>
          <img src={room1Image} alt="Image" className="img-fluid rounded" />
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          className="col-md-12 col-lg-4 order-lg-1"
          animateIn="fadeInUp"
        >
          <h2 className="heading">Welcome!</h2>
          <p className="mb-4">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            <a href="#" className="btn btn-primary text-white py-2 mr-3">
              Learn More
            </a>
            <span className="mr-3 font-family-serif">
              <em>or</em>
            </span>
            <a
              href="https://vimeo.com/channels/staffpicks/93951774"
              data-fancybox
              className="text-uppercase letter-spacing-1"
            >
              See video
            </a>
          </p>
        </ScrollAnimation>
      </div>
    </div>
  </section>
)

export default Welcome
