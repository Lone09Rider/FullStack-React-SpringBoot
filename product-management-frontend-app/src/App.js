import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListProducts from './components/ListProducts';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>

          <HeaderComponent />
          <Switch>
            <div className='container'>
              <Route exact path="/" component={ListProducts} />
              <Route exact path="/productsList" component={ListProducts} />
              <Route exact path="/addProduct" component={AddProduct} />
              <Route exact path="/viewProduct/:id" component={Product} />
              <Route path="/updateProduct/:id" component={UpdateProduct} />
              {/* <ListProducts /> */}
            </div>
          </Switch>
          <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
