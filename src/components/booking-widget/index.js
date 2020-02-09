import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const BookingWidget = () => {
  return (
    <div className="hotel-reservation--area mb-100">
      <div className="form-group mb-30">
        <label htmlFor="checkInDate">Date</label>
        <div className="input-daterange" id="datepicker">
          <div className="row no-gutters">
            <div className="col-6">
              <input
                type="text"
                className="input-small form-control"
                name="checkInDate"
                id="checkInDate"
                placeholder="Check In"
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="input-small form-control"
                name="checkOutDate"
                placeholder="Check Out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-group mb-30">
        <label htmlFor="guests">Guests</label>
        <div className="row">
          <div className="col-6">
            <select name="adults" id="guests" className="form-control">
              <option value="adults">Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
          <div className="col-6">
            <select name="children" id="children" className="form-control">
              <option value="children">Children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-group">
        {/* <button type="submit" className="btn roberto-btn w-100">
                      Check Available
                    </button> */}
        <Link
          to={'/contact'}
          className="btn btn-primary text-white my-3 py-3 px-5 font-weight-bold w-100"
        >
          Verifica disponibilità
        </Link>
      </div>
    </div>
  )
}

export default BookingWidget
