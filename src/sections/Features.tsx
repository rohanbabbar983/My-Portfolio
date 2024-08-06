"use client";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "Bookings.com",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
    description: "An advanced hotel booking and management platform with seamless user experience, real-time booking updates, and robust hotel management features. It integrates payment processing and media management for a comprehensive solution.",
    duration: "Jun 2024 - July 2024",
    image: "/bookings-com.png",
    url: "https://bookings-com.onrender.com/", // Replace with your actual URL
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "Eats.com",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
    description: "A dynamic food delivery and management system that simplifies ordering, delivery tracking, and restaurant management. It features a user-friendly interface, efficient order processing, and integrated payment options.",
    duration: "May 2024 - June 2024",
    image: "/Eats.png",
    url: "https://eats-com-frontend.onrender.com/", // Replace with your actual URL
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "School Site",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
    description: "A comprehensive website designed for managing school activities, student information, and faculty communication. It includes features for event management, academic tracking, and interactive content.",
    duration: "July 2024 - July 2024",
    image: "/School.png",
    url: "https://school-site-frontend.onrender.com/", // Replace with your actual URL
  },
];

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-4xl font-medium text-center tracking-tighter">
          Personal Projects
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto tracking-tight text-center mt-5">
          Check out my work! These samples highlight my skills and the
          innovative solutions I've crafted for various challenges.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-2">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className={`border items-center border-white/15 flex p-2.5 md:flex-1 rounded-xl gap-2.5 cursor-pointer ${
                selectedTab.title === tab.title ? "border border-purple-800" : ""
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay loop />
              </div>
              <div>{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 ">
          <div className="border border-white/15 rounded-xl p-5 flex flex-col md:flex-row items-center">
            <Image
              src={selectedTab.image}
              alt={selectedTab.title}
              className="w-full object-contain md:w-1/3 rounded-lg"
            />
            <div className="mt-5 md:mt-0 md:ml-10 text-center md:text-left">
              <a target="_blank" href={selectedTab.url} className="text-2xl flex justify-center md:justify-start items-center gap-1 font-semibold">{selectedTab.title}<FaLink size={20}/>
              </a>
              <p className="mt-3 text-white/50">{selectedTab.description}</p>
              <p className="mt-2 text-white/70">{selectedTab.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
