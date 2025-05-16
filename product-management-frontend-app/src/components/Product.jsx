import React, { Component } from 'react'
import ProductService from '../services/ProductService'

export default class Product extends Component {

    constructor(props) {
        super(props) 
        this.state = {
          id: this.props.match.params.id,
          product: {},
          isHovered: false
        }
    }

    componentDidMount() {
      ProductService.findById(this.state.id).then(resp => {
        this.setState({product: resp.data})
      })
    }

    handleMouseEnter = () => {
      this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
      this.setState({ isHovered: false });
    }

  render() {
    const cardStyle = {
      background: 'linear-gradient(135deg, #e0f7fa 80%, #b2ebf2 100%)',
      color: '#333',
      borderRadius: '1.5rem',
      minWidth: '350px',
      maxWidth: '400px',
      boxShadow: this.state.isHovered
        ? '0 12px 32px 0 rgba(0, 188, 212, 0.35)'
        : '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
      transition: 'box-shadow 0.3s ease'
    };

    return (
      <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '40vh' }}>
        <div
          className="card border-0"
          style={cardStyle}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="card-body">
            <div className="text-center mb-4">
              <div
                style={{
                  background: 'rgba(0,0,0,0.07)',
                  borderRadius: '50%',
                  width: '70px',
                  height: '70px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}
              >
                <i className="bi bi-box-seam" style={{ fontSize: '2.5rem', color: '#00bcd4' }}></i>
              </div>
              <h2 className="card-title mt-2 text-success" style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#00bcd4' }}>Product Details</h2>
            </div>
            <hr style={{ borderColor: '#00bcd4', opacity: 0.2 }} />
            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: '#00bcd4' }}>Product Id</label>
              <div className="ps-2">{this.state.product.id}</div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: '#00bcd4' }}>Product Name</label>
              <div className="ps-2">{this.state.product.name}</div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: '#00bcd4' }}>Product Price</label>
              <div className="ps-2">₹ {this.state.product.price}</div>
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold" style={{ color: '#00bcd4' }}>Product Quantity</label>
              <div className="ps-2">{this.state.product.quantity}</div>
            </div>
            <div className="text-center mt-4">
              <a href="/productsList" className="btn btn-outline-info fw-bold px-4 rounded-pill shadow-sm">
                Back to List
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}