import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoProfilePicture } from './utils/constants';
import {AiFillCheckCircle} from 'react-icons/ai';

export default function ChannelCard({channelDetail}) {
  return (
    <div className=' justify-center w-[320px] text-center flex flex-col text-white '>

    <div className=' justify-center ml-16 '>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} className=' w-[180px] mt-5 rounded-[50%] h-[180px] ' />
      </Link>
    </div>
    <div className=" flex items-center cursor-pointer ml-20 mt-4 text-[28px] gap-1 text-white">
          <span>{channelDetail?.snippet?.title || demoChannelTitle }</span>
          <AiFillCheckCircle className=" text-[20px] " />

        </div>


    </div>
  )
}
