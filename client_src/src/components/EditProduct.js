import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            url: '',
            price: '',
            quantity: ''
        }
    }

    componentWillMount(){
        this.getProductDetails()
    }

    getProductDetails(){
        axios.get(`http://localhost:3000/api/products/${this.props.match.params.id}`)
            .then(response => {
               this.setState({
                id: response.data.id,
                title: response.data.title,
                description: response.data.description,
                url: response.data.url,
                price: response.data.price,
                quantity: response.data.quantity
               });
            })
    }

    editProduct(newProduct){
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/products/${this.state.id}`,
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
        this.editProduct(newProduct);
    }
    
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : [value]
        });
    }

    render(){
        return (
           
            <div className="mt-5">
            <h1 className="ml-5">Edit Product</h1>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input value={this.state.title} onChange={this.handleInputChange.bind(this)} type="text" ref="title" name="title" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                    <input value={this.state.description} onChange={this.handleInputChange.bind(this)} type="text" name="description" ref="description" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Image Url</label>
                    <div className="col-sm-10">
                    <input value={this.state.url} onChange={this.handleInputChange.bind(this)} type="text" name="url" ref="url" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                    <input value={this.state.price} onChange={this.handleInputChange.bind(this)} type="number" name="price" ref="price" required className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Quantity</label>
                    <div className="col-sm-10">
                    <input value={this.state.quantity} onChange={this.handleInputChange.bind(this)} type="number" name="quantity" ref="quantity" required className="form-control" />
                    </div>
                </div>

                <input className="btn btn-primary float-right" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default EditProduct;