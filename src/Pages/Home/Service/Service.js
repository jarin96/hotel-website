import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();
    return (
        <div className='service'>
            <img className='image' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigate('/shipment')}>Book: {name}</button>
        </div>
    );
};

export default Service;