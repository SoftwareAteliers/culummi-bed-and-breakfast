import React from 'react'
import get from 'lodash/get'

const Address = ({ site }) => {
  return (
    <div className="col-md-10 ml-auto contact-info">
      <h2 className="mb-4">{get(site, 'name')}</h2>
      {/* <p>
        <span className="mb-5">{get(site, 'name')}</span>
      </p> */}
      <p>
        <h3 className="d-block">
          {/* <span class="ion-ios-location h5 mr-3 text-primary"></span> */}
          Address
        </h3>

        {/* <span className="d-block">Address:</span> */}
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
      <p>
        <h3 className="d-block">
          {/* <span class="ion-ios-telephone h5 mr-3 text-primary"></span> */}
          Phone
        </h3>

        {/* <span className="d-block">Phone: </span> */}
        <a href={`tel:${get(site, 'phone')}`}>
          <span className="fa fa-phone mr-3" />
          {get(site, 'phone')}
        </a>
        {/* <span>{get(site, 'phone')}</span> */}
      </p>
      <p>
        <h3 className="d-block">
          {/* <span class="ion-ios-email h5 mr-3 text-primary"></span> */}
          Email
        </h3>

        {/* <span className="d-block">Email: </span> */}
        {/* {get(site, 'email')} */}
        <a href={`mailto:${get(site, 'email')}`}>
          <span className="fa fa-envelope mr-3" />
          {get(site, 'email')}
        </a>
      </p>
    </div>
  )
}

export default Address
