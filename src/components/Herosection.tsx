import React from "react"
import "./Hero.scss";
import { useState,useEffect } from "react";
import Undraw from "../assets/svg/skills/heroimg.svg";

const Herosection:React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  let bubleArr = [];
  document.addEventListener("mousemove", (e) => {
    let bubles = document.createElement("bubles");
    let x = e.pageX;
    let y = e.pageY;
    let size = Math.random() * 60;
    bubles.style.width = 1 + size + "px";
    bubles.style.height = 1 + size + "px";
    bubles.style.left = x - size / 2 + "px";
    bubles.style.top = y - size / 2 + "px";
    document.body.appendChild(bubles);
    setTimeout(function () {
      bubles.remove();
    }, 1000);
  });

  const [opacity, setOpacity] = useState<number>(0);

  useEffect(() => {
    setOpacity(1); // Set opacity to 1 when the component mounts
  }, []);

  

  return (
    <section id="hero" className="mt-0">
      <div id="bubbles"></div>
      <div id="bubbles2"></div>
      <div id="bubbles3"></div>
      <div className="flex max-sm:flex-col align-center justify-center my-[20%] sm:my-20">
        <div
          className="fade-in w-full grid place-content-center py-32"
          style={{ opacity }}
        >
          <h1 className="text-white">
            Hi, I am <span className="name text-[#60ffd9]">Gautam Rai</span>
          </h1>
          <p className="font-light text-5xl text-[#8892b6]">
            I build for the Web.
          </p>
          <a href="https://drive.google.com/file/d/1iIiFdYYQBve5vtEpn9Y7UCkkO_yQI9uo/view?usp=sharing">
            <button className="resume-button bg-[#09172b] text-[#8892b6] rounded-[10px] mx-auto px-3 my-2">
              {" "}
              Resume{" "}
            </button>
          </a>
        </div>
        <div
          className="fade-in w-full my-4 sm:my-0 text-center"
          style={{ opacity }}
        >
          <img
            src={Undraw}
            alt=""
            className="front-img w-6/12 h-6/12 inline-block"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;

