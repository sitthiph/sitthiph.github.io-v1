import React from "react"
import { Helmet } from "react-helmet/es/Helmet"
import {useStaticQuery, graphql} from "gatsby"
import "../vendor/fontawesome-free/css/all.min.css"
import "../vendor/font-mfizz/font-mfizz.css"
import "../vendor/webfortkit/stylesheet.css"
import "../vendor/magnific-popup/magnific-popup.css"
import "../style/style.css"

const Header = (props) => {

  const data = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              title
          }
      }
  }`);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
          <script src="https://code.iconify.design/1/1.0.3/iconify.min.js" />
              <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
                <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic' rel='stylesheet' type='text/css' />
      </Helmet>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Sam I.</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header;