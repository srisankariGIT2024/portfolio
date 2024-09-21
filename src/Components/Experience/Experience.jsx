import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TiTickOutline } from "react-icons/ti";
import { FaPhp } from "react-icons/fa";
import DjangoIcon from '../../assets/svgs/django.svg'; // Adjust the path according to your file structure
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <div className="mb-10">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">
          Technologies
        </h1>
        <div className="flex flex-wrap justify-center gap-8 py-10">

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#f1c40f" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <img src={DjangoIcon} alt="Django" className="w-12 h-12" />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#ecf0f1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPhp color="#C70039  " size={50} />
          </span>

        </div>
      </div>
      {/* Experience Section */}
      <div>
        <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">
          Experience
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <TiTickOutline color="#d6eaf8" size={70} />
            <span className="text-white">
              <h2 className="leading-tight">Touchmark Descience</h2>
              <p className="text-sm leading-tight font-thin">
                Sept, 2022 - Present
              </p>
              <ul className="text-sm p-2">
                <li className="my-4">- Maintained and enhanced the existing website, incorporating additional compelling features. Revamped website sections for an improved, visually appealing, and user-friendly interface.</li>
                <li className="my-4">- Collaborated with team members to deliver comprehensive solutions for multiple end customers from inception to completion.</li>
                <li className="my-4">- Championed the role of business analyst, collaborating with cross-functional teams to analyze, prototype, design, and prioritize project requirements.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-center">
            <TiTickOutline color="#d6eaf8" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Trainee Software Engineer, Clorida Technologies</h2>
              <p className="text-sm leading-tight font-thin">
                Sept, 2021 - Aug, 2022
              </p>
              <ul className="text-sm p-2">
                <li className="my-4">- Designed and developed UI and backend functionality for job sites with secure login, dashboards, and applied job features.</li>
                <li className="my-4">- Implemented the mobile-first approach to the existing sites. Learned to interact professionally, present designs, and handle feedback on work.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
