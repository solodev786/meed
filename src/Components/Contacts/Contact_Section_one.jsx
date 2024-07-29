import Image from "next/image";
import React from "react";
import bg from "../../assets/contact.jpg";
import { FaVideo } from "react-icons/fa";
function Contact_Section_one() {
  return (
    <div className=" w-full h-[500px] bg-gray-400 relative">
      <Image src={bg} className=" w-full h-full object-cover" />
      <div className=" w-full h-full absolute top-0 left-0 flex items-center px-5 md:px-10 text-black">
        <div className=" flex flex-col gap-3 w-full items-center">
          <h1 className=" md:w-1/2 text-3xl font-medium text-center">
            We’ve got an entire team dedicated to supporting you and your
            business
          </h1>
          <h1 className=" font-light text-center md:text-left">
            Get help 24/7, with oour award winning support network of payments
            experts
          </h1>
          <div className=" flex items-center gap-5 mt-5">
            <div className=" rounded-full w-40 flex items-center justify-center gap-2 h-12 border-2 border-black">
              <FaVideo />
              <h1>Book a call</h1>
            </div>
            <div className=" rounded-full w-40 flex items-center justify-center gap-2 h-12 bg-black text-white">
              <h1>Get in touch</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Section_one;
