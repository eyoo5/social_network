import Image from "next/image";
import React, { PropsWithChildren } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home";

export default function Home({ children }: PropsWithChildren) {
  return (
    <main>
      <Navbar />
      <HomePage />
    </main>
  );
}
