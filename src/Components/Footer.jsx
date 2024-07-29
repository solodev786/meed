import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <div className=" ">
      <div className=" w-full md:flex bg-black md:h-96 py-20 items-center justify-center text-white">
        <div className=" md:w-[1300px] h-full md:flex items-start justify-around">
          <div className=" flex flex-col h-full px-5 md:px-0 justify-between ">
            <div className=" flex flex-col gap-2 ">
              <h1 className=" text-5xl font-semibold">meedAI</h1>
              <h1 className=" text-1/2 font-light">
                Connecting AI startups with top talent and providing expert AI
                consultancy to drive innovation and success.
              </h1>
            </div>
            <div className=" flex items-center gap-10 my-10 md:my-0">
              <Link
                href={"https://uk.linkedin.com/in/ahmed-el-mahmoud-a088691b7"}
              >
                <h1>
                  <FaLinkedin />
                </h1>
              </Link>
              <h1>
                <FaFacebook />
              </h1>
              <h1>
                <FaInstagram />
              </h1>
              <h1>
                <FaTwitter />
              </h1>
            </div>
          </div>
          <div className=" w-4/5 md:flex justify-center items-start gap-16 px-5 md:py-0">
            <div className=" block md:hidden">
              <div className=" flex items-start gap-10">
                <div className=" flex flex-col gap-7 my-2 md:my-0">
                  <h1>Pages</h1>
                  <div className=" flex flex-col gap-2 font-extralight text-sm">
                    <Link href={"/"}>
                      <h1>Home</h1>
                    </Link>
                    <Link href={"/about"}>
                      <h1>Our story</h1>
                    </Link>
                    <Link href={"/contact"}>
                      <h1>Contact</h1>
                    </Link>
                  </div>
                </div>
                <div className=" flex flex-col gap-7 my-2 md:my-0">
                  <h1>Services</h1>
                  <div className=" flex flex-col gap-2 font-extralight text-sm">
                    <Link href={"/AITalent"}>
                      <h1>AI Talents</h1>
                    </Link>
                    <Link href={"/AIConsulting"}>
                      <h1>AI Consulting</h1>
                    </Link>
                    <Link href={"/AIEvents"}>
                      <h1>AI Events</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden md:block">
              <div className=" flex flex-col gap-7 my-2 md:my-0">
                <h1>Pages</h1>
                <div className=" flex flex-col gap-2 font-extralight text-sm">
                  <Link href={"/"}>
                    <h1>Home</h1>
                  </Link>
                  <Link href={"/about"}>
                    <h1>Our story</h1>
                  </Link>
                  <Link href={"/contact"}>
                    <h1>Contact</h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" hidden md:block">
              <div className=" flex flex-col gap-7 my-10 md:my-0">
                <h1>Services</h1>
                <div className=" flex flex-col gap-2 font-extralight text-sm">
                  <Link href={"/AITalent"}>
                    <h1>AI Talents</h1>
                  </Link>
                  <Link href={"/AIConsulting"}>
                    <h1>AI Consulting</h1>
                  </Link>
                  <Link href={"/AIEvents"}>
                    <h1>AI Events</h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-7 my-10 md:my-0">
              <h1>Contact</h1>
              <div className=" flex flex-col gap-2 font-extralight text-sm">
                <div className=" flex items-center gap-2">
                  <h1>
                    <FaPhoneAlt />
                  </h1>
                  <h1>+447963510956</h1>
                </div>
                <div className=" flex items-center gap-2">
                  <h1>
                    <IoMdMail />
                  </h1>
                  <h1>meedAI@outlook.com</h1>
                </div>
                {/* <div className=" flex items-start gap-2">
                  <h1>
                    <FaLocationArrow />
                  </h1>
                  <h1>2972 Westheimer Rd. Santa Ana, Illinois 85486 </h1>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
