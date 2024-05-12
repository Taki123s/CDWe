import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css'; // Import Bootstrap CSS
import PayPalButton from './PayPal';

function ServiceDetail(props) {
    const [servicePacks, setServicePacks] = useState([]);
    const userId = 1;

    useEffect(() => {
        fetchServicePacks();
    }, []);

    const fetchServicePacks = () => {
        fetch('http://localhost:8080/servicePack')
            .then(response => response.json())
            .then(data => setServicePacks(data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="row">
            {servicePacks.map(servicePack => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={servicePack.id}>
                    <div className="product__item">
                        <div className="product__item__text">
                            <h5><Link to="/" >{servicePack.service_type}</Link></h5>
                            <h5><Link to="/" >{servicePack.price} VND</Link></h5>
                            <PayPalButton amount={servicePack.price} userId={userId} key={servicePack.id} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceDetail;
