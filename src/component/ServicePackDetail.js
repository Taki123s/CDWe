import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css'; // Import Bootstrap CSS
import PayPalButton from './PayPal'; // Ensure correct import path
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

function ServiceDetail(props) {
    const [servicePacks, setServicePacks] = useState([]);
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        fetchServicePacks();
        decodeToken();
    }, []);

    const fetchServicePacks = () => {
        fetch('http://localhost:8080/servicePack')
            .then(response => response.json())
            .then(data => setServicePacks(data))
            .catch(error => console.error('Error:', error));
    };

    const decodeToken = () => {
        const token = Cookies.get("jwt_token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setLoggedUser(decodedToken);
        }
    };

    return (
        <div className="row">
            {servicePacks.map(servicePack => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={servicePack.id}>
                    <div className="product__item">
                        <div className="product__item__text">
                            <h3 style={{ color: 'whitesmoke' }}>{servicePack.service_type}</h3>
                            <h5 style={{ color: 'whitesmoke' }}>{servicePack.price} VND</h5>

                            {loggedUser && (
                                <PayPalButton
                                    amount={servicePack.price}
                                    userId={loggedUser.idUser}
                                    serviceId={servicePack.id}
                                />
                            )}

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceDetail;
