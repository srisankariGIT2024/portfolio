import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";
import resumePDF from '../../assets/resume/myresume.pdf';

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-12 lg:p-20">
      <div className="md:w-1/2 md:pt-10 flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-center md:text-left">
          <TextChange />
        </h1>
        <p className="text-base md:text-lg lg:text-xl tracking-tight my-4 md:my-6 text-center md:text-left">
          Full stack web developer with 3 years of experience | 
          Skilled in both front-end and back-end, delivering effective & user-focused solutions | 
          Expert in creating impactful & client-driven solutions
        </p>
        <a
          href={resumePDF}  
          target="_blank"    
          rel="noopener noreferrer"
          className="mt-4 md:mt-6 lg:mt-8 text-white py-2 px-4 text-base md:text-lg lg:text-xl md:py-3 md:px-6 lg:py-4 lg:px-8 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] inline-block"
        >
          View My Resume
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
        <img
          className="w-48 md:w-64 lg:w-80 xl:w-96 rounded-full"  
          src={avatarImg}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Home;
