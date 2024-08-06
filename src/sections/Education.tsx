"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import { motion } from "framer-motion";

import Image from "next/image";

const EducationProp = [
  {
    text: "Achieved a CGPA of 9.4 in Computer Science, demonstrating strong academic performance and technical skills.",
    name: "Guru Gobind Singh University",
    title: "B-Tech CSE",
    avatarImg: avatar1,
  },
  {
    text: "Graduated with 96.2% in Class-12th, reflecting high dedication and excellence throughout my academic journey.",
    name: "Rpvv, Yamuna Vihar",
    title: "Class-12th",
    avatarImg: avatar2,
  },
  {
    text: "Completed Class-10th with a score of 91.2%, establishing a solid foundation in essential subjects like maths , science, english",
    name: "GBSSS, GT Road",
    title: "Class-10th",
    avatarImg: avatar3,
  },
  {
    text: "Achieved a CGPA of 9.4 in Computer Science, demonstrating strong academic performance and technical skills.",
    name: "Guru Gobind Singh University",
    title: "B-Tech CSE",
    avatarImg: avatar1,
  },
  {
    text: "Graduated with 96.2% in Class-12th, reflecting high dedication and excellence throughout my academic journey.",
    name: "Rpvv, Yamuna Vihar",
    title: "Class-12th",
    avatarImg: avatar2,
  },
  {
    text: "Completed Class-10th with a score of 91.2%, establishing a solid foundation in essential subjects like maths , science, english",
    name: "GBSSS, GT Road",
    title: "Class-10th",
    avatarImg: avatar3,
  },
  {
    text: "Achieved a CGPA of 9.4 in Computer Science, demonstrating strong academic performance and technical skills.",
    name: "Guru Gobind Singh University",
    title: "B-Tech CSE",
    avatarImg: avatar1,
  },
  {
    text: "Graduated with 96.2% in Class-12th, reflecting high dedication and excellence throughout my academic journey.",
    name: "Rpvv, Yamuna Vihar",
    title: "Class-12th",
    avatarImg: avatar2,
  },
  {
    text: "Completed Class-10th with a score of 91.2%, establishing a solid foundation in essential subjects like maths , science, english",
    name: "GBSSS, GT Road",
    title: "Class-10th",
    avatarImg: avatar3,
  },
];
export const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="text-4xl text-center tracking-tighter font-medium">
          My Qualifications
        </h2>
        <p className="text-white/50 text-center mt-5 tracking-tight max-w-2xl mx-auto ">
          Explore the journey through my academic achievements, from top-tier
          university degrees to exceptional performance in school, showcasing
          the dedication and skills that have shaped my career.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_60%,transparent)]">
        <motion.div
            initial={{ translateX: "0%" }}
            animate={{ translateX: "-200%" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
className="flex gap-5 ">
        {EducationProp.map((education) => (
          <div
            key={education.name}
            className="border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-md flex-none"
          >
            <div className="text-lg  tracking-tigh md:text-xl"> {education.text} </div>
            <div className="flex  items-center gap-3 mt-5">
              <Image className="h-11 w-11 rounded-lg object-cover " src={education.avatarImg} alt="logo.png" />
              <div className="flex flex-col">
                {" "}
                <div>{education.name}</div>
                <div className="text-white/50 text-sm">{education.title}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      </div>
      </div>
    </section>
  );
};
