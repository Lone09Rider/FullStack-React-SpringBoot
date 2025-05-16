import React, { Component } from 'react'
import ProductService from '../services/ProductService'

export default class UpdateProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      name: '',
      price: '',
      quantity: ''
    }
  }

  componentDidMount() {
    ProductService.findById(this.state.id).then(resp => {
      const { name, price, quantity } = resp.data
      this.setState({ name, price, quantity })
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  updateProduct = (e) => {
    e.preventDefault();
    const { name, price, quantity } = this.state;
    ProductService.updateProduct(this.state.id, {
        name,
        price,
        quantity
    })
        .then(() => this.props.history.push('/productsList'))
        .catch(err => {
        alert('Failed to update product!');
        console.error(err);
        });
    }

  render() {
    return (
      <div className="container">
        <h2>Update Product</h2>
        <form onSubmit={this.updateProduct}>
          <div className="form-group">
            <label>Product Name</label>
            <input name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input name="price" type="number" className="form-control" value={this.state.price} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Product Quantity</label>
            <input name="quantity" type="number" className="form-control" value={this.state.quantity} onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary mt-3" type="submit">Update</button>
        </form>
      </div>
    )
  }
}