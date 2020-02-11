import React, { Component } from 'react'
import { Link } from 'gatsby'
import './style.scss'
import { DateRangePicker } from 'react-dates'

class BookingWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    }
  }

  render() {
    return (
      <div className="hotel-reservation--area mb-100">
        <div className="form-group mb-30">
          <label htmlFor="checkInDate">Date</label>
          <div className="input-daterange" id="datepicker">
            <div className="row no-gutters">
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              />
              {/* <div className="col-6">
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
            </div> */}
            </div>
          </div>
        </div>
        <div className="form-group mb-30">
          <label htmlFor="guests">Guests</label>
          <div className="row">
            <div className="col-6">
              <select name="adults" id="guests" className="form-control">
                <option value="adults">Adults</option>
                <option value="0">1</option>
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
                <option value="0">1</option>
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
}

export default BookingWidget
