"use client";
import Button from "@/components/Button";
import stars from "../assets/stars.png"
import {motion , useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress}= useScroll({
    target:sectionRef,
    offset:["start end", "end start"]
  });
  const backgroundPositionY= useTransform(scrollYProgress, [0,1],[-300,300]);
  return (
    <motion.section ref={sectionRef} id="overview" className="relative overflow-hidden h-[585px] md:h-[750px] flex items-center  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
    style={{
      backgroundImage: `url(${stars.src})`,
      backgroundPositionY,

    }} animate={{
      backgroundPositionX: stars.width,
    }}
    transition={{duration:60, repeat:Infinity , ease:"linear"}}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgba(14,0,36,0.5)_78%,transparent)]"></div>

      <div className="absolute h-72 w-72 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>


      <motion.div style={{
        translateY:"-50%",
        translateX:"-50%"
      }} animate={{
        rotate: "1turn",

      }} transition={{duration:60, repeat:Infinity , ease:"linear"}} className="absolute h-[354px]  w-[354px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   ">
        <div className="absolute h-2 w-2  bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2  bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 inline-flex items-center justify-center border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2">
         <div className="h-2 w-2 bg-white rounded-full "></div>
        </div>
      </motion.div>

      <motion.div animate={{rotate:"-1turn"}} transition={{duration:60, repeat:Infinity , ease:"linear"}} style={{
        translateY:"-50%",
        translateX:"-50%"
      }}  className="absolute h-[454px]  w-[454px] md:h-[780px] md:w-[780px] border border-white opacity-20 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed  ">
      </motion.div>


      <motion.div animate={{rotate:"1turn"}} transition={{duration:30, repeat:Infinity , ease:"linear"}} style={{
        translateY:"-50%",
        translateX:"-50%"
      }} className="absolute h-[554px]  w-[554px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   ">
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>

      <div className="container relative mt-10">
        <h1 className="text-5xl md:text-8xl md:leading-none font-semibold tracking-tighter text-center bg-clip-text">
          <span className="text-transparent bg-gradient-to-tl from-white/20 via-white to-white/50 bg-clip-text">
            Rohan Babbar
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          "I am a passionate software developer specializing in web development
          with a focus on MERN Stack."
        </p>
        <div className="flex justify-center mt-4">
          <Button>Welcome!</Button>
        </div>
      </div>
    </motion.section>
  );
};
