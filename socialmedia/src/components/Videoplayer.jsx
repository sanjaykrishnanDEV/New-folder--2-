import React, { useEffect } from "react";
import { useParams } from "react-router";

const Videoplayer = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <div className="h-3/4 ">
        <iframe
          className=" h-full w-screen "
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" font-extrabold text-8xl text-black">
        
      </div>
    </div>
  );
};

export default Videoplayer;
