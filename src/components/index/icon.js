import React from "react"

export default (props) => (
  <React.Fragment>
    <div className={'col-lg-3 col-md-6 text-center'}>
      <div className="mt-5">
        <span className={'fa-4x text-primary mb-4' + props.logo} />
        <h3 className={'h4 mb-2'}>{props.name}</h3>
        <p className="text-muted mb-0">{props.muteText}</p>
      </div>
    </div>
  </React.Fragment>
)