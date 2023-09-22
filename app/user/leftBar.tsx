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
        <div className="flex justify-center py-2">
          <Image
            className=""
            src="/Images/ProfilePic.jpg"
            width={300}
            height={150}
            alt="Profile Picture of User"
          />
        </div>

        <ul className="text-gray-600 px-5 font-medium">
          <li className="flex hover:cursor-pointer pb-1 gap-1 backdrop-grayscale">
            <AiOutlineWechat />
            Wall
          </li>
          <li className="flex hover:cursor-pointer pb- gap-1 backdrop-grayscale">
            <AiOutlineSolution />
            Info
          </li>
          <li className="flex hover:cursor-pointer pb- gap-1 backdrop-grayscale">
            <AiOutlinePicture />
            Photos
          </li>
          <li className="flex hover:cursor-pointer pb- gap-1 backdrop-grayscale">
            <AiOutlineTeam />
            Friends
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftBar;
