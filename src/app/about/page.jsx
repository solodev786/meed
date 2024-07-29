import Navbar from "@/Components/Navbar";
import Section_one from "@/Components/OurStory/Section_one";
import Section_two from "@/Components/OurStory/Section_two";
import React from "react";

function page() {
  return (
    <div className=" w-full">
      <Navbar />
      <Section_one />
      <Section_two />
    </div>
  );
}

export default page;
