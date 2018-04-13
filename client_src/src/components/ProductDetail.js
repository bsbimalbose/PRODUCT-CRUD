import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProductDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            details: ''
        };
    }

    deleteProduct(productId){
        axios.delete(`http://localhost:3000/api/products/${productId}`)
            .then(response =>{
                this.props.history.push('/');
            }).catch(err => console.log(err));
    }

    onDelete(){
        let productId = this.state.details.id;
        this.deleteProduct(productId);
    }

    componentWillMount(){
        this.getProductDetails()
    }

    getProductDetails(){
        axios.get(`http://localhost:3000/api/products/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    details : response.data
                })
            })
    }

    render(){

        return (
            <div className="product-details-wrap">
            <div className="card">
                <img className="card-img-top" src={this.state.details.url} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.state.details.title}</h5>
                    <p className="card-text">{this.state.details.description}</p>
                    <p className="card-text">Price: {this.state.details.price}</p>
                    <p className="card-text">Quantity: {this.state.details.quantity}</p>

                    <Link to={`/products/edit/${this.state.details.id}`} className="btn btn-primary">Edit</Link>
                    <button onClick={this.onDelete.bind(this)} className="ml-1 btn btn-danger" type="button">Delete</button>
                </div>
            </div>
            </div>
        )
    }

}

export default ProductDetail;