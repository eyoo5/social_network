"use client";
import React, { useState } from "react";
import Status from "./status";
import Photos from "./photos";
import {
  AiOutlineWechat,
  AiOutlinePicture,
  AiOutlineTeam,
  AiOutlineSolution,
} from "react-icons/ai";

const Center = () => {
  const [status, setStatus] = useState(true);
  const [photos, setPhotos] = useState(false);
  const [link, setLink] = useState(false);

  const handleStatus = () => {
    setStatus(true);
    setPhotos(false);
    setLink(false);
  };

  const handlePhotos = () => {
    setPhotos(true);
    setStatus(false);
    setLink(false);
  };

  const handleLink = () => {
    setLink(true);
    setStatus(false);
    setPhotos(false);
  };

  return (
    <>
      <div className="">
        <p className="text-gray-600 font-semibold text-3xl">Esther Yoo</p>
        <div className=" flex text-gray-600 text-lg py-1 ">
          <div className="flex gap-2">
            Share:
            <div className="hover:cursor-pointer" onClick={handleStatus}>
              Status
            </div>
            {status ? (
              <Status />
            ) : (
              <div className="hidden">
                <Status />
              </div>
            )}
            <div className="hover:cursor-pointer" onClick={handlePhotos}>
              Photos
            </div>
            {photos ? (
              <Photos />
            ) : (
              <div className="hidden">
                <Photos />
              </div>
            )}
            <div className="hover:cursor-pointer" onClick={handleLink}>
              Link
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Center;
