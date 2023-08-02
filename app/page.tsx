import Image from "next/image";
import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import HomePage from "./home/page";

export default function App({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
    </>
  );
}
