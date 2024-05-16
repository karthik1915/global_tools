import React from "react";
import Image from "next/image";
import Seperator from "../ui/seperator";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10 mx-auto  w-screen max-w-6xl px-3 py-5">
        <div className="mb-3 flex items-center justify-between">
          <a className="flex items-center gap-3 text-lg font-bold" href="/">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <p>GLOBAL TOOLS</p>
          </a>
          <div className="flex gap-2 md:gap-4 md:text-lg ">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="contact">Contact</a>
          </div>
        </div>
        <Seperator orientation="horizontal" />
      </div>
    </>
  );
};

export default NavBar;
