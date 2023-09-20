"use client";
import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import LeftBar from "./leftBar";
import Center from "./center";

const User = () => {
  return (
    <>
      <Navbar />
      <div className="flex py-7 px-2 gap-5">
        {/* the gap in tailwind controls space between flexbox items! */}
        <LeftBar />
        <Center />
      </div>
    </>
  );
};

export default User;
