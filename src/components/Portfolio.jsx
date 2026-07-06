// import React, { useEffect, useState } from "react";
// import "../styles/styles_home-testimonials.css";
// // Importing all the local images
// import Portfolioright from "./Portfolioright";
// import imgadriana from "@/images/Ski/Adriana Howerton - Brasil/DJI_0518.jpg";
// import imgadriana1 from "@/images/Ski/Adriana Howerton - Brasil/IMG_8073.jpg";
// import imgadriana2 from "@/images/Ski/Adriana Howerton - Brasil/IMG_8485.jpg";
// import imgadriana3 from "@/images/Ski/Adriana Howerton - Brasil/IMG_8776.jpg";
// import imgadriana4 from "@/images/Ski/Adriana Howerton - Brasil/IMG_8835.jpg";
// import imgadriana5 from "@/images/Ski/Adriana Howerton - Brasil/IMG_9345.jpg";
// import imgadriana6 from "@/images/Ski/Adriana Howerton - Brasil/IMG_9603.jpg";
// import imgadriana7 from "@/images/Ski/Adriana Howerton - Brasil/IMG_9644.jpg";
// import Cloe1 from "@/images/Ski/Cloe Chiodi - France/IMG_8127.jpg";
// import Cloe2 from "@/images/Ski/Cloe Chiodi - France/IMG_8512.jpg";
// import Cloe3 from "@/images/Ski/Cloe Chiodi - France/IMG_8308.jpg";
// import Cloe4 from "@/images/Ski/Cloe Chiodi - France/IMG_8512.jpg";
// import Cloe5 from "@/images/Ski/Cloe Chiodi - France/IMG_8741.jpg";
// import Cloe6 from "@/images/Ski/Cloe Chiodi - France/IMG_8851.jpg";
// import Cloe7 from "@/images/Ski/Cloe Chiodi - France/IMG_8928.jpg";

// import Elin1 from "@/images/Ski/Elin Silverio - Italy/IMG_0571.jpg";
// import Elin2 from "@/images/Ski/Elin Silverio - Italy/IMG_0581.jpg";
// import Elin3 from "@/images/Ski/Elin Silverio - Italy/IMG_0585.jpg";

// import Irene1 from "@/images/Ski/Irene Sharp - USA/IMG_6000.jpg";
// import Irene2 from "@/images/Ski/Irene Sharp - USA/IMG_6023.jpg";
// import Irene3 from "@/images/Ski/Irene Sharp - USA/IMG_6026.jpg";

// import Luis1 from "@/images/Ski/Luis Judez - Venezuela/IMG_7318.jpg";
// import Luis2 from "@/images/Ski/Luis Judez - Venezuela/IMG_7443.jpg";
// import Luis3 from "@/images/Ski/Luis Judez - Venezuela/IMG_7544.jpg";

// import Megan1 from "@/images/Ski/Megan Hackbarth - USA/IMG_6557.jpg";
// import Megan2 from "@/images/Ski/Megan Hackbarth - USA/IMG_6647.jpg";
// import Megan3 from "@/images/Ski/Megan Hackbarth - USA/IMG_6685.jpg";
// import Paractice from "./Paractice";
// import Sliderasim from "./Sliderasim";
// const Portfolio = () => {
//   const dr = [imgadriana1, imgadriana2, imgadriana3];
//   const clo = [Cloe1, Cloe2, Cloe3];
//   const Elin = [Elin1, Elin2, Elin3];
//   const Irene = [Cloe1, Cloe2, Cloe3];
//   const Luis = [Elin1, Elin2, Elin3];
//   const images = [Megan1, Megan2, Megan3];
//   const imgadr = [imgadriana1, imgadriana2, imgadriana3];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isImageVisible, setIsImageVisible] = useState(true);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsImageVisible(false);
//       setTimeout(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setIsImageVisible(true);
//       }, 100);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const [activeTab, setActiveTab] = useState("Tab 1");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   useEffect(() => {
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
//     <>
//       <section
//         id="portfolio"
//         className="section padding-section-large padding-section_home-intro"
//       >
//         <div className="text-align-center">
//           <div className="text-color-white">
//             <h2 className="heading-style-h2 ">
//               Overview of
//               <span
//                 className="text-color-gradient"
//                 style={{ marginLeft: "10px" }}
//               >
//                 our projects
//               </span>
//             </h2>
//           </div>
//           <div>
//             <div className="text-size-large mt-5">
//               Exclusive winter experiences are nicely documented.
//             </div>
//           </div>
//         </div>

//         <div className="mt-[60px] padding-section_home-testimonials">
//           <Paractice></Paractice>
//           {/* <Portfolioright /> */}
//           {/* <div className="home-testimonial-wrap">
//             <div className="home-testimonial_overlay"></div>
//             <div className="home-testimonial-row">
//               <div className="home-testimonial-item-group_left">
//                 <div className="home-testimonial-item-group">
//                   <div className="home-testimonial-item-group_inner w-dyn-list">
//                     <div
//                       role="list"
//                       className="home-testimonial-item-group_inner w-dyn-items"
//                     >
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="ahmad-sadeddin"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/2OaYJQTdrg_1080p_1709310288.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className=" opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-50"
//                                 }`}
//                                 src={imgadr[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>

//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className=" opacity-0 w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 Working with Courchevel Media was a breeze. They
//                                 blew us away with a punchy high-quality video we
//                                 really needed. It was so good, it&#x27;s the
//                                 first thing people see when they visit our
//                                 website. They even animated our logo!&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Adriana Howerton - Brasil
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Brasil</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="michael-martocci"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/KPbCs5nr71_1080p_1708442445.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className=" opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={clo[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden opacity-0"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 Courchevel Media already knows the landscape,
//                                 understands technology, and knows what a good
//                                 video looks like. They can run with very little
//                                 direction, which saved us time.
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Cloe Chiodi
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>France</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="sean-smith"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/DYCTftGmvM_1080p_1706559566.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden opacity-0"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 The entire process was easy to manage even as a
//                                 busy founder. From sales, creative, &amp;
//                                 feedback through to final product felt like a
//                                 breeze
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Sean Smith
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Sean Smith, Founder of SimpleTiger</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="tim-peckover"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/GsuVifmtLf_576p_1705513613.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 We have been using the new video for some ad
//                                 campaigns where it&#x27;s been performing quite
//                                 well. For the limited budget we had available,
//                                 we couldn&#x27;t have asked for a better video.
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Tim Peckover
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Sr. Marketing Manager, Smile</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="don-halliwell"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/Dvr1bvL2p3_720p_1705513057.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;The Courchevel Media team have been great
//                                 consultants and have helped define and execute
//                                 our video strategy. Their process pushes
//                                 us.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Don Halliwell
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Head of Marketing, Trustlayer</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="catherine-mayell"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/kaoQJgNMnW_720p_1704944392.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;I love their clean modern approach to
//                                 video graphics and flexible working style. Not
//                                 an agency with a big ego, but rather here to
//                                 help and listen!&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Catherine Mayell
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Lead Designer, Quillbot</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="brian-vallieres"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/eIu7gneEv2_1080p_1704944245.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Their framework and guidance allowed a
//                                 seamless workflow and didn&#x27;t leave much
//                                 room for error. Overall the process was
//                                 efficient and the end result is awesome. &quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Brian Vallieres
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Swift Journal</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="diego-diaz"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/tZHO0wjWD2_1080p_1704944007.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               className="opacity-0"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;The video produced by Courchevel Media
//                                 significantly contributed to closing a
//                                 substantial deal valued at $24,000 within a mere
//                                 24 hours, demonstrating their remarkable impact
//                                 and effectiveness.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Diego Diaz
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Former Founder, Ammo Studios</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="abraham-lincoln"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 “Courchevel Media made a launch ad for our
//                                 software that helped us increase our ARR by just
//                                 over $100k in under a month”
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Nick Abraham
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Co-Founder, Quicklines AI</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="jane-doe"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/4fqNtlFWBx_720p_1704943529.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Courchevel Media transformed what
//                                 initially felt like a daunting challenge into a
//                                 straightforward process resulting in videos that
//                                 captured our brands spirit.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Lucas Potasso
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Head of Content, Planbox</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap absolute">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="john-doe"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/ibMgFCnc7v_1080p_1704943203.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               className="opacity-0"
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Courchevel Media was the obvious choice
//                                 for a video partner. They helped us generate
//                                 hundreds of new signups, not to mention they do
//                                 incredible work extremely fast.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Ryan Myher
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Lore</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="home-testimonial-item-group_left">
//                 <div className="home-testimonial-item-group">
//                   <div className="home-testimonial-item-group_inner w-dyn-list">
//                     <div
//                       role="list"
//                       className="home-testimonial-item-group_inner w-dyn-items"
//                     >
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="ahmad-sadeddin"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/2OaYJQTdrg_1080p_1709310288.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="relative w-full h-[300px] overflow-hidden">
//                               <img
//                                 className={`w-full h-full object-cover transition-opacity duration-500 ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt=""
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden opacity-0"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 Working with Courchevel Media was a breeze. They
//                                 blew us away with a punchy high-quality video we
//                                 really needed. It was so good, it&#x27;s the
//                                 first thing people see when they visit our
//                                 website. They even animated our logo!&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Ahmad Sadeddin
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Corgea (YC23)</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="michael-martocci"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/KPbCs5nr71_1080p_1708442445.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="relative w-full h-[300px] overflow-hidden">
//                               <img
//                                 className={`w-full h-full object-cover transition-opacity duration-500 ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt=""
//                               />
//                             </div>

//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden opacity-0"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 Courchevel Media already knows the landscape,
//                                 understands technology, and knows what a good
//                                 video looks like. They can run with very little
//                                 direction, which saved us time.
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Michael Martocci
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, SwagUp</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="sean-smith"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/DYCTftGmvM_1080p_1706559566.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 The entire process was easy to manage even as a
//                                 busy founder. From sales, creative, &amp;
//                                 feedback through to final product felt like a
//                                 breeze
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Sean Smith
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Sean Smith, Founder of SimpleTiger</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="tim-peckover"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/GsuVifmtLf_576p_1705513613.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 We have been using the new video for some ad
//                                 campaigns where it&#x27;s been performing quite
//                                 well. For the limited budget we had available,
//                                 we couldn&#x27;t have asked for a better video.
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Tim Peckover
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Sr. Marketing Manager, Smile</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="don-halliwell"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/Dvr1bvL2p3_720p_1705513057.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;The Courchevel Media team have been great
//                                 consultants and have helped define and execute
//                                 our video strategy. Their process pushes
//                                 us.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Don Halliwell
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Head of Marketing, Trustlayer</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="catherine-mayell"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/kaoQJgNMnW_720p_1704944392.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;I love their clean modern approach to
//                                 video graphics and flexible working style. Not
//                                 an agency with a big ego, but rather here to
//                                 help and listen!&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Catherine Mayell
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Lead Designer, Quillbot</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="brian-vallieres"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/eIu7gneEv2_1080p_1704944245.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Their framework and guidance allowed a
//                                 seamless workflow and didn&#x27;t leave much
//                                 room for error. Overall the process was
//                                 efficient and the end result is awesome. &quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Brian Vallieres
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Swift Journal</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="diego-diaz"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/tZHO0wjWD2_1080p_1704944007.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;The video produced by Courchevel Media
//                                 significantly contributed to closing a
//                                 substantial deal valued at $24,000 within a mere
//                                 24 hours, demonstrating their remarkable impact
//                                 and effectiveness.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Diego Diaz
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Former Founder, Ammo Studios</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="abraham-lincoln"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 “Courchevel Media made a launch ad for our
//                                 software that helped us increase our ARR by just
//                                 over $100k in under a month”
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Nick Abraham
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Co-Founder, Quicklines AI</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="jane-doe"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/4fqNtlFWBx_720p_1704943529.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Courchevel Media transformed what
//                                 initially felt like a daunting challenge into a
//                                 straightforward process resulting in videos that
//                                 captured our brands spirit.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Lucas Potasso
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Head of Content, Planbox</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="john-doe"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/ibMgFCnc7v_1080p_1704943203.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Courchevel Media was the obvious choice
//                                 for a video partner. They helped us generate
//                                 hundreds of new signups, not to mention they do
//                                 incredible work extremely fast.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Ryan Myher
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Lore</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="home-testimonial-row">
//               <div className="home-testimonial-item-group_right">
//                 <div className="home-testimonial-item-group">
//                   <div className="home-testimonial-item-group_inner w-dyn-list">
//                     <div
//                       role="list"
//                       className="home-testimonial-item-group_inner w-dyn-items"
//                     >
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="ahmad-sadeddin"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/2OaYJQTdrg_1080p_1709310288.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className=" opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-50"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>

//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className=" opacity-0 w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 Working with Courchevel Media was a breeze. They
//                                 blew us away with a punchy high-quality video we
//                                 really needed. It was so good, it&#x27;s the
//                                 first thing people see when they visit our
//                                 website. They even animated our logo!&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Ahmad Sadeddin
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Corgea (YC23)</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="michael-martocci"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/KPbCs5nr71_1080p_1708442445.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className=" opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden opacity-0"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 Courchevel Media already knows the landscape,
//                                 understands technology, and knows what a good
//                                 video looks like. They can run with very little
//                                 direction, which saved us time.
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Michael Martocci
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, SwagUp</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="sean-smith"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/DYCTftGmvM_1080p_1706559566.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden opacity-0"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 The entire process was easy to manage even as a
//                                 busy founder. From sales, creative, &amp;
//                                 feedback through to final product felt like a
//                                 breeze
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Sean Smith
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Sean Smith, Founder of SimpleTiger</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="tim-peckover"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/GsuVifmtLf_576p_1705513613.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 We have been using the new video for some ad
//                                 campaigns where it&#x27;s been performing quite
//                                 well. For the limited budget we had available,
//                                 we couldn&#x27;t have asked for a better video.
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Tim Peckover
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Sr. Marketing Manager, Smile</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="don-halliwell"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/Dvr1bvL2p3_720p_1705513057.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;The Courchevel Media team have been great
//                                 consultants and have helped define and execute
//                                 our video strategy. Their process pushes
//                                 us.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Don Halliwell
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Head of Marketing, Trustlayer</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="catherine-mayell"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/kaoQJgNMnW_720p_1704944392.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               className="opacity-0"
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;I love their clean modern approach to
//                                 video graphics and flexible working style. Not
//                                 an agency with a big ego, but rather here to
//                                 help and listen!&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Catherine Mayell
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Lead Designer, Quillbot</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="brian-vallieres"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/eIu7gneEv2_1080p_1704944245.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Their framework and guidance allowed a
//                                 seamless workflow and didn&#x27;t leave much
//                                 room for error. Overall the process was
//                                 efficient and the end result is awesome. &quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Brian Vallieres
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Swift Journal</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="diego-diaz"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/tZHO0wjWD2_1080p_1704944007.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               className="opacity-0"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;The video produced by Courchevel Media
//                                 significantly contributed to closing a
//                                 substantial deal valued at $24,000 within a mere
//                                 24 hours, demonstrating their remarkable impact
//                                 and effectiveness.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Diego Diaz
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Former Founder, Ammo Studios</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="abraham-lincoln"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 “Courchevel Media made a launch ad for our
//                                 software that helped us increase our ARR by just
//                                 over $100k in under a month”
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Nick Abraham
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Co-Founder, Quicklines AI</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap relative">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="jane-doe"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/4fqNtlFWBx_720p_1704943529.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               muted=""
//                               playsInline=""
//                               className="opacity-0"
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>
//                             <div className="absolute w-[100%] z-10">
//                               <img
//                                 className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                                   isImageVisible ? "opacity-100" : "opacity-0"
//                                 }`}
//                                 src={images[currentImageIndex]}
//                                 alt="Image Slider"
//                               />
//                             </div>
//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Courchevel Media transformed what
//                                 initially felt like a daunting challenge into a
//                                 straightforward process resulting in videos that
//                                 captured our brands spirit.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Lucas Potasso
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Head of Content, Planbox</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                       <div
//                         role="listitem"
//                         className="home-testimonial-item w-dyn-item"
//                       >
//                         <div className="home-testimonial-video-wrap absolute">
//                           <aside
//                             className="home-testimonial_video w-background-video w-background-video-atom"
//                             data-cms-thumbnail=""
//                             data-autoplay="false"
//                             data-loop="true"
//                             data-wf-ignore="true"
//                             data-cms-slug="john-doe"
//                             data-video-urls=""
//                             data-cms-src="https://cdn.vidzflow.com/v/ibMgFCnc7v_1080p_1704943203.mp4"
//                           >
//                             <video
//                               id="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                               loop=""
//                               className="opacity-0"
//                               muted=""
//                               playsInline=""
//                               data-wf-ignore="true"
//                               data-object-fit="cover"
//                             ></video>

//                             <noscript>
//                               <style
//                                 dangerouslySetInnerHTML={{ __html: bgVideo }}
//                               />
//                               <img data-wf-bgvideo-fallback-img="true" alt="" />
//                             </noscript>
//                             <div aria-live="polite">
//                               <button
//                                 type="button"
//                                 data-w-bg-video-control="true"
//                                 aria-controls="fdab21dc-a516-ae65-da11-1558f0fe610c-video"
//                                 className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                               >
//                                 <span className="video-button-icon pause-button">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
//                                     alt="Pause video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                                 <span hidden="" className="video-button-icon">
//                                   <img
//                                     loading="lazy"
//                                     src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
//                                     alt="Play video"
//                                     className="image-full"
//                                   />
//                                 </span>
//                               </button>
//                             </div>
//                           </aside>
//                         </div>
//                         <div className="card card-testimonial">
//                           <div className="text-color-white">
//                             <div className="text-weight-medium">
//                               <div className="text-size-large">
//                                 &quot;Courchevel Media was the obvious choice
//                                 for a video partner. They helped us generate
//                                 hundreds of new signups, not to mention they do
//                                 incredible work extremely fast.&quot;
//                               </div>
//                             </div>
//                           </div>
//                           <div className="card-testimonial_client">
//                             <div className="text-color-white">
//                               <div className="text-weight-semibold">
//                                 <div className="text-size-medium">
//                                   Ryan Myher
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="text-weight-medium">
//                               <div>Founder, Lore</div>
//                             </div>
//                           </div>
//                           <div className="card_noise"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           {/* <div className="home-testimonial-wrap_mobile">
//             <div className="container-medium w-dyn-list">
//               <div role="list" className="home-testimonial-static w-dyn-items">
//                 <div role="listitem" className="w-dyn-item">
//                   <div className="card card-testimonial">
//                     <div className="text-color-white">
//                       <div className="text-weight-medium">
//                         <div className="text-size-large">
//                           &quot;Courchevel Media was the obvious choice for a
//                           video partner. They helped us generate hundreds of new
//                           signups, not to mention they do incredible work
//                           extremely fast.&quot;
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-testimonial_client">
//                       <div className="text-color-white">
//                         <div className="text-weight-semibold">
//                           <div className="text-size-medium">Ryan Myher</div>
//                         </div>
//                       </div>
//                       <div className="text-weight-medium">
//                         <div>Founder, Lore</div>
//                       </div>
//                     </div>
//                     <div className="card-testimonial_video-wrap relative">
//                       <div
//                         className="video size-auto w-background-video w-background-video-atom"
//                         data-cms-thumbnail=""
//                         data-autoplay="false"
//                         data-loop="true"
//                         data-wf-ignore="true"
//                         data-video-urls=""
//                         data-cms-src="https://cdn.vidzflow.com/v/ibMgFCnc7v_1080p_1704943203.mp4"
//                         data-cms-slug-mobile="john-doe"
//                       >
//                         <video
//                           id="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                           loop=""
//                           muted=""
//                           playsInline=""
//                           className="opacity-0"
//                           data-wf-ignore="true"
//                           data-object-fit="cover"
//                         ></video>
//                         <div className="absolute w-[100%] z-10">
//                           <img
//                             className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                               isImageVisible ? "opacity-100" : "opacity-0"
//                             }`}
//                             src={images[currentImageIndex]}
//                             alt="Image Slider"
//                           />
//                         </div>

//                         <div aria-live="polite">
//                           <button
//                             type="button"
//                             data-w-bg-video-control="true"
//                             aria-controls="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                             className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                           ></button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div role="listitem" className="w-dyn-item">
//                   <div className="card card-testimonial">
//                     <div className="text-color-white">
//                       <div className="text-weight-medium">
//                         <div className="text-size-large">
//                           &quot;Courchevel Media transformed what initially felt
//                           like a daunting challenge into a straightforward
//                           process resulting in videos that captured our brands
//                           spirit.&quot;
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-testimonial_client">
//                       <div className="text-color-white">
//                         <div className="text-weight-semibold">
//                           <div className="text-size-medium">Lucas Potasso</div>
//                         </div>
//                       </div>
//                       <div className="text-weight-medium">
//                         <div>Head of Content, Planbox</div>
//                       </div>
//                     </div>
//                     <div className="card-testimonial_video-wrap relative">
//                       <div
//                         className="video size-auto w-background-video w-background-video-atom"
//                         data-cms-thumbnail=""
//                         data-autoplay="false"
//                         data-loop="true"
//                         data-wf-ignore="true"
//                         data-video-urls=""
//                         data-cms-src="https://cdn.vidzflow.com/v/4fqNtlFWBx_720p_1704943529.mp4"
//                         data-cms-slug-mobile="jane-doe"
//                       >
//                         <video
//                           id="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                           loop=""
//                           muted=""
//                           className="opacity-0"
//                           playsInline=""
//                           data-wf-ignore="true"
//                           data-object-fit="cover"
//                         ></video>
//                         <div className="absolute w-[100%] z-10">
//                           <img
//                             className={`w-[100%] transition-opacity duration-500 ease-in-out ${
//                               isImageVisible ? "opacity-100" : "opacity-0"
//                             }`}
//                             src={images[currentImageIndex]}
//                             alt="Image Slider"
//                           />
//                         </div>
//                         <noscript>
//                           <style
//                             dangerouslySetInnerHTML={{ __html: bgVideo }}
//                           />
//                           <img data-wf-bgvideo-fallback-img="true" alt="" />
//                         </noscript>
//                         <div aria-live="polite">
//                           <button
//                             type="button"
//                             data-w-bg-video-control="true"
//                             aria-controls="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                             className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                           ></button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div role="listitem" className="w-dyn-item">
//                   <div className="card card-testimonial">
//                     <div className="text-color-white">
//                       <div className="text-weight-medium">
//                         <div className="text-size-large">
//                           “Courchevel Media made a launch ad for our software
//                           that helped us increase our ARR by just over $100k in
//                           under a month”
//                         </div>
//                       </div>
//                     </div>
//                     <div className="card-testimonial_client">
//                       <div className="text-color-white">
//                         <div className="text-weight-semibold">
//                           <div className="text-size-medium">Nick Abraham</div>
//                         </div>
//                       </div>
//                       <div className="text-weight-medium">
//                         <div>Co-Founder, Quicklines AI</div>
//                       </div>
//                     </div>
//                     <div className="card-testimonial_video-wrap relative">
//                       <div
//                         className="video size-auto w-background-video w-background-video-atom"
//                         data-cms-thumbnail=""
//                         data-autoplay="false"
//                         data-loop="true"
//                         data-wf-ignore="true"
//                         data-video-urls=""
//                         data-cms-src="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
//                         data-cms-slug-mobile="abraham-lincoln"
//                       >
//                         <video
//                           id="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                           loop=""
//                           muted=""
//                           playsInline=""
//                           className="opacity-0"
//                           data-wf-ignore="true"
//                           data-object-fit="cover"
//                         ></video>
//                         <div className="absolute w-[100%] z-10"></div>

//                         <div aria-live="polite">
//                           <button
//                             type="button"
//                             data-w-bg-video-control="true"
//                             aria-controls="42d58899-7158-6ce3-4e76-ed5bb70472bf-video"
//                             className="w-backgroundvideo-backgroundvideoplaypausebutton home-testimonial-video-button w-background-video--control hidden"
//                           ></button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Portfolio;

import React from "react";

const Portfolio = () => {
  return <div>Portfolio</div>;
};

export default Portfolio;
