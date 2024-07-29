import React from "react";
import bg from "../../../assets/consultBox.png";
import Image from "next/image";

function Consulting_Section_one() {
  return (
    <div className=" w-full h-72 md:h-[500px] bg-gray-300 relative">
      <Image src={bg} className=" w-full h-full bg-cover" />
      <div className=" w-full h-full flex py-10 px-5 md:px-10 items-center absolute top-0 left-0 text-white">
        <div className=" flex flex-col gap-3">
          <h1 className=" md:text-2xl">Service</h1>
          <h1 className="text-4xl md:text-7xl font-medium">AI Consulting</h1>
          <h1 className=" md:w-1/2 md:text-2xl">
            meedAI connects you with top AI experts for customized advice and
            solutions, ensuring quick and effective results.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Consulting_Section_one;
