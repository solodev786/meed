"use client";
import React, { useEffect, useState } from "react";
import { FaLinkedin, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter, FaMapLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { Menu, MenuItem, TextField } from "@mui/material";
import Link from "next/link";

function Contact_Section_two() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    service: "",
    chat: "",
    message: "",
    to_name: "meedAI",
    from_name: "",
  });

  formData.email = formData.email;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      from_name: formData.first,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    emailjs
      .send(
        "service_i33dj6i",
        "template_x4krcov",
        formData,
        "bAMZbyLKZXuGNR0C6"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({
            first: "",
            last: "",
            email: "",
            service: "",
            chat: "",
            message: "",
          });
          if (window.confirm("Would you like to book a call?")) {
            window.location.href = "https://calendly.com/meedai/30min";
          }
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className=" w-full md:flex justify-center">
      <div className=" md:w-[1300px] py-20 md:flex justify-center">
        <div className=" flex flex-col gap-5 px-5 md:px-0 md:w-1/2">
          <div
            id="contact-details"
            className="flex flex-col gap-5 items-center"
          >
            <div className=" hidden md:block w-full">
              <div className="md:flex md:gap-5 items-center">
                <TextField
                  value={formData.first}
                  onChange={handleChange}
                  label="First name"
                  fullWidth
                  name="first"
                />
                <TextField
                  label="Last name"
                  value={formData.last}
                  onChange={handleChange}
                  fullWidth
                  name="last"
                />
              </div>
            </div>
            <div className=" block md:hidden w-full">
              <div className="flex flex-col gap-5">
                <TextField
                  value={formData.first}
                  onChange={handleChange}
                  label="First name"
                  fullWidth
                  name="first"
                />
                <TextField
                  value={formData.last}
                  onChange={handleChange}
                  label="Last name"
                  fullWidth
                  name="last"
                />
              </div>
            </div>
            <TextField
              onChange={handleChange}
              value={formData.email}
              name="email"
              label="Email address"
              fullWidth
            />
            <TextField
              fullWidth
              select
              label="Choose service"
              onChange={handleChange}
              value={formData.service}
              name="service"
            >
              <MenuItem value="AI Talent">AI Talent</MenuItem>
              <MenuItem value="AI Consulting">AI Consulting</MenuItem>
              <MenuItem value="AI Events">AI Events</MenuItem>
            </TextField>

            <TextField
              value={formData.message}
              onChange={handleChange}
              name="message"
              label="Leave us a message"
              fullWidth
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white w-full h-14 flex items-center justify-center rounded-md"
            >
              <h1>Submit</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact_Section_two;
