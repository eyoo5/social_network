"use client";
import React from "react";
import Image from "next/image";
import {
  AiOutlineWechat,
  AiOutlinePicture,
  AiOutlineTeam,
  AiOutlineSolution,
} from "react-icons/ai";

const LeftBar = () => {
  return (
    <>
      <div className="isolate border-spacing-1 ">
        <Image
          className="rounded start-1 px-5 pb-3"
          src="/Images/ProfilePic.jpg"
          width={150}
          height={150}
          alt="Profile Picture of User"
        />
        <ul className="text-gray-600 px-5 font-medium">
          <li className="flex pb-1">
            <AiOutlineWechat />
            Wall
          </li>
          <li className="flex pb-1">
            <AiOutlineSolution />
            Info
          </li>
          <li className="flex pb-1">
            <AiOutlinePicture />
            Photos
          </li>
          <li className="flex pb-1">
            <AiOutlineTeam />
            Friends
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftBar;
