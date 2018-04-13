import React, {Component} from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';

class Products extends Component {

    constructor(){
        super();

        this.state = {
            products: []
        };
    }

    componentWillMount(){
        this.getProducts()
    }

    getProducts(){
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                this.setState({
                    products : response.data
                })
            })
    }

    render(){
        const productItems = this.state.products.map((product) =>{
            return (
                <ProductItem key={product.id} product={product}/>
            )
        })
        return (
            <div className="product-list-wrap">
                {productItems}
            </div>
        )
    }

}

export default Products;