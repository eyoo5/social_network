"use client";
import React from "react";
import Navbar from "../Navbar";
import LeftBar from "./leftBar";
import Center from "./center";
import RightBar from "./rightBar";

const User = () => {
  return (
    <>
      <Navbar />
      <div className="flex py-7 px-2 ">
        {/* the gap in tailwind controls space between flexbox items! */}
        <div className="basis-1/4">
          <LeftBar />
        </div>
        <div className="basis-2/4">
          <Center />
        </div>
        <div className="basis-1/4">
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default User;
