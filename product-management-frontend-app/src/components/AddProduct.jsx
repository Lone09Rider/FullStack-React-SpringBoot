import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class AddProduct extends Component {
    constructor(props){
        super(props)
        this.state= {
            // id:'',s
            name:'',
            price:'',
            quantity:''
        }

        // this.changeIdHandler = this.changeIdHandler.bind(this)
        this.changeNameHandler = this.changeNameHandler.bind(this)
        this.changePriceHandler = this.changePriceHandler.bind(this)
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this)
        this.save = this.save.bind(this)
    }

    // changeIdHandler = (event) => {
    //     this.setState({id: event.target.value})
    // }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }

    changePriceHandler = (event) => {
        this.setState({price: event.target.value})
    }

    changeQuantityHandler = (event) => {
        this.setState({quantity: event.target.value})
    }

    save = (e) => {
        e.preventDefault();
        let product = {
            // id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
        }

        console.log(product);

        ProductService.insertProduct(product);

        this.props.history.push("/");
        
    }

  render() {
    return (
      <div className='container'>

        <h1>Add Product Page</h1>
        <div className='row'>
            <div className='text-center'>
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                {/* <label for="id">Product Id</label>
                                <input type="number" className="form-control" id="id" placeholder="Enter Product Id" value={this.state.id} onChange={this.changeIdHandler}/> */}
                                
                                <label for="name">Product Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Product Name" value={this.state.name} onChange={this.changeNameHandler}/>

                                <label for="price">Product Price</label>
                                <input type="number" className="form-control" id="price" placeholder="Enter Product Price" value={this.state.price} onChange={this.changePriceHandler}/>

                                <label for="quantity">Product Quantity</label>
                                <input type="number" className="form-control" id="quantity" placeholder="Enter Product Quantity" value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                            </div>
                            <button class="btn btn-success mt-4" onClick={this.save}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

      </div>
    )
  }
}

export default AddProduct