import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddProduct extends Component {

    addProduct(newProduct){
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/products',
            data: newProduct
        }).then(response =>{
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const newProduct = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            url: this.refs.url.value,
            price: this.refs.price.value,
            quantity: this.refs.quantity.value
        }
        this.addProduct(newProduct);
    }

    render(){
        return (
           
            <div className="mt-5">
            <h1 className="ml-5">Add Product</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input type="text" ref="title" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <input type="text" ref="description" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Image Url</label>
                    <div className="col-sm-10">
                    <input type="text" ref="url" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                    <input type="number" ref="price" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Quantity</label>
                    <div className="col-sm-10">
                    <input type="number" ref="quantity" required className="form-control" />
                    </div>
                </div>

                <input className="btn btn-primary float-right" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default AddProduct;