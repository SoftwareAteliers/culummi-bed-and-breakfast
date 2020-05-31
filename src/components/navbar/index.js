import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
// import { Link } from "gatsby";
// import github from "img/github-icon.svg";
// import logo from "img/logo.svg";
import Fade from 'react-reveal/Fade'
import { siteMetadata } from '../../../gatsby-config'
import get from 'lodash/get'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveclassName: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the className in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveclassName: 'is-active',
            })
          : this.setState({
              navBarActiveclassName: '',
            })
      }
    )
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query NavbarQuery {
            allMarkdownRemark {
              docs: edges {
                doc: node {
                  frontmatter {
                    layout
                    title
                    path
                  }
                }
              }
            }
          }
        `}
        render={({ allMarkdownRemark }) => {
          const rooms = allMarkdownRemark.docs.filter(
            (x) => x.doc.frontmatter.layout === 'room'
          )

          return (
            // <Fade top>
            <header className="header_area">
              {/* <div className="top-nav">
                <div className="container">
                  <div className="col-md-3">
                    <div className="top-nav-text">
                      <p>Benvenuti a B&amp;B Culummi</p>
                    </div>
                  </div>
                  <div className="col-md-9 float-right">
                    <div className="top-nav-icon-blocks">
                      <div className="icon-block">
                        <p>
                          <Link to={'/how-to-reach-us'}>
                            <i className="fa fa-map-o"></i>
                            <span>Come trovarci</span>
                          </Link>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <Link to={'/contact'}>
                            <i className="fa fa-envelope-open-o"></i>
                            <span>Contattaci</span>
                          </Link>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a href={`tel:${get(siteMetadata, 'phone')}`}>
                            <i className="fa fa-phone"></i>
                            {get(siteMetadata, 'phone')}
                          </a>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a
                            href={get(siteMetadata, 'social.instagram')}
                            target="_blank"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a
                            href={get(siteMetadata, 'social.facebook')}
                            target="_blank"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a
                            href={get(siteMetadata, 'social.tripadvisor')}
                            target="_blank"
                          >
                            <i className="fa fa-tripadvisor"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="top_menu">
                <div className="container">
                  <div className="col-md-3">
                    <div className="top-nav-text text-primary">
                      <p>Benvenuti a B&amp;B Culummi</p>
                    </div>
                  </div>
                  <div className="col-md-9 float-right">
                    <div className="top-nav-icon-blocks">
                      <div className="icon-block">
                        <p>
                          <Link to={'/how-to-reach-us'}>
                            <i className="fa fa-map-o"></i>
                            <span>Come trovarci</span>
                          </Link>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <Link to={'/contact'}>
                            <i className="fa fa-envelope-open-o"></i>
                            <span>Contattaci</span>
                          </Link>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a href={`tel:${get(siteMetadata, 'phone')}`}>
                            <i className="fa fa-phone"></i>
                            {get(siteMetadata, 'phone')}
                          </a>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a
                            href={get(siteMetadata, 'social.instagram')}
                            target="_blank"
                          >
                            <i className="fa fa-instagram"></i>
                          </a>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a
                            href={get(siteMetadata, 'social.facebook')}
                            target="_blank"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </p>
                      </div>
                      <div className="icon-block">
                        <p>
                          <a
                            href={get(siteMetadata, 'social.tripadvisor')}
                            target="_blank"
                          >
                            <i className="fa fa-tripadvisor"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="float-left">
                        <p>
                          <a href={`tel:${get(siteMetadata, 'phone')}`}>
                            <span className="fa fa-phone mr-1" />
                            {get(siteMetadata, 'phone')}
                          </a>
                        </p>
                        <p>
                          <a href={`mailto:${get(siteMetadata, 'email')}`}>
                            <span className="fa fa-envelope mr-1" />
                            {get(siteMetadata, 'email')}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="float-right">
                        <ul className="right_side">
                          <li>
                            <a
                              href={get(siteMetadata, 'social.instagram')}
                              target="_blank"
                            >
                              <span className="fa fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={get(siteMetadata, 'social.facebook')}
                              target="_blank"
                            >
                              <span className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={get(siteMetadata, 'social.tripadvisor')}
                              target="_blank"
                            >
                              <span className="fa fa-tripadvisor" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="main_menu">
                <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light w-100">
                    <a className="navbar-brand logo_h" href="index.html">
                      <img src="images/logo.png" alt="" />
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse offset w-100"
                      id="navbarSupportedContent"
                    >
                      <div className="row w-100 mr-0">
                        <div className="col-lg-7 pr-0">
                          <ul className="nav navbar-nav center_nav pull-right">
                            <li className="nav-item active">
                              <a className="nav-link" href="/">
                                Home
                              </a>
                            </li>
                            <li className="nav-item submenu dropdown">
                              <Link
                                to={'/rooms'}
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Le Camere
                              </Link>
                              <ul className="dropdown-menu">
                                {rooms.map((room, i) => {
                                  return (
                                    <li className="nav-item" key={i}>
                                      <Link
                                        className="nav-link"
                                        to={room.doc.frontmatter.path}
                                      >
                                        {room.doc.frontmatter.title}
                                      </Link>
                                    </li>
                                  )
                                })}
                              </ul>
                            </li>
                            <li className="nav-item">
                              <Link to={'/contact'} className="nav-link">
                                Colazione
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to={'/experiences'} className="nav-link">
                                Esperienze
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to={'/contact'} className="nav-link">
                                Contatti
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* <div className="col-lg-5 pr-0">
                            <ul className="nav navbar-nav navbar-right right_nav pull-right">
                              <li className="nav-item">
                                <a href="#" className="icons">
                                  <i
                                    className="ti-search"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>

                              <li className="nav-item">
                                <a href="#" className="icons">
                                  <i className="ti-shopping-cart"></i>
                                </a>
                              </li>

                              <li className="nav-item">
                                <a href="#" className="icons">
                                  <i className="ti-user" aria-hidden="true"></i>
                                </a>
                              </li>

                              <li className="nav-item">
                                <a href="#" className="icons">
                                  <i
                                    className="ti-heart"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div> */}
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </header>
            // </Fade>
          )
        }}
      />
    )
  }
}

export default Navbar
