"use client";

import React, { useEffect, useState } from "react";
import { getImageSrc } from "@/lib/getImageSrc";
// Importing all the local images
import imgadriana1 from "@/images/Mobile/ski/Adriana Howerton - Brasil/1.webp";
import imgadriana2 from "@/images/Mobile/ski/Adriana Howerton - Brasil/2.webp";
import imgadriana3 from "@/images/Mobile/ski/Adriana Howerton - Brasil/3.webp";
import imgadriana4 from "@/images/Mobile/ski/Adriana Howerton - Brasil/4.webp";
import imgadriana5 from "@/images/Mobile/ski/Adriana Howerton - Brasil/5.webp";
import imgadriana6 from "@/images/Mobile/ski/Adriana Howerton - Brasil/6.webp";
import imgadriana7 from "@/images/Mobile/ski/Adriana Howerton - Brasil/7.webp";

import Cloe1 from "@/images/Mobile/ski/Cloe Chiodi - France/1.webp";
import Cloe2 from "@/images/Mobile/ski/Cloe Chiodi - France/2.webp";
import Cloe3 from "@/images/Mobile/ski/Cloe Chiodi - France/3.webp";
import Cloe4 from "@/images/Mobile/ski/Cloe Chiodi - France/4.webp";
import Cloe5 from "@/images/Mobile/ski/Cloe Chiodi - France/5.webp";
import Cloe6 from "@/images/Mobile/ski/Cloe Chiodi - France/6.webp";

import Elin1 from "@/images/Mobile/ski/Elin Silverio - Italy/1.webp";
import Elin2 from "@/images/Mobile/ski/Elin Silverio - Italy/2.webp";
import Elin3 from "@/images/Mobile/ski/Elin Silverio - Italy/3.webp";
import Elin4 from "@/images/Mobile/ski/Elin Silverio - Italy/4.webp";
import Elin5 from "@/images/Mobile/ski/Elin Silverio - Italy/5.webp";

import Irene1 from "@/images/Mobile/ski/Irene Sharp - USA/1.webp";
import Irene2 from "@/images/Mobile/ski/Irene Sharp - USA/2.webp";
import Irene3 from "@/images/Mobile/ski/Irene Sharp - USA/3.webp";
import Irene4 from "@/images/Mobile/ski/Irene Sharp - USA/5.webp";
import Irene5 from "@/images/Mobile/ski/Irene Sharp - USA/6.webp";
import Irene6 from "@/images/Mobile/ski/Irene Sharp - USA/7.webp";
import Irene7 from "@/images/Mobile/ski/Irene Sharp - USA/8.webp";
import Irene8 from "@/images/Mobile/ski/Irene Sharp - USA/9.webp";

import Megan1 from "@/images/Mobile/ski/Megan Hackbarth - USA/1.webp";
import Megan2 from "@/images/Mobile/ski/Megan Hackbarth - USA/2.webp";
import Megan3 from "@/images/Mobile/ski/Megan Hackbarth - USA/3.webp";
import Megan4 from "@/images/Mobile/ski/Megan Hackbarth - USA/4.webp";
import Megan5 from "@/images/Mobile/ski/Megan Hackbarth - USA/5.webp";
import Megan6 from "@/images/Mobile/ski/Megan Hackbarth - USA/6.webp";
import Megan7 from "@/images/Mobile/ski/Megan Hackbarth - USA/7.webp";

import Niccolo1 from "@/images/Mobile/ski/Niccolo Bucchiero - Italy/1.webp";
import Niccolo2 from "@/images/Mobile/ski/Niccolo Bucchiero - Italy/2.webp";
import Niccolo3 from "@/images/Mobile/ski/Niccolo Bucchiero - Italy/3.webp";
import Niccolo4 from "@/images/Mobile/ski/Niccolo Bucchiero - Italy/4.webp";

import Robert1 from "@/images/Mobile/ski/Robert Horwitz - USA/1.webp";
import Robert2 from "@/images/Mobile/ski/Robert Horwitz - USA/2.webp";
import Robert3 from "@/images/Mobile/ski/Robert Horwitz - USA/3.webp";
import Robert4 from "@/images/Mobile/ski/Robert Horwitz - USA/4.webp";
import Robert5 from "@/images/Mobile/ski/Robert Horwitz - USA/5.webp";
import Robert6 from "@/images/Mobile/ski/Robert Horwitz - USA/6.webp";
import Robert7 from "@/images/Mobile/ski/Robert Horwitz - USA/7.webp";
import Robert8 from "@/images/Mobile/ski/Robert Horwitz - USA/8.webp";



///////////////////////////////// Evetns
import Baies1 from "@/images/Mobile/events/Baies - Content package and events/1.webp";
import Baies2 from "@/images/Mobile/events/Baies - Content package and events/2.webp";
import Baies3 from "@/images/Mobile/events/Baies - Content package and events/3.webp";
import Baies4 from "@/images/Mobile/events/Baies - Content package and events/4.webp";
import Baies5 from "@/images/Mobile/events/Baies - Content package and events/5.webp";
import Baies6 from "@/images/Mobile/events/Baies - Content package and events/6.webp";
import Baies7 from "@/images/Mobile/events/Baies - Content package and events/7.webp";
import Baies8 from "@/images/Mobile/events/Baies - Content package and events/8.webp";
import Baies9 from "@/images/Mobile/events/Baies - Content package and events/9.webp";
import Baies10 from "@/images/Mobile/events/Baies - Content package and events/10.webp";
import Baies11 from "@/images/Mobile/events/Baies - Content package and events/11.webp";

import Blondish1 from "@/images/Mobile/events/Blondish - Private party/1.webp";
import Blondish2 from "@/images/Mobile/events/Blondish - Private party/2.webp";
import Blondish3 from "@/images/Mobile/events/Blondish - Private party/3.webp";
import Blondish4 from "@/images/Mobile/events/Blondish - Private party/4.webp";
import Blondish5 from "@/images/Mobile/events/Blondish - Private party/5.webp";
import Blondish6 from "@/images/Mobile/events/Blondish - Private party/6.webp";
import Blondish7 from "@/images/Mobile/events/Blondish - Private party/7.webp";
import Blondish8 from "@/images/Mobile/events/Blondish - Private party/8.webp";

import Bob1 from "@/images/Mobile/events/Bob Sinclair - Private party/1.webp";
import Bob2 from "@/images/Mobile/events/Bob Sinclair - Private party/2.webp";
import Bob3 from "@/images/Mobile/events/Bob Sinclair - Private party/3.webp";
import Bob4 from "@/images/Mobile/events/Bob Sinclair - Private party/4.webp";
import Bob5 from "@/images/Mobile/events/Bob Sinclair - Private party/5.webp";
import Bob6 from "@/images/Mobile/events/Bob Sinclair - Private party/6.webp";
import Bob7 from "@/images/Mobile/events/Bob Sinclair - Private party/7.webp";

import Claptone1 from "@/images/Mobile/events/Claptone - Private party/1.webp";
import Claptone2 from "@/images/Mobile/events/Claptone - Private party/2.webp";
import Claptone3 from "@/images/Mobile/events/Claptone - Private party/3.webp";
import Claptone4 from "@/images/Mobile/events/Claptone - Private party/4.webp";
import Claptone5 from "@/images/Mobile/events/Claptone - Private party/5.webp";

import Folie1 from "@/images/Mobile/events/Folie Douce Event/1.webp";
import Folie2 from "@/images/Mobile/events/Folie Douce Event/2.webp";
import Folie3 from "@/images/Mobile/events/Folie Douce Event/3.webp";
import Folie4 from "@/images/Mobile/events/Folie Douce Event/4.webp";
import Folie5 from "@/images/Mobile/events/Folie Douce Event/5.webp";
import Folie6 from "@/images/Mobile/events/Folie Douce Event/6.webp";
import Folie7 from "@/images/Mobile/events/Folie Douce Event/7.webp";
import Folie8 from "@/images/Mobile/events/Folie Douce Event/8.webp";

import Mangeoire1 from "@/images/Mobile/events/Mangeoire - Content package and events/1.webp";
import Mangeoire2 from "@/images/Mobile/events/Mangeoire - Content package and events/2.webp";
import Mangeoire3 from "@/images/Mobile/events/Mangeoire - Content package and events/3.webp";
import Mangeoire4 from "@/images/Mobile/events/Mangeoire - Content package and events/4.webp";
import Mangeoire5 from "@/images/Mobile/events/Mangeoire - Content package and events/5.webp";
import Mangeoire6 from "@/images/Mobile/events/Mangeoire - Content package and events/6.webp";
import Mangeoire7 from "@/images/Mobile/events/Mangeoire - Content package and events/7.webp";
import Mangeoire8 from "@/images/Mobile/events/Mangeoire - Content package and events/8.webp";
import Mangeoire9 from "@/images/Mobile/events/Mangeoire - Content package and events/9.webp";
import Mangeoire10 from "@/images/Mobile/events/Mangeoire - Content package and events/10.webp";
import Mangeoire11 from "@/images/Mobile/events/Mangeoire - Content package and events/11.webp";
import Mangeoire12 from "@/images/Mobile/events/Mangeoire - Content package and events/12.webp";

import Marina1 from "@/images/Mobile/events/Marina Diniz - Live section and photography/1.webp";
import Marina2 from "@/images/Mobile/events/Marina Diniz - Live section and photography/2.webp";
import Marina3 from "@/images/Mobile/events/Marina Diniz - Live section and photography/3.webp";
import Marina4 from "@/images/Mobile/events/Marina Diniz - Live section and photography/4.webp";

import Morgen1 from "@/images/Mobile/events/Morgen Shtern - Private party/1.webp";
import Morgen2 from "@/images/Mobile/events/Morgen Shtern - Private party/2.webp";
import Morgen3 from "@/images/Mobile/events/Morgen Shtern - Private party/3.webp";
import Morgen4 from "@/images/Mobile/events/Morgen Shtern - Private party/4.webp";
import Morgen5 from "@/images/Mobile/events/Morgen Shtern - Private party/5.webp";
import Morgen6 from "@/images/Mobile/events/Morgen Shtern - Private party/6.webp";

import Swae1 from "@/images/Mobile/events/Swae Lee - Private party/1.webp";
import Swae2 from "@/images/Mobile/events/Swae Lee - Private party/2.webp";
import Swae3 from "@/images/Mobile/events/Swae Lee - Private party/3.webp";
import Swae4 from "@/images/Mobile/events/Swae Lee - Private party/4.webp";
import Swae5 from "@/images/Mobile/events/Swae Lee - Private party/5.webp";

// ******************************************************* mobile screen
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfolioright.css";
const Mobileslider = () => {
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "slick-dots", // or "slick-dots bordered" for the bordered variant
};

const peopleData = [
  {
    name: "Adriana H.",
    location: "Brazil",
    type: "ski",
    description:
      "They covered our celebration with total discretion and still caught every important moment. The video feels natural and stylish, exactly what we wanted. Perfect choice for private event photography in Courchevel.",
    images: [imgadriana1, imgadriana2, imgadriana3, imgadriana4, imgadriana5, imgadriana6, imgadriana7],
  },
  {
    name: "Cloe C.",
    location: "France",
    type: "ski",
    description:
      "They have a real eye for detail. The photos feel natural but also refined, like something out of a magazine. The whole process was smooth. Highly recommend for anyone wanting exclusive photography in Courchevel.",
    images: [Cloe1, Cloe2, Cloe3, Cloe4, Cloe5, Cloe6],
  },
  {
    name: "Elin S.",
    location: "Italy",
    type: "ski",
    description:
      "I’ve worked with Kevin several times and he’s always consistent. Professional, discreet, and the results are always high-end. I wouldn’t go with anyone else for luxury ski videography Courchevel.",
    images: [Elin1, Elin2, Elin3, Elin4, Elin5],
  },
  {
    name: "Irene S.",
    location: "USA",
    type: "ski",
    description:
      "Our group wanted both fun shots and elegant photos, and they gave us exactly that. The balance was perfect, and now we have memories we’ll always keep. It’s the ideal service for families skiing in Courchevel.",
    images: [Irene1, Irene2, Irene3, Irene4, Irene5, Irene6, Irene7, Irene8],
  },
  {
    name: "Megan H.",
    location: "USA",
    type: "ski",
    description:
      "Everything felt effortless. They understood what we were looking for and gave us photos and video that really bring back the Courchevel feeling. The best way to remember a luxury ski holiday in Courchevel.",
    images: [Megan1, Megan2, Megan3, Megan4, Megan5, Megan6, Megan7],
  },
  {
    name: "Niccolò B.",
    location: "Italy",
    type: "ski",
    description:
      "As a ski instructor, I’ve worked with different photographers, but Courchevel Media is on another level. They know how to move on the slopes and capture the action naturally. Definitely the best for ski filming in Courchevel.",
    images: [Niccolo2, Niccolo1, Niccolo3, Niccolo4],
  },
  {
    name: "Robert H.",
    location: "USA",
    type: "ski",
    description:
      "Courchevel Media made it so easy. They filmed our family on the slopes without ever getting in the way, and the photos and video looked amazing. Delivery was super quick too. If you want luxury ski photography in Courchevel, they’re the ones to call.",
    images: [Robert1, Robert2, Robert2, Robert3, Robert4, Robert5, Robert6, Robert7, Robert8],
  },
  {
    name: "Baies",
    location: "Agency",
    type: "events",
    description:
      "We asked Courchevel Media to handle content for all of our events, and everything went perfectly. They were easy to work with, professional on-site, and the photos and videos really captured the atmosphere.",
    images: [Baies1, Baies2, Baies3, Baies4, Baies5, Baies6, Baies7, Baies8, Baies9, Baies10, Baies11],
  },
  {
    name: "Blondish",
    location: "Private Party",
    type: "events",
    description:
      "They made sure the whole atmosphere of our party came through in both photos and video. Guests loved the coverage, and we had everything delivered fast.",
    images: [Blondish1, Blondish2, Blondish3, Blondish4, Blondish5, Blondish6, Blondish7, Blondish8],
  },
  {
    name: "Bob S.",
    location: "Private Party",
    type: "events",
    description:
      "The team worked seamlessly with us and delivered an incredible recap of the event. Discreet, professional, and quick turnaround. Couldn’t have asked for more.",
    images: [Bob1, Bob2, Bob3, Bob4, Bob5, Bob6, Bob7],
  },
  {
    name: "Claptone",
    location: "Private Party",
    type: "events",
    description:
      "Courchevel Media captured the energy of the night perfectly. From the crowd to the stage moments, every detail was covered with style and speed. A top choice for private events.",
    images: [Claptone1, Claptone2, Claptone3, Claptone4, Claptone5],
  },
  {
    name: "Folie D.",
    location: "Event",
    type: "events",
    description:
      "Courchevel Media delivered fantastic coverage of our event. They handled a large crowd and complex logistics with professionalism, and the content was outstanding.",
    images: [Folie1, Folie2, Folie3, Folie4, Folie5, Folie6, Folie7, Folie8],
  },
  {
    name: "Mangeoire",
    location: "Content Package and Events",
    type: "events",
    description:
      "Courchevel Media covered all our events at Mangeoire and did an excellent job. The team was professional, easy to work with, and delivered content that really reflected the vibe of our nights.",
    images: [Mangeoire1, Mangeoire2, Mangeoire3, Mangeoire4, Mangeoire5, Mangeoire6, Mangeoire7, Mangeoire8, Mangeoire9, Mangeoire10, Mangeoire11, Mangeoire12],
  },
  {
    name: "Marina D.",
    location: "Live Section and Photography",
    type: "events",
    description:
      "They covered both photo and video for us, managing a busy live event with total ease. The quality was high-end, and they adapted to our needs quickly.",
    images: [Marina1, Marina2, Marina3, Marina4],
  },
  {
    name: "Morgen S.",
    location: "Private Party",
    type: "events",
    description:
      "They blended into the event perfectly, capturing both the performance and the crowd without missing a moment. Fast delivery and polished results.",
    images: [Morgen1, Morgen2, Morgen3, Morgen4, Morgen5, Morgen6],
  },
  {
    name: "Swae L.",
    location: "Private Party",
    type: "events",
    description:
      "The energy of the performance and the crowd was captured perfectly. Professional from start to finish and delivered exactly what we needed.",
    images: [Swae1, Swae2, Swae3, Swae4, Swae5],
  },
];

  const [activeTab, setActiveTab] = useState("ski");
  const [hoveredIndex, setHoveredIndex] = useState(null); // To track which person is hovered
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(peopleData.length).fill(0) // Initialize the indexes for all people
  );
  const filteredData = peopleData.filter((item) => item.type === activeTab);
  useEffect(() => {
    /* Videos - Connect with CMS Video Link */
    document.querySelectorAll("[data-cms-src]").forEach((el, index) => {
      const src = el.getAttribute("data-cms-src");
      const thumbnail = el.getAttribute("data-cms-thumbnail");
      const slug = el.getAttribute("data-cms-slug");
      const slugMobile = el.getAttribute("data-cms-slug-mobile");

      const videoEl = el.querySelector("video");
      const videoControlEl = el.querySelector(
        "[data-w-bg-video-control][aria-controls]"
      );

      if (thumbnail) {
        videoEl.setAttribute("poster", thumbnail);
      }

      if (slug) {
        videoEl.muted = false;
        videoEl.setAttribute("id", `video-${slug}-${index}`);
        videoControlEl.setAttribute("aria-controls", `video-${slug}-${index}`);
      }

      if (slugMobile) {
        videoEl.muted = false;
        videoEl.setAttribute("id", `video-mobile-${slugMobile}-${index}`);
        videoControlEl.setAttribute(
          "aria-controls",
          `video-mobile-${slugMobile}-${index}`
        );
      }

      videoEl.innerHTML = `<source src="${src}${
        !thumbnail ? "#t=1" : ""
      }" type="video/mp4">`;
    });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [sliderIndexes, setSliderIndexes] = useState(
    Array(peopleData.length).fill(0) // Initialize each person's slider index to 0
  );

  const leftarrow = (index) => {
    setSliderIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] - 1 + peopleData[index].images.length) %
        peopleData[index].images.length;
      return newIndexes;
    });
  };

  const rightarrow = (index) => {
    setSliderIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % peopleData[index].images.length;
      return newIndexes;
    });
  };
  const bgVideo = `
    [data-wf-bgvideo-fallback-img] {
                                  display: none;
                                }

                                @media (prefers-reduced-motion: reduce) {
                                  [data-wf-bgvideo-fallback-img] {
                                    position: absolute;
                                    z-index: -100;
                                    display: inline-block;
                                    height: 100%;
                                    width: 100%;
                                    object-fit: cover;
                                  }
                                }
                                  `;

  // images slider funciotnlaityes

  const [imageIndexes, setImageIndexes] = useState({});

  useEffect(() => {
    // Set up intervals for each element in the filteredData
    const intervals = filteredData.map((elem, i) => {
      return setInterval(() => {
        setImageIndexes((prevIndexes) => ({
          ...prevIndexes,
          [i]: (prevIndexes[i] + 1 || 1) % elem.images.length, // Cycle through the images
        }));
      }, 1000); // Change every 1 second
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval)); // Cleanup intervals on unmount
    };
  }, [filteredData]);
  return (
    <div className="">
    
      <div className="video-tabs_menu hidden-scrollbar w-tab-menu">
        <a
          data-w-tab="Tab 1"
          onClick={() => setActiveTab("ski")}
          className={`video-tabs_tab-link cursor-pointer ${
            activeTab === "ski" ? "active" : ""
          }`}
        >
          <div className="svg-icon _1x1 w-embed">
            <i className="fa-solid fa-person-skiing" style={{color:"white"}}></i>
          </div>
          <div style={{color:"white"}}>Ski</div>
        </a>
        <a
          onClick={() => setActiveTab("events")}
          className={`video-tabs_tab-link cursor-pointer ${
            activeTab === "events" ? "active" : ""
          }`}
        >
          <div className="svg-icon _1x1 w-embed">
            <i className="fa-solid fa-champagne-glasses" style={{color:"white"}}></i>
          </div>
          <div style={{color:"white"}}>Events</div>
        </a>
        {/* <a
          onClick={() => setActiveTab("realestate")}
          data-w-tab="Tab 3"
          className={`video-tabs_tab-link cursor-pointer ${
            activeTab === "realestate" ? "active" : ""
          }`}
        >
          <div className="svg-icon _1x1 w-embed">
            <i className="fa-solid fa-house" style={{color:"white"}}></i>
          </div>
          <div>
            <strong style={{color:"white"}}>Real Estate</strong>
          </div>
        </a> */}
      </div>
      <div className="mt-[60px] padding-section_home-testimonials">
        {/* mobile secreen  */}
        <div className="home-testimonial-wrap_mobile">
          <div
            className="container-medium w-dyn-list"
            style={{ padding: "0px" }}
          >
            <div
              role="list"
              className="home-testimonial-static w-dyn-items sliderasim "
            >
              <Slider {...settings}>
                {filteredData.map(function (elem, index) {
                  return (
                    <div
                      key={elem.name || index}
                      role="listitem"
                      style={{
                        height: "900px",
                        backgroundColor: "red",
                      }}
                      className="w-dyn-item "
                    >
                      <div className="card mx-4 card-testimonial">
                        <div className="text-color-white">
                          <div className="text-weight-medium">
                            <div className="text-size-large">
                              {elem.description}
                            </div>
                          </div>
                        </div>
                        <div className="card-testimonial_client">
                          <div className="text-color-white">
                            <div className="text-weight-semibold">
                              <div className="text-size-medium">
                                {elem.name}
                              </div>
                            </div>
                          </div>
                          <div className="text-weight-medium">
                            <div>{elem.location}</div>
                          </div>
                        </div>
                        <div className="card-testimonial_video-wrap relative">
                          <div
                            className="video size-auto w-background-video w-background-video-atom"
                            data-cms-thumbnail=""
                            data-autoplay="false"
                            data-loop="true"
                            data-wf-ignore="true"
                            data-video-urls=""
                            data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
                            data-cms-slug-mobile="abraham-lincoln"
                          >
                            <video
                              style={{ width: "1px" }}
                              id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
                              loop
                              muted={false}
                              playsInline
                              suppressHydrationWarning
                              className="opacity-0 relative "
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            ></video>
                            <div className=" w-[100%] z-10">
                              <img
                                className={`w-[100%] h-[400px] object-cover transition-opacity duration-500 ease-in-out`}
                                src={getImageSrc(
                                  elem.images[imageIndexes[index] || 0]
                                )}
                                alt="Image Slider"
                              />
                            </div>
                            <div className="absolute w-[100%] z-10"></div>

                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobileslider;
