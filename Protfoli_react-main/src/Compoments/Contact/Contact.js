import React from "react";
// import contactImage from "../../Assests/contact.png";
import newOneContect from "../../Assests/contect.svg";
import TrackVisibility from "react-on-screen";
import "animate.css";
function Contact() {
  return (
    <>
      <div className="w-full p-14">
        <div className="m-6  text-white">
          <h3 className="text-center text-5xl mb-4 justify-evenly">
            Get In <span className="text-[#cd5ff8]">Touch</span>
          </h3>
          <div className="flex justify-around gap-12">
            <div className="w-[40%]">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img
                      src={newOneContect}
                      alt="Header Img"
                      className="w-full h-full"
                    />
                  </div>
                )}
              </TrackVisibility>
              {/* <img src={newOneContect} alt="" /> */}
            </div>
            <div className="w-[60%] p-3 ml-10">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  required
                  className="py-3 px-5 mr-3 mb-3 rounded-lg text-white border border-white bg-transparent"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  required
                  className="py-3 px-5 mr-3 mb-3 rounded-lg  text-white border border-white bg-transparent"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Id"
                  required
                  className="py-3 px-5 mr-3 mb-3 rounded-lg  text-white border border-white bg-transparent"
                />
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Phone No."
                  required
                  className="py-3 px-5 mr-3 mb-3 rounded-lg  text-white border border-white bg-transparent"
                />
                <textarea
                  name=""
                  id=""
                  cols="53"
                  rows="5"
                  placeholder="Message"
                  className="py-3 px-5 mr-3 mb-3 rounded-lg  text-white border border-white bg-transparent"
                ></textarea>
                <div>
                  <button className="px-4 py-2 bg-white text-black w-32 text-left">
                    Say Hello 👋
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
