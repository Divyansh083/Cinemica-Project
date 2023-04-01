/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    //async
    const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
      // console.log(images);
    };
    requestNowPlayingMovies();
  },[]);

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // const images = [
  //   "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1664154026818-b49c159c91d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1664268531721-b3a29768467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  //   "https://images.unsplash.com/photo-1664263679485-c26eaf17559d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  // ];
  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-80 px-2 py-3">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
