"use client";

import styles from "./Contact.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const linkedInImage = "/linkedin.png";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "" || !formData.email.includes("@")) {
      // Handle form validation errors
      return;
    }

    // Form data is valid, proceed with submission
    localStorage.setItem("formData", JSON.stringify(formData));
    setIsFormSubmitted(true);

    // Render the last submission to the page
    console.log(formData);
  };

  // EMAILJS - send email from contact form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w4b10i6", "template_kg2bmq2", form.current, {
        publicKey: "7fbEPFKwQg92_gfOL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Reset form fields after submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });

          // Clear "Message sent!" text after a delay
          setTimeout(() => {
            setIsFormSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    // Code for 'fade in' transition
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.contactContainer}>
        <h1>Contact Me</h1>

        <div className={styles.divider}></div>

        <div className={styles.contactTextContainer}>
          <p> Have a question or want to get in touch? </p>

          <p> Feel free to reach out! </p>
          <p>
            Fill out the form below, email me, or checkout one of the links
            below.
          </p>
          <div className={styles.divider3}></div>
        </div>

        <form className={styles.contactForm} ref={form}>
          {isFormSubmitted && (
            <motion.p
              className={styles.model}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <p> Message sent! </p>
            </motion.p>
          )}
          <p> Send me a message </p>
          <input
            className={styles.name}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          ></input>
          <input
            className={styles.email}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          ></input>
          <textarea
            className={styles.message}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
          ></textarea>
          <button className={styles.button} type="submit" onClick={sendEmail}>
            {" "}
            Send{" "}
          </button>
        </form>

        <div className="contactInfo">
          <ul>
            <a href="mailto:PaulRuszkay@gmail.com">
              {" "}
              📧 Email: PaulRuszkay@gmail.com{" "}
            </a>
          </ul>
          <ul>
            <a href="https://github.com/PaulRusz">
              {" "}
              📁 GitHub: github.com/PaulRusz{" "}
            </a>
          </ul>
          <ul>
            <img
              src={linkedInImage}
              className={styles.linkedIn}
              alt="LinkedIn"
            ></img>
            <a href="https://www.linkedin.com/in/paul-ruszkay-a2ba075b/">
              {" "}
              LinkedIn - Paul Ruszkay{" "}
            </a>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
