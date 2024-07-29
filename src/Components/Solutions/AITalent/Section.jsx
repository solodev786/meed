import Image from "next/image";
import React from "react";
import bg from "../../../assets/talentBox.png";
function Section() {
  return (
    <div className=" relative w-full h-72 md:h-[500px] bg-gray-200">
      <Image src={bg} className=" w-full h-full object-cover" />
      <div className=" w-full h-full flex py-10 px-10 items-center absolute top-0 left-0 text-white">
        <div className=" flex flex-col gap-3">
          <h1 className=" text-xl md:text-2xl">Service</h1>
          <h1 className=" text-4xl md:text-7xl font-medium">AI Talent</h1>
          <h1 className=" md:w-1/2 md:text-2xl">
            At meedAI we understand the importance of moving fast and that is
            why we offer our specialized Contract recruitment services. 
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section;
