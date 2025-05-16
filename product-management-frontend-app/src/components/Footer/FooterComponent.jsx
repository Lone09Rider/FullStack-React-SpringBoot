import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className="bg-dark text-white text-center py-3 fixed-bottom">
        <div className="container">
          <span className="fw-bold">© {new Date().getFullYear()} Daily Needs Items Organized</span>
          <span className="d-block small">~By <i className="bi bi-heart-fill text-danger"></i> SRj</span>
        </div>
      </footer>
    )
  }
}