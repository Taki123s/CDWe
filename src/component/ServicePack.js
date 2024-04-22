import React, {useState, useEffect} from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import './bootstrap.min.css'; // Import Bootstrap CSS
import './owl.carousel.min.css';
import Carousel from './Carousel';
import Topview from './Topview';

import '../css/ds/style.css'

function ServicePack() {
    return (
        <>
            <div className="inter-pack">
                <div className="content">
                    <div className="it-head">
                        <h3 className="it-sub">
                            Các gói cước tốc độ cao, tích hợp giải pháp Mesh wifi
                        </h3>
                    </div>
                    <div className="inter-pack__content">
                        <div className="lists-slider slider">
                            <ul className="owl-carousel col4 supernet owl-loaded owl-drag">
                                {/* Your package items go here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inter-pack inter-pack--plus">
                <div className="content">
                    <div className="it-head">
                        <h3 className="it-sub">
                            Gói cước tốc độ cao
                        </h3>
                    </div>
                    <div className="inter-pack__content">
                        <div className="lists-slider slider">
                            <ul className="owl-carousel col3 netplus owl-loaded owl-drag">
                                {/* Your package items go here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ServicePack;