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
          width={230}
          height={150}
          alt="Profile Picture of User"
        />
        <ul className="text-gray-600 px-5 font-medium">
          <li className="flex hover:cursor-pointer pb-1 gap-1">
            <AiOutlineWechat />
            Wall
          </li>
          <li className="flex hover:cursor-pointer pb- gap-1">
            <AiOutlineSolution />
            Info
          </li>
          <li className="flex hover:cursor-pointer pb- gap-1">
            <AiOutlinePicture />
            Photos
          </li>
          <li className="flex hover:cursor-pointer pb- gap-1">
            <AiOutlineTeam />
            Friends
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftBar;
