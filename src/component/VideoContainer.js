import React, { useEffect, useState } from "react";
import { YOUTUBEAPI } from "./utils/constant";
import VideoCards, { AddVideoCard } from "./VideoCards";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBEAPI);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {<AddVideoCard info={videos[0]} />}
      {videos.map((vid) => {
        return <VideoCards video={vid} key={vid.id} />;
      })}
    </div>
  );
};

export default VideoContainer;
