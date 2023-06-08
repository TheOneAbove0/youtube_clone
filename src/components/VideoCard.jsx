import React from "react";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../components/utils/constants";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

export default function VideoCard({
  video:{id:{
    videoId
  }, snippet}
}) {
  // console.log(video);
  console.log(videoId, snippet);
  return (
    <div className=" flex flex-col w-[320px] ">
      <div className=" h-[180px] ">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            className=" w-[358px] h-[300px] p-0 m-0 "
          />
        </Link>
      </div>
      <div className="h-[126px]  bg-[#1e1e1e] ">
        <div>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <p className=" text-white text-[17px] cursor-pointer mt-2 ml-2 ">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </p>
          </Link>
        </div>

        <div className=" flex items-center cursor-pointer ml-2 mt-2 text-[16px] gap-1 text-gray-600 ">
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <span className=" text-[16px] text-gray-600  ">
              {snippet?.channelTitle || demoChannelTitle}
            </span>
          </Link>

          <AiFillCheckCircle className=" text-[14px] " />
        </div>
      </div>
    </div>
  );
}
