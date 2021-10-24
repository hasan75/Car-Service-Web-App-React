import React from 'react';
import './Service.css'

const Service = ({service}) => {
    // const {service} = props;
     const {name, price, description, img} = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" srcset="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <button className="btn btn-warning">Book {name.toLowerCase()}</button>
        </div>
    );
};

export default Service;