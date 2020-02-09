import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import room1Image from 'img/rooms/room_1.jpg'
import get from 'lodash/get'

const Room = ({ room }) => {
  const { services, title, image, path } = room.doc.frontmatter
  const fluid = get(image, 'childImageSharp.fluid')
  return (
    <ScrollAnimation
      animateOnce
      className="col-md-6 col-lg-4"
      animateIn="fadeInUp"
      duration={0.5}
    >
      <Link style={{ boxShadow: 'none' }} to={path}>
        <figure className="img-wrap">
          {fluid ? (
            <Img
              fluid={fluid}
              className="img-fluid mb-3"
              alt="Free website template"
            />
          ) : (
            ''
          )}
        </figure>
        <div className="p-3 text-center room-info">
          <h2>{title}</h2>
          <span className="text-uppercase letter-spacing-1">
            90$ / per night
          </span>
        </div>
      </Link>

      {/* <a href="#" className="room">
        <figure className="img-wrap">
          <img
            src={room1Image}
            alt="Free website template"
            className="img-fluid mb-3"
          />
        </figure>
        <div className="p-3 text-center room-info">
          <h2>{title}</h2>
          <span className="text-uppercase letter-spacing-1">
            90$ / per night
          </span>
        </div>
      </a> */}
    </ScrollAnimation>
  )
}

export default Room
