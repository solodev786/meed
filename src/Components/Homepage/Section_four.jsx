import Image from "next/image";
import React from "react";
import lady from "../../assets/thalla.png";
import bg from "../../assets/Footer.png";
import Link from "next/link";
function Section_four() {
  return (
    <div className=" w-full flex items-center justify-center pb-20">
      <div className=" w-full md:w-[1300px] h-96 bg-gray-500 relative">
        <Image src={bg} className=" w-full h-full object-cover" />
        <div className=" absolute top-0 left-0 w-full h-full px-10 md:flex  justify-between text-white">
          <div className=" flex flex-col gap-5 h-full justify-center">
            <h1 className=" text-4xl font-semibold">Get in Touch</h1>
            <h1 className=" md:w-1/2">
              We’re here to assist you. Contact us to discuss how we can support
              your needs and help you achieve your goals. Reach out today, and
              let’s start the conversation.
            </h1>
            <Link href={"/contact"}>
              <div className=" w-32 h-12 bg-white rounded-full flex items-center justify-center">
                <h1 className=" text-black">Contact us</h1>
              </div>
            </Link>
          </div>
          <div className=" hidden md:block w-1/2">
            <div className=" flex h-full items-end w-full">
              <Image src={lady} className=" w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_four;
