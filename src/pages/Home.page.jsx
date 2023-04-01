import React, { useState, useEffect } from "react";
import axios from "axios";

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

// import TempPoster from "../config/TempPoster.config";

const HomePage = () => {
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    //async
    const requestPoularMovies = async () => {
      const getpopularMovies = await axios.get("/movie/popular");
      setpopularMovies(getpopularMovies.data.results);
    };
    requestPoularMovies();
  }, []);

  useEffect(() => {
    //async
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    //async
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);

  return (
    <>
      <div className=" flex flex-col gap-10">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The Best Of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-800 py-12">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discover`y-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand New Releases Every Friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={topRatedMovies}
          title="Online Streaming Events "
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={upcomingMovies}
          title="Outdoor Event "
          isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
