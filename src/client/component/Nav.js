import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav (){
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand" href="#">LOGO</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/shops">Shops</a>
          <a className="nav-item nav-link" href="/about">About</a>
          <a className="nav-item nav-link contact" href="/contact">Contact</a>
          <a className="nav-item nav-link" href="/login">Login</a>
          <a className="nav-item nav-link" href="/signup">Signup</a>
        </div>
      </div>
    </nav>
    )
}