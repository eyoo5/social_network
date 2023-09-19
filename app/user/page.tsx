"use client";
import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import LeftBar from "./leftBar";

const User = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <LeftBar />
        <p>Hope this works...</p>
        <Link href="/">Login</Link>
      </div>
    </>
  );
};

export default User;
