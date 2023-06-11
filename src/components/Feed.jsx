import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import Videos from "./Videos";

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  console.log('apple');
  
  console.log(videos);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=football`)
      .then((data) => setVideos(data.items))

    }, [selectedCategory]);

  return (
    <div className=" flex ">
      <div className=" h-[92vh] border-[#3d3d3d]  border-r-2    ">
        <SideBar selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory} />

        <span className="text-white  text-[18px]  sticky  px-3 mt-5">
          Copyright 2023 Manish
        </span>
      </div>
      <div className="overflow-auto flex-1 ml-3 mt-4 h-[90vh] text-[24px] text-white font-bold ">
        <div>
          {selectedCategory} <span className=" text-[#f31503] ">videos</span>
        </div>

        <Videos videos={videos} />
      </div>
    </div>
  );
}
