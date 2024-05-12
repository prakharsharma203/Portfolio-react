import React from "react";
import wave from "../../Assests/waving-hand.gif";
import hone from "../../Assests/homepro.svg";
import Skills from "./Skills";
import { NavLink } from "react-router-dom";
import "../../Style.css";
import Introduction from "./Introduction";
import newOne from "../../Assests/homenew.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
function Home() {
  return (
    <>
      <section id="home-Background">
        <div className=" w-full p-14" id="hero">
          <div className="pt-1  text-left flex  ">
            <div className="w-[60%]">
              <div className="flex  pl-6 items-center ">
                <span
                  className="w-14 h-14 mb-4"
                  role="img"
                  aria-labelledby="wave"
                >
                  <img className="w-full h-full" src={wave} alt="" />
                </span>
                <h1 className="text-4xl font-medium pl-13 text-white ">Hii </h1>
              </div>
              <div>
                <h1 className="pl-11 text-4xl text-white font-medium">
                  I'M <strong className="text-[#cd5ff8]">Prakhar Sharma</strong>
                </h1>
                <div className="p-12 text-left text-4xl font-semibold">
                  <Skills />
                </div>
                <p className="pl-12 px-14 text-xl font-medium text-white ">
                  I focus on developing user-friendly web applications that meet
                  the client's requirements, with attention to detail,
                  scalability, and performance.
                </p>
              </div>
            </div>
            <div className="w-[40%]">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      src={newOne}
                      alt="Header Img"
                      className="w-full h-full"
                    />
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full p-14">
        <Introduction />
      </div>
    </>
  );
}

export default Home;
