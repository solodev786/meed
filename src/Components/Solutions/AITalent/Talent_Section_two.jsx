import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { PiStarFourFill } from "react-icons/pi";
import { SiFigshare } from "react-icons/si";
import { GiFlexibleStar } from "react-icons/gi";
import { MdOutlineAccountBalance } from "react-icons/md";

function Talent_Section_two() {
  return (
    <div className=" w-full  py-10">
      <div className=" flex flex-col gap-10 w-full">
        <div className=" px-5 md:px-20 flex flex-col gap-10 md:w-4/5">
          <h1 className=" text-xl font-light">
            People often say that one week in AI is like a month in any other
            industry, and that is so true. With a market like this, where there
            are changes practically every day, startups like yourself need to be
            able to act swiftly and bring on new talent at a moments notice. 
          </h1>
          <h1 className=" text-xl font-light">
            We also understand that many growing startups do not have the
            capital to invest in full-time hires straight away, as oftentimes
            experienced individuals can cost you anywhere from $200,000 and
            upwards. Moreover, it can feel risky to invest that much capital
            into people who may not end up working for the busines long-term or
            who may not begood cultural fits.
          </h1>
          <h1 className=" text-xl font-light">
            That is why we have developed a contract recruitment service which
            has been meticulously designed to put your best interests at heart
            to ensure we can offer as much value as possible. 
          </h1>
          <h1 className=" text-3xl font-medium">How its works</h1>
        </div>
        <div className=" w-full md:flex items-center text-white">
          <div className=" md:w-1/5 h-72 bg-black  py-5 flex items-center">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-5xl -mt-2" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">1</h1>
                <h1 className=" text-2xl font-semibold">Assesment</h1>
                <h1 className=" w-4/5 font-extralight">
                  Initial call to understand the scope of your needs and current
                  position of your startup
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/5 h-72 bg-[#222222]  py-5 flex items-center">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-5xl -mt-2" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">2</h1>
                <h1 className=" text-2xl font-semibold">Quick Matches</h1>
                <h1 className=" w-4/5 font-extralight">
                  Initial search conducted and best matches sent over within 48
                  hours
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/5 h-72 bg-[#333333]  py-5 flex items-center">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-5xl -mt-2" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">3</h1>
                <h1 className=" text-2xl font-semibold">Feedback</h1>
                <h1 className=" w-4/5 font-extralight">
                  Review the matches with you and get your feedback
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/5 h-72 bg-[#444444]  py-5 flex items-center">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-5xl -mt-2" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">4</h1>
                <h1 className=" text-2xl font-semibold">Screening</h1>
                <h1 className=" w-4/5 font-extralight">
                  Conduct first stage interviews followed and receive feedback
                </h1>
              </div>
            </div>
          </div>
          <div className=" md:w-1/5 h-72 bg-[#555555]  py-5 flex items-center">
            <div className=" flex items-start gap-3">
              <BiSolidRightArrow className=" text-7xl -mt-5" />
              <div className=" flex flex-col gap-4">
                <h1 className=" text-2xl font-medium">5</h1>
                <h1 className=" text-2xl font-semibold">Finalization</h1>
                <h1 className=" w-4/5 font-extralight">
                  Then have 2nd and 3rd stage interviews within 7 days of the
                  initial and either accept or reject the candidate(s).
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className=" py-10 w-full justify-center items-start md:items-center flex gap-3">
            <h1 className=" md:text-2xl">
              <PiStarFourFill />
            </h1>
            <h1 className=" text-4xl font-semibold">
              Benifits Over Traditional Model
            </h1>
            <h1 className="hidden md:block md:text-2xl">
              <PiStarFourFill />
            </h1>
          </div>
          <div className="px-5 md:px-20 md:flex w-full justify-center items-center gap-10">
            <div className=" mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 flex items-center px-10 py-5">
              <div className=" flex flex-col gap-5">
                <SiFigshare className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Expedite</h1>
                <h1 className=" font-light">
                  This method is faster and more efficient at filling urgent
                  hires - as on average it will take from 5 - 10 days to fill
                  your roles
                </h1>
              </div>
            </div>
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 items-center px-10 py-10">
              <div className=" flex flex-col gap-5">
                <GiFlexibleStar className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Flexibility</h1>
                <h1 className=" font-light">
                  The nature of temporary hires is that if the candidate doesn’t
                  work out, there is no long-term commitment but if they are a
                  good fit, contracts can be extended
                </h1>
              </div>
            </div>
            <div className="mb-5 md:mb-0 md:w-96 h-80 bg-gray-200 items-center px-10 py-10 ">
              <div className=" flex flex-col gap-5">
                <MdOutlineAccountBalance className=" text-5xl" />
                <h1 className=" text-3xl font-semibold">Accountability</h1>
                <h1 className=" font-light">
                  The consisitent feedback loop ensures your needs are being met
                  and the standards are consistently high throughout
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talent_Section_two;
