import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>Text Analyzer</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
      </ul>
      <div className={`form-check text-${props.mode === 'light'?'dark':'light'}`}>
       <input className="form-check-input" type="checkbox" onClick={props.toggle} value="" id="flexCheckDefault"/>
       <b>Select Dark Mode </b>
      </div>
    </div>
  </div>
</nav>
    </div>
  );
}
