import Navbar from "@/Components/Navbar";
import Cons_Section_two from "@/Components/Solutions/AIConsulting/Cons_Section_two";
import Consulting_Section_one from "@/Components/Solutions/AIConsulting/Consulting_Section_one";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Consulting_Section_one />
      <Cons_Section_two />
    </div>
  );
}

export default page;
