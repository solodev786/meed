import React from "react";
import bg from "../../../assets/EventBox.png";
import Image from "next/image";
function Events_Section_one() {
  return (
    <div className=" relative w-full h-72 md:h-[500px] bg-gray-200">
      <Image src={bg} className=" w-full h-full object-cover" />
      <div className=" w-full h-full flex py-10 px-5 md:px-10 items-center absolute top-0 left-0 text-white">
        <div className=" flex flex-col gap-3">
          <h1 className=" md:text-2xl">Service</h1>
          <h1 className=" text-4xl md:text-7xl font-medium">AI Events</h1>
          <h1 className="  md:w-1/2 md:text-2xl">
            meedAI provides access to top AI experts for your events, from
            panelists to keynote speakers. We ensure you get the best voices in
            the industry to make your event a success.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Events_Section_one;
