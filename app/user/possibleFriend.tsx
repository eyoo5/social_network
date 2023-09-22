"use client";
import React, { useState } from "react";
import { possibleFriends } from "@/public/seed";
import { AiOutlineUserAdd } from "react-icons/ai";

const PossibleFriendCards = () => {
  return (
    <>
      <div className="">
        {possibleFriends.map((possibleFriend, i) => {
          const { name, photo, mutual } = possibleFriend;
          return (
            <div className=" border-white py-5" key={i}>
              <div className="flex gap-3 px-3">
                <img
                  src={photo}
                  className="w-10 h-10 rounded-full"
                  alt="Avatar"
                />
                <div className="">
                  <p className="text-gray-700 font-semibold">{name}</p>
                  <p className="text-gray-600"> Mutual Friends:{mutual}</p>
                  <p className="flex text-gray-600">
                    <AiOutlineUserAdd />
                    Add as Friend
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PossibleFriendCards;
