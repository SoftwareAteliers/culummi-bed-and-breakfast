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
      guestCount: '',
      childrenCount: '',
      focusedInput: null,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.startDate} ${this.state.endDate}!`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="hotel-reservation--area mb-100">
          <div className="form-group mb-30">
            <label htmlFor="checkInDate">Data</label>
            <div className="input-daterange" id="datepicker">
              <div className="row no-gutters">
                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  startDateId="start_date_id" // PropTypes.string.isRequired,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  endDateId="end_date_id" // PropTypes.string.isRequired,
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  } // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput =>
                    this.setState({ focusedInput })
                  } // PropTypes.func.isRequired,
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
            <label htmlFor="guests">Ospiti</label>
            <div className="row">
              <div className="col-6">
                <select
                  name="adults"
                  id="guests"
                  className="form-control"
                  // onChange={this.onGuestCountChange}
                  onChange={e => this.setState({ guestCount: e.target.value })}
                  value={this.state.guestCount}
                >
                  <option value="">Adulti</option>
                  {[...Array(11)].map((e, i) => {
                    return (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="col-6">
                <select
                  name="children"
                  id="children"
                  className="form-control"
                  type="number"
                  onChange={e =>
                    this.setState({ childrenCount: e.target.value })
                  }
                  // onChange={this.onChildrenCountChange}
                  value={this.state.childrenCount}
                >
                  <option value="">Bambini</option>
                  {[...Array(10)].map((e, i) => {
                    return (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary text-white my-3 py-3 px-5 font-weight-bold w-100"
            >
              Verifica disponibilità
            </button>
            {/* <Link
              to={'/contact'}
              className="btn btn-primary text-white my-3 py-3 px-5 font-weight-bold w-100"
            >
              Verifica disponibilità
            </Link> */}
          </div>
        </div>
      </form>
    )
  }
}

export default BookingWidget
