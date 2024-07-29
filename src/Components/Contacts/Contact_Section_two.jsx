import React from "react";
import { FaLinkedin, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter, FaMapLocationDot } from "react-icons/fa6";
import { Menu, MenuItem, TextField } from "@mui/material";

function Contact_Section_two() {
  return (
    <div className=" w-full md:flex justify-center">
      <div className=" md:w-[1300px] py-20 md:flex justify-between">
        <div className=" flex flex-col gap-14 mb-10 md:mb-0 px-5 md:px-0">
          <div className=" flex flex-col gap-2">
            <h1 className=" text-3xl">Call us</h1>
            <h1 className=" text-sm text-gray-400">
              Call out team Mon-Fri 8am to 5pm
            </h1>
            <div className=" flex items-center gap-2">
              <FaPhoneAlt className=" text-2xl" />
              <h1>(+1) 75102 9231</h1>
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <h1 className=" text-3xl">Chat with us</h1>
            <h1 className=" text-sm text-gray-400">
              Speak to our friendly team via live chat
            </h1>
            <div className=" flex items-center gap-2">
              <IoMdMail className=" text-2xl" />
              <h1>Shoot us on email</h1>
            </div>
            <div className=" flex items-center gap-2">
              <FaXTwitter className=" text-2xl" />
              <h1>Message on Twitter</h1>
            </div>
            <div className=" flex items-center gap-2">
              <FaLinkedin className=" text-2xl" />
              <h1>Message on Linkedin</h1>
            </div>
          </div>

          <hr className=" block md:hidden" />
        </div>
        <div className=" flex flex-col gap-5 px-5 md:px-0 md:w-1/2">
          <div className=" hidden md:block">
            <div className="  md:flex md:gap-5 items-center">
              <TextField label="First name" fullWidth />
              <TextField label="Last name" fullWidth />
            </div>
          </div>
          <div className=" block md:hidden">
            <div className="  flex flex-col gap-5">
              <TextField label="First name" fullWidth />
              <TextField label="Last name" fullWidth />
            </div>
          </div>
          <TextField label="Email address" fullWidth />
          <TextField select label="Choose service">
            <MenuItem>AI talent</MenuItem>
            <MenuItem>AI talent</MenuItem>
            <MenuItem>AI talent</MenuItem>
          </TextField>

          <div className=" hidden md:block">
            <div className=" flex gap-5 items-center">
              <div className=" flex flex-col w-full">
                <h1 className=" text-sm">Book a 30 min chat</h1>
                <TextField placeholder="Book" fullWidth type="datetime-local" />
              </div>
              <div className=" flex flex-col w-full">
                <h1 className=" text-sm">Book a 30 min call</h1>
                <TextField placeholder="Book" fullWidth type="datetime-local" />
              </div>
            </div>
          </div>
          <div className=" block md:hidden">
            <div className=" flex flex-col gap-5 items-center">
              <div className=" flex flex-col w-full">
                <h1 className=" text-sm">Book a 30 min chat</h1>
                <TextField placeholder="Book" fullWidth type="datetime-local" />
              </div>
              <div className=" flex flex-col w-full">
                <h1 className=" text-sm">Book a 30 min call</h1>
                <TextField placeholder="Book" fullWidth type="datetime-local" />
              </div>
            </div>
          </div>
          <TextField label="Leave us a message" />
          <div className="bg-black text-white w-full h-14 flex items-center justify-center rounded-md">
            <h1>Submit</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Section_two;
