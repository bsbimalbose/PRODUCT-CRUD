import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Products from './Products';
import About from './About';
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const Main = () =>(
    <main>
        <Switch>
            <Route exact path='/' component={Products}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/products/add' component={AddProduct}></Route>
            <Route exact path='/products/:id' component={ProductDetail}></Route>
            <Route exact path='/products/edit/:id' component={EditProduct}></Route>
        </Switch>
    </main>
)

export default Main;