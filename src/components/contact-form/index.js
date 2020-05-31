import React from 'react'

const ContactForm = () => {
  return (
    <form action="#" method="post" className="bg-white p-md-5 p-4 mb-5 border">
      <div className="row">
        <div className="col-md-6 form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" className="form-control" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-12 form-group">
          <label htmlFor="message">Write Message</label>
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
        <div className="col-md-6 form-group">
          <input
            type="submit"
            value="Send Message"
            className="btn btn-primary text-white font-weight-bold"
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm
