import React from 'react'
import Room from 'components/room-overview-single'

const RoomsFull = ({ rooms }) => (
  <section className="section bg-light">
    <div className="container">
      {/* <div className="row justify-content-center text-center mb-5">
        <div className="col-md-7">
          <h2 className="heading" data-aos="fade">
            Le Camere
          </h2>
          <p data-aos="fade">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div> */}
      {rooms.map((room, i) => (
        <Room room={room} leftToRight={i % 2} key={i} />
      ))}
    </div>
  </section>
)

export default RoomsFull
