import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

import logo from 'img/logo.svg'
import facebook from 'img/social/facebook.svg'
import instagram from 'img/social/instagram.svg'
import twitter from 'img/social/twitter.svg'
import vimeo from 'img/social/vimeo.svg'

// TODO: find correct way how to use scripts
// import "img/social/vimeo.svg";

// import "../js/jquery-3.3.1.min.js";
// import "../js/jquery-migrate-3.0.1.min.js";
// import "../js/popper.min.js";
// import "../js/bootstrap.min.js";
// import "../js/owl.carousel.min.js";
// import "../js/jquery.stellar.min.js";
// import "../js/jquery.fancybox.min.js";

// import "../js/aos.js";

// import "../js/bootstrap-datepicker.js";
// import "../js/jquery.timepicker.min.js";

// import "../js/main.js";

const Footer = ({ site }) => (
  // <footer className="footer Copyright ">
  <footer className="section footer-section">
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-3 mb-5">
          <ul className="list-unstyled link">
            <li>
              <Link to={'/services'}>About Us</Link>
            </li>
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <Link to={'/rooms'}>Rooms</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-5">
          <ul className="list-unstyled link">
            <li>
              <Link to={'/rooms'}>The Rooms &amp; Suites</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
            <li>
              <Link to={'/services'}>Services</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-5 pr-md-5 contact-info">
          <p>
            <span className="d-block">
              <span className="ion-ios-location h5 mr-3 text-primary" />
              Address:
            </span>
            <span>
              {get(site, 'address.street')} {get(site, 'address.number')}
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
            <span className="d-block">
              <span className="ion-ios-telephone h5 mr-3 text-primary" />
              Phone:
            </span>
            <span>
              <a href={`tel:${get(site, 'phone')}`}>{get(site, 'phone')}</a>
            </span>
          </p>
          <p>
            <span className="d-block">
              <span className="ion-ios-email h5 mr-3 text-primary" />
              Email:
            </span>
            <span>
              <a href={`mailto:${get(site, 'email')}`}>{get(site, 'email')}</a>
            </span>
          </p>
        </div>
        <div className="col-md-3 mb-5">
          <p>Sign up for our newsletter</p>
          <form action="#" className="footer-newsletter">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email..."
              />
              <button type="submit" className="btn">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row pt-5">
        <p className="col-md-6 text-left">
          {get(site, 'author')}&nbsp;&copy;&nbsp;2020&nbsp;|&nbsp;
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </p>

        <p className="col-md-6 text-right social">
          <a href={get(site, 'social.instagram')} target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href={get(site, 'social.facebook')} target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href={get(site, 'social.tripadvisor')} target="_blank">
            <i className="fa fa-tripadvisor"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
