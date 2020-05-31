import { Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import get from 'lodash/get'
import map from 'lodash/map'

import Adsense from 'components/adsense'
import Comments from 'components/comments'
import ReservationBanner from 'components/reservation-banner'
import BookingWidget from 'components/booking-widget'
import HeroImage from 'components/hero-image'
import './style.scss'

import icon1 from 'img/rooms/icon1.png'
import icon2 from 'img/rooms/icon2.png'
import iconBed from 'img/rooms/icon-bed.png'
import icon4 from 'img/rooms/icon4.png'
import icon5 from 'img/rooms/icon5.png'
import iconShower from 'img/rooms/icon-shower.png'

const Room = ({ data, options }) => {
  const {
    category,
    tags,
    description,
    title,
    path,
    date,
    image,
  } = data.frontmatter
  const { isIndex, adsense } = options
  const html = get(data, 'html')
  const isMore = isIndex && !!html.match('<!--more-->')
  const fluid = get(image, 'childImageSharp.fluid')

  return (
    <div>
      {/* <div className="article" key={path}>
        <div className="container">
          <div className="info">
            <Link style={{ boxShadow: 'none' }} to={path}>
              <h1>{title}</h1>
              <time dateTime={date}>{date}</time>
            </Link>
            {Badges({ items: [category], primary: true })}
            {Badges({ items: tags })}
          </div>
          <div className="content">
            <p>{description}</p>
            {fluid ? (
              <Img
                fluid={fluid}
                style={{ display: 'block', margin: '0 auto' }}
              />
            ) : (
              ''
            )}
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: isMore ? getDescription(html) : html,
            }}
          />
          {isMore ? Button({ path, label: 'MORE', primary: true }) : ''}
          {getAd(isIndex, adsense)}
        </div>
      </div> */}

      <HeroImage
        heading={title}
        breadcrumbs={[
          { name: 'home', url: '/' },
          { name: 'Le Camere', url: '/rooms' },
          { name: title },
        ]}
      />

      <section className="section bg-light">
        <div className="roberto-rooms-area section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="single-room-details-area">
                  <div className="room-thumbnail-slides">
                    <div
                      id="room-thumbnail--slide"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="carousel-item">
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="carousel-item">
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="carousel-item">
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </div>
                        <div className="carousel-item">
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </div>
                      </div>

                      <ol className="carousel-indicators">
                        <li
                          data-target="#room-thumbnail--slide"
                          data-slide-to="0"
                          className="active"
                        >
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </li>
                        <li
                          data-target="#room-thumbnail--slide"
                          data-slide-to="1"
                        >
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </li>
                        <li
                          data-target="#room-thumbnail--slide"
                          data-slide-to="2"
                        >
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </li>
                        <li
                          data-target="#room-thumbnail--slide"
                          data-slide-to="3"
                        >
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </li>
                        <li
                          data-target="#room-thumbnail--slide"
                          data-slide-to="4"
                        >
                          {fluid ? (
                            <Img fluid={fluid} className="d-block w-100" />
                          ) : (
                            ''
                          )}
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="room-features-area d-flex flex-wrap mb-5">
                    <h6>
                      Vista<span>Terrazza</span>
                    </h6>
                    <h6>
                      Capacità<span>1 - 3 posti</span>
                    </h6>
                    <h6>
                      Letto<span>Extra Large</span>
                    </h6>
                  </div>

                  {/*
                  <p>
                    If you live in New York City or travel to and from New York
                    City a lot, you know all about the traffic there. Getting
                    places is often next to impossible, even with the gazillion
                    yellow cabs. If you’re like me you often look with envy at
                    those shiny limousines with their unformed drivers and wish
                    you could sit in one. Well, you can. New York limo service
                    is more affordable than you think, whether it’s for Newark
                    airport transportation, LaGuardia airport transportation, or
                    to drive wherever you wish to go.
                  </p>

                  <ul>
                    <li>
                      <i className="fa fa-check"></i> Mauris molestie lectus in
                      irdiet auctor.
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Dictum purus at blandit
                      molestie.
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Neque non fermentum
                      suscipit.
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Donec id dui ac massa
                      malesuada.
                    </li>
                    <li>
                      <i className="fa fa-check"></i> In sit amet sapien quis
                      orci maximus.
                    </li>
                    <li>
                      <i className="fa fa-check"></i> Vestibulum rutrum diam vel
                      eros tristique.
                    </li>
                  </ul>

                  <p>
                    Every time I hail a cab in New York City or wait for one at
                    the airports, I hope I’ll be lucky enough to get one that’s
                    halfway decent and that the driver actually speaks English.
                    I have spent many anxious moments wondering if I ever get to
                    my destination. Or whether I’d get ripped off. Even if all
                    goes well, I can’t say I can remember many rides in New York
                    cabs that were very pleasant. And given how much they cost
                    by now, going with a limo makes ever more sense.
                  </p> */}
                </div>

                <div className="room-service">
                  <h3>Servizi in camera</h3>

                  <ul>
                    <li>
                      <img src={icon1} alt="" /> Aria condizionata
                    </li>
                    <li>
                      <img src={icon2} alt="" /> Minibar
                    </li>
                    <li>
                      <img src={iconShower} alt="" /> Bagno privato
                    </li>
                    <li>
                      <img src={icon4} alt="" /> TV
                    </li>
                    <li>
                      <img src={icon5} alt="" /> Wi-Fi illimitato
                    </li>
                    <li>
                      <img src={iconBed} alt="" /> Terzo letto o culla
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-lg-4">
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Comments /> */}
      <ReservationBanner />
    </div>
  )
}

export default Room

const getAd = (isIndex, adsense) => {
  return !isIndex ? <Adsense clientId={adsense} slotId="" format="auto" /> : ''
}

const getDescription = (body) => {
  body = body.replace(/<blockquote>/g, '<blockquote className="blockquote">')
  if (body.match('<!--more-->')) {
    body = body.split('<!--more-->')
    if (typeof body[0] !== 'undefined') {
      return body[0]
    }
  }
  return body
}

const Button = ({ path, label, primary }) => (
  <Link className="readmore" to={path}>
    <span
      className={`btn btn-outline-primary btn-block ${
        primary ? 'btn-outline-primary' : 'btn-outline-secondary'
      }`}
    >
      {label}
    </span>
  </Link>
)

const Badges = ({ items, primary }) =>
  map(items, (item, i) => {
    return (
      <span
        className={`badge ${primary ? 'badge-primary' : 'badge-secondary'}`}
        key={i}
      >
        {item}
      </span>
    )
  })
