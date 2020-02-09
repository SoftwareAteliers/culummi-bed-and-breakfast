import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import testimonyImg1 from 'img/testimony/person_1.jpg'
import testimonyImg2 from 'img/testimony/person_2.jpg'
import testimonyImg3 from 'img/testimony/person_3.jpg'
import testimonyImg4 from 'img/testimony/person_4.jpg'
import Slider from 'react-slick'

const Comments = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-7">
            <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.5}>
              <h2 className="heading">People Says</h2>
            </ScrollAnimation>
          </div>
        </div>
        <div>
          <ScrollAnimation
            animateOnce
            className="js-carousel-2 owl-carousel mb-5"
            animateIn="fadeInUp"
            delay={120}
            duration={0.5}
          >
            <Slider {...settings}>
              <div className="testimonial text-center slider-item">
                <div className="author-image mb-3">
                  <img
                    src={testimonyImg1}
                    alt="Image placeholder"
                    className="rounded-circle mx-auto"
                  />
                </div>
                <blockquote>
                  <p>
                    &ldquo;A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.&rdquo;
                  </p>
                </blockquote>
                <p>
                  <em>&mdash; Jean Smith</em>
                </p>
              </div>

              <div className="testimonial text-center slider-item">
                <div className="author-image mb-3">
                  <img
                    src={testimonyImg2}
                    alt="Image placeholder"
                    className="rounded-circle mx-auto"
                  />
                </div>
                <blockquote>
                  <p>
                    &ldquo;Even the all-powerful Pointing has no control about
                    the blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.&rdquo;
                  </p>
                </blockquote>
                <p>
                  <em>&mdash; John Doe</em>
                </p>
              </div>

              <div className="testimonial text-center slider-item">
                <div className="author-image mb-3">
                  <img
                    src={testimonyImg3}
                    alt="Image placeholder"
                    className="rounded-circle mx-auto"
                  />
                </div>
                <blockquote>
                  <p>
                    &ldquo;When she reached the first hills of the Italic
                    Mountains, she had a last view back on the skyline of her
                    hometown Bookmarksgrove, the headline of Alphabet Village
                    and the subline of her own road, the Line Lane.&rdquo;
                  </p>
                </blockquote>
                <p>
                  <em>&mdash; John Doe</em>
                </p>
              </div>

              <div className="testimonial text-center slider-item">
                <div className="author-image mb-3">
                  <img
                    src={testimonyImg1}
                    alt="Image placeholder"
                    className="rounded-circle mx-auto"
                  />
                </div>
                <blockquote>
                  <p>
                    &ldquo;A small river named Duden flows by their place and
                    supplies it with the necessary regelialia. It is a
                    paradisematic country, in which roasted parts of sentences
                    fly into your mouth.&rdquo;
                  </p>
                </blockquote>
                <p>
                  <em>&mdash; Jean Smith</em>
                </p>
              </div>

              <div className="testimonial text-center slider-item">
                <div className="author-image mb-3">
                  <img
                    src={testimonyImg4}
                    alt="Image placeholder"
                    className="rounded-circle mx-auto"
                  />
                </div>
                <blockquote>
                  <p>
                    &ldquo;Even the all-powerful Pointing has no control about
                    the blind texts it is an almost unorthographic life One day
                    however a small line of blind text by the name of Lorem
                    Ipsum decided to leave for the far World of Grammar.&rdquo;
                  </p>
                </blockquote>
                <p>
                  <em>&mdash; John Doe</em>
                </p>
              </div>

              <div className="testimonial text-center slider-item">
                <div className="author-image mb-3">
                  <img
                    src={testimonyImg1}
                    alt="Image placeholder"
                    className="rounded-circle mx-auto"
                  />
                </div>
                <blockquote>
                  <p>
                    &ldquo;When she reached the first hills of the Italic
                    Mountains, she had a last view back on the skyline of her
                    hometown Bookmarksgrove, the headline of Alphabet Village
                    and the subline of her own road, the Line Lane.&rdquo;
                  </p>
                </blockquote>
                <p>
                  <em>&mdash; John Doe</em>
                </p>
              </div>
            </Slider>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Comments
