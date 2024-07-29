import Navbar from "@/Components/Navbar";
import Events_Section_one from "@/Components/Solutions/AIEvents/Events_Section_one";
import Events_Section_two from "@/Components/Solutions/AIEvents/Events_Section_two";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Events_Section_one />
      <Events_Section_two />
    </div>
  );
}

export default page;
