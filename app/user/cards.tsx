"use client";
import React, { useState } from "react";
// import Image from "next/image";
import posts from "@/public/seed";

import {
  AiOutlineAudit,
  AiOutlinePicture,
  AiOutlineLink,
} from "react-icons/ai";

const Cards = () => {
  return (
    <>
      <div className="">
        {posts.map((post, i) => {
          const { name, picture, text } = post;
          return (
            <div className="  border-white py-5" key={i}>
              <div className="flex gap-3 px-3">
                <img
                  src={picture}
                  className="w-10 h-10 rounded-full"
                  alt="Avatar"
                />
                <p className="text-gray-600 font-semibold">{name}</p>
              </div>
              <p className="text-gray-700 px-5">{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
