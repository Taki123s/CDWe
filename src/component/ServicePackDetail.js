import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css'; // Import Bootstrap CSS



function ProductItem(props) {
    const [servicePack, setservicePack] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/servicePack')
            .then(response => {
                console.log('Response:', response.json);
                return response.json();
            })
            .then(data => {
                console.log('Data:', data);
                setservicePack(data);
            })
            .catch(error => console.error('Error:', error));
    }, []); //

    return (
        <div className="row">
            {servicePack.map(servicePack => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={servicePack.id}>
                    <div className="product__item">
                        <div className="product__item__text">
                            <h5><Link to="/" >{servicePack.service_type}</Link></h5>
                            <h5><Link to="/" >{servicePack.price} VND</Link></h5>
                            <h5><Link to="/" >BUY NOW</Link></h5>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductItem;
