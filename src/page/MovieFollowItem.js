import React from 'react';
import { MdDelete } from "react-icons/md";

function MovieFollowItem() {
    return (
        <div className='movie' style={{marginTop:"1%"}}>
            <span className='image_movie'>

                <img className='' src={"https://s199.imacdn.com/vg/2023/10/17/9a62eae4444dbdd7_75403f84781aa48c_13008616974920488185710.jpg"} alt='image'>
                </img></span>
            <span className='title_movie'>Crayon Shin-chan Movie 31: Chounouryoku Daikessen - Tobe Tobe Temakizushi</span>
            <span className='movie_time'>4/17</span>
            <span className='movie_viewer'>3.3K</span>
            <span className='movie_icon'><MdDelete />Xóa
            </span>
            <br></br>
        </div>

    )
}
export default MovieFollowItem;