import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { GiFlexibleStar } from "react-icons/gi";
import { MdOutlineAccountBalance } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { SiFigshare } from "react-icons/si";

function Events_Section_two() {
  return (
    <div className=" w-full  py-10">
      <div className=" flex flex-col gap-10 w-full">
        <div className=" px-5 md:px-20 flex flex-col gap-10 md:w-4/5">
          <h1 className=" md:text-xl font-light">
            Are you sick and tired of hearing the same old boring speakers who
            lack any real experience in the field? Do you want to actually add
            value to the people attending your event?
          </h1>
          <h1 className=" md:text-xl font-light">
            Well here at meedAI we specialize in the People Side of AI so we’ve
            got you covered. 
          </h1>
          <h1 className=" md:text-xl font-light">
            Our extensive network of AI talent means we’ve got the best guests
            for your upcoming event who are real experts in the industry. So,
            whether you need panelists, speakers or just some big names to
            attract attention, look no further. 
          </h1>

          <h1 className=" text-3xl font-medium">How its works</h1>
        </div>
        <div className=" w-full md:flex items-center text-white">
          <div className=" md:w-1/4 h-72 bg-black  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">1</h1>
                <h1 className=" text-2xl font-semibold">Briefing</h1>
                <h1 className=" w-4/5 font-extralight">
                  Book in an initial call to provide us with the full scope of
                  the event, and what kind of guest(s) you are looking for.
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/4 h-72 bg-[#222222]  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">2</h1>
                <h1 className=" text-2xl font-semibold">Connections</h1>
                <h1 className=" w-4/5 font-extralight">
                  We’ll reach out to suitable matches within our network and get
                  back to you within 72 hours with who could be available
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/4 h-72 bg-[#333333]  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">3</h1>
                <h1 className=" text-2xl font-semibold">Introductions</h1>
                <h1 className=" w-4/5 font-extralight">
                  After receiving the green light from you, we will set up
                  introductions between you all so you can gt acquainted and
                  ensure a good fit
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/4 h-72 bg-[#444444]  py-10 flex items-start">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-xl  flex flex-shrink-0 " />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">4</h1>
                <h1 className=" text-2xl font-semibold">Achievement</h1>
                <h1 className=" w-4/5 font-extralight">
                  Your event is a massive success
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
            <h1 className="hidden md:block text-2xl">
              <PiStarFourFill />
            </h1>
          </div>
          <div className=" px-5 md:px-20 md:flex w-full justify-center items-center gap-10">
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 flex items-start px-10 py-10">
              <div className=" flex flex-col gap-5">
                <SiFigshare className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Networking</h1>
                <h1 className=" font-light">
                  Skip the search for individuals and instead benefit from our
                  extensive network
                </h1>
              </div>
            </div>
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 items-start px-10 py-10">
              <div className=" flex flex-col gap-5">
                <GiFlexibleStar className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Influencers</h1>
                <h1 className=" font-light">
                  We work closely with top voices and pioneers in the industry -
                  including founders and CEOs of leading startups
                </h1>
              </div>
            </div>
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 items-start px-10 py-10 ">
              <div className=" flex flex-col gap-5">
                <MdOutlineAccountBalance className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Rapid</h1>
                <h1 className=" font-light">
                  Utilize our speed and efficiency to find the guests you need
                  in as little as 72 hours
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events_Section_two;
