import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Icon from "../components/index/icon"

const IndexPage = () => {

  const data = useStaticQuery(graphql`query {
      allContentJson {
          edges {
              node {
                  data {
                      name
                      logo
                      muteText
                  }
              }
          }
      }
  }`)
  console.log(data.allContentJson.edges[0].node.data);

  return (
      <React.Fragment>
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
              {data.allContentJson.edges[0].node.data.map((object) => {
                return(<Icon name={object.name} logo={object.logo} muteText={object.muteText} />)
              })}
            </div>
            <div className="row justify-content-center pt-5">
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="#portfolio">But what can you do with these
                skills?</a>
            </div>
          </div>
        </section>
      </React.Fragment>
  )
}

export default IndexPage
