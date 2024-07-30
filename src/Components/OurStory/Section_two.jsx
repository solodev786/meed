import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function Section_two() {
  return (
    <div className=" w-full flex items-center justify-center py-20">
      <div className=" md:w-[1300px] flex justify-center px-5 md:px-20">
        <div className=" flex flex-col gap-10">
          <div className=" md:flex w-full items-start justify-between ">
            <h1 className=" text-4xl w-1/4 mb-5 md:mb-0">Our story</h1>
            <h2 className=" text-xl font-light md:w-3/4 ">
              The approach taken by most talent firms in the industry is to get
              as much commission out of recently funded startups as possible,
              oftentimes throwing candidates at them, some of whom don’t even
              exist, just to get on the phone, pitch their firm and eventually
              make one placement for an extortionate fee. This approach is not
              only incosniderate of the the needs of startups - to bring on
              experienced talent at an affordable price - but is also inefficent
              at building long-lasting relationships which cater to the best
              interests of clients. {" "}
            </h2>
          </div>
          <div className=" md:flex w-full items-start justify-between ">
            <h1 className=" text-4xl md:w-1/4 mb-5 md:mb-0">How we do</h1>
            <h2 className=" text-xl md:w-3/4 font-light">
              Moreover, this approach pays no consideration to candidates as
              they are not the ones paying, and often involves misleading them
              into applying for roles that don’t actually exist, just so firms
              can find out where they’re interviewing and then target those
              clients. No wonder the recruitment industry has a terrible
              reputation.  Here at meedAI our we have an entirely seperate
              approach where we aim to act in the best interests of both our
              clients AND our candidates, ensuring transparency, efficiency and
              quality at every step of the journey. The AI industry is booming,
              and startups need a talent expert they can trust
            </h2>
          </div>
          <div className=" w-full flex flex-col gap-4 md:items-center mt-16">
            <div className=" flex items-start md:items-center gap-3">
              <h1 className=" text-sm md:text-2xl">
                <PiStarFourFill />
              </h1>
              <h1 className=" text-2xl md:text-4xl font-semibold">
                So welcome to meedAI, your trusted partner{" "}
              </h1>
              <h1 className=" hidden md:block text-sm md:text-2xl">
                <PiStarFourFill />
              </h1>
            </div>
            <div className=" flex items-start md:items-center gap-3">
              <h1 className=" text-sm md:text-2xl"></h1>
              <h1 className=" text-2xl md:text-4xl font-semibold">
                for the people side of AI.
              </h1>
              <h1 className="hidden md:block text-2xl"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_two;
