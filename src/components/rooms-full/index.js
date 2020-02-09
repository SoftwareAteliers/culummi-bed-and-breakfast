import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Room from 'components/room-full'
import testImage from 'img/rooms/room_1.jpg'
import testImage2 from 'img/rooms/room_2.jpg'

const RoomsFull = ({ rooms }) => (
  <section className="section bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-md-7">
          <h2 className="heading" data-aos="fade">
            Great Offers
          </h2>
          <p data-aos="fade">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      {rooms.map((room, i) => (
        <Room room={room} leftToRight={i % 2} key={i} />
      ))}
    </div>
  </section>
)

export default RoomsFull
