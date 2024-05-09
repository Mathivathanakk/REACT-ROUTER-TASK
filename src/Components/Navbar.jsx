import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg py-2 ">
        <div className="container">
        <Link to="/"><h1 className='navbar-brand fw-bold'>IT COURSES</h1></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/all">ALL</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/fullstack">FULL STACK DEVELOPMENT</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/datascience">DATASCIENCE</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/cybersecurity">CYBERSECURITY</Link>
              </li>
              <li className="nav-item ms-0 ms-md-3">
              <Link to="/career">CAREER</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
            
        </>
    );
};

export default Navbar;