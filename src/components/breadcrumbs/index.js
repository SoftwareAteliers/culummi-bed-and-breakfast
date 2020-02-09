import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

const Breadcrumbs = ({ data }) => (
  <ul className="custom-breadcrumbs mb-4">
    {data.map(function(breadcrumb, index) {
      return breadcrumb.url ? (
        <li key={index}>
          <Link to={breadcrumb.url}>{breadcrumb.name}</Link>
        </li>
      ) : (
        <li key={index}>{breadcrumb.name}</li>
      )
    })}
  </ul>
)

export default Breadcrumbs
