import React from 'react'
import get from 'lodash/get'

const Address = ({ site }) => {
  return (
    <div className="col-md-10 ml-auto contact-info">
      <h2 className="mb-4">{get(site, 'name')}</h2>

      <h3 className="d-block">Address</h3>
      <p className="mb-4">
        <span>
          {get(site, 'address.street') + ' ' + get(site, 'address.number')}
        </span>
        <br />
        <span>{`${get(site, 'address.postalCode')} ${get(
          site,
          'address.city'
        )} (${get(site, 'address.province')})`}</span>
        <br />
        <span>{get(site, 'address.country')}</span>
      </p>

      <h3 className="d-block">Phone</h3>
      <p className="mb-4">
        <a href={`tel:${get(site, 'phone')}`}>
          <i className="fa fa-phone mr-3"></i>
          {get(site, 'phone')}
        </a>
      </p>

      <h3 className="d-block">Email</h3>
      <p className="mb-4">
        <a href={`mailto:${get(site, 'email')}`}>
          <i className="fa fa-envelope mr-3"></i>
          {get(site, 'email')}
        </a>
      </p>
    </div>
  )
}

export default Address
