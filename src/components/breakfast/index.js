import React from 'react'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from 'react-slick'
import img1 from 'img/breakfast/01.jpg'
import img2 from 'img/breakfast/02.jpg'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  )
}

const Breakfast = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          className: 'center',
          centerPadding: '60px',
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <ScrollAnimation animateOnce animateIn="fadeInDown" duration={0.5}>
              <h2 className="heading">Le nostre colazioni</h2>
            </ScrollAnimation>
          </div>
        </div>

        {/*  <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.5}>
              <h2 className="heading">Le nostre colazioni</h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInUp"
              delay={100}
              duration={0.5}
            >
              <p>
                La colazione è un'occasione speciale al Culummi B&B!
                É preparata
                per voi quotidianamente, sempre con prodotti freschi e a km 0.
                Consiste di una vasta gamma di prelibatezze iniziando da torte,
                biscotti, muffin fino a marmellate e yogurt fatti in casa, pane,
                cereali e prodotti tipici del Salento. Naturalmente, sempre
                servita con un sorriso!
              </p>
            </ScrollAnimation>
          </div>
        </div> */}

        <div className="row justify-content-center mb-5">
          <div className="col-xs-6 col-md-3">
            <ScrollAnimation animateOnce animateIn="fadeInDown" duration={0.5}>
              <img src={img1} />
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-md-3">
            <div style={{ height: '130px' }} aria-hidden="true"></div>
            <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.5}>
              <img src={img2} />
            </ScrollAnimation>
          </div>
          <div className="col-xs-6 col-md-5">
            <div style={{ height: '130px' }} aria-hidden="true"></div>
            <ScrollAnimation animateOnce animateIn="fadeIn" duration={0.5}>
              {/* <h2>Le nostre colazioni</h2> */}
              <p>
                É preparata per voi quotidianamente, sempre con prodotti freschi
                e a km 0.
              </p>
              <p className="text-justify">
                Consiste di una vasta gamma di prelibatezze iniziando da torte,
                biscotti, muffin fino a marmellate e yogurt fatti in casa, pane,
                cereali e prodotti tipici del Salento.
              </p>
              <p>Naturalmente, sempre servita con un sorriso!</p>
              <div className="row justify-content-center my-3 py-3 px-5">
                <Link to={'/contact'} className="btn btn-primary text-white">
                  Scopri di più
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider> */}
      </div>
    </section>
  )
}
export default Breakfast
