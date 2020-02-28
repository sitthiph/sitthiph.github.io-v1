import React from "react"

export default (props) => (
  <React.Fragment>
    <div className="col-lg-4 col-sm-6">
      <div className="portfolio-box">
        <img className="img-fluid" src={props.imgSrc} alt="Binder Thumbnails" />
        <div className="portfolio-box-caption">
          <div className="project-category text-white-50">{props.category}</div>
          <div className="project-name">{props.projectName}</div>
          <div className="project-category text-white-75 mt-5">
            <a href={props.deployedLink} target="_blank"
               className="text-white-75 mt-5">
              Deployed Link
            </a>
            |
            <a href={props.githubLink} target="_blank" className="text-white-75 mt-5">
              Github Page
            </a>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)