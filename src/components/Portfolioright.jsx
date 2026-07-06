// import React, { useEffect, useState } from "react";
// import "../styles/styles_home-testimonials.css";
// // Importing all the local images

// import imgadriana1 from "@/images/Computer/Ski/Adriana Howerton - Brasil/1.jpg";
// import imgadriana2 from "@/images/Computer/Ski/Adriana Howerton - Brasil/2.jpg";
// import imgadriana3 from "@/images/Computer/Ski/Adriana Howerton - Brasil/3.jpg";
// import imgadriana4 from "@/images/Computer/Ski/Adriana Howerton - Brasil/4.jpg";
// import imgadriana5 from "@/images/Computer/Ski/Adriana Howerton - Brasil/5.jpg";
// import imgadriana6 from "@/images/Computer/Ski/Adriana Howerton - Brasil/6.jpg";
// import imgadriana7 from "@/images/Computer/Ski/Adriana Howerton - Brasil/7.jpg";
// import imgadriana8 from "@/images/Ski/Adriana Howerton - Brasil/IMG_9465.jpg";
// import imgadriana9 from "@/images/Ski/Adriana Howerton - Brasil/IMG_9603.jpg";
// import imgadriana10 from "@/images/Ski/Adriana Howerton - Brasil/IMG_9644.jpg";
// import imgadriana11 from "@/images/Ski/Adriana Howerton - Brasil/DJI_0518.jpg";

// import Cloe1 from "@/images/Ski/Cloe Chiodi - France/IMG_8127.jpg";
// import Cloe2 from "@/images/Ski/Cloe Chiodi - France/IMG_8157.jpg";
// import Cloe3 from "@/images/Ski/Cloe Chiodi - France/IMG_8308.jpg";
// import Cloe4 from "@/images/Ski/Cloe Chiodi - France/IMG_8349.jpg";
// import Cloe5 from "@/images/Ski/Cloe Chiodi - France/IMG_8512.jpg";
// import Cloe6 from "@/images/Ski/Cloe Chiodi - France/IMG_8741.jpg";
// import Cloe7 from "@/images/Ski/Cloe Chiodi - France/IMG_8851.jpg";
// import Cloe8 from "@/images/Ski/Cloe Chiodi - France/IMG_8928.jpg";

// import Elin1 from "@/images/Ski/Elin Silverio - Italy/IMG_0571.jpg";
// import Elin2 from "@/images/Ski/Elin Silverio - Italy/IMG_0581.jpg";
// import Elin3 from "@/images/Ski/Elin Silverio - Italy/IMG_0585.jpg";
// import Elin4 from "@/images/Ski/Elin Silverio - Italy/IMG_0622.jpg";
// import Elin5 from "@/images/Ski/Elin Silverio - Italy/IMG_0690.jpg";

// import Irene1 from "@/images/Ski/Irene Sharp - USA/IMG_6000.jpg";
// import Irene2 from "@/images/Ski/Irene Sharp - USA/IMG_6023.jpg";
// import Irene3 from "@/images/Ski/Irene Sharp - USA/IMG_6026.jpg";
// import Irene11 from "@/images/Ski/Irene Sharp - USA/IMG_6965.jpg";
// import Irene4 from "@/images/Ski/Irene Sharp - USA/IMG_6061.jpg";
// import Irene5 from "@/images/Ski/Irene Sharp - USA/IMG_6075.jpg";
// import Irene6 from "@/images/Ski/Irene Sharp - USA/IMG_6148.jpg";
// import Irene7 from "@/images/Ski/Irene Sharp - USA/IMG_6163.jpg";
// import Irene8 from "@/images/Ski/Irene Sharp - USA/IMG_6211.jpg";
// import Irene9 from "@/images/Ski/Irene Sharp - USA/IMG_6248.jpg";
// import Irene10 from "@/images/Ski/Irene Sharp - USA/IMG_6973.jpg";

// import Luis1 from "@/images/Ski/Luis Judez - Venezuela/IMG_7318.jpg";
// import Luis2 from "@/images/Ski/Luis Judez - Venezuela/IMG_7443.jpg";
// import Luis3 from "@/images/Ski/Luis Judez - Venezuela/IMG_7544.jpg";
// import Luis4 from "@/images/Ski/Luis Judez - Venezuela/IMG_7651.jpg";
// import Luis5 from "@/images/Ski/Luis Judez - Venezuela/IMG_7707.jpg";
// import Luis6 from "@/images/Ski/Luis Judez - Venezuela/IMG_7716.jpg";

// import Megan1 from "@/images/Ski/Megan Hackbarth - USA/IMG_6557.jpg";
// import Megan2 from "@/images/Ski/Megan Hackbarth - USA/IMG_6647.jpg";
// import Megan3 from "@/images/Ski/Megan Hackbarth - USA/IMG_6685.jpg";
// import Megan4 from "@/images/Ski/Megan Hackbarth - USA/IMG_6834.jpg";
// import Megan5 from "@/images/Ski/Megan Hackbarth - USA/IMG_6885.jpg";
// import Megan6 from "@/images/Ski/Megan Hackbarth - USA/IMG_6920.jpg";

// import Niccolo1 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_0029-Enhanced-NR-Edit.jpg";
// import Niccolo2 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_0065.jpg";
// import Niccolo3 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_5357-Edit.jpg";
// import Niccolo4 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_5420.jpg";
// import Niccolo5 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_8569-Edit.jpg";
// import Niccolo6 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_8614-Enhanced-NR.jpg";
// import Niccolo7 from "@/images/Ski/Niccolo Bucchiero - Italy/IMG_32512.jpg";

// import Robert1 from "@/images/Ski/Robert Horwitz - USA/IMG_6129.jpg";
// import Robert2 from "@/images/Ski/Robert Horwitz - USA/IMG_6240.jpg";
// import Robert3 from "@/images/Ski/Robert Horwitz - USA/IMG_6129.jpg";
// import Robert4 from "@/images/Ski/Robert Horwitz - USA/IMG_6324.jpg";
// import Robert5 from "@/images/Ski/Robert Horwitz - USA/IMG_6341.jpg";
// import Robert6 from "@/images/Ski/Robert Horwitz - USA/IMG_6359.jpg";
// import Robert7 from "@/images/Ski/Robert Horwitz - USA/IMG_6431.jpg";
// import Robert8 from "@/images/Ski/Robert Horwitz - USA/IMG_6678.jpg";
// import Robert9 from "@/images/Ski/Robert Horwitz - USA/IMG_6919.jpg";
// import Robert10 from "@/images/Ski/Robert Horwitz - USA/IMG_7216.jpg";

// ///////////////////////////realestate
// import Flavia1 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_4780-Enhanced-NR.jpg";
// import Flavia2 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_4824-Enhanced-NR.jpg";

// import Flavia3 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_4851-Enhanced-NR.jpg";

// import Flavia4 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_4897-Enhanced-NR.jpg";

// import Flavia5 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_4939-HDR.jpg";

// import Flavia6 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_4982-Enhanced-NR.jpg";

// import Flavia7 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_5003-Enhanced-NR.jpg";

// import Flavia8 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_5035-HDR.jpg";

// import Flavia9 from "@/images/Real Estate/Flavia Ducros-Bourdens - FDB Architecte/IMG_63442.jpg";

// import Mounia1 from "@/images/Real Estate/Mounia - Agency/IMG_0061-HDR.jpg";
// import Mounia2 from "@/images/Real Estate/Mounia - Agency/IMG_0077-HDR.jpg";
// import Mounia3 from "@/images/Real Estate/Mounia - Agency/IMG_0172.jpg";
// import Mounia4 from "@/images/Real Estate/Mounia - Agency/IMG_0187-HDR.jpg";
// import Mounia5 from "@/images/Real Estate/Mounia - Agency/IMG_0189.jpg";
// import Mounia6 from "@/images/Real Estate/Mounia - Agency/IMG_0195.jpg";
// import Mounia7 from "@/images/Real Estate/Mounia - Agency/IMG_0198.jpg";
// import Mounia8 from "@/images/Real Estate/Mounia - Agency/IMG_0244.jpg";
// import Mounia9 from "@/images/Real Estate/Mounia - Agency/IMG_0250.jpg";
// import Mounia10 from "@/images/Real Estate/Mounia - Agency/IMG_9963.jpg";
// import Mounia11 from "@/images/Real Estate/Mounia - Agency/IMG_0061-HDR.jpg";

// ///////////////////////////////// Evetns
// import Baies1 from "@/images/Events/Baies - Content package and events/DJI_0412.jpg";
// import Baies2 from "@/images/Events/Baies - Content package and events/DJI_0686.jpg";
// import Baies3 from "@/images/Events/Baies - Content package and events/IMG_0194.jpg";
// import Baies4 from "@/images/Events/Baies - Content package and events/IMG_0273.jpg";
// import Baies5 from "@/images/Events/Baies - Content package and events/IMG_0449.jpg";
// import Baies6 from "@/images/Events/Baies - Content package and events/IMG_0563.jpg";
// import Baies7 from "@/images/Events/Baies - Content package and events/IMG_0624.jpg";
// import Baies8 from "@/images/Events/Baies - Content package and events/IMG_0701.jpg";
// import Baies9 from "@/images/Events/Baies - Content package and events/IMG_0748.jpg";
// import Baies10 from "@/images/Events/Baies - Content package and events/IMG_1061.jpg";
// import Baies11 from "@/images/Events/Baies - Content package and events/IMG_1364.jpg";
// import Baies12 from "@/images/Events/Baies - Content package and events/IMG_2153-Enhanced-NR.jpg";
// import Baies13 from "@/images/Events/Baies - Content package and events/IMG_2726-HDR.jpg";
// import Baies14 from "@/images/Events/Baies - Content package and events/IMG_2732-HDR.jpg";
// import Baies15 from "@/images/Events/Baies - Content package and events/IMG_2968.jpg";
// import Baies16 from "@/images/Events/Baies - Content package and events/IMG_3033-Enhanced-NR.jpg";

// import Blondish1 from "@/images/Events/Blondish - Private party/DJI_0585.jpg";
// import Blondish2 from "@/images/Events/Blondish - Private party/IMG_0206.jpg";
// import Blondish3 from "@/images/Events/Blondish - Private party/IMG_0447.jpg";
// import Blondish4 from "@/images/Events/Blondish - Private party/IMG_0637.jpg";
// import Blondish5 from "@/images/Events/Blondish - Private party/IMG_0670.jpg";
// import Blondish6 from "@/images/Events/Blondish - Private party/IMG_0691.jpg";
// import Blondish7 from "@/images/Events/Blondish - Private party/IMG_0773.jpg";
// import Blondish8 from "@/images/Events/Blondish - Private party/IMG_3335.jpg";

// import Bob1 from "@/images/Events/Bob Sinclair - Private party/IMG_1441-Enhanced-NR.jpg";
// import Bob2 from "@/images/Events/Bob Sinclair - Private party/IMG_1444-Enhanced-NR.jpg";
// import Bob3 from "@/images/Events/Bob Sinclair - Private party/IMG_1479-Enhanced-NR.jpg";
// import Bob4 from "@/images/Events/Bob Sinclair - Private party/IMG_1488-Enhanced-NR.jpg";
// import Bob5 from "@/images/Events/Bob Sinclair - Private party/IMG_1607-Enhanced-NR.jpg";
// import Bob6 from "@/images/Events/Bob Sinclair - Private party/IMG_1642-Enhanced-NR.jpg";
// import Bob7 from "@/images/Events/Bob Sinclair - Private party/IMG_1662-Enhanced-NR.jpg";
// import Bob8 from "@/images/Events/Bob Sinclair - Private party/IMG_1675-Enhanced-NR.jpg";
// import Bob9 from "@/images/Events/Bob Sinclair - Private party/IMG_1695-Enhanced-NR.jpg";
// import Bob10 from "@/images/Events/Bob Sinclair - Private party/IMG_1734-Enhanced-NR.jpg";

// import Claptone1 from "@/images/Events/Claptone - Private party/DJI_0686.jpg";
// import Claptone2 from "@/images/Events/Claptone - Private party/IMG_4103.jpg";
// import Claptone3 from "@/images/Events/Claptone - Private party/IMG_4126.jpg";
// import Claptone4 from "@/images/Events/Claptone - Private party/IMG_4285-Enhanced-NR.jpg";
// import Claptone5 from "@/images/Events/Claptone - Private party/IMG_4288.jpg";
// import Claptone6 from "@/images/Events/Claptone - Private party/IMG_4388.jpg";
// import Claptone7 from "@/images/Events/Claptone - Private party/IMG_4433.jpg";

// import Folie1 from "@/images/Events/Folie Douce Event/DJI_0777.jpg";
// import Folie2 from "@/images/Events/Folie Douce Event/IMG_9023.jpg";
// import Folie3 from "@/images/Events/Folie Douce Event/IMG_9105.jpg";
// import Folie4 from "@/images/Events/Folie Douce Event/IMG_9245.jpg";
// import Folie5 from "@/images/Events/Folie Douce Event/IMG_9433.jpg";
// import Folie6 from "@/images/Events/Folie Douce Event/IMG_9485.jpg";
// import Folie7 from "@/images/Events/Folie Douce Event/IMG_9565.jpg";
// import Folie8 from "@/images/Events/Folie Douce Event/IMG_9599.jpg";
// import Folie9 from "@/images/Events/Folie Douce Event/IMG_9696.jpg";
// import Folie10 from "@/images/Events/Folie Douce Event/IMG_9720-Enhanced-NR.jpg";
// import Folie11 from "@/images/Events/Folie Douce Event/IMG_9773.jpg";
// import Folie12 from "@/images/Events/Folie Douce Event/IMG_9780.jpg";

// import Mangeoire1 from "@/images/Events/Mangeoire - Content package and events/IMG_1488-Enhanced-NR.jpg";
// import Mangeoire2 from "@/images/Events/Mangeoire - Content package and events/IMG_1541-Enhanced-NR.jpg";
// import Mangeoire3 from "@/images/Events/Mangeoire - Content package and events/IMG_1675-Enhanced-NR.jpg";
// import Mangeoire4 from "@/images/Events/Mangeoire - Content package and events/IMG_1769-Enhanced-NR.jpg";
// import Mangeoire5 from "@/images/Events/Mangeoire - Content package and events/IMG_1891-Enhanced-NR.jpg";
// import Mangeoire6 from "@/images/Events/Mangeoire - Content package and events/IMG_2063-Enhanced-NR.jpg";

// import Marina1 from "@/images/Events/Marina Diniz - Live section and photography/IMG_0127-Enhanced-NR.jpg";
// import Marina2 from "@/images/Events/Marina Diniz - Live section and photography/IMG_0167-Enhanced-NR.jpg";
// import Marina3 from "@/images/Events/Marina Diniz - Live section and photography/IMG_9013.jpg";
// import Marina4 from "@/images/Events/Marina Diniz - Live section and photography/IMG_9072.jpg";
// import Marina5 from "@/images/Events/Marina Diniz - Live section and photography/IMG_9120.jpg";
// import Marina6 from "@/images/Events/Marina Diniz - Live section and photography/IMG_9206.jpg";
// import Marina7 from "@/images/Events/Marina Diniz - Live section and photography/IMG_9258.jpg";
// import Marina8 from "@/images/Events/Marina Diniz - Live section and photography/IMG_9245.jpg";

// import Morgen1 from "@/images/Events/Morgen Shtern - Private party/IMG_3413-Enhanced-NR.jpg";
// import Morgen2 from "@/images/Events/Morgen Shtern - Private party/IMG_3428-Enhanced-NR.jpg";
// import Morgen3 from "@/images/Events/Morgen Shtern - Private party/IMG_3447-Enhanced-NR.jpg";
// import Morgen4 from "@/images/Events/Morgen Shtern - Private party/IMG_3413-Enhanced-NR.jpg";
// import Morgen5 from "@/images/Events/Morgen Shtern - Private party/IMG_3570-Enhanced-NR.jpg";
// import Morgen6 from "@/images/Events/Morgen Shtern - Private party/IMG_3652-Enhanced-NR.jpg";
// import Morgen7 from "@/images/Events/Morgen Shtern - Private party/IMG_3713-Enhanced-NR.jpg";

// import Swae1 from "@/images/Events/Swae Lee - Private party/IMG_1936-Enhanced-NR.jpg";

// import Swae3 from "@/images/Events/Swae Lee - Private party/IMG_2020-Enhanced-NR.jpg";
// import Swae4 from "@/images/Events/Swae Lee - Private party/IMG_2063-Enhanced-NR.jpg";
// import Swae5 from "@/images/Events/Swae Lee - Private party/IMG_2100-Enhanced-NR.jpg";
// import Swae6 from "@/images/Events/Swae Lee - Private party/IMG_2162-Enhanced-NR.jpg";
// import Swae7 from "@/images/Events/Swae Lee - Private party/IMG_2170-Enhanced-NR.jpg";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Portfolioright.css";
// const Portfolioright = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const peopleData = [
//     {
//       name: "Adriana Howerton",
//       location: "Brazil",
//       type: "ski",
//       images: [
//         imgadriana1,
//         imgadriana2,
//         imgadriana3,
//         imgadriana4,
//         imgadriana5,
//         imgadriana6,

//         imgadriana7,

//         imgadriana8,

//         imgadriana9,
//         imgadriana10,
//         imgadriana11,
//       ],
//     },

//     {
//       name: "Luis Judez",
//       location: "Venezuela",
//       type: "ski",
//       images: [Luis1, Luis2, Luis3, Luis4, Luis5, Luis6],
//     },
//     {
//       name: "Megan Hackbarth",
//       location: "USA",
//       type: "ski",
//       images: [Megan1, Megan2, Megan3, Megan4, Megan5, Megan6],
//     },

//     {
//       name: "Niccolo Bucchiero",
//       location: "Italy",
//       type: "ski",
//       images: [
//         Niccolo2,
//         Niccolo1,

//         Niccolo3,
//         Niccolo4,
//         Niccolo5,
//         Niccolo6,
//         Niccolo7,
//       ],
//     },

//     {
//       name: "Elin Silverio",
//       location: "Italy",
//       type: "ski",
//       images: [Elin1, Elin2, Elin3, Elin4, Elin5],
//     },
//     {
//       name: "Cloe Chiodi",
//       location: "France",
//       type: "ski",
//       images: [Cloe1, Cloe2, Cloe3, Cloe4, Cloe5, Cloe6, Cloe7, Cloe8],
//     },
//     {
//       name: "Irene Sharp",
//       location: "USA",
//       type: "ski",
//       images: [
//         Irene1,
//         Irene2,
//         Irene3,
//         Irene4,
//         Irene5,
//         Irene6,
//         Irene7,
//         Irene8,
//         Irene9,
//         Irene10,
//         Irene11,
//       ],
//     },
//     {
//       name: "Niccolo Bucchiero",
//       location: "Italy",
//       type: "ski",
//       images: [
//         Robert1,
//         Robert2,
//         Robert2,
//         Robert3,
//         Robert4,
//         Robert5,
//         Robert6,
//         Robert7,
//         Robert8,
//         Robert9,
//         Robert10,
//       ],
//     },
//     {
//       name: "Flavia Ducros-Bourdens ",
//       location: "FDB Architecte",
//       type: "realestate",
//       images: [
//         Flavia1,
//         Flavia2,
//         Flavia2,
//         Flavia3,
//         Flavia4,
//         Flavia5,
//         Flavia6,
//         Flavia7,
//         Flavia8,
//         Flavia9,
//       ],
//     },
//     {
//       name: "Mounia -",
//       location: "Agency",
//       type: "realestate",
//       images: [
//         Mounia1,
//         Mounia2,
//         Mounia3,
//         Mounia4,
//         Mounia5,
//         Mounia6,
//         Mounia7,
//         Mounia8,
//         Mounia9,
//         Mounia10,
//         Mounia11,
//       ],
//     },
//     {
//       name: "Baies",
//       location: "Agency",
//       type: "events",
//       images: [
//         Mounia1,
//         Mounia2,
//         Mounia3,
//         Mounia4,
//         Mounia5,
//         Mounia6,
//         Mounia7,
//         Mounia8,
//         Mounia9,
//         Mounia10,
//         Mounia11,
//       ],
//     },
//   ];
//   const dr = [imgadriana1, imgadriana2, imgadriana3];
//   const clo = [Cloe1, Cloe2, Cloe3];
//   const Elin = [Elin1, Elin2, Elin3];
//   const Irene = [Cloe1, Cloe2, Cloe3];
//   const Luis = [Elin1, Elin2, Elin3];
//   const images = [Megan1, Megan2, Megan3];
//   const imgadr = [imgadriana1, imgadriana2, imgadriana3];

//   const [hoveredIndex, setHoveredIndex] = useState(null); // To track which person is hovered
//   const [currentImageIndexes, setCurrentImageIndexes] = useState(
//     Array(peopleData.length).fill(0) // Initialize the indexes for all people
//   );

//   useEffect(() => {
//     // If any person is hovered, start the image change for them
//     if (hoveredIndex !== null) {
//       const interval = setInterval(() => {
//         setCurrentImageIndexes((prevIndexes) => {
//           const newIndexes = [...prevIndexes];
//           newIndexes[hoveredIndex] =
//             (newIndexes[hoveredIndex] + 1) %
//             peopleData[hoveredIndex].images.length;
//           return newIndexes;
//         });
//       }, 1000); // Change image every 1 second

//       return () => clearInterval(interval); // Clear interval on unhover
//     }
//   }, [hoveredIndex, peopleData]);

//   useEffect(() => {
//     /* Videos - Connect with CMS Video Link */
//     document.querySelectorAll("[data-cms-src]").forEach((el, index) => {
//       const src = el.getAttribute("data-cms-src");
//       const thumbnail = el.getAttribute("data-cms-thumbnail");
//       const slug = el.getAttribute("data-cms-slug");
//       const slugMobile = el.getAttribute("data-cms-slug-mobile");

//       const videoEl = el.querySelector("video");
//       const videoControlEl = el.querySelector(
//         "[data-w-bg-video-control][aria-controls]"
//       );

//       if (thumbnail) {
//         videoEl.setAttribute("poster", thumbnail);
//       }

//       if (slug) {
//         videoEl.muted = false;
//         videoEl.setAttribute("id", `video-${slug}-${index}`);
//         videoControlEl.setAttribute("aria-controls", `video-${slug}-${index}`);
//       }

//       if (slugMobile) {
//         videoEl.muted = false;
//         videoEl.setAttribute("id", `video-mobile-${slugMobile}-${index}`);
//         videoControlEl.setAttribute(
//           "aria-controls",
//           `video-mobile-${slugMobile}-${index}`
//         );
//       }

//       videoEl.innerHTML = `<source src="${src}${
//         !thumbnail ? "#t=1" : ""
//       }" type="video/mp4">`;
//     });
//   }, []);
//   const [activeTab, setActiveTab] = useState("Tab 1");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const bgVideo = `
//     [data-wf-bgvideo-fallback-img] {
//                                   display: none;
//                                 }

//                                 @media (prefers-reduced-motion: reduce) {
//                                   [data-wf-bgvideo-fallback-img] {
//                                     position: absolute;
//                                     z-index: -100;
//                                     display: inline-block;
//                                     height: 100%;
//                                     width: 100%;
//                                     object-fit: cover;
//                                   }
//                                 }
//                                   `;
//   return (
//     <div>
//       <div className="video-tabs_menu hidden-scrollbar w-tab-menu">
//         <a
//           data-w-tab="Tab 1"
//           onClick={() => handleTabClick("Tab 1")}
//           className={`video-tabs_tab-link w-inline-block w-tab-link ${
//             activeTab === "Tab 1" ? "w--current" : ""
//           }`}
//         >
//           <div className="svg-icon _1x1 w-embed">
//             <svg
//               width="16"
//               height="17"
//               viewBox="0 0 16 17"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 5V12C12 12.2652 11.8946 12.5196 11.7071 12.7071C11.5196 12.8946 11.2652 13 11 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H11C11.2652 4 11.5196 4.10536 11.7071 4.29289C11.8946 4.48043 12 4.73478 12 5ZM15.625 5.01562C15.5545 4.99836 15.4811 4.99623 15.4096 5.00938C15.3382 5.02252 15.2704 5.05063 15.2106 5.09188L13.1112 6.49125C13.077 6.5141 13.0489 6.54505 13.0295 6.58136C13.0101 6.61767 13 6.65821 13 6.69938V10.3006C13 10.3418 13.0101 10.3823 13.0295 10.4186C13.0489 10.4549 13.077 10.4859 13.1112 10.5087L15.2225 11.9163C15.3015 11.969 15.3939 11.9981 15.4889 12.0002C15.5839 12.0023 15.6775 11.9773 15.7587 11.9281C15.834 11.8803 15.8956 11.814 15.9379 11.7356C15.9801 11.6571 16.0015 11.5691 16 11.48V5.5C16.0001 5.38911 15.9632 5.28135 15.8954 5.19366C15.8275 5.10598 15.7324 5.04335 15.625 5.01562Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//           <div>SKI</div>
//         </a>
//         <a
//           onClick={() => handleTabClick("Tab 2")}
//           data-w-tab="Tab 2"
//           className={`video-tabs_tab-link w-inline-block w-tab-link ${
//             activeTab === "Tab 2" ? "w--current" : ""
//           }`}
//         >
//           <div className="svg-icon _1x1 w-embed">
//             <svg
//               width="16"
//               height="17"
//               viewBox="0 0 16 17"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M13.5 3H2.5C2.23478 3 1.98043 3.10536 1.79289 3.29289C1.60536 3.48043 1.5 3.73478 1.5 4V13C1.5 13.2652 1.60536 13.5196 1.79289 13.7071C1.98043 13.8946 2.23478 14 2.5 14H13.5C13.7652 14 14.0196 13.8946 14.2071 13.7071C14.3946 13.5196 14.5 13.2652 14.5 13V4C14.5 3.73478 14.3946 3.48043 14.2071 3.29289C14.0196 3.10536 13.7652 3 13.5 3ZM11.5 4H13.5V5H11.5V4ZM4.5 13H2.5V12H4.5V13ZM4.5 5H2.5V4H4.5V5ZM7.5 13H5.5V12H7.5V13ZM7.5 5H5.5V4H7.5V5ZM10.5 13H8.5V12H10.5V13ZM10.5 5H8.5V4H10.5V5ZM13.5 13H11.5V12H13.5V13Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//           <div>Events</div>
//         </a>
//         <a
//           onClick={() => handleTabClick("Tab 3")}
//           data-w-tab="Tab 3"
//           className={`video-tabs_tab-link w-inline-block w-tab-link ${
//             activeTab === "Tab 3" ? "w--current" : ""
//           }`}
//         >
//           <div className="svg-icon _1x1 w-embed">
//             <svg
//               width="16"
//               height="17"
//               viewBox="0 0 16 17"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M13.75 11.068L7.99995 14.4211L2.24995 11.068C2.13611 11.0113 2.00494 11.0002 1.88314 11.0368C1.76135 11.0734 1.65809 11.155 1.59437 11.2651C1.53066 11.3752 1.51128 11.5054 1.54018 11.6292C1.56909 11.7531 1.6441 11.8613 1.74995 11.9318L7.74995 15.4318C7.82641 15.4763 7.91332 15.4998 8.00183 15.4998C8.09033 15.4998 8.17725 15.4763 8.2537 15.4318L14.2537 11.9318C14.3113 11.8992 14.3619 11.8554 14.4025 11.8031C14.4431 11.7508 14.4729 11.691 14.4902 11.627C14.5074 11.5631 14.5119 11.4964 14.5031 11.4308C14.4944 11.3651 14.4728 11.3019 14.4394 11.2447C14.406 11.1875 14.3617 11.1375 14.3088 11.0976C14.256 11.0577 14.1957 11.0287 14.1316 11.0122C14.0675 10.9958 14.0007 10.9923 13.9352 11.0018C13.8697 11.0114 13.8067 11.0339 13.75 11.068Z"
//                 fill="white"
//               />
//               <path
//                 d="M13.75 8.06801L7.99995 11.4211L2.24995 8.06801C2.13611 8.01133 2.00494 8.00016 1.88314 8.03677C1.76135 8.07339 1.65809 8.15504 1.59437 8.26511C1.53066 8.37517 1.51128 8.50538 1.54018 8.62923C1.56909 8.75308 1.6441 8.86127 1.74995 8.93176L7.74995 12.4318C7.82641 12.4763 7.91332 12.4998 8.00183 12.4998C8.09033 12.4998 8.17725 12.4763 8.2537 12.4318L14.2537 8.93176C14.3113 8.89916 14.3619 8.85543 14.4025 8.80312C14.4431 8.75081 14.4729 8.69096 14.4902 8.62704C14.5074 8.56312 14.5119 8.49641 14.5031 8.43077C14.4944 8.36513 14.4728 8.30188 14.4394 8.24469C14.406 8.18749 14.3617 8.13749 14.3088 8.09758C14.256 8.05768 14.1957 8.02867 14.1316 8.01223C14.0675 7.9958 14.0007 7.99226 13.9352 8.00184C13.8697 8.01141 13.8067 8.0339 13.75 8.06801Z"
//                 fill="white"
//               />
//               <path
//                 d="M1.74999 5.93183L7.74999 9.43183C7.82645 9.47641 7.91336 9.4999 8.00187 9.4999C8.09037 9.4999 8.17729 9.47641 8.25374 9.43183L14.2537 5.93183C14.3292 5.88779 14.3918 5.82474 14.4354 5.74897C14.4789 5.67319 14.5018 5.58733 14.5018 5.49995C14.5018 5.41257 14.4789 5.32671 14.4354 5.25093C14.3918 5.17516 14.3292 5.11211 14.2537 5.06808L8.25374 1.56808C8.17729 1.52349 8.09037 1.5 8.00187 1.5C7.91336 1.5 7.82645 1.52349 7.74999 1.56808L1.74999 5.06808C1.67451 5.11211 1.6119 5.17516 1.56837 5.25093C1.52485 5.32671 1.50195 5.41257 1.50195 5.49995C1.50195 5.58733 1.52485 5.67319 1.56837 5.74897C1.6119 5.82474 1.67451 5.88779 1.74999 5.93183Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//           <div>
//             <strong>Real Estate</strong>
//           </div>
//         </a>
//       </div>
//       <div className="mt-[60px] padding-section_home-testimonials">
//         <div className="home-testimonial-wrap">
//           <div className="home-testimonial_overlay"></div>
//           <div className="home-testimonial-row">
//             <div className="home-testimonial-item-group_left">
//               <div className="home-testimonial-item-group">
//                 <div className="home-testimonial-item-group_inner w-dyn-list">
//                   <div
//                     role="list"
//                     className="home-testimonial-item-group_inner w-dyn-items"
//                   >
//                     {peopleData.map(function (person, index) {
//                       return (
//                         <div
//                           role="listitem"
//                           className="home-testimonial-item w-dyn-item"
//                         >
//                           <div className="home-testimonial-video-wrap relative">
//                             <aside
//                               className="home-testimonial_video w-background-video w-background-video-atom"
//                               data-cms-thumbnail=""
//                               data-autoplay="false"
//                               data-loop="true"
//                               data-wf-ignore="true"
//                               data-cms-slug="ahmad-sadeddin"
//                               data-video-urls=""
//                               data-cms-src="https://cdn.vidzflow.com/v/2OaYJQTdrg_1080p_1709310288.mp4"
//                             >
//                               <video
//                                 style={{ width: "100px" }}
//                                 id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 loop=""
//                                 muted=""
//                                 playsInline=""
//                                 className="opacity-0 relative "
//                                 data-wf-ignore="true"
//                                 data-object-fit="cover"
//                               ></video>
//                               <div className=" w-[100%] h-[900px] z-10">
//                                 <img
//                                   className={`w-[100%] h-[600px] object-cover transition-opacity duration-500 ease-in-out ${
//                                     hoveredIndex === index
//                                       ? "opacity-100"
//                                       : "opacity-50"
//                                   }`}
//                                   src={
//                                     person.images[
//                                       hoveredIndex === index
//                                         ? currentImageIndexes[index]
//                                         : 0
//                                     ]
//                                   }
//                                   alt="Image Slider"
//                                   onMouseEnter={() => setHoveredIndex(index)} // Set hover to this person
//                                   onMouseLeave={() => setHoveredIndex(null)} // Reset hover on mouse leave
//                                 />
//                               </div>
//                               <noscript>
//                                 <style
//                                   dangerouslySetInnerHTML={{ __html: bgVideo }}
//                                 />
//                                 <img
//                                   data-wf-bgvideo-fallback-img="true"
//                                   alt=""
//                                 />
//                               </noscript>
//                               <div aria-live="polite">
//                                 <button
//                                   type="button"
//                                   data-w-bg-video-control="true"
//                                   aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                   className="opacity-0 w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                                 >
//                                   <span className="video-button-icon pause-button">
//                                     <img
//                                       loading="lazy"
//                                       src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                       alt="Pause video"
//                                       className="image-full"
//                                     />
//                                   </span>
//                                   <span hidden="" className="video-button-icon">
//                                     <img
//                                       loading="lazy"
//                                       src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                       alt="Play video"
//                                       className="image-full"
//                                     />
//                                   </span>
//                                 </button>
//                               </div>
//                             </aside>
//                           </div>
//                           <div className="card card-testimonial">
//                             <div className="text-color-white">
//                               <div className="text-weight-medium">
//                                 <div className="text-size-large">
//                                   Working with Courchevel Media was a breeze.
//                                   They blew us away with a punchy high-quality
//                                   video we really needed. It was so good,
//                                   it&#x27;s the first thing people see when they
//                                   visit our website. They even animated our
//                                   logo!&quot;
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="card-testimonial_client">
//                               <div className="text-color-white">
//                                 <div className="text-weight-semibold">
//                                   <div className="text-size-medium">
//                                     {person.name}
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="text-weight-medium">
//                                 <div> {person.location}</div>
//                               </div>
//                             </div>
//                             <div className="card_noise"></div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="home-testimonial-row">
//             <div className="home-testimonial-item-group_right">
//               <div className="home-testimonial-item-group">
//                 <div className="home-testimonial-item-group_inner w-dyn-list">
//                   <div
//                     role="list"
//                     className="home-testimonial-item-group_inner w-dyn-items"
//                   >
//                     {peopleData.map(function (person, index) {
//                       return (
//                         <div
//                           role="listitem"
//                           className="home-testimonial-item w-dyn-item"
//                         >
//                           <div className="home-testimonial-video-wrap relative">
//                             <aside
//                               className="home-testimonial_video w-background-video w-background-video-atom"
//                               data-cms-thumbnail=""
//                               data-autoplay="false"
//                               data-loop="true"
//                               data-wf-ignore="true"
//                               data-cms-slug="ahmad-sadeddin"
//                               data-video-urls=""
//                               data-cms-src="https://cdn.vidzflow.com/v/2OaYJQTdrg_1080p_1709310288.mp4"
//                             >
//                               <video
//                                 style={{ width: "100px" }}
//                                 id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 loop=""
//                                 muted=""
//                                 playsInline=""
//                                 className="opacity-0 relative "
//                                 data-wf-ignore="true"
//                                 data-object-fit="cover"
//                               ></video>
//                               <div className=" relative w-[100%] h-[900px] z-10">
//                                 <div className="absolute top-[230px] rounded-full  w-[40px] h-[40px] flex justify-center items-center btnsslider z-40">
//                                   <i className="fa-solid fa-arrow-left text-black "></i>
//                                 </div>
//                                 <img
//                                   className={`w-[100%] h-[600px] object-cover transition-opacity duration-500 ease-in-out ${
//                                     hoveredIndex === index
//                                       ? "opacity-100"
//                                       : "opacity-50"
//                                   }`}
//                                   src={
//                                     person.images[
//                                       hoveredIndex === index
//                                         ? currentImageIndexes[index]
//                                         : 0
//                                     ]
//                                   }
//                                   alt="Image Slider"
//                                   onMouseEnter={() => setHoveredIndex(index)}
//                                   onMouseLeave={() => setHoveredIndex(null)}
//                                 />
//                                 <div className="absolute top-[230px]  w-[40px] h-[40px] rounded-full right-[20px] flex justify-center items-center btnsslider z-40">
//                                   <i className="fa-solid fa-arrow-right text-black"></i>
//                                 </div>
//                               </div>
//                               <noscript>
//                                 <style
//                                   dangerouslySetInnerHTML={{ __html: bgVideo }}
//                                 />
//                                 <img
//                                   data-wf-bgvideo-fallback-img="true"
//                                   alt=""
//                                 />
//                               </noscript>
//                               <div aria-live="polite">
//                                 <button
//                                   type="button"
//                                   data-w-bg-video-control="true"
//                                   aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                   className="opacity-0 w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                                 >
//                                   <span className="video-button-icon pause-button">
//                                     <img
//                                       loading="lazy"
//                                       src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                       alt="Pause video"
//                                       className="image-full"
//                                     />
//                                   </span>
//                                   <span hidden="" className="video-button-icon">
//                                     <img
//                                       loading="lazy"
//                                       src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                       alt="Play video"
//                                       className="image-full"
//                                     />
//                                   </span>
//                                 </button>
//                               </div>
//                             </aside>
//                           </div>
//                           <div className="card card-testimonial">
//                             <div className="text-color-white">
//                               <div className="text-weight-medium">
//                                 <div className="text-size-large">
//                                   Working with Courchevel Media was a breeze.
//                                   They blew us away with a punchy high-quality
//                                   video we really needed. It was so good,
//                                   it&#x27;s the first thing people see when they
//                                   visit our website. They even animated our
//                                   logo!&quot;
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="card-testimonial_client">
//                               <div className="text-color-white">
//                                 <div className="text-weight-semibold">
//                                   <div className="text-size-medium">
//                                     {person.name}
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="text-weight-medium">
//                                 <div> {person.location}</div>
//                               </div>
//                             </div>
//                             <div className="card_noise"></div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* mobile secreen  */}
//         <div className="home-testimonial-wrap_mobile">
//           <div className="container-medium w-dyn-list">
//             <div
//               role="list"
//               className="home-testimonial-static w-dyn-items sliderasim "
//             >
//               <Slider {...settings}>
//                 {peopleData.slice(0, 4).map(function (elem, index) {
//                   return (
//                     <div
//                       role="listitem"
//                       style={{
//                         height: "900px",
//                         backgroundColor: "red",
//                       }}
//                       className="w-dyn-item "
//                     >
//                       <div className="card mx-4 card-testimonial">
//                         <div className="text-color-white">
//                           <div className="text-weight-medium">
//                             <div className="text-size-large">
//                               “Courchevel Media made a launch ad for our
//                               software that helped us increase our ARR by just
//                               over $100k in under a month”
//                             </div>
//                           </div>
//                         </div>
//                         <div className="card-testimonial_client">
//                           <div className="text-color-white">
//                             <div className="text-weight-semibold">
//                               <div className="text-size-medium">
//                                 {elem.name}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="text-weight-medium">
//                             <div>{elem.location}</div>
//                           </div>
//                         </div>
//                         <div className="card-testimonial_video-wrap relative">
//                           <div
//                             className="video size-auto w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
//                             data-cms-slug-mobile="abraham-lincoln"
//                           >
//                             <video
//                               style={{ width: "1px" }}
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0 relative "
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className=" w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] h-[400px] object-cover transition-opacity duration-500 ease-in-out ${
//                                   hoveredIndex === index
//                                     ? "opacity-100"
//                                     : "opacity-50"
//                                 }`}
//                                 src={elem.images[0]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <div className="absolute w-[100%] z-10"></div>

//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               ></button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolioright;

import React from "react";

const Portfolioright = () => {
  return <div>Portfolioright</div>;
};

export default Portfolioright;
