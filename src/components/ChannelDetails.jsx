import React from "react";
import VideoCard from "./VideoCard";
import { useParams } from "react-router-dom";


export default function ChannelDetails() {
  const {id} =useParams();
  return (
    <div className=" h-[90vh] bg-[#000]">
      <div className=" w-full relative h-[300px] bg-gradient-to-r pt-56 from-sky-500 to-fuchsia-500">
        <div className=" w-[180px] rounded-full  h-[180px] bg-green-500 mx-auto  "></div>
        <div className=" mt-5">
          <div className=" flex gap-2 mx-auto  text-[20px]  items-center justify-center ">
            <p>Mr.Beast</p>
            <span>{id}</span>
          </div>

        </div>
      </div>
      {/* <VideoCard /> */}
    </div>
  );
}
