import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div className=" 95vh w-full ">
      <div className=" flex-row justify-center h-[80vh] items-center ">
        <CircularProgress />
      </div>
    </div>
  );
}
