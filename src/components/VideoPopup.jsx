import React, { useEffect } from "react";
import Watsappbtn from "./Watsappbtn";

const VideoPopup = () => {
  useEffect(() => {
    // Ensure Webflow is defined globally
    window.Webflow = window.Webflow || [];

    // Define the function to be pushed
    const videoPopupCustom = () => {
      document.querySelectorAll("[data-video-popup]").forEach((popup) => {
        popup.addEventListener("click", function () {
          const src = this.getAttribute("data-video-popup");
          const thumbnail = this.getAttribute("data-video-thumbnail");
          const videoEl = document.querySelector(".video-popup_video video");
          const videoPopup = document.querySelector(".video-popup");

          if (!videoEl || !videoPopup) return;

          if (thumbnail) videoEl.setAttribute("poster", thumbnail);
          videoEl.muted = false;
          videoEl.innerHTML = `<source src="${src}${
            !thumbnail ? "#t=1" : ""
          }" type="video/mp4">`;
          videoEl.load();
          videoPopup.style.display = "block";
        });
      });

      document.querySelectorAll(".video-popup_close").forEach((closeBtn) => {
        closeBtn.addEventListener("click", function () {
          const videoEl = document.querySelector(".video-popup_video video");
          const videoPauseButton = document.querySelector(
            ".video-popup_video .video-button-icon.pause-button"
          );
          const videoPopup = document.querySelector(".video-popup");

          if (!videoEl || !videoPopup) return;

          if (!videoPauseButton.getAttribute("hidden"))
            videoPauseButton.closest("[aria-controls]").click();

          videoPopup.style.display = "none";
        });
      });
    };

    // Push the function to Webflow
    window.Webflow.push(videoPopupCustom);

    // Call the function directly to ensure it runs
    videoPopupCustom();
  }, []);

  const bgVideo = `
      [data-wf-bgvideo-fallback-img] {
                display: none;
            }

                @media (prefers-reduced-motion: reduce) {
                    [data - wf - bgvideo - fallback - img] {
                    position: absolute;
                z-index: -100;
                display: inline-block;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
            }
    `;

  return (
    <>
      <div
        data-w-id="3b3c1155-225b-ed8a-2691-7344e2e66fb5"
        className="floating-cta-wrap"
      >
        {/* <div
          data-w-id="d9d5140f-0658-1385-df80-057692e11250"
          className="floating-cta"
        >
          <div className="floating-cta_text">
            <div className="text-color-white">
              <div className="text-weight-medium">
                <div className="text-size-large">
                  Start educating, qualifying, and converting more users today.
                </div>
              </div>
            </div>
          </div>
          <div className="floating-cta_button-group">
            <a
              href="#pricing"
              humblytics="popup-pricing_button"
              className="button is-small is-secondary w-button"
            >
              View Pricing
            </a>
            <Watsappbtn />
          </div>
          <div className="floating-cta_notification">
            <div className="text-size-small">1</div>
          </div>
        </div> */}
      </div>
      <div className="video-popup">
        <div className="video-popup_inner-wrap">
          <div className="video-popup_video-wrap">
            <div
              data-video-urls=""
              data-autoplay="false"
              data-loop="true"
              data-wf-ignore="true"
              className="video-popup_video w-background-video w-background-video-atom"
            >
              <video
                id="af662c33-7071-4623-89db-a81fbaa7e80a-video"
                loop
                muted={false}
                playsInline
                suppressHydrationWarning
                data-wf-ignore="true"
                data-object-fit="cover"
              ></video>
              <noscript>
                <style dangerouslySetInnerHTML={{ __html: bgVideo }} />
                <img data-wf-bgvideo-fallback-img="true" alt="" />
              </noscript>
              <div aria-live="polite">
                <button
                  type="button"
                  data-w-bg-video-control="true"
                  aria-controls="af662c33-7071-4623-89db-a81fbaa7e80a-video"
                  className="w-backgroundvideo-backgroundvideoplaypausebutton video-popup_video-button w-background-video--control"
                >
                  <span className="video-button-icon pause-button">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659e853a03acf6ed2d436e9c_video-pause-button.webp"
                      alt="Pause video"
                      className="image-full"
                    />
                  </span>
                  <span hidden="" className="video-button-icon">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659d20dfbca2353d04fbfa74_video-play-button.webp"
                      alt="Play video"
                      className="image-full"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="video-popup_close-wrap">
          <div className="video-popup_close">
            <div className="svg-icon full w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M4.99023,3.99023c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80921 0.22907,1.09303l6.29297,6.29297l-6.29297,6.29297c-0.26124,0.25082 -0.36647,0.62327 -0.27511,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27511l6.29297,-6.29297l6.29297,6.29297c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-6.29297,-6.29297l6.29297,-6.29297c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-6.29297,6.29297l-6.29297,-6.29297c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPopup;
