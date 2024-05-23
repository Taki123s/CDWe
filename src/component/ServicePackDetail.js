import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.min.css'; // Import Bootstrap CSS
import PayPalButton from './PayPal';
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";
function ServiceDetail(props) {
    const [servicePacks, setServicePacks] = useState([]);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [genreList, setGenreList] = useState([]);

    const [loggedUser, setLoggedUser] = useState(null);
    const [activeTab, setActiveTab] = useState("login");
    const [token, setToken] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [regiserUser,setRegisterUser] = useState(null)
    useEffect(() => {
        fetchServicePacks();
        // eslint-disable-next-line no-unused-expressions
        decodeToken
    }, []);

    const fetchServicePacks = () => {
        fetch('http://localhost:8080/servicePack')
            .then(response => response.json())
            .then(data => setServicePacks(data),

            )
            .catch(error => console.error('Error:', error));
    };
    const decodeToken = () => {
        const token = Cookies.get("jwt_token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setToken(token);
            setLoggedUser(decodedToken);
        }
    };
    return (
        <div className="row">
            {servicePacks.map(servicePack => (
                <div className="col-lg-4 col-md-6 col-sm-6" key={servicePack.id}>
                    <div className="product__item">
                        <div className="product__item__text">
                            <h5><Link to="/" >{servicePack.service_type}</Link></h5>
                            <h5><Link to="/" >{servicePack.price} VND</Link></h5>
                            <PayPalButton amount={servicePack.price} userId={loggedUser.idUser} key={servicePack.id} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ServiceDetail;
