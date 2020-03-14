import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import ReservationBanner from 'components/reservation-banner'
import get from 'lodash/get'
import experienceImg1 from 'img/experience/experience_1.jpg'
import experienceImg2 from 'img/experience/experience_2.jpg'
import experienceImg3 from 'img/experience/experience_3.jpg'
import experienceImg4 from 'img/experience/experience_4.jpg'

const Experiences = () => {
  return (
    <div>
      <div className="section container">
        <div className="row">
          <div className="col-md-4 text-center">
            <h3>Cosa fare</h3>
          </div>
          <div className="col-md-4 text-center">
            <h3>Cosa vedere</h3>
          </div>
          <div className="col-md-4 text-center">
            <h3>Dove mangiare</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="col-md-6 test-img"></div>

          <div className="col-md-6 test-img"></div>
          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="col-md-6 test-img"></div>
        </div>
      </div>

      <ReservationBanner />

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="col-md-6 test-img"></div>

          <div className="col-md-6 test-img"></div>
          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="col-md-6 test-img"></div>
        </div>
      </div>

      <ReservationBanner />

      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="col-md-6 test-img"></div>

          <div className="col-md-6 test-img"></div>
          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="m-5">
              <h2 className="mb-4 display-4">Title</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div className="col-md-6 test-img"></div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
