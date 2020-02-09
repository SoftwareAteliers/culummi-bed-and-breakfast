import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import get from 'lodash/get'
import testImage2 from 'img/rooms/room_2.jpg'

const RoomFull = ({ room, leftToRight }) => {
  const { services, title, image, path } = room.doc.frontmatter
  const fluid = get(image, 'childImageSharp.fluid')
  return (
    <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.5}>
      <div className="site-block-half d-block d-lg-flex bg-white">
        <a
          href="#"
          className={
            'image d-block bg-image-2' + (leftToRight ? ' order-2' : '')
          }
          style={{ backgroundImage: 'url(' + testImage2 + ')' }}
        ></a>
        <div className={'text' + (leftToRight ? ' order-1' : '')}>
          <span className="d-block mb-4">
            <span className="display-4 text-primary">$299</span>
            <span className="text-uppercase letter-spacing-2">/ per night</span>
          </span>
          <h2 className="mb-4">{title}</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            <Link className="btn btn-primary text-white" to={path}>
              Book Now
            </Link>
          </p>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default RoomFull
