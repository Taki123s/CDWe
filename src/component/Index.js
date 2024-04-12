import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios for HTTP requests
import './bootstrap.min.css'; // Import Bootstrap CSS
import './owl.carousel.min.css';
import Carousel from './Carousel';

import '../css/ds/style.css'
import ProductItem from '../page/ProductItem';
function AnimePage() {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('isAtoZ');

    useEffect(() => {
        // Fetch movies based on filter
        fetchMovies(filter);
    }, [filter]);

    const fetchMovies = async (filter) => {
        try {
            const response = await axios.post('/anime-main/Index', { filter });
            setMovies(response.data.renderMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        
    <div id="ah_wrapper">       
             <section class="hero">
                <div class="container">

                        <div><Carousel/></div>
                </div>
             </section>    
     <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>Mới cập nhật</h4>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                </div>
              </div>
              <div className="row">
               <ProductItem></ProductItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
        
    );
}

export default AnimePage;
