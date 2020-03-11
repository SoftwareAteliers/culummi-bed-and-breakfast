import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import get from 'lodash/get'
import experienceImg1 from 'img/experience/experience_1.jpg'
import experienceImg2 from 'img/experience/experience_2.jpg'
import experienceImg3 from 'img/experience/experience_3.jpg'
import experienceImg4 from 'img/experience/experience_4.jpg'

const Experiences = () => {
  return (
    <section>
      <div className="container">
        {/* <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.5}> */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <h2 className="heading">Esperience</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <ScrollAnimation animateOnce animateIn="fadeIn">
              <p className="lead">Hiking</p>
              <figure className="img-wrap img-fluid img-hover-zoom">
                <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                  <img src={experienceImg1} alt="Image placeholder" />
                </Link>
              </figure>
              <p className="caption">Black Creek State Forest</p>
            </ScrollAnimation>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <ScrollAnimation animateOnce animateIn="fadeIn">
              <p className="lead">Adventure</p>
              <figure className="img-wrap img-fluid img-hover-zoom">
                <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                  <img src={experienceImg2} alt="Image placeholder" />
                </Link>
              </figure>
              <p className="caption">Skydive in the Ranch</p>
            </ScrollAnimation>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <ScrollAnimation animateOnce animateIn="fadeIn">
              <p className="lead">Bicycles</p>
              <figure className="img-wrap img-fluid img-hover-zoom">
                <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                  <img src={experienceImg3} alt="Image placeholder" />
                </Link>
              </figure>
              <p className="caption">Exiting Bicycle Tours</p>
            </ScrollAnimation>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <ScrollAnimation animateOnce animateIn="fadeIn">
              <p className="lead">Fishing</p>
              <figure className="img-wrap img-fluid img-hover-zoom">
                <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                  <img src={experienceImg4} alt="Image placeholder" />
                </Link>
              </figure>
              <p className="caption">Grand Lake Mörttjärn</p>
            </ScrollAnimation>
          </div>
          {/* <div className="col-xs-12 col-lg-3">
              <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                <figure className="img-wrap img-fluid img-hover-zoom">
                  <img src={experienceImg2} alt="Image placeholder" />
                </figure>
              </Link>
            </div>
            <div className="col-xs-12 col-lg-3">
              <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                <figure className="img-wrap img-fluid img-hover-zoom">
                  <img src={experienceImg3} alt="Image placeholder" />
                </figure>
              </Link>
            </div>
            <div className="col-xs-12 col-lg-3">
              <Link style={{ boxShadow: 'none' }} to={'/experiences'}>
                <figure className="img-wrap img-fluid img-hover-zoom">
                  <img src={experienceImg4} alt="Image placeholder" />
                </figure>
              </Link>
            </div> */}
        </div>
        {/* </ScrollAnimation> */}
      </div>
    </section>
  )
}

export default Experiences
