import Link from "next/link";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";
function Section_two() {
  return (
    <div className=" w-full h-auto py-16 px-5 md:px-28 bg-[#f3f3f3] text-black flex flex-col gap-10">
      <div className=" flex items-center gap-3">
        <h1 className=" text-2xl">
          <PiStarFourFill />
        </h1>
        <h1 className=" text-3xl md:text-5xl font-medium">About Us</h1>
        <h1 className=" text-2xl">
          <PiStarFourFill />
        </h1>
      </div>
      <div>
        <h1 className=" w-full md:w-3/4 text-lg md:text-xl font-extralight md:font-light">
          At meedAI, we've redefined AI talent and consultancy. Our goal is to
          connect innovative startups with top-tier professionals and experts,
          offering unparalleled transparency and efficiency. Since our
          inception, we’ve aimed to break away from conventional practices,
          focusing on what truly matters: your success and satisfaction.
          Discover how our approach to AI can drive your growth.
          <Link href={"/about"}>
            <span className=" font-semibold underline">Learn more</span>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Section_two;
