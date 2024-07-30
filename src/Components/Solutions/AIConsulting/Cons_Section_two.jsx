"use client";
import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { GiFlexibleStar } from "react-icons/gi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { SiFigshare } from "react-icons/si";
import { GrAccessibility } from "react-icons/gr";

function Cons_Section_two() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   message: "",
  //   to_name: "IBPD", // You can set a default value or change dynamically
  //   from_name: "", // Set it as the user's name or leave it empty
  // });

  // formData.from_email = formData.email;

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //     from_name: formData.name, // Set from_name to the user's name
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Send email using EmailJS
  //   emailjs
  //     .send(
  //       "service_712adrr",
  //       "template_oq7ufdp",
  //       formData,
  //       "DRXsVO40bZnQi0X2E"
  //     )
  //     .then(
  //       (response) => {
  //         console.log("Email sent successfully:", response);
  //         setFormData({
  //           name: "",
  //           email: "",
  //           mobile: "",
  //           message: "",
  //         });
  //         // Handle success
  //       },
  //       (error) => {
  //         console.error("Email sending failed:", error);
  //         // Handle error
  //       }
  //     );
  // };
  return (
    <div className=" w-full  py-10">
      <div className=" flex flex-col gap-10 w-full">
        <div className="px-5 md:px-20 flex flex-col gap-10 md:w-4/5">
          <h1 className=" md:text-xl font-light">
            At meedAI we are on the ground level and as such understand the boom
            which is AI. Within every industry, the adoption of AI technology
            has skyrocketed and will continue do so, so it is improtant your
            company is able to keep up.
          </h1>
          <h1 className=" md:text-xl font-light">
            For this reason, we offer an AI Consulting service which allows you
            to connect with experts within our network and hire them for as
            little or as long as you need and let them come into your
            organisation as an advisor on all things AI.
          </h1>

          <h1 className=" text-3xl font-medium">How it works</h1>
        </div>
        <div className=" w-full md:flex items-center text-white">
          <div className="  md:w-1/4 h-72 bg-black  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">1</h1>
                <h1 className=" text-2xl font-semibold">Discovery</h1>
                <h1 className=" w-4/5 font-extralight">
                  Introductory call to understand the scope of your business and
                  what you are looking for
                </h1>
              </div>
            </div>
          </div>
          <div className="  md:w-1/4 h-72 bg-[#222222]  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">2</h1>
                <h1 className=" text-2xl font-semibold">Matchmaking</h1>
                <h1 className=" w-4/5 font-extralight">
                  Send over an initial selection of consultants who we think
                  could add the most value to your company
                </h1>
              </div>
            </div>
          </div>
          <div className="  md:w-1/4 h-72 bg-[#333333]  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">3</h1>
                <h1 className=" text-2xl font-semibold">Screening</h1>
                <h1 className=" w-4/5 font-extralight">
                  Initial conversation with each of the consultants you like the
                  look of to see if there is a match
                </h1>
              </div>
            </div>
          </div>
          <div className="  md:w-1/4 h-72 bg-[#444444]  py-12 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">4</h1>
                <h1 className=" text-2xl font-semibold">Bridge</h1>
                <h1 className=" w-4/5 font-extralight">
                  We connect you for the needed time period
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className=" py-10 w-full justify-center items-start md:items-center flex gap-3 px-5 md:px-0">
            <h1 className=" text-2xl">
              <PiStarFourFill />
            </h1>
            <h1 className=" text-4xl font-semibold">
              Benefits Over Traditional Model
            </h1>
            <h1 className=" text-2xl hidden md:block">
              <PiStarFourFill />
            </h1>
          </div>
          <div className=" px-5 md:px-20 md:flex w-full justify-center items-center gap-10">
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 flex items-center px-10 py-5">
              <div className=" flex flex-col gap-5">
                <SiFigshare className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Customization</h1>
                <h1 className=" font-light">
                  Our bespoke service and vast network means we can provide you
                  exactly what you need to add the most value to your
                  organization
                </h1>
              </div>
            </div>
            <div className="mb-5 md:mb-0 md:w-96  bg-gray-200 items-center px-10 py-10">
              <div className=" flex flex-col gap-5">
                <GiFlexibleStar className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Agility</h1>
                <h1 className=" font-light">
                  because of our working models and tight-knit network, we are
                  able to move fast so can bring you consultants at a moments
                  notice, allowing you and your company to react to the
                  ever-shifting changes within the AI industry
                </h1>
              </div>
            </div>
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 items-center px-10 py-10 ">
              <div className=" flex flex-col gap-5">
                <MdOutlineAccountBalance className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Tailored Solutions</h1>
                <h1 className=" font-light">
                  Our network is comprised of Consultants who are the best in
                  their fields and you are able to access these individuals
                  through us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cons_Section_two;
