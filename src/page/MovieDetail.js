import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams();
    console.log(id)

    return(
        <div>
            <h1>Tôi là trang chi tiết phim {id}</h1>
        </div>
    )
}
export default MovieDetail