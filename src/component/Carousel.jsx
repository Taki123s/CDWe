import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  {
    url:
      "http://localhost:8080/imgs/1.jpg"
  },
  {
    url:
      "http://localhost:8080/imgs/1.jpg"
  },
  //Second image url
  {
    url:
      "http://localhost:8080/imgs/1.jpg"
  },
  //Third image url
  {
    url:
      "http://localhost:8080/imgs/1.jpg"
  },

  //Fourth image url

  {
    url:
      "http://localhost:8080/imgs/1.jpg"
  }
];

const Slider = () => {
  return (
    <div className="parent">
           <style>
        {`
        .slider {
          margin: 0 10px; /* Giảm margin */
          overflow: hidden;
          padding: 1rem 0; /* Giảm padding */
        }

        .slider img {
          width: 100%;
          border-radius: 10px;
          height: auto; /* Chiều cao tự động */
        }

        .react-multi-carousel-list {
          padding: 0rem 0 1rem 0; /* Giảm padding */
        }

        .custom-dot-list-style button {
          border: none;
          background: rgb(255, 68, 68);
        }

        .react-multi-carousel-dot.react-multi-carousel-dot--active button {
          background: rgb(255, 68, 68) !important;
        }
        `}
      </style>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
