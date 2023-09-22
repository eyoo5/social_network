"use client";
import React from "react";
import Image from "next/image";
import PossibleFriendCards from "./possibleFriend";

const RightBar = () => {
  return (
    <>
      <div className="isolate border-spacing-1 ">
        <ul className="text-gray-600 px-5 font-medium">
          <li className="flex justify-center bg-gray-300 hover:cursor-pointer pb-1 gap-1">
            People You May Know
          </li>
          <div className="bg-gray-100">
            <PossibleFriendCards />
          </div>
          <li className="flex justify-center  bg-gray-300 hover:cursor-pointer pb- gap-1">
            Recommended Pages
          </li>
          <Image
            className=""
            src="/Images/recPage.png"
            width={315}
            height={300}
            alt="Profile Picture of User"
          />
          <li className="flex justify-center  bg-gray-300 hover:cursor-pointer pb- gap-1">
            Sponsored
          </li>
          <Image
            className=""
            src="/Images/ad.png"
            width={315}
            height={300}
            alt="Profile Picture of User"
          />
        </ul>
      </div>
    </>
  );
};

export default RightBar;
