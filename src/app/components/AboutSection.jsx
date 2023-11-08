"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <p>My skills</p>
        ),
    },

    {
        title: "Education",
        id: "education",
        content: (
            <p>My education</p>
        ),
    },

    {
        title: "Experience",
        id: "experience",
        content: (
            <p>My experience</p>
        ),
    },
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-8">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
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
          <div className="flex flex-row justify-start mt-8">
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
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
              buttonTitle={"Experience"}
            />
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
