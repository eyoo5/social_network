"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-screen mx-auto px-5 text-white pb-3 mb-3 bg-blue-500">
      <h1 className="w-full text-3xl font-bold"> Fakebook </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link href="/"> Login</Link>
        </li>
        <li className="p-4">
          <Link href="/user">User</Link>
        </li>
        <li className="p-4">Projects </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-blue-300 bg-blue-300 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 pt-4"> Fakebook </h1>
        <ul className="uppercase p-2">
          <Link href="/">
            <li className="p-4 border-b border-blue-400"> Login </li>
          </Link>
          <Link href="/user">
            <li className="p-4 border-b border-blue-400"> User </li>
          </Link>
          <li className="p-4 border-b border-blue-400"> Projects </li>
        </ul>
      </div>
    </div>
  );
}
