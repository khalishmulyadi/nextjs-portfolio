"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-transparent leading-normal bg-clip-text bg-gradient-to-r from-secondary via-tertiary to-white text-4xl/none sm:text-5xl/none lg:text-6xl/tight font-extrabold">
            <span className="text-white">Hello, I&apos;m{""} </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Khalish Mulyadi",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Front-End Developer",
                1000,
                "a Software Engineer",
                1000,
                "a System Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 mt-4 lg:text-xl">
            I love to build stuff and talk to computer. I also love to share my
            knowledge and always eager to learn more.
          </p>
          <div className="flex flex-col items-center md:flex-row gap-3">
            <Link href="mailto:khalishmulyadi21@gmail.com">
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-secondary hover:opacity-80 text-white">
                Hire Me
              </button>
            </Link>
            <Link href="https://drive.google.com/uc?export=download&id=1-J0NJMWufpL8-AnvEkwyWu9i0Io5O7eE">
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-secondary hover:opacity-80 text-white">
                <span className="block bg-mainBg rounded-full px-5 py-2">
                  Download Resume
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }} 
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-secondary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/dev-profile-zep-2.png"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              alt="dev-profile"
              height={700}
              width={700}
              priority={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
