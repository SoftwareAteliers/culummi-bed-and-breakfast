import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import foodImage from 'img/index/food-1.jpg'
import room1Image from 'img/rooms/room_1.jpg'

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.showMore = this.showMore.bind(this)
    this.state = { showMore: false }
  }

  showMore(e) {
    e.preventDefault()
    this.setState({ showMore: true })
  }

  render() {
    return (
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <ScrollAnimation
              animateOnce
              className="col-md-12 col-lg-7 ml-auto order-lg-2 position-relative mb-5"
              animateIn="fadeInRight"
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
              animateIn="fadeInLeft"
              duration={0.5}
            >
              <h2 className="heading">IL B&amp;B</h2>
              <p className="mb-4 text-justify">
                I “culummi”, in dialetto salentino, sono i primi frutti del
                fico, albero diffuso e caratteristico di tutto il Salento.
              </p>
              <p className="mb-4 text-justify">
                La nostra struttura, ubicata a Cavallino a quattro km da Lecce,
                è situata su quella che anticamente era indicata come “la strata
                te li culummi” ora occupata dall’abitato moderno.
              </p>
              {this.state.showMore && (
                <ScrollAnimation animateOnce animateIn="fadeIn" duration={0.5}>
                  <p className="mb-4 text-justify">
                    L'antica citta messapica del VI sec.a.C con i suoi
                    importanti resti e il Museo Diffuso è facilmente
                    raggiungibile a piedi in pochi minuti. “Culummi” è un
                    piccolo B&B a conduzione familiare in un immobile appena
                    ristrutturato e arredato, collocato in posizione strategica
                    per raggiungere sia la Città di Lecce che la costa Adriatica
                    e Jonica e che basa la propria offerta ricettiva su un forte
                    legame con la tradizione, la cultura e la identità del
                    Salento.
                  </p>
                </ScrollAnimation>
              )}
              <p className="mb-4">A partire dal nome: ”Culummi” appunto.</p>
              <p>
                <a
                  className="btn btn-primary text-white py-2 mr-3"
                  onClick={this.showMore}
                >
                  {/* Scopri di più */}
                  Per saperne di più
                </a>
                <span className="mr-3 font-family-serif">
                  <em>o</em>
                </span>
                <a
                  href="https://vimeo.com/channels/staffpicks/93951774"
                  data-fancybox
                  className="text-uppercase letter-spacing-1"
                >
                  Video
                </a>
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    )
  }
}

export default Welcome
