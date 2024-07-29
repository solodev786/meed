import Contact_Section_one from "@/Components/Contacts/Contact_Section_one";
import Contact_Section_two from "@/Components/Contacts/Contact_Section_two";
import Navbar from "@/Components/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Contact_Section_one />
      <Contact_Section_two />
    </div>
  );
}

export default page;
