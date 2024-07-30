"use client";
import React, { useEffect, useState } from "react";
import {
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import emailjs from "emailjs-com";

function Contact_Section_two() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    to_name: "meedAI",
    from_name: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      from_name: formData.first,
    });
  };

  const handleSubmit = (e) => {
    if (
      formData.first === "" ||
      formData.last === "" ||
      formData.email === "" ||
      formData.service === "" ||
      formData.message === "" ||
      formData.phone === ""
    ) {
      alert("please fill the required Feild");
      return;
    } else {
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
              phone: "",
              service: "",
              message: "",
            });
            // setOpen(true); // Open the dialog after successful email sending
          },
          (error) => {
            console.error("Email sending failed:", error);
          }
        );
    }
  };

  const handleClose = (redirect) => {
    setOpen(false);
    if (redirect) {
      window.location.href = "https://calendly.com/meedai/30min";
    }
  };

  return (
    <div className="w-full md:flex justify-center">
      <div className="md:w-[1300px] py-20 md:flex justify-center">
        <div className="flex flex-col gap-5 px-5 md:px-0 md:w-1/2">
          <div
            id="contact-details"
            className="flex flex-col gap-5 items-center"
          >
            <div className="hidden md:block w-full">
              <div className="md:flex md:gap-5 items-center">
                <TextField
                  value={formData.first}
                  onChange={handleChange}
                  label="First name"
                  fullWidth
                  name="first"
                  required
                />
                <TextField
                  label="Last name"
                  value={formData.last}
                  onChange={handleChange}
                  fullWidth
                  name="last"
                  required
                />
              </div>
            </div>
            <div className="block md:hidden w-full">
              <div className="flex flex-col gap-5">
                <TextField
                  required
                  value={formData.first}
                  onChange={handleChange}
                  label="First name"
                  fullWidth
                  name="first"
                />
                <TextField
                  required
                  value={formData.last}
                  onChange={handleChange}
                  label="Last name"
                  fullWidth
                  name="last"
                />
              </div>
            </div>
            <TextField
              required
              onChange={handleChange}
              value={formData.email}
              name="email"
              label="Email address"
              fullWidth
            />
            <TextField
              required
              onChange={handleChange}
              value={formData.phone}
              name="phone"
              label="phone"
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
              required
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
            <div className="w-full flex gap-5 items-center ">
              <hr className=" w-full border-black" />
              <h1>or</h1>
              <hr className=" w-full border-black" />
            </div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="bg-blue-500 text-white w-full h-14 flex items-center justify-center rounded-md"
            >
              <h1>Book a Meeting</h1>
            </button>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle>Book a Call</DialogTitle>
        <DialogContent>
          <DialogContentText>Would you like to book a call?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact_Section_two;
