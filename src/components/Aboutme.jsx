import './About.css';
import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { skillsData } from '../Data/SkillsData'
import { skillsImage } from "../utils/SkillsImage";
 

export default function Aboutme() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const marqueeStyle = {
    width: "101%", // Set the width to 101% by default
    paddingTop: "4px",
  };

  useEffect(() => {
    // Check if the screen width is less than or equal to 768 pixels (you can adjust this value as needed)
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    // Add event listener to track screen resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the state correctly on page load
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If it's a small device, update the width in the marqueeStyle object
  if (isSmallDevice) {
    marqueeStyle.width = "345px";
  }

  return (
    <section id="About">
      <div className="px-25  h-full w-full cursor-pointer mx-auto md:mx-150 flex flex-wrap py-5">
        <div className="w-full md:w-6/12 pl-5 flex flex-col justify-center items-center md:items-center">
          <img
            className="dp-image h-full lg:h-[83.5%] w-[70%] sm:w-[80%] lg:w-6/12 py-4 lg:pr-10 px-2"
            src="https://avatars.githubusercontent.com/u/124668418?v=4"
            alt="dp.png"
          />
        </div>
        <div className="w-full md:w-6/12 pl-5 md:pl-8 lg:pl-10 flex flex-col justify-center items-center md:items-start lg:items-center">
          <h1 className="about-head text-[#60ffd9] text-3xl font-bold pl-5">
            About Me
          </h1>
          <p className="text px-5 leading-8 text-xl text-[#8892b6]">
            Hi,
            <br />I am Gautam Rai, a second-year Computer Engineering student at
            Swami Vivekanand Societys Institute of Technology [Vesit] in Mumbai.
            I am an avid open-source contributor and a keen learner. I am always
            enthusiastic about collaborating with new people and seizing
            opportunities to interact with them. <br />
            In my pursuit of personal growth, I find solace in two activities:
            traveling and playing the guitar. Exploring new places helps me
            unwind and gain fresh perspectives, while strumming the guitar
            allows me to express myself creatively. Furthermore, reading books
            is a favorite pastime of mine during my leisure hours, as it not
            only expands my knowledge but also provides a means of relaxation.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="skills-heading text-[#60ffd9] text-center pb-3">
          My Skills
        </h1>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          style={marqueeStyle}
        >
          {skillsData.map((skill, id) => (
            <div className="skill--box" key={id}>
              <img
                className="skill-image"
                src={skillsImage(skill)}
                alt={skill}
              />
              <p className="text-[#8892b6]">{skill}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

