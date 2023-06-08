import React from "react";
import { BiSearchAlt2 } from 'react-icons/bi';

export default function SearchFeed() {
  return (
    <div className=" relative flex items-center ">
      <input
        className="bg-white outline-none border border-[#e3e3e3] px-5 p-[6px] rounded-[50px] w-[290px] mr-[50px] "
        placeholder="Search..."
      />
      <BiSearchAlt2 className=" cursor-pointer absolute text-orange-400 text-[20px] ml-64 " />

    </div>
  );
}
