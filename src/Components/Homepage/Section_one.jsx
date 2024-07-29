"use client";
import React, { useState } from "react";
import { Titillium_Web, Lilita_One, Paytone_One } from "next/font/google";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import Navbar from "../Navbar";
const tit = { subsets: ["latin"], weight: "400" };
function Section_one() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between relative">
      <video
        src="/vid.mp4"
        className=" w-full h-full object-cover"
        muted
        loop
        autoPlay
      ></video>
      <div className=" w-full h-full absolute top-0 left-0 flex flex-col justify-between">
        <div className=" block md:hidden">
          <Navbar />
        </div>
        <div className=" hidden md:block">
          <div className=" w-full h-32 px-10 flex justify-between items-center">
            <h1 className=" text-3xl font-semibold">meedAI</h1>
            <div className=" flex items-center gap-5 text-white font-extralight">
              <div className=" bg-black rounded-full px-10 py-3 flex items-center gap-5 ">
                <Link href={"/"}>
                  <h1 className="">Home</h1>
                </Link>

                <div className="relative">
                  <h1 className="cursor-pointer" onClick={handleClick}>
                    Solutions
                  </h1>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link href={"/AITalent"}>AI Talent</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href={"/AIConsulting"}>AI Consulting</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link href={"/AIEvents"}>AI Events</Link>
                    </MenuItem>
                  </Menu>
                </div>

                <Link href={"/about"}>
                  <h1 className="">Our story</h1>
                </Link>
                <Link href={"/contact"}>
                  <h1 className="">Contact</h1>
                </Link>
              </div>
              <Link href={"/contact"}>
                <div className=" px-10 py-3 bg-black rounded-full">
                  <h1>Get in touch</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-2 items-center justify-center md:justify-center h-full">
          <h1 className={` text-7xl md:text-[180px] font-bold`}>meedAI</h1>
          <h1 className=" text-xl tracking-wider md:-mt-5">
            The people side of AI
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Section_one;
