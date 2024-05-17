import React from 'react';
import { AiOutlineMore } from "react-icons/ai";
import MovieFollowItem from './MovieFollowItem.js'; // Import MovieComment component
import '../css/follow.css';
function Follow({ listmovie }) {

    return (
        <section className='follow_page'>
            <br></br>
            <h2 className='title_movie_follow'>DANH SÁCH PHIM YÊU THÍCH</h2><br></br>
            <div className='element'>
                <div className='title_element'>
                    <span className='image_movie'>Hình</span>
                    <span className='title_movie'>Tên phim</span>
                    <span className='movie_time'>Thời lượng</span>
                    <span className='movie_viewer'>Lượt xem</span>
                    <span className='movie_icon'><AiOutlineMore /></span>
                </div>
                <div className='movie_element_list'>
                    <MovieFollowItem />
                    <MovieFollowItem />


                </div>
            </div>

        </section>
    );
}
export default Follow;