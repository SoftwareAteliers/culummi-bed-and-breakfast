import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Room from 'components/room'

const Rooms = ({ rooms }) => (
  <section className="section bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-md-7">
          <ScrollAnimation animateOnce animateIn="fadeInUp" duration={0.5}>
            <h2 className="heading">Le Camere</h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeInUp"
            delay={100}
            duration={0.5}
          >
            {/* <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p> */}
          </ScrollAnimation>
        </div>
      </div>
      <div className="row">
        {rooms.map((room, i) => (
          <Room room={room} key={i} />
        ))}
      </div>
    </div>
  </section>
)

export default Rooms
