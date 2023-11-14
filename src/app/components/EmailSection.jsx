"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      sender: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      const data = await response.json();
      console.log(data);
      setEmailSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-3">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="">
            <Image className="w-7" src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="">
            <Image className="w-7" src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>

      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              placeholder="john@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              placeholder="Hello! I would like to know..."
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              placeholder="Type your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-5 rounded-lg w-full"
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Email has been sent!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
