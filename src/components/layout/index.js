import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/navi'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import { siteMetadata } from '../../../gatsby-config'

// ----------------- original template to remove
// import 'modern-normalize/modern-normalize.css'
// import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
// ----------------- original template to remove

// ----------------- template colorlib
// import './all.sass'
// import 'css/bootstrap.min.css'
// import 'css/animate.css'
// import 'css/flaticon.css'
// import 'css/owl.carousel.min.css'
// import 'css/aos.css'
import 'css/bootstrap-datepicker.css'
import 'css/jquery.timepicker.css'
import 'css/fancybox.min.css'
import 'fonts/ionicons/css/ionicons.min.css'
// import 'fonts/fontawesome/css/font-awesome.min.css'
import 'scss/style.scss'
import 'css/responsive.css'
// ----------------- template colorlib

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {/* <Navi title={siteMetadata.title} {...this.props} /> */}
        <Navbar />
        {children}
        {/* <Footer title={siteMetadata.title} author={siteMetadata.author} /> */}
        <Footer site={siteMetadata} />
      </div>
    )
  }
}

export default Layout
