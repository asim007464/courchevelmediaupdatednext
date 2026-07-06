"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getImageSrc } from "@/lib/getImageSrc";
import { useLanguage } from "@/context/LanguageProvider";
import Mobileslider from "./Mobileslider";
import imgadriana1 from "@/images/Computer/Ski/Adriana Howerton - Brasil/1.webp";
import imgadriana2 from "@/images/Computer/Ski/Adriana Howerton - Brasil/2.webp";
import imgadriana3 from "@/images/Computer/Ski/Adriana Howerton - Brasil/3.webp";
import imgadriana4 from "@/images/Computer/Ski/Adriana Howerton - Brasil/4.webp";
import imgadriana5 from "@/images/Computer/Ski/Adriana Howerton - Brasil/5.webp";
import imgadriana6 from "@/images/Computer/Ski/Adriana Howerton - Brasil/6.webp";
import imgadriana7 from "@/images/Computer/Ski/Adriana Howerton - Brasil/7.webp";

import Cloe1 from "@/images/Computer/Ski/Cloe Chiodi - France/1.webp";
import Cloe2 from "@/images/Computer/Ski/Cloe Chiodi - France/2.webp";
import Cloe3 from "@/images/Computer/Ski/Cloe Chiodi - France/3.webp";
import Cloe4 from "@/images/Computer/Ski/Cloe Chiodi - France/4.webp";
import Cloe5 from "@/images/Computer/Ski/Cloe Chiodi - France/5.webp";
import Cloe6 from "@/images/Computer/Ski/Cloe Chiodi - France/6.webp";

import Elin1 from "@/images/Computer/Ski/Elin Silverio - Italy/1.webp";
import Elin2 from "@/images/Computer/Ski/Elin Silverio - Italy/2.webp";

import Irene1 from "@/images/Computer/Ski/Irene Sharp - USA/1.webp";
import Irene2 from "@/images/Computer/Ski/Irene Sharp - USA/2.webp";
import Irene3 from "@/images/Computer/Ski/Irene Sharp - USA/3.webp";
import Irene4 from "@/images/Computer/Ski/Irene Sharp - USA/5.webp";
import Irene5 from "@/images/Computer/Ski/Irene Sharp - USA/6.webp";
import Irene6 from "@/images/Computer/Ski/Irene Sharp - USA/7.webp";

import Luis1 from "@/images/Computer/Ski/Luis Judez - Venezuela/1.webp";
import Luis2 from "@/images/Computer/Ski/Luis Judez - Venezuela/2.webp";
import Luis3 from "@/images/Computer/Ski/Luis Judez - Venezuela/3.webp";
import Luis4 from "@/images/Computer/Ski/Luis Judez - Venezuela/4.webp";
import Luis5 from "@/images/Computer/Ski/Luis Judez - Venezuela/5.webp";
import Luis6 from "@/images/Computer/Ski/Luis Judez - Venezuela/6.webp";

import Megan1 from "@/images/Computer/Ski/Megan Hackbarth - USA/1.webp";
import Megan2 from "@/images/Computer/Ski/Megan Hackbarth - USA/2.webp";
import Megan3 from "@/images/Computer/Ski/Megan Hackbarth - USA/3.webp";
import Megan4 from "@/images/Computer/Ski/Megan Hackbarth - USA/4.webp";
import Megan5 from "@/images/Computer/Ski/Megan Hackbarth - USA/5.webp";
import Megan6 from "@/images/Computer/Ski/Megan Hackbarth - USA/6.webp";
import Megan7 from "@/images/Computer/Ski/Megan Hackbarth - USA/7.webp";

import Niccolo1 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/1.webp";
import Niccolo2 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/2.webp";
import Niccolo3 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/3.webp";
import Niccolo4 from "@/images/Computer/Ski/Niccolo Bucchiero - Italy/4.webp";

import Robert1 from "@/images/Computer/Ski/Robert Horwitz - USA/1.webp";
import Robert2 from "@/images/Computer/Ski/Robert Horwitz - USA/2.webp";
import Robert3 from "@/images/Computer/Ski/Robert Horwitz - USA/3.webp";
import Robert4 from "@/images/Computer/Ski/Robert Horwitz - USA/4.webp";
import Robert5 from "@/images/Computer/Ski/Robert Horwitz - USA/5.webp";
import Robert6 from "@/images/Computer/Ski/Robert Horwitz - USA/6.webp";
import Robert7 from "@/images/Computer/Ski/Robert Horwitz - USA/7.webp";
import Robert8 from "@/images/Computer/Ski/Robert Horwitz - USA/8.webp";
import Robert9 from "@/images/Computer/Ski/Robert Horwitz - USA/9.webp";


///////////////////////////////// Evetns
import Baies1 from "@/images/Computer/Events/Baies - Content package and events/1.webp";
import Baies2 from "@/images/Computer/Events/Baies - Content package and events/2.webp";
import Baies3 from "@/images/Computer/Events/Baies - Content package and events/3.webp";
import Baies4 from "@/images/Computer/Events/Baies - Content package and events/4.webp";
import Baies5 from "@/images/Computer/Events/Baies - Content package and events/5.webp";
import Baies6 from "@/images/Computer/Events/Baies - Content package and events/6.webp";
import Baies7 from "@/images/Computer/Events/Baies - Content package and events/7.webp";
import Baies8 from "@/images/Computer/Events/Baies - Content package and events/8.webp";
import Baies9 from "@/images/Computer/Events/Baies - Content package and events/9.webp";

import Blondish1 from "@/images/Computer/Events/Blondish - Private party/1.webp";
import Blondish2 from "@/images/Computer/Events/Blondish - Private party/2.webp";
import Blondish3 from "@/images/Computer/Events/Blondish - Private party/3.webp";
import Blondish4 from "@/images/Computer/Events/Blondish - Private party/4.webp";

import Bob1 from "@/images/Computer/Events/Bob Sinclair - Private party/1.webp";
import Bob2 from "@/images/Computer/Events/Bob Sinclair - Private party/2.webp";

import Claptone1 from "@/images/Computer/Events/Claptone - Private party/1.webp";
import Claptone2 from "@/images/Computer/Events/Claptone - Private party/2.webp";
import Claptone3 from "@/images/Computer/Events/Claptone - Private party/3.webp";
import Claptone4 from "@/images/Computer/Events/Claptone - Private party/4.webp";
import Claptone5 from "@/images/Computer/Events/Claptone - Private party/5.webp";

import Folie1 from "@/images/Computer/Events/Folie Douce Event/1.webp";
import Folie2 from "@/images/Computer/Events/Folie Douce Event/2.webp";
import Folie3 from "@/images/Computer/Events/Folie Douce Event/3.webp";
import Folie4 from "@/images/Computer/Events/Folie Douce Event/4.webp";
import Folie5 from "@/images/Computer/Events/Folie Douce Event/5.webp";
import Folie6 from "@/images/Computer/Events/Folie Douce Event/6.webp";
import Folie7 from "@/images/Computer/Events/Folie Douce Event/7.webp";
import Folie8 from "@/images/Computer/Events/Folie Douce Event/8.webp";

import Mangeoire1 from "@/images/Computer/Events/Mangeoire - Content package and events/1.webp";
import Mangeoire2 from "@/images/Computer/Events/Mangeoire - Content package and events/2.webp";
import Mangeoire3 from "@/images/Computer/Events/Mangeoire - Content package and events/3.webp";
import Mangeoire4 from "@/images/Computer/Events/Mangeoire - Content package and events/4.webp";
import Mangeoire5 from "@/images/Computer/Events/Mangeoire - Content package and events/5.webp";
import Mangeoire6 from "@/images/Computer/Events/Mangeoire - Content package and events/6.webp";

import Marina1 from "@/images/Computer/Events/Marina Diniz - Live section and photography/1.webp";
import Marina2 from "@/images/Computer/Events/Marina Diniz - Live section and photography/2.webp";
import Marina3 from "@/images/Computer/Events/Marina Diniz - Live section and photography/3.webp";
import Marina4 from "@/images/Computer/Events/Marina Diniz - Live section and photography/4.webp";

import Morgen1 from "@/images/Computer/Events/Morgen Shtern - Private party/1.webp";
import Morgen2 from "@/images/Computer/Events/Morgen Shtern - Private party/2.webp";
import Morgen3 from "@/images/Computer/Events/Morgen Shtern - Private party/3.webp";
import Morgen4 from "@/images/Computer/Events/Morgen Shtern - Private party/4.webp";
import Morgen5 from "@/images/Computer/Events/Morgen Shtern - Private party/5.webp";

import Swae1 from "@/images/Computer/Events/Swae Lee - Private party/1.webp";
import Swae3 from "@/images/Computer/Events/Swae Lee - Private party/2.webp";
import Swae4 from "@/images/Computer/Events/Swae Lee - Private party/3.webp";
import Swae5 from "@/images/Computer/Events/Swae Lee - Private party/4.webp";
import Swae2 from "@/images/Computer/Events/Swae Lee - Private party/5.webp";

// ******************************************************* mobile screen
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfolioright.css";
const Marqueeslider = () => {
  const { t } = useLanguage();
  const portfolioDescriptions = t("portfolioDescriptions") || [];
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
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
    name: "Luis J.",
    location: "Venezuela",
    type: "ski",
    description:
      "I was impressed by how professional and discreet the team was. They captured both our skiing and après-ski perfectly. The final edit was stunning. True experts in cinematic ski videography Courchevel.",
    images: [Luis1, Luis2, Luis3, Luis4, Luis5, Luis6],
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
    name: "Elin S.",
    location: "Italy",
    type: "ski",
    description:
      "I’ve worked with Kevin several times and he’s always consistent. Professional, discreet, and the results are always high-end. I wouldn’t go with anyone else for luxury ski videography Courchevel.",
    images: [Elin1, Elin2],
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
    name: "Irene S.",
    location: "USA",
    type: "ski",
    description:
      "Our group wanted both fun shots and elegant photos, and they gave us exactly that. The balance was perfect, and now we have memories we’ll always keep. It’s the ideal service for families skiing in Courchevel.",
    images: [Irene1, Irene2, Irene3, Irene4, Irene5, Irene6],
  },
  {
    name: "Robert H.",
    location: "USA",
    type: "ski",
    description:
      "Courchevel Media made it so easy. They filmed our family on the slopes without ever getting in the way, and the photos and video looked amazing. Delivery was super quick too. If you want luxury ski photography in Courchevel, they’re the ones to call.",
    images: [Robert1, Robert2, Robert2, Robert3, Robert4, Robert5, Robert6, Robert7, Robert8, Robert9],
  },
  {
    name: "Baies",
    location: "Restaurant",
    type: "events",
    description:
      "We asked Courchevel Media to handle content for all of our events, and everything went perfectly. They were easy to work with, professional on-site, and the photos and videos really captured the atmosphere.",
    images: [Baies1, Baies2, Baies3, Baies4, Baies5, Baies6, Baies7, Baies8, Baies9],
  },
  {
    name: "Blondish",
    location: "Private Party",
    type: "events",
    description:
      "They made sure the whole atmosphere of our party came through in both photos and video. Guests loved the coverage, and we had everything delivered fast.",
    images: [Blondish1, Blondish2, Blondish3, Blondish4, Blondish1, Blondish2, Blondish3, Blondish4],
  },
  {
    name: "Bob S.",
    location: "Private Party",
    type: "events",
    description:
      "The team worked seamlessly with us and delivered an incredible recap of the event. Discreet, professional, and quick turnaround. Couldn’t have asked for more.",
    images: [Bob1, Bob2, Bob1, Bob2, Bob1, Bob2, Bob1, Bob2],
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
    location: "Restaurant",
    type: "events",
    description:
      "Courchevel Media covered all our events at Mangeoire and did an excellent job. The team was professional, easy to work with, and delivered content that really reflected the vibe of our nights.",
    images: [Mangeoire1, Mangeoire2, Mangeoire3, Mangeoire4, Mangeoire5, Mangeoire6],
  },
  {
    name: "Marina D.",
    location: "Live Section And Photography",
    type: "events",
    description:
      "They covered both photo and video for us, managing a busy live event with total ease. The quality was high-end, and they adapted to our needs quickly.",
    images: [Marina1, Marina2, Marina3, Marina4, Marina1, Marina2, Marina3, Marina4],
  },
  {
    name: "Morgen S.",
    location: "Private Party",
    type: "events",
    description:
      "They blended into the event perfectly, capturing both the performance and the crowd without missing a moment. Fast delivery and polished results.",
    images: [Morgen1, Morgen2, Morgen3, Morgen4, Morgen5, Morgen1, Morgen2, Morgen3, Morgen4, Morgen5],
  },
  {
    name: "Swae L.",
    location: "Private Party",
    type: "events",
    description:
      "The energy of the performance and the crowd was captured perfectly. Professional from start to finish and delivered exactly what we needed.",
    images: [Swae1, Swae2, Swae3, Swae4, Swae5, Swae1, Swae2, Swae3, Swae4, Swae5],
  },
];


  const [activeTab, setActiveTab] = useState("ski");
  const [hoveredIndex, setHoveredIndex] = useState(null); // To track which person is hovered
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(peopleData.length).fill(0) // Initialize the indexes for all people
  );
  const filteredData = useMemo(
    () => peopleData.filter((item) => item.type === activeTab),
    [activeTab]
  );
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

      videoEl.innerHTML = `<source src="${src}${!thumbnail ? "#t=1" : ""
        }" type="video/mp4">`;
    });
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [sliderIndexes, setSliderIndexes] = useState(
    Array(peopleData.length).fill(0) // Initialize each person's slider index to 0
  );

  const leftarrow = (dataIndex) => {
    setSliderIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[dataIndex] =
        (newIndexes[dataIndex] - 1 + peopleData[dataIndex].images.length) %
        peopleData[dataIndex].images.length;
      return newIndexes;
    });
  };

  const rightarrow = (dataIndex) => {
    setSliderIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[dataIndex] =
        (newIndexes[dataIndex] + 1) % peopleData[dataIndex].images.length;
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
  }, [activeTab]);


  const [mainActiveIndex, setMainActiveIndex] = useState(0);
  const mainActiveIndexRef = useRef(0);
  const marqueeGroupRef = useRef(null);
  const marqueeWrapperRef = useRef(null);
  const itemRefs = useRef([]);
  const autoResumeTimer = useRef(null);
  const animationStartTime = useRef(Date.now());
  const pausedAt = useRef(0);

  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Replace the existing useEffect that tracks animation progress with this improved version

  useEffect(() => {
    let raf;
    const groupEl = marqueeGroupRef.current;
    const wrapperEl = marqueeWrapperRef.current;
    if (!groupEl || !wrapperEl || filteredData.length === 0) return;

    const updateActive = () => {
      // Get current transform value from both CSS animation and inline styles
      const computedStyle = window.getComputedStyle(groupEl);
      const matrix = computedStyle.transform;

      let translateX = 0;
      if (matrix !== 'none') {
        const values = matrix.split('(')[1].split(')')[0].split(',');
        translateX = parseFloat(values[4]) || 0;
      }

      // Calculate the total width that will be animated
      const totalWidth = groupEl.scrollWidth;
      const wrapperWidth = wrapperEl.offsetWidth;

      // Calculate animation progress (0 to 1)
      const maxTranslate = totalWidth * 0.8; // 80% as per keyframe
      const progress = Math.abs(translateX) / maxTranslate;

      // Find which item should be active based on animation progress
      let targetIndex = 0;
      const itemCount = filteredData.length;

      if (progress > 0) {
        // Calculate which item should be centered based on progress
        const progressThroughItems = (progress * itemCount) % itemCount;
        targetIndex = Math.round(progressThroughItems) % itemCount;
      }

      // Alternative method: Find the item closest to center (fallback)
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((itemEl, i) => {
        if (!itemEl) return;
        const itemCenter = itemEl.offsetLeft + itemEl.offsetWidth / 2 + translateX;
        const wrapperCenter = wrapperWidth / 2;
        const distance = Math.abs(itemCenter - wrapperCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      // Use the closest item method as it's more accurate
      const newActiveIndex = closestIndex;

      // Only update if the active index actually changed
      if (newActiveIndex !== mainActiveIndexRef.current) {
        mainActiveIndexRef.current = newActiveIndex;
        setMainActiveIndex(newActiveIndex);
      }

      raf = requestAnimationFrame(updateActive);
    };

    // Start tracking immediately
    raf = requestAnimationFrame(updateActive);

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [activeTab]);

  // Also update the handleMainDotClick function to better handle animation resumption
  // Fixed handleMouseEnter - properly handles hover during 4s pause
  const handleMouseEnter = () => {
    setIsHovered(true);
    const groupEl = marqueeGroupRef.current;
    if (groupEl) {
      if (isUserInteracting) {
        // During the 4-second pause period, pause any CSS transition
        if (groupEl.style.transition && groupEl.style.transition !== 'none') {
          groupEl.style.transition = 'none';
          // Freeze at current position
          const computedStyle = window.getComputedStyle(groupEl);
          const matrix = computedStyle.transform;
          if (matrix !== 'none') {
            const values = matrix.split('(')[1].split(')')[0].split(',');
            const currentTranslateX = parseFloat(values[4]) || 0;
            groupEl.style.transform = `translateX(${currentTranslateX}px)`;
          }
        }
        // Cancel the 4-second auto-resume timer since user is hovering
        if (autoResumeTimer.current) {
          clearTimeout(autoResumeTimer.current);
          autoResumeTimer.current = null;
        }
      } else {
        // Normal hover behavior - pause the marquee animation
        groupEl.style.animationPlayState = 'paused';
      }
    }
  };

  // Fixed handleMouseLeave function
  const handleMouseLeave = () => {
    setIsHovered(false);
    const groupEl = marqueeGroupRef.current;

    if (groupEl) {
      if (isUserInteracting) {
        // We're still in the interaction period, need to resume the process
        const itemEl = itemRefs.current[mainActiveIndex];
        const wrapperEl = marqueeWrapperRef.current;

        if (itemEl && wrapperEl) {
          const itemOffsetLeft = itemEl.offsetLeft;
          const itemWidth = itemEl.offsetWidth;
          const wrapperWidth = wrapperEl.offsetWidth;
          const desiredTranslate = Math.max(0, itemOffsetLeft - (wrapperWidth / 2 - itemWidth / 2));

          // Resume transition to target position
          groupEl.style.transition = 'transform 600ms ease';
          groupEl.style.transform = `translateX(-${desiredTranslate}px)`;

          // Restart the 4-second timer
          if (autoResumeTimer.current) clearTimeout(autoResumeTimer.current);

          autoResumeTimer.current = setTimeout(() => {
            if (groupEl) {
              // Remove inline styles and restart animation
              groupEl.style.transition = '';

              // Calculate where we should be in the animation cycle
              const totalWidth = groupEl.scrollWidth;
              const currentPos = Math.abs(parseFloat(groupEl.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"));
              const animationProgress = currentPos / (totalWidth * 0.8);

              // Restart animation from calculated position
              groupEl.style.animation = 'testimonialMarquee 60s linear infinite';
              groupEl.style.animationDelay = `-${animationProgress * 60}s`;
              groupEl.style.animationPlayState = 'running';

              // Update timing reference
              animationStartTime.current = Date.now() - (animationProgress * 60000);
              setIsUserInteracting(false);
            }
          }, 4000);
        }
      } else {
        // Normal case: just resume the animation
        groupEl.style.animationPlayState = 'running';
      }
    }
  };

  // Simplified handleMainDotClick function
  const handleMainDotClick = (targetIndex) => {
    const groupEl = marqueeGroupRef.current;
    const wrapperEl = marqueeWrapperRef.current;
    const itemEl = itemRefs.current[targetIndex];
    if (!groupEl || !wrapperEl || !itemEl) return;

    setIsUserInteracting(true);

    // Clear any existing timers
    if (autoResumeTimer.current) {
      clearTimeout(autoResumeTimer.current);
      autoResumeTimer.current = null;
    }

    // Stop CSS animation immediately
    groupEl.style.animationPlayState = 'paused';

    // Get current computed transform
    const computedStyle = window.getComputedStyle(groupEl);
    const matrix = computedStyle.transform;
    let currentTranslateX = 0;

    if (matrix !== 'none') {
      const values = matrix.split('(')[1].split(')')[0].split(',');
      currentTranslateX = parseFloat(values[4]) || 0;
    }

    // Apply the current transform as inline style to maintain position
    groupEl.style.transform = `translateX(${currentTranslateX}px)`;
    groupEl.style.animation = 'none';

    // Calculate target position
    const itemOffsetLeft = itemEl.offsetLeft;
    const itemWidth = itemEl.offsetWidth;
    const wrapperWidth = wrapperEl.offsetWidth;
    const desiredTranslate = Math.max(0, itemOffsetLeft - (wrapperWidth / 2 - itemWidth / 2));

    // Only start transition if not currently hovered
    if (!isHovered) {
      groupEl.style.transition = 'transform 600ms ease';
      groupEl.style.transform = `translateX(-${desiredTranslate}px)`;

      // Start the 4-second timer
      autoResumeTimer.current = setTimeout(() => {
        if (groupEl && !isHovered) {
          // Resume animation after 4 seconds (only if not hovered)
          groupEl.style.transition = '';

          const totalWidth = groupEl.scrollWidth;
          const currentPos = Math.abs(parseFloat(groupEl.style.transform.match(/-?\d+\.?\d*/)?.[0] || "0"));
          const animationProgress = currentPos / (totalWidth * 0.8);

          groupEl.style.animation = 'testimonialMarquee 60s linear infinite';
          groupEl.style.animationDelay = `-${animationProgress * 60}s`;
          groupEl.style.animationPlayState = 'running';

          animationStartTime.current = Date.now() - (animationProgress * 60000);
          setIsUserInteracting(false);
        }
      }, 4000);
    } else {
      // If already hovered, jump to position immediately and stay paused
      groupEl.style.transition = 'none';
      groupEl.style.transform = `translateX(-${desiredTranslate}px)`;
      // Don't set any timer - wait for mouse leave to handle resumption
    }

    setMainActiveIndex(targetIndex);
  };



  // Reset animation tracking when tab changes
  useEffect(() => {
    animationStartTime.current = Date.now();
    pausedAt.current = 0;
    mainActiveIndexRef.current = 0;
    setMainActiveIndex(0);
  }, [activeTab]);


  // Add this useEffect after your existing useEffects to preload all images
  useEffect(() => {
    // Preload all images from both ski and events tabs
    const preloadImages = () => {
      peopleData.forEach((person) => {
        person.images.forEach((imageSrc) => {
          const img = new Image();
          img.src = getImageSrc(imageSrc);
          // Optional: Add load/error handlers if you want to track loading status
          // img.onload = () => console.log(`Loaded: ${imageSrc}`);
          // img.onerror = () => console.warn(`Failed to load: ${imageSrc}`);
        });
      });
    };

    // Preload images after component mounts
    preloadImages();
  }, []); // Empty dependency array means this runs once on mount

  // Alternative: If you want to preload only the next tab's images when user hovers over tab buttons,
  // you can add this more efficient approach:

  const preloadTabImages = (tabType) => {
    const tabData = peopleData.filter((item) => item.type === tabType);
    tabData.forEach((person) => {
      person.images.forEach((imageSrc) => {
        const img = new Image();
        img.src = getImageSrc(imageSrc);
      });
    });
  };

  const imageContainerRefs = useRef({});
  const cardRefs = useRef({});

  const syncCardHeights = useCallback(() => {
    Object.keys(imageContainerRefs.current).forEach((key) => {
      const container = imageContainerRefs.current[key];
      const card = cardRefs.current[key];
      if (!container || !card) return;

      const height = container.getBoundingClientRect().height;
      if (height > 0) {
        card.style.height = `${height}px`;
      }
    });
  }, []);

  useEffect(() => {
    const syncAfterPaint = () => {
      requestAnimationFrame(() => {
        syncCardHeights();
      });
    };

    syncAfterPaint();

    const handleResize = () => syncCardHeights();
    window.addEventListener("resize", handleResize);

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => syncCardHeights());
      Object.values(imageContainerRefs.current).forEach((container) => {
        if (container) resizeObserver.observe(container);
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [filteredData, sliderIndexes, activeTab, syncCardHeights]);

  return (
    <section id="portfolio" className="marqueeslider">
      <div className="padding-section-small">
        <div className="section-heading">
          <div className="text-color-white">
            <h2 className="heading-style-h2 text-white">
              {t("portfolio.title")}
              <span className="text-color-gradient">{t("portfolio.titleGradient")}</span>
            </h2>
          </div>
        </div>
        <div className="video-tabs_menu hidden-scrollbar w-tab-menu hidden md:flex">

          <a
            onClick={() => setActiveTab("ski")}
            onMouseEnter={() => preloadTabImages("ski")} // Add this line
            className={`video-tabs_tab-link cursor-pointer ${activeTab === "ski" ? "active" : ""}`}
          >
            <div className="svg-icon _1x1 w-embed">
              <i className="fa-solid fa-person-skiing" style={{ color: "white" }}></i>
            </div>
            <div style={{ color: "white" }}>{t("common.ski")}</div>
          </a>
          <a
            onClick={() => setActiveTab("events")}
            onMouseEnter={() => preloadTabImages("events")} // Add this line
            className={`video-tabs_tab-link cursor-pointer ${activeTab === "events" ? "active" : ""}`}
          >
            <div className="svg-icon _1x1 w-embed">
              <i className="fa-solid fa-champagne-glasses" style={{ color: "white" }}></i>
            </div>
            <div style={{ color: "white" }}>{t("common.events")}</div>
          </a>

          {/* // For the Ski tab button: */}


        </div>
        <div className="mt-[60px] padding-section_home-testimonials">
          <div className="home-testimonial-wrap">
            <div className="home-testimonial_overlay"></div>
            <div
              className="home-testimonial-row"
              ref={marqueeWrapperRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="home-testimonial-item-group_left">
                <div className="home-testimonial-item-group" ref={marqueeGroupRef}>
                  <div className="home-testimonial-item-group_inner w-dyn-list">
                    <div role="list" className="home-testimonial-item-group_inner w-dyn-items">
                      {filteredData.map((person, index) => {
                        const dataIndex = peopleData.findIndex(
                          (p) =>
                            p.name === person.name &&
                            p.location === person.location
                        );
                        return (
                          <div
                            role="listitem"
                            className="home-testimonial-item w-dyn-item"
                            ref={(el) => (itemRefs.current[index] = el)}
                            key={person.name + index}
                          >
                            <div className="home-testimonial-video-wrap relative">
                              <aside
                                className="home-testimonial_video w-background-video w-background-video-atom"
                                data-cms-thumbnail=""
                                data-autoplay="false"
                                data-loop="true"
                                data-wf-ignore="true"
                                data-cms-slug="ahmad-sadeddin"
                                data-video-urls=""
                                data-cms-src="https://cdn.vidzflow.com/v/2OaYJQTdrg_1080p_1709310288.mp4"
                              >
                                <video
                                  style={{
                                    position: "absolute",
                                    width: 0,
                                    height: 0,
                                    opacity: 0,
                                    pointerEvents: "none",
                                  }}
                                  id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
                                  loop
                                  muted={false}
                                  playsInline
                                  suppressHydrationWarning
                                  className="opacity-0 relative"
                                  data-wf-ignore="true"
                                  data-object-fit="cover"
                                ></video>
                                <div className="marqueeslider-image-panel">
                                  <button
                                    type="button"
                                    aria-label="Previous image"
                                    onClick={() => leftarrow(dataIndex)}
                                    className="slider-nav-arrow slider-nav-arrow--left"
                                  >
                                    <i className="fa-solid fa-arrow-left text-white"></i>
                                  </button>
                                  <div
                                    className="marqueeslider-image-container"
                                    ref={(el) => {
                                      if (el) imageContainerRefs.current[index] = el;
                                    }}
                                  >
                                    <img
                                      className="marqueesliderimgs transition-opacity duration-500 ease-in-out opacity-100"
                                      onLoad={syncCardHeights}
                                      src={getImageSrc(
                                        person.images[sliderIndexes[dataIndex]]
                                      )}
                                      alt={`${person.name} portfolio`}
                                      loading="lazy"
                                    />
                                    <div className="imgwrap transition-opacity duration-500 ease-in-out absolute w-full h-full bg-black opacity-50 top-0 left-0 pointer-events-none"></div>
                                    <div className="marqueeslider-dots">
                                      {person.images.map((_, circleIndex) => (
                                        <span
                                          key={circleIndex}
                                          role="button"
                                          tabIndex={0}
                                          aria-label={`Image ${circleIndex + 1} of ${person.images.length}`}
                                          onClick={() => {
                                            setSliderIndexes((prevIndexes) => {
                                              const newIndexes = [...prevIndexes];
                                              newIndexes[dataIndex] = circleIndex;
                                              return newIndexes;
                                            });
                                          }}
                                          onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                              e.preventDefault();
                                              setSliderIndexes((prevIndexes) => {
                                                const newIndexes = [...prevIndexes];
                                                newIndexes[dataIndex] = circleIndex;
                                                return newIndexes;
                                              });
                                            }
                                          }}
                                          className={`spancircle ${
                                            sliderIndexes[dataIndex] === circleIndex
                                              ? "active-circle"
                                              : ""
                                          }`}
                                        ></span>
                                      ))}
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    aria-label="Next image"
                                    onClick={() => rightarrow(dataIndex)}
                                    className="slider-nav-arrow slider-nav-arrow--right"
                                  >
                                    <i className="fa-solid fa-arrow-right text-white"></i>
                                  </button>
                                </div>

                                <noscript>
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html: bgVideo,
                                    }}
                                  />
                                  <img
                                    data-wf-bgvideo-fallback-img="true"
                                    loading="lazy"
                                    alt=""
                                  />
                                </noscript>
                                <div aria-live="polite">
                                  <button
                                    type="button"
                                    data-w-bg-video-control="true"
                                    aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
                                    className="opacity-0 w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
                                  >
                                    <span className="video-button-icon pause-button">
                                      <img
                                        loading="lazy"
                                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                                        alt="Pause video"
                                        className="image-full"
                                      />
                                    </span>
                                    <span
                                      hidden=""
                                      className="video-button-icon"
                                    >
                                      <img
                                        loading="lazy"
                                        src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                                        alt="Play video"
                                        className="image-full"
                                      />
                                    </span>
                                  </button>
                                </div>
                              </aside>
                            </div>
                            <div
                              className="card card-testimonial relative marqueeslider-text-card"
                              ref={(el) => {
                                if (el) cardRefs.current[index] = el;
                              }}
                            >
                              <div className="text-color-white">
                                <div className="text-weight-medium">
                                  <div className="text-size-large">
                                   { Array.isArray(portfolioDescriptions) && portfolioDescriptions[dataIndex]
                                     ? portfolioDescriptions[dataIndex]
                                     : person.description }
                                  </div>
                                </div>
                              </div>
                              <div className="card-testimonial_client absolute bottom-[16px] left-[16px] w-full p-4">
                                <div className="text-color-white">
                                  <div className="text-weight-semibold">
                                    <div className="text-size-medium">{person.name}</div>
                                  </div>
                                </div>
                                <div className="text-weight-medium">
                                  <div>{person.location}</div>
                                </div>
                              </div>
                              <div className="card_noise"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed dots navigation */}
          <div className="hidden md:flex justify-center gap-3 mt-6">
            {filteredData.map((_, i) => (
              <button
                key={i}
                onClick={() => handleMainDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${mainActiveIndex === i
                  ? "bg-white scale-125"
                  : "bg-gray-500 opacity-60"
                  }`}
              />
            ))}
          </div>


          <div className=" block md:hidden">
            <Mobileslider />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Marqueeslider;

