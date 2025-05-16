import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductService from '../services/ProductService';

class ListProducts extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: []
        }

        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount(){
    ProductService.getProducts()
      .then(response => {
        // console.log(response.data);'
        this.setState({products: response.data})
      })
    }

    addProduct(){
      this.props.history.push("/addProduct");
    }

    viewProduct(id) {
      this.props.history.push(`/viewProduct/${id}`);
    }

    deleteProduct(id) {
      ProductService.deleteProduct(id)
        .then(() => {
          // Remove the deleted product from state to update UI
          this.setState({
            products: this.state.products.filter(product => product.id !== id)
          });
        })
        .catch(err => {
          alert('Failed to delete product!');
          console.error(err);
        });
    }

    render() {
      return (
        <div>
          <h2 className='text-center'>List of Product Page</h2>
          <table className="table">
            <thead className="thead-dark table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Price</th>
                <th scope="col">Product Quantity</th>
                <th scope="col">👀|✏️|🗑️🧹</th>
              </tr>
            </thead>
            <tbody className="table-light">
                {
                  this.state.products.map((product, index) => (
                    <tr key={product.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <button
                          className='btn btn-success'
                          onClick={() => this.viewProduct(product.id)}
                        >
                          View
                        </button>
                        <button className="btn btn-warning m-1" onClick={() => this.props.history.push(`/updateProduct/${product.id}`)}>
                          Edit
                        </button>
                        <button className="btn btn-danger m-1" onClick={() => this.deleteProduct(product.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
          </table>
          <button className='btn btn-primary' onClick={this.addProduct}>Add a new Product</button>
        </div>
      )
    }
}

export default ListProducts