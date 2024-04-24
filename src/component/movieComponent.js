import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import movie1 from '../storage/movie1.mp4';

const videoSrc = {
  type: 'video',
  sources: [
    {
      src: movie1, 
    },
  ],
};

const MovieComponent = () => {
  return (
    <>
    <div id='player'>
      <Plyr source={videoSrc} />
      </div>
    </>
  );
};

export default MovieComponent;
