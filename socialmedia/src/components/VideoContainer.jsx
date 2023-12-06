import React, { useEffect, useState } from "react";
import "../App.css";
import Videotile from "./VideoTile";
import { YOUTUBE_API } from "../utils/YoutubeApi";
const VideoContainer = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    if (movieData.length === 0) {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setMovieData(json.items);
      console.log(json.items);
    }
  };
  return (
    <div className="yt-scrollbar flex flex-wrap justify-center items-center p-3 h-[calc(100vh-48px)] overflow-y-scroll">
      {movieData.length === 0 ? "loading" : ""}
      {movieData.map((item) => (
        <Videotile info={item} key={item.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
