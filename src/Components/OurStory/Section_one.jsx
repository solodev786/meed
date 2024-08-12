import Image from "next/image";
import React from "react";
import bg from "../../assets/storyBox.png";
function Section_one() {
  return (
    <div className=" w-full h-72 md:h-[500px] bg-gray-500 relative">
      <Image src={bg} className=" w-full h-full object-cover" />
      <div className=" w-full h-full flex py-10 px-10 md:px-10 items-end md:items-center absolute top-0 left-0 text-white">
        <div className=" flex flex-col gap-3">
          <h1 className="text-4xl md:text-7xl font-medium">Our Story</h1>
          <h1 className=" md:w-1/2 text-lg md:text-2xl">
            meedAI was created to solve a major issue for AI startups and
            provide a one-stop-shop for everything on the People side of AI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section_one;
