"use client";
import React, { useState } from "react";
import Status from "./status";
import Photos from "./photos";
import Cards from "./cards";
import {
  AiOutlineAudit,
  AiOutlinePicture,
  AiOutlineLink,
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
        <div className=" flex-col text-gray-600 text-lg py-1 ">
          <div className="flex gap-5">
            Share:
            <div className="flex hover:cursor-pointer" onClick={handleStatus}>
              {" "}
              <AiOutlineAudit /> Status
            </div>
            <div className="flex hover:cursor-pointer" onClick={handlePhotos}>
              <AiOutlinePicture /> Photos
            </div>
            <div className="flex hover:cursor-pointer" onClick={handleLink}>
              <AiOutlineLink /> Link
            </div>
          </div>
          {status ? (
            <Status />
          ) : (
            <div className="hidden">
              <Status />
            </div>
          )}
          {photos ? (
            <Photos />
          ) : (
            <div className="hidden">
              <Photos />
            </div>
          )}
        </div>
        <div className="bg-gray-100">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Center;
