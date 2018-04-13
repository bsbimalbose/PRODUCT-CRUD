import React from 'react';
import {Link} from 'react-router-dom';

const Productitem = (props) =>  (
    <div className="card">
        <img className="card-img-top" src={props.product.url} alt="Card cap" />
        <div className="card-body">
            <h5 className="card-title">{props.product.title}</h5>
            <p className="card-text">{props.product.description}</p>
            <Link to={`/products/${props.product.id}`} className="btn btn-primary">Details</Link>
        </div>
    </div>
);


export default Productitem;