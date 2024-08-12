import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import meed from "../../assets/meed.jpeg";
import Image from "next/image";

function Section_two() {
  return (
    <div className=" w-full flex items-center justify-center py-20">
      <div className=" md:w-[1300px] flex justify-center px-5 md:px-20">
        <div className=" flex flex-col gap-10">
          <div className=" md:flex w-full items-start justify-between ">
            {/* <h1 className=" text-4xl w-1/4 mb-5 md:mb-0">Our story</h1> */}
            <div className="mb-10 md:mb-0 w-40 h-40 rounded-full bg-gray-400">
              <Image
                src={meed}
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
            <div className=" flex flex-col gap-5 text-xl font-light md:w-3/4">
              <div className="flex items-end gap-5">
                <h1>Hi. I'm Ahmed, and I'm the founder of meedAI</h1>
              </div>
              <h1>
                Great to meet you! I'm Ahmed, the founder of meedAI. I started
                meedAI for the simple reason that I saw a gap in the marketplace
                in the recruitment of AI teams. Both candidates and companies
                were dissatisfied with the status quo- so clearly there was a
                need for change.
              </h1>
              <h1>
                Recruitment often gets a bad rep- but why? Sourcing the best
                talent for startups, especially at seed round is incredibly
                important to both the longevity and scalability of the company.
                These hires are incredibly important and not just another cog in
                a big wheel of corporate. The reality is that the tech world
                moves faster than most traditional recruitment companies allow
                for and with AI that speed is doubled. These are the companies
                that are pioneering the future of tomorrow. They need the best
                of the best at speed.
              </h1>
              <h1>
                I created meedAI to solve this problem. Need consultants,
                strategists, permanent hires? Need marketing and go to market
                commercial support? Need legal advice on IP, NDAs etc? Let me
                guide you through building your business with the ease of
                knowing you’ve hired the best person for the right job in budget
                and quickly.
              </h1>
              <h1>
                I look forward to working together, drop me an email and let me
                buy you a coffee to talk you through meedAI.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_two;
