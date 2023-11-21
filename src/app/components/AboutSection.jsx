"use client";
import Image from "next/image";
import React, { useTransition, useState, useRef } from "react";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const aboutSectionVariant = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>HTML, CSS, JS</li>
          <li>React.js,Next.js</li>
          <li>MySQL, Oracle</li>
          <li>Tailwind.css, Bootstrap</li>
          <li>Shopify, WordPress</li>
          <li>System Analysis and Design</li>
        </ul>
      ),
    },

    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li className="mb-4">
            <strong>Gunadarma University | 2018 - 2023</strong>
            <p>Bachelor&apos;s of Computer Science</p>
            <p>GPA: 375/4.00</p>
          </li>
          <li className="mb-4">
            <strong>SMAN 1 Cigombong | 2015 - 2018</strong>
            <p>High School Diploma</p>
            <p>Math and Science</p>
          </li>
        </ul>
      ),
    },

    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li className="mb-4">
            <a
              href="https://www.linkedin.com/in/mochammad-khalish-mulyadi/overlay/1635498020726/single-media-viewer/?profileId=ACoAADHc1gEB3tlr5uyErqMAqort2skyRZ8WDIo"
              target="_blank"
              className="underline"
            >
              <strong>Front-End JavaScript Wave 2 | Jul 2022 - Present</strong>
            </a>
            <p>Binar Academy X Kampus Merdeka</p>
          </li>
          <li className="mb-4">
            <a
              href="https://www.linkedin.com/in/mochammad-khalish-mulyadi/"
              target="_blank"
              className="underline"
            >
              <strong>Oracle for Intermediate | Feb 2021 - Present</strong>
            </a>
            <p>LePKom Gunadarma University</p>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section ref={ref} className="text-white mt-8">
      <motion.div
        variants={aboutSectionVariant}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-8"
      >
        <Image
          src={"/images/About-Image-removebg-transformed.png"}
          alt="About Image"
          width={700}
          height={700}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a Front-End Developer with passion for creating and developing
            useful apps and websites. I am also a passionate IT Business/System
            Analyst. I have experience working with React.js, Next.js, Shopify,
            and WordPress. I also have experience tutoring computer-science
            courses such as DBMS, Java, and ERP. Learning is one of the things
            I&apos;m good at, so I love to learn and work with others to create
            more amazing apps.
          </p>
          <div className="flex flex-row justify-start gap-4 mt-8 overflow-scroll sm:overflow-auto">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              buttonTitle={"Skills"}
            />
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              buttonTitle={"Education"}
            />
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              buttonTitle={"Certifications"}
            />
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
