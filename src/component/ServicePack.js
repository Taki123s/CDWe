import React, {useState, useEffect} from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import './bootstrap.min.css'; // Import Bootstrap CSS
import './owl.carousel.min.css';
import Carousel from './Carousel';
import ServicePackItems from './ServicePackDetail';

import '../css/ds/style.css'
import ProductItem from "../page/ProductItem";

function ServicePack() {
    return (
        <>
            <div id="ah_wrapper">
                <section className="hero">
                    <div className="container">

                        <div><Carousel/></div>
                    </div>
                </section>
                <section className="product spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="trending__product">
                                    <div className="row">
                                        <div className="col-lg-8 col-md-8 col-sm-8">
                                            <div className="section-title">
                                                <h4>Các loại gói xem</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-4">
                                        </div>
                                    </div>
                                    <ServicePackItems/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>

    );
}

export default ServicePack;