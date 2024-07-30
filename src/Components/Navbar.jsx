"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logoblack.png";
import Image from "next/image";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="w-full h-32 px-10 flex justify-between items-center">
      {/* <h1 className="text-3xl font-semibold">meedAI</h1> */}
      <Link href={"/"}>
        <Image src={logo} width={300} className=" -ml-20 mt-6 " />
      </Link>
      <div className="hidden md:flex items-center gap-5 text-white font-extralight">
        <div className="bg-black rounded-full px-10 py-3 flex items-center gap-5">
          {/* <Link href={"/"}>
            <h1 className="">Home</h1>
          </Link> */}

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
            <h1 className="">Get in Touch</h1>
          </Link>
        </div>
        {/* <Link href={"/contact"}>
          <div className="px-10 py-3 bg-black rounded-full">
            <h1>Get in Touch</h1>
          </div>
        </Link> */}
      </div>
      <div className="md:hidden">
        <MenuIcon onClick={toggleMobileMenu} className="cursor-pointer" />
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white z-50 transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex justify-end p-5">
          <CloseIcon onClick={toggleMobileMenu} className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center gap-5 mt-10">
          <Link href={"/"} onClick={toggleMobileMenu}>
            <h1>Home</h1>
          </Link>
          <Link href={"/AITalent"}>AI Talent</Link>
          <Link href={"/AIConsulting"}>AI Consulting</Link>
          <Link href={"/AIEvents"}>AI Events</Link>

          <Link href={"/about"} onClick={toggleMobileMenu}>
            <h1>Our story</h1>
          </Link>
          <Link href={"/contact"} onClick={toggleMobileMenu}>
            <h1>Contact</h1>
          </Link>
          {/* <div className="px-10 py-3 bg-white text-black rounded-full mt-5">
            <h1>Get in Touch</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
