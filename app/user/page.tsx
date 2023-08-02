"use client";
import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";

const User = () => {
  return (
    <>
      <Navbar />
      <div>
        <p>Hope this works...</p>
        <Link href="/">Login</Link>
      </div>
    </>
  );
};

export default User;
