import React from 'react'
import { DateRangePicker } from 'react-dates'
import queryString from 'query-string'
import * as moment from 'moment'

class ReservationForm extends React.Component {
  constructor(props) {
    super(props)

    const loc = { location }
    const queryParams = queryString.parse(loc.location.search)

    const start = moment(queryParams.startDate, 'YYYY-MM-DD')
    const end = moment(queryParams.endDate, 'YYYY-MM-DD')

    this.state = {
      startDate: start.isValid() ? start : null,
      endDate: end.isValid() ? end : null,
      maxGuestCount: 10,
      guestCount: queryParams.guests || '',
      maxChildrenCount: 9,
      childrenCount: queryParams.children || '',
    }
  }

  renderSelectItems(min, max) {
    const selectItems = []
    for (var i = min; i <= max; i++) {
      selectItems.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
    return selectItems
  }

  render() {
    return (
      <form
        action="#"
        method="post"
        className="bg-white p-md-5 p-4 mb-5 border"
      >
        <div className="row">
          <div className="col-md-6 form-group">
            <label className="text-black font-weight-bold" htmlFor="name">
              Nome
            </label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="col-md-6 form-group">
            <label className="text-black font-weight-bold" htmlFor="phone">
              Telefono
            </label>
            <input type="text" id="phone" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 form-group">
            <label className="text-black font-weight-bold" htmlFor="email">
              Email
            </label>
            <input type="email" id="email" className="form-control" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 form-group">
            <label className="text-black font-weight-bold">Data</label>
            <div className="field-icon-wrap">
              <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) =>
                  this.setState({ startDate, endDate })
                } // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={(focusedInput) =>
                  this.setState({ focusedInput })
                } // PropTypes.func.isRequired,
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 form-group">
            <label htmlFor="adults" className="font-weight-bold text-black">
              Adulti
            </label>
            <div className="field-icon-wrap">
              <div className="icon">
                <span className="ion-ios-arrow-down"></span>
              </div>
              <select
                name="adults"
                id="guests"
                className="form-control"
                // onChange={this.onGuestCountChange}
                onChange={(e) => this.setState({ guestCount: e.target.value })}
                value={this.state.guestCount}
              >
                <option value="">Adulti</option>
                {this.renderSelectItems(0, 10)}
              </select>
              {/* 
              <select name="" id="adults" className="form-control">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4+</option>
              </select> */}
            </div>
          </div>
          <div className="col-md-6 form-group">
            <label htmlFor="children" className="font-weight-bold text-black">
              Bambini
            </label>
            <div className="field-icon-wrap">
              <div className="icon">
                <span className="ion-ios-arrow-down"></span>
              </div>
              <select
                name="children"
                id="children"
                className="form-control"
                type="number"
                onChange={(e) =>
                  this.setState({ childrenCount: e.target.value })
                }
                // onChange={this.onChildrenCountChange}
                value={this.state.childrenCount}
              >
                <option value="">Bambini</option>
                {this.renderSelectItems(0, 9)}
              </select>
              {/* <select name="" id="children" className="form-control">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4+</option>
              </select> */}
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-12 form-group">
            <label className="text-black font-weight-bold" htmlFor="message">
              Note
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              cols="30"
              rows="8"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-12 form-group text-center">
            <input
              type="submit"
              value="Invia"
              className="btn btn-primary text-white py-3 px-5 font-weight-bold"
            />
          </div>
        </div>
      </form>
    )
  }
}

export default ReservationForm
