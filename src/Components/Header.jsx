import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="headerouter">

        <header className="header">
          <nav className="navbar container">
            <Link className="logo" href="#home">
            V<span>K</span></Link>
            <button className="menu-button" type="button" aria-label="Open navigation menu">☰</button>
            <div className="nav-menu">
              <Link to="/Home" className="nav-link active" href="#home" data-target="home">Home</Link>
              <Link to="/About" className="nav-link" href="#about" data-target="about">About</Link>
              <Link to="/Skills" className="nav-link" href="#skills" data-target="skills">Skills</Link>
              <Link to="/Contact" className="nav-link" href="#contact" data-target="contact">Contact</Link>
            </div>
            <Link className="button primary-button hire-button" href="#contact">Hire Me</Link>
          </nav>
        </header>
      </div>

    </>
  )
}

export default Header
