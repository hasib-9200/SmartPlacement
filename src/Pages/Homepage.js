import React from 'react'
import { Redirect } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
const Homepage = () => {
  var isSubmitted= localStorage.getItem("isSubmitted");
  var isTrueSet = false;
  isTrueSet = (isSubmitted === 'true');
    if(!isTrueSet){
        return <Redirect to="/login"/>;
    }
    const signOut = ()=>{
      window.location.href = '/login';
      localStorage.setItem("isSubmitted",false);
    }
  return (
    <div>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
      </svg>Smart Placement
    </h1>

    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/Homepage">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">Status</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">Requirements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">Records</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">Attachments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Homepage">Profile</a>
              </li>
              <Dropdown className="d-inline mx-2" >
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  Default Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                  <Dropdown.Item onClick={signOut} >Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </ul>
            <form className="d-flex" role="search" >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit" style={{color: 'white', border: '2px solid white'}}>Search</button>
            </form>
          </div>
        </div>
      </nav>
      
      <div className="container my-5" style={{textAlign: 'center', color: 'rgb(14, 189, 248)'}}>
        <h1>Student Placement Portal</h1>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Required Tasks</h5>
              <p className="card-text">Complete all of the tasks before the deadline.</p>
              <button type="button" className="btn btn-primary">
                To Do <span className="badge text-bg-secondary">2</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pending Notifications</h5>
              <p className="card-text">Review all of the pending notifications below.</p>
              <button type="button" className="btn btn-primary">
                Notifications <span className="badge text-bg-secondary">4</span>
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>   
  )
}

export default Homepage
