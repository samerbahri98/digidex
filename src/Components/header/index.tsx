import React from 'react'

export default function Header() {
    return (
<nav className="nav">
      <div className="nav-left">
        <a className="nav-item">
        <h1 className="title">DigiDex</h1>
        </a>
      </div>

      <div className="nav-center">
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-github"></i>
          </span>
        </a>
        <a className="nav-item">
          <span className="icon">
            <i className="fa fa-twitter"></i>
          </span>
        </a>
      </div>
      <span className="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div className="nav-right nav-menu">
        <a className="nav-item">
          Home
        </a>
        <a className="nav-item">
          Documentation
        </a>
        <a className="nav-item">
          Blog
        </a>

        <span className="nav-item">
          <a className="button">
            <span className="icon">
              <i className="fa fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </a>
          <a className="button is-primary">
            <span className="icon">
              <i className="fa fa-download"></i>
            </span>
            <span>Download</span>
          </a>
        </span>
      </div>
    </nav>
    )
}
