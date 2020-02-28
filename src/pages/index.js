import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Header from "../components/index/header"
import Icon from "../components/index/icon"
import Portfolio from "../components/index/portfolio"
import Footer from "../components/index/footer"
import "../style/style.css"

const IndexPage = () => {

  const query = useStaticQuery(graphql`
      query {
      allIconJson {
          edges {
              node {
                  iconData {
                      logo
                      muteText
                      name
                  }
              }
          }
      }
          allProjectJson {
              nodes {
                  projectData {
                      category
                      deployedLink
                      githubLink
                      imgSrc
                      projectName
                  }
              }
          }
  }`);

  return (
      <React.Fragment>
        <Header />
        <section className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Hey there! I'm Sam <br/> A Full-Stack Web
                  Developer</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">What about it?</a>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <img src="./img/personal-icon.jpg" alt="A photo of me" className="img-thumbnail" />
              </div>
              <div className="col-lg-8 text-center p-5">
                <h2 className="text-white mt-0">A little bit about me...</h2>
                <hr className="divider light my-4" />
                  <p className="text-white-50 mb-4">I am a certified Full-Stack Web Developer from the Harvard
                    University
                    Continuing Education Program. Passionate about problem-solving and planning complex software
                    application solutions. Excited to collaborate in a team to produce a high-quality application.
                  </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <a className="btn btn-light btn-xl js-scroll-trigger mt-lg-5" href="#services">So, how much do you
                know?</a>
            </div>
          </div>
        </section>
        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Technical Skills</h2>
            <hr className="divider my-4"/>
            <p className="text-muted text-center mb-4">I believe that one of the most important skills as a developer is
              the
              skill to continuously learn. I've been coding since 2016 and have never stopped coding or learning new
              technology/framework.
            </p>
            <div className="row">
              {query.allIconJson.edges[0].node.iconData.map((object) => {
                return(<Icon name={object.name} logo={object.logo} muteText={object.muteText} />)
              })}
            </div>
            <div className="row justify-content-center pt-5">
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#portfolio">But what can you do with these
                skills?</a>
            </div>
          </div>
        </section>
        <section id="portfolio" className="page-section bg-primary pb-0">
          <div className="container-fluid p-0">
            <div className="row justify-content-center pb-5">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Projects</h2>
                <hr className="divider light my-4" />
                  <p className="text-white-50 mb-4">Throughout my coding journey to becoming a better programmer, I
                    realized
                    that the best way to learn something is to implement it, use it, and make it yours.<br/>This is where
                      my projects come in. Creating projects has always been my favorite part of programming.
                      <br/>Like Seriously, why learn something if you're not going to use it, right?
                  </p>
              </div>
            </div>
            <div className="row no-gutters">
              {query.allProjectJson.nodes[0].projectData.map((object) => {
                return (<Portfolio projectName={object.projectName} category={object.category}
                deployedLink={object.deployedLink} githubLink={object.githubLink} imgSrc={object.imgSrc}/>)
              })}
            </div>
          </div>
        </section>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Why Don't We Get In Touch?</h2>
                <hr className="divider my-4" />
                  <p className="text-muted mb-5">Don't be shy! Shoot me an email or connect with me on LinkedIn and I'll
                    get back to you as soon as possible :)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                <a className="d-block" href="mailto:sam.itthiphinyo@gmail.com">sam.itthiphinyo@gmail.com</a>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fab fa-github-square fa-3x mb-3 text-muted" />
                <div><a href="https://github.com/sitthiph" target="_blank">@sitthiph</a></div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fab fa-linkedin fa-3x mb-3 text-muted" />
                <div><a href="https://www.linkedin.com/in/sam-itthiphinyo/" target="_blank">@Sam_Itthiphinyo</a></div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
  )
}

export default IndexPage
