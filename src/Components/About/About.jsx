import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward, IoCode, IoRocket, IoMedal, IoLeaf } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div className="md:flex flex-wrap items-center">
        <img className="md:h-80 md:w-1/2 object-cover" src={AboutImg} alt="About img" />
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">About</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <IoArrowForward size={30} className="mt-1" />
              <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                Full Stack Web Developer
              </h1>
            </div>
            <div className="flex items-start gap-3">
              <IoCode size={30} className="mt-1 text-blue-500" />
              <p className="text-sm md:text-md leading-tight my-2">
                Dedicated web developer with 3 years of experience in delivering impactful digital solutions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IoRocket size={30} className="mt-1 text-purple-400" />
              <p className="text-sm md:text-md leading-tight my-2">
                IT journey began at 29, fueled by a passion for technology and a commitment to delivering high-quality projects.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IoMedal size={30} className="mt-1 text-yellow-500" />
              <p className="text-sm md:text-md leading-tight my-2">
                Holds a Master’s degree with a gold medal and a proficiency certificate, underscoring dedication to excellence.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IoLeaf size={30} className="mt-1 text-green-700" />
              <p className="text-sm md:text-md leading-tight my-2">
                Outside of work, finds balance and inspiration in organic gardening and continuously seeks personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
