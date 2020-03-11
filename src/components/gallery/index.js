import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import galleryImg1 from 'img/gallery/1.jpg'
import galleryImg2 from 'img/gallery/2.jpg'
import galleryImg3 from 'img/gallery/3.jpg'
import galleryImg4 from 'img/gallery/4.jpg'
import galleryImg5 from 'img/gallery/5.jpg'

const Gallery = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <figure className="img-wrap img-fluid">
              <Link style={{ boxShadow: 'none' }} to={'/gallery'}>
                <img src={galleryImg1} alt="Image placeholder" />
              </Link>
            </figure>
          </div>
          <div className="col-xs-12 col-md-3">
            <figure className="img-wrap img-fluid">
              <Link style={{ boxShadow: 'none' }} to={'/gallery'}>
                <img src={galleryImg2} alt="Image placeholder" />
              </Link>
            </figure>
            <figure className="img-wrap img-fluid">
              <Link style={{ boxShadow: 'none' }} to={'/gallery'}>
                <img src={galleryImg4} alt="Image placeholder" />
              </Link>
            </figure>
          </div>
          <div className="col-xs-12 col-md-3">
            <figure className="img-wrap img-fluid">
              <Link style={{ boxShadow: 'none' }} to={'/gallery'}>
                <img src={galleryImg3} alt="Image placeholder" />
              </Link>
            </figure>
            <figure className="img-wrap img-fluid">
              <Link style={{ boxShadow: 'none' }} to={'/gallery'}>
                <img src={galleryImg5} alt="Image placeholder" />
              </Link>
            </figure>
          </div>
        </div>
        <div className="row justify-content-center my-3 py-3 px-5">
          <Link to={'/gallery'} className="btn btn-primary text-white">
            Altri imagini
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gallery
