import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class HeaderComponent extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-5" style={{ marginBottom: '100px' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3" href="/productsList">
            <i className="bi bi-box-seam me-2"></i>
            Product Management
          </a>
          <div className="d-flex">
            <span className="navbar-text text-white">
              Manage your products efficiently
            </span>
          </div>
        </div>
      </nav>
    )
  }
}