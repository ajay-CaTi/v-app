import React from "react";
import { Link } from "react-router-dom";

const VideoCards = ({ video }) => {
  // console.log(video);
  if (video === undefined) {
    return null;
  }
  const { snippet, statistics } = video;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <Link to={"/watch?v=" + video.id}>
      <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          width={thumbnails.medium.width}
          height={thumbnails.medium.height}
          alt={title}
        />
        <ul>
          <li>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
        </ul>
      </div>
    </Link>
  );
};

export const AddVideoCard = ({ info }) => {
  // console.log(info);
  return (
    <div className="p-1 m-1 border border-red-200">
      h1
      <VideoCards video={info} />
    </div>
  );
};

export default VideoCards;
