import React from "react"

const Footer = () => {

const year = new Date().getFullYear();

  return (<React.Fragment>
    <footer className="bg-light py-5">
      <div className="container">
        <div className="small text-center text-muted">Copyright &copy; {year} - Samanan Itthiphinyo
          <br />
          UI/UX inspired by Start Bootstrap</div>
      </div>
    </footer>
  </React.Fragment>)}

export default Footer