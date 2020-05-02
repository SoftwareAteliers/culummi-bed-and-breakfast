import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import ReservationBanner from 'components/reservation-banner'
import get from 'lodash/get'
import experienceImg1 from 'img/experience/experience_1.jpg'
import experienceImg2 from 'img/experience/experience_2.jpg'
import experienceImg3 from 'img/experience/experience_3.jpg'
import experienceImg4 from 'img/experience/experience_4.jpg'
import BackgroundImage from 'gatsby-background-image'

const Experiences = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hotel_demo_32.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  // Single Image Data
  const imageData = placeholderImage.childImageSharp.fluid

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
          <div className="col-md-6">
            <BackgroundImage
              Tag="section"
              // To style via external CSS see layout.css last examples:
              // className="test"
              fluid={imageData}
              backgroundColor={`#040e18`}
              // Title get's passed to both container and noscriptImg.
              title="gbitest"
              // You are able to set a classId and style by wrapper (see below or
              // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
              // classId="gbi"
              // style={{
              //   // Defaults are overwrite-able by setting one of the following:
              //   // backgroundSize: '',
              //   // backgroundPosition: '',
              //   // backgroundRepeat: '',
              // }}
              // To "force" the classic fading in of every image (especially on
              // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
              // fadeIn={`soft`}
              // To be able to use stacking context changing elements yourself,
              // set this to true to disable the "opacity hack":
              // preserveStackingContext={true}
              // You can "safely" (look them up beforehand ; ) add other props:
              id="gbitest"
              role="img"
              aria-label="gbitest"
            ></BackgroundImage>
          </div>

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
