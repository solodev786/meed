import Link from "next/link";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function Section_three() {
  return (
    <div className=" py-20 px-5 md:px-10 flex flex-col gap-16">
      <div className=" flex flex-col md:gap-6">
        <div className=" flex items-center px-1 md:justify-center gap-3">
          <h1 className=" text-2xl">
            <PiStarFourFill />
          </h1>
          <h1 className=" text-3xl font-medium">Services</h1>
          <h1 className=" text-2xl">
            <PiStarFourFill />
          </h1>
        </div>
        <div className=" flex flex-col md:items-center gap-2">
          <div className=" text-3xl md:text-5xl font-light md:font-medium">
            <h1>The People Side Of AI</h1>
          </div>
          {/* <h1 className=" font-light">
            meedAI brings AI to your data to help you bring AI to the world.
          </h1> */}
        </div>
      </div>
      <div className=" md:flex items-center gap-10 w-full justify-center">
        <div className=" mb-5 md:mb-0 w-96 h-72 bg-[#EDEBEB] px-5 py-5 flex flex-col gap-5 drop-shadow-md">
          <PiStarFourFill />
          <h1 className=" text-4xl font-medium">AI Talent</h1>
          <h1 className=" text-sm font-light">
            At meedAI we understand the importance of moving fast and that is
            why we offer our specialized Contract recruitment services.
          </h1>
          <Link href={"/AITalent"}>
            <div className=" w-32 h-10 flex items-center text-white text-sm font-light bg-black justify-center rounded-full">
              <h1>Learn more</h1>
            </div>
          </Link>
        </div>
        <div className=" mb-5 md:mb-0 w-96 h-72 bg-[#EDEBEB] px-5 py-5 flex flex-col gap-5 drop-shadow-md">
          <PiStarFourFill />
          <h1 className=" text-4xl font-medium">AI Consultation</h1>
          <h1 className="text-sm font-light">
            meedAI connects you with top AI experts for customized advice and
            solutions, ensuring quick and effective results.
          </h1>
          <Link href={"/AIConsulting"}>
            <div className=" w-32 h-10 flex items-center text-center bg-black text-white text-sm font-light justify-center rounded-full">
              <h1>Learn more</h1>
            </div>
          </Link>
        </div>
        <div className=" mb-5 md:mb-0 w-96 h-72 bg-[#EDEBEB] px-5 py-5 flex flex-col gap-5 drop-shadow-md">
          <PiStarFourFill />
          <h1 className=" text-4xl font-medium">AI Events</h1>
          <h1 className=" text-sm font-light">
            meedAI provides access to top AI experts for your events, from
            panelists to keynote speakers. We ensure you get the best voices in
            the industry to make your event a success.
          </h1>
          <Link href={"/AIEvents"}>
            <div className=" w-32 h-10 flex items-center text-center bg-black text-white text-sm font-light justify-center rounded-full">
              <h1>Learn more</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section_three;
