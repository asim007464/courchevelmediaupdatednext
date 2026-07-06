import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

Swiper.use([Navigation]);

const Testimonials = () => {
  useEffect(() => {
    /* Case Studies Swiper Carousel */
    var Webflow = window.Webflow || [];
    Webflow.push(function () {
      const caseStudiesSwiper = new Swiper(".swiper-case-studies", {
        init: false,
        autoHeight: true,
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        pagination: false,
        autoplay: false,
        navigation: {
          nextEl: ".home-case-studies-nav .swiper-button-next",
          prevEl: ".home-case-studies-nav .swiper-button-prev",
        },
      });

      caseStudiesSwiper.on("init", function () {
        const totalSlide = caseStudiesSwiper.slides.length;
        document.querySelector(
          ".home-case-studies-nav .swiper-nav-number_total"
        ).textContent = ("0" + totalSlide).slice(-2);
      });

      caseStudiesSwiper.on("slideChange", function () {
        const currentSlide = caseStudiesSwiper.realIndex + 1;
        document.querySelector(
          ".home-case-studies-nav .swiper-nav-number_active"
        ).textContent = ("0" + currentSlide).slice(-2);
      });

      caseStudiesSwiper.init();
    });
  }, []);

  return (
    <>
      {/* <section id="testimonials" className="section">
        <div className="padding-section-medium padding-section_home-case-studies">
          <div className="container-medium">
            <div>
              <div className="swiper swiper-case-studies w-dyn-list">
                <div role="list" className="swiper-wrapper w-dyn-items">
                  <div role="listitem" className="swiper-slide w-dyn-item">
                    <div className="slide-case-study">
                      <div className="slide-case-study_top">
                        <div className="slide-case-study_brand">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6e8e59d5652e71b2c3601_image%2083.png"
                            alt=""
                            sizes="(max-width: 479px) 91vw, (max-width: 767px) 94vw, (max-width: 991px) 89vw, 827.9850463867188px"
                            srcSet="
                                https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6e8e59d5652e71b2c3601_image%2083-p-500.png 500w,
                                https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6e8e59d5652e71b2c3601_image%2083.png       506w
                              "
                            className="image-full"
                          />
                        </div>
                        <div className="text-color-white">
                          <h4 className="heading-style-h4">
                            “We did just over $100k with our lifetime deal, and
                            I contribute a lot of it to the video that
                            Videospark made for our launch because it was so
                            captivating.”
                          </h4>
                        </div>
                      </div>
                      <div className="slide-case-study_middle">
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.375 3.125H3.625C3.29348 3.125 2.97554 3.2567 2.74112 3.49112C2.5067 3.72554 2.375 4.04348 2.375 4.375V15.625C2.375 15.9565 2.5067 16.2745 2.74112 16.5089C2.97554 16.7433 3.29348 16.875 3.625 16.875H17.375C17.7065 16.875 18.0245 16.7433 18.2589 16.5089C18.4933 16.2745 18.625 15.9565 18.625 15.625V4.375C18.625 4.04348 18.4933 3.72554 18.2589 3.49112C18.0245 3.2567 17.7065 3.125 17.375 3.125ZM16.125 15H4.875C4.70924 15 4.55027 14.9342 4.43306 14.8169C4.31585 14.6997 4.25 14.5408 4.25 14.375V5.625C4.25 5.45924 4.31585 5.30027 4.43306 5.18306C4.55027 5.06585 4.70924 5 4.875 5C5.04076 5 5.19973 5.06585 5.31694 5.18306C5.43415 5.30027 5.5 5.45924 5.5 5.625V11.6164L8.18281 8.93281C8.24086 8.8747 8.30979 8.8286 8.38566 8.79715C8.46154 8.7657 8.54287 8.74951 8.625 8.74951C8.70713 8.74951 8.78846 8.7657 8.86434 8.79715C8.94021 8.8286 9.00914 8.8747 9.06719 8.93281L10.5 10.3664L13.9914 6.875H12.375C12.2092 6.875 12.0503 6.80915 11.9331 6.69194C11.8158 6.57473 11.75 6.41576 11.75 6.25C11.75 6.08424 11.8158 5.92527 11.9331 5.80806C12.0503 5.69085 12.2092 5.625 12.375 5.625H15.5C15.6658 5.625 15.8247 5.69085 15.9419 5.80806C16.0592 5.92527 16.125 6.08424 16.125 6.25V9.375C16.125 9.54076 16.0592 9.69973 15.9419 9.81694C15.8247 9.93415 15.6658 10 15.5 10C15.3342 10 15.1753 9.93415 15.0581 9.81694C14.9408 9.69973 14.875 9.54076 14.875 9.375V7.75859L10.9422 11.6922C10.8841 11.7503 10.8152 11.7964 10.7393 11.8279C10.6635 11.8593 10.5821 11.8755 10.5 11.8755C10.4179 11.8755 10.3365 11.8593 10.2607 11.8279C10.1848 11.7964 10.1159 11.7503 10.0578 11.6922L8.625 10.2586L5.5 13.3836V13.75H16.125C16.2908 13.75 16.4497 13.8158 16.5669 13.9331C16.6842 14.0503 16.75 14.2092 16.75 14.375C16.75 14.5408 16.6842 14.6997 16.5669 14.8169C16.4497 14.9342 16.2908 15 16.125 15Z"
                                  fill="url(#paint0_radial_688_466)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_466"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(5.21875 3.125) rotate(53.6476) scale(17.8195 18.9578)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>Revenue Generated</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">$101K</h6>
                            </div>
                          </div>
                        </div>
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.7812 6.25938C18.6053 6.05994 18.3888 5.90023 18.1464 5.79086C17.9039 5.68148 17.641 5.62495 17.375 5.625H13V4.375C13 3.5462 12.6708 2.75134 12.0847 2.16529C11.4987 1.57924 10.7038 1.25 9.875 1.25C9.75889 1.24992 9.64505 1.28218 9.54625 1.34317C9.44744 1.40417 9.36758 1.49148 9.31562 1.59531L6.36406 7.5H3C2.66848 7.5 2.35054 7.6317 2.11612 7.86612C1.8817 8.10054 1.75 8.41848 1.75 8.75V15.625C1.75 15.9565 1.8817 16.2745 2.11612 16.5089C2.35054 16.7433 2.66848 16.875 3 16.875H16.4375C16.8943 16.8752 17.3354 16.7085 17.6781 16.4065C18.0208 16.1044 18.2413 15.6876 18.2984 15.2344L19.2359 7.73438C19.2692 7.47033 19.2458 7.20224 19.1674 6.94792C19.089 6.6936 18.9574 6.45888 18.7812 6.25938ZM3 8.75H6.125V15.625H3V8.75Z"
                                  fill="url(#paint0_radial_688_472)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_472"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4.81261 1.25) rotate(55.1039) scale(19.8839 20.7921)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>Engagements</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">35K</h6>
                            </div>
                          </div>
                        </div>
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.85626 17.0263C9.82246 17.1616 9.74444 17.2816 9.6346 17.3674C9.52475 17.4532 9.38938 17.4998 9.25001 17.4998C9.19735 17.5 9.14487 17.4937 9.09376 17.481L6.59376 16.856C6.52416 16.8386 6.45809 16.8092 6.39845 16.7693L4.52345 15.5193C4.38556 15.4273 4.28986 15.2843 4.25741 15.1218C4.22495 14.9592 4.2584 14.7904 4.3504 14.6525C4.4424 14.5146 4.58541 14.4189 4.74796 14.3865C4.91052 14.354 5.07931 14.3875 5.2172 14.4795L7.00157 15.6693L9.39689 16.2685C9.47692 16.2879 9.55233 16.323 9.61878 16.3716C9.68523 16.4202 9.74141 16.4815 9.7841 16.5519C9.82679 16.6224 9.85514 16.7005 9.86752 16.7819C9.87991 16.8634 9.87608 16.9464 9.85626 17.0263ZM20.2227 9.49041C20.1714 9.64617 20.0898 9.79023 19.9825 9.91427C19.8752 10.0383 19.7444 10.1399 19.5977 10.2131L17.7477 11.1381L16.5695 12.317L13.4445 15.442C13.3682 15.5183 13.2733 15.5735 13.1693 15.6022C13.0652 15.631 12.9555 15.6323 12.8508 15.606L7.85079 14.356C7.77476 14.3369 7.70295 14.3038 7.63907 14.2584L3.30157 11.1615L1.4047 10.2131C1.10824 10.0649 0.882777 9.805 0.777881 9.4906C0.672984 9.1762 0.697243 8.83301 0.845323 8.5365L2.78673 4.65447C2.93493 4.35801 3.1948 4.13255 3.50919 4.02765C3.82359 3.92275 4.16678 3.94701 4.46329 4.09509L6.18673 4.95447L10.3274 3.77166C10.4397 3.73953 10.5588 3.73953 10.6711 3.77166L14.8117 4.95447L16.5352 4.09509C16.8317 3.94701 17.1749 3.92275 17.4893 4.02765C17.8037 4.13255 18.0635 4.35801 18.2117 4.65447L20.1531 8.5365C20.2272 8.68302 20.2715 8.84276 20.2834 9.00649C20.2953 9.17023 20.2747 9.3347 20.2227 9.49041ZM15.1875 11.9263L13.0227 10.1927C11.4961 11.4427 9.55782 11.6076 7.95157 10.5834C7.79357 10.4829 7.66017 10.3481 7.56122 10.1892C7.46228 10.0302 7.40032 9.85099 7.37992 9.66485C7.35952 9.4787 7.3812 9.29035 7.44337 9.11371C7.50553 8.93707 7.60659 8.77665 7.73907 8.64431C7.74096 8.64204 7.74305 8.63994 7.74532 8.63806L11.25 5.23884L10.5 5.02478L6.56095 6.15056L4.42267 10.4263L8.26642 13.1724L12.8086 14.3076L15.1875 11.9263ZM16.6125 10.5013L14.4891 6.24978H12.0031L8.62501 9.53103C9.61407 10.1631 11.1649 10.3373 12.5563 8.93494C12.6649 8.82541 12.8103 8.75994 12.9643 8.75114C13.1184 8.74234 13.2702 8.79083 13.3906 8.88728L16.0789 11.0412L16.6125 10.5013Z"
                                  fill="url(#paint0_radial_688_478)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_478"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4.13891 3.74756) rotate(48.448) scale(19.1806 21.2176)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>New Customers</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">1K+</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide-case-study_bottom">
                        <div className="slide-case-study_profile">
                          <div className="slide-case-study_profile-image">
                            <img
                              loading="lazy"
                              alt="Nick Abraham"
                              src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6d6b88624d22037953f90_Nick%20Abraham%20Profile.png"
                              className="image-full cover"
                            />
                          </div>
                          <div className="slide-case-study_profile-details">
                            <div className="text-color-white">
                              <div className="text-weight-semibold">
                                <div className="text-size-medium">
                                  Nick Abraham
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>Co-Founder, Quicklines AI</div>
                            </div>
                          </div>
                        </div>
                        <div className="button-group is-position-relative">
                          <a
                            data-video-thumbnail=""
                            data-video-popup="https://cdn.vidzflow.com/v/UWarpjYMy6_1080p_1704944600.mp4"
                            href="#"
                            target="_blank"
                            className="button is-small is-secondary w-inline-block"
                          >
                            <div className="svg-icon button-icon w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_b_688_489)">
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="10"
                                    fill="url(#paint0_radial_688_489)"
                                    fillOpacity="0.7"
                                  />
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.7"
                                    stroke="url(#paint1_linear_688_489)"
                                    strokeOpacity="0.3"
                                    strokeWidth="0.6"
                                  />
                                </g>
                                <path
                                  d="M14.0996 9.97892C14.4996 10.2099 14.4996 10.7872 14.0996 11.0182L9.14963 13.876C8.74963 14.107 8.24963 13.8183 8.24963 13.3564L8.24963 7.64065C8.24963 7.17877 8.74963 6.8901 9.14963 7.12104L14.0996 9.97892Z"
                                  fill="#0B0B0B"
                                />
                                <defs>
                                  <filter
                                    id="filter0_b_688_489"
                                    x="-3.1"
                                    y="-3.1"
                                    width="27.2"
                                    height="27.2"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feGaussianBlur
                                      in="BackgroundImageFix"
                                      stdDeviation="1.8"
                                    />
                                    <feComposite
                                      in2="SourceAlpha"
                                      operator="in"
                                      result="effect1_backgroundBlur_688_489"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_backgroundBlur_688_489"
                                      result="shape"
                                    />
                                  </filter>
                                  <radialGradient
                                    id="paint0_radial_688_489"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4 0.500001) rotate(58.0872) scale(24.592)"
                                  >
                                    <stop stopColor="#FFEFE0" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#FFDAFB"
                                    />
                                    <stop offset="1" stopColor="#F0F3FF" />
                                  </radialGradient>
                                  <linearGradient
                                    id="paint1_linear_688_489"
                                    x1="0.499999"
                                    y1="4.38932e-07"
                                    x2="19.125"
                                    y2="24.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="white" />
                                    <stop
                                      offset="1"
                                      stopColor="white"
                                      stopOpacity="0"
                                    />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div>Watch the video</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="swiper-slide w-dyn-item">
                    <div className="slide-case-study">
                      <div className="slide-case-study_top">
                        <div className="slide-case-study_brand">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6eb6852ee763437710e4b_63de9d6b10d0b9ddca3fee09_ammo-logo%201.svg"
                            alt=""
                            className="image-full"
                          />
                        </div>
                        <div className="text-color-white">
                          <h4 className="heading-style-h4">
                            &quot;A client came to us and specifically
                            referenced the video as how he found us - which is
                            pretty unheard of. We didn’t even run ads, and 24
                            hours later he signed a retainer for $24k.&quot;
                          </h4>
                        </div>
                      </div>
                      <div className="slide-case-study_middle">
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.375 3.125H3.625C3.29348 3.125 2.97554 3.2567 2.74112 3.49112C2.5067 3.72554 2.375 4.04348 2.375 4.375V15.625C2.375 15.9565 2.5067 16.2745 2.74112 16.5089C2.97554 16.7433 3.29348 16.875 3.625 16.875H17.375C17.7065 16.875 18.0245 16.7433 18.2589 16.5089C18.4933 16.2745 18.625 15.9565 18.625 15.625V4.375C18.625 4.04348 18.4933 3.72554 18.2589 3.49112C18.0245 3.2567 17.7065 3.125 17.375 3.125ZM16.125 15H4.875C4.70924 15 4.55027 14.9342 4.43306 14.8169C4.31585 14.6997 4.25 14.5408 4.25 14.375V5.625C4.25 5.45924 4.31585 5.30027 4.43306 5.18306C4.55027 5.06585 4.70924 5 4.875 5C5.04076 5 5.19973 5.06585 5.31694 5.18306C5.43415 5.30027 5.5 5.45924 5.5 5.625V11.6164L8.18281 8.93281C8.24086 8.8747 8.30979 8.8286 8.38566 8.79715C8.46154 8.7657 8.54287 8.74951 8.625 8.74951C8.70713 8.74951 8.78846 8.7657 8.86434 8.79715C8.94021 8.8286 9.00914 8.8747 9.06719 8.93281L10.5 10.3664L13.9914 6.875H12.375C12.2092 6.875 12.0503 6.80915 11.9331 6.69194C11.8158 6.57473 11.75 6.41576 11.75 6.25C11.75 6.08424 11.8158 5.92527 11.9331 5.80806C12.0503 5.69085 12.2092 5.625 12.375 5.625H15.5C15.6658 5.625 15.8247 5.69085 15.9419 5.80806C16.0592 5.92527 16.125 6.08424 16.125 6.25V9.375C16.125 9.54076 16.0592 9.69973 15.9419 9.81694C15.8247 9.93415 15.6658 10 15.5 10C15.3342 10 15.1753 9.93415 15.0581 9.81694C14.9408 9.69973 14.875 9.54076 14.875 9.375V7.75859L10.9422 11.6922C10.8841 11.7503 10.8152 11.7964 10.7393 11.8279C10.6635 11.8593 10.5821 11.8755 10.5 11.8755C10.4179 11.8755 10.3365 11.8593 10.2607 11.8279C10.1848 11.7964 10.1159 11.7503 10.0578 11.6922L8.625 10.2586L5.5 13.3836V13.75H16.125C16.2908 13.75 16.4497 13.8158 16.5669 13.9331C16.6842 14.0503 16.75 14.2092 16.75 14.375C16.75 14.5408 16.6842 14.6997 16.5669 14.8169C16.4497 14.9342 16.2908 15 16.125 15Z"
                                  fill="url(#paint0_radial_688_466)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_466"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(5.21875 3.125) rotate(53.6476) scale(17.8195 18.9578)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>Revenue Generated</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">$24K</h6>
                            </div>
                          </div>
                        </div>
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.7812 6.25938C18.6053 6.05994 18.3888 5.90023 18.1464 5.79086C17.9039 5.68148 17.641 5.62495 17.375 5.625H13V4.375C13 3.5462 12.6708 2.75134 12.0847 2.16529C11.4987 1.57924 10.7038 1.25 9.875 1.25C9.75889 1.24992 9.64505 1.28218 9.54625 1.34317C9.44744 1.40417 9.36758 1.49148 9.31562 1.59531L6.36406 7.5H3C2.66848 7.5 2.35054 7.6317 2.11612 7.86612C1.8817 8.10054 1.75 8.41848 1.75 8.75V15.625C1.75 15.9565 1.8817 16.2745 2.11612 16.5089C2.35054 16.7433 2.66848 16.875 3 16.875H16.4375C16.8943 16.8752 17.3354 16.7085 17.6781 16.4065C18.0208 16.1044 18.2413 15.6876 18.2984 15.2344L19.2359 7.73438C19.2692 7.47033 19.2458 7.20224 19.1674 6.94792C19.089 6.6936 18.9574 6.45888 18.7812 6.25938ZM3 8.75H6.125V15.625H3V8.75Z"
                                  fill="url(#paint0_radial_688_472)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_472"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4.81261 1.25) rotate(55.1039) scale(19.8839 20.7921)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>Engagements</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">9.4k</h6>
                            </div>
                          </div>
                        </div>
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.85626 17.0263C9.82246 17.1616 9.74444 17.2816 9.6346 17.3674C9.52475 17.4532 9.38938 17.4998 9.25001 17.4998C9.19735 17.5 9.14487 17.4937 9.09376 17.481L6.59376 16.856C6.52416 16.8386 6.45809 16.8092 6.39845 16.7693L4.52345 15.5193C4.38556 15.4273 4.28986 15.2843 4.25741 15.1218C4.22495 14.9592 4.2584 14.7904 4.3504 14.6525C4.4424 14.5146 4.58541 14.4189 4.74796 14.3865C4.91052 14.354 5.07931 14.3875 5.2172 14.4795L7.00157 15.6693L9.39689 16.2685C9.47692 16.2879 9.55233 16.323 9.61878 16.3716C9.68523 16.4202 9.74141 16.4815 9.7841 16.5519C9.82679 16.6224 9.85514 16.7005 9.86752 16.7819C9.87991 16.8634 9.87608 16.9464 9.85626 17.0263ZM20.2227 9.49041C20.1714 9.64617 20.0898 9.79023 19.9825 9.91427C19.8752 10.0383 19.7444 10.1399 19.5977 10.2131L17.7477 11.1381L16.5695 12.317L13.4445 15.442C13.3682 15.5183 13.2733 15.5735 13.1693 15.6022C13.0652 15.631 12.9555 15.6323 12.8508 15.606L7.85079 14.356C7.77476 14.3369 7.70295 14.3038 7.63907 14.2584L3.30157 11.1615L1.4047 10.2131C1.10824 10.0649 0.882777 9.805 0.777881 9.4906C0.672984 9.1762 0.697243 8.83301 0.845323 8.5365L2.78673 4.65447C2.93493 4.35801 3.1948 4.13255 3.50919 4.02765C3.82359 3.92275 4.16678 3.94701 4.46329 4.09509L6.18673 4.95447L10.3274 3.77166C10.4397 3.73953 10.5588 3.73953 10.6711 3.77166L14.8117 4.95447L16.5352 4.09509C16.8317 3.94701 17.1749 3.92275 17.4893 4.02765C17.8037 4.13255 18.0635 4.35801 18.2117 4.65447L20.1531 8.5365C20.2272 8.68302 20.2715 8.84276 20.2834 9.00649C20.2953 9.17023 20.2747 9.3347 20.2227 9.49041ZM15.1875 11.9263L13.0227 10.1927C11.4961 11.4427 9.55782 11.6076 7.95157 10.5834C7.79357 10.4829 7.66017 10.3481 7.56122 10.1892C7.46228 10.0302 7.40032 9.85099 7.37992 9.66485C7.35952 9.4787 7.3812 9.29035 7.44337 9.11371C7.50553 8.93707 7.60659 8.77665 7.73907 8.64431C7.74096 8.64204 7.74305 8.63994 7.74532 8.63806L11.25 5.23884L10.5 5.02478L6.56095 6.15056L4.42267 10.4263L8.26642 13.1724L12.8086 14.3076L15.1875 11.9263ZM16.6125 10.5013L14.4891 6.24978H12.0031L8.62501 9.53103C9.61407 10.1631 11.1649 10.3373 12.5563 8.93494C12.6649 8.82541 12.8103 8.75994 12.9643 8.75114C13.1184 8.74234 13.2702 8.79083 13.3906 8.88728L16.0789 11.0412L16.6125 10.5013Z"
                                  fill="url(#paint0_radial_688_478)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_478"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4.13891 3.74756) rotate(48.448) scale(19.1806 21.2176)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>New Customers</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">1</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide-case-study_bottom">
                        <div className="slide-case-study_profile">
                          <div className="slide-case-study_profile-image">
                            <img
                              loading="lazy"
                              alt="Diego Diaz"
                              src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a492b3987628aaabd56885_1697612534727.jpeg"
                              sizes="(max-width: 479px) 20vw, 47.99440002441406px"
                              srcSet="
                                  https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a492b3987628aaabd56885_1697612534727-p-500.jpeg 500w,
                                  https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a492b3987628aaabd56885_1697612534727.jpeg       800w
                                "
                              className="image-full cover"
                            />
                          </div>
                          <div className="slide-case-study_profile-details">
                            <div className="text-color-white">
                              <div className="text-weight-semibold">
                                <div className="text-size-medium">
                                  Diego Diaz
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>Ammo Studios, Founder (Exited)</div>
                            </div>
                          </div>
                        </div>
                        <div className="button-group is-position-relative">
                          <a
                            data-video-thumbnail=""
                            data-video-popup="https://cdn.vidzflow.com/v/tZHO0wjWD2_1080p_1704944007.mp4"
                            href="#"
                            target="_blank"
                            className="button is-small is-secondary w-inline-block"
                          >
                            <div className="svg-icon button-icon w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_b_688_489)">
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="10"
                                    fill="url(#paint0_radial_688_489)"
                                    fillOpacity="0.7"
                                  />
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.7"
                                    stroke="url(#paint1_linear_688_489)"
                                    strokeOpacity="0.3"
                                    strokeWidth="0.6"
                                  />
                                </g>
                                <path
                                  d="M14.0996 9.97892C14.4996 10.2099 14.4996 10.7872 14.0996 11.0182L9.14963 13.876C8.74963 14.107 8.24963 13.8183 8.24963 13.3564L8.24963 7.64065C8.24963 7.17877 8.74963 6.8901 9.14963 7.12104L14.0996 9.97892Z"
                                  fill="#0B0B0B"
                                />
                                <defs>
                                  <filter
                                    id="filter0_b_688_489"
                                    x="-3.1"
                                    y="-3.1"
                                    width="27.2"
                                    height="27.2"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feGaussianBlur
                                      in="BackgroundImageFix"
                                      stdDeviation="1.8"
                                    />
                                    <feComposite
                                      in2="SourceAlpha"
                                      operator="in"
                                      result="effect1_backgroundBlur_688_489"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_backgroundBlur_688_489"
                                      result="shape"
                                    />
                                  </filter>
                                  <radialGradient
                                    id="paint0_radial_688_489"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4 0.500001) rotate(58.0872) scale(24.592)"
                                  >
                                    <stop stopColor="#FFEFE0" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#FFDAFB"
                                    />
                                    <stop offset="1" stopColor="#F0F3FF" />
                                  </radialGradient>
                                  <linearGradient
                                    id="paint1_linear_688_489"
                                    x1="0.499999"
                                    y1="4.38932e-07"
                                    x2="19.125"
                                    y2="24.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="white" />
                                    <stop
                                      offset="1"
                                      stopColor="white"
                                      stopOpacity="0"
                                    />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div>Watch the video</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="listitem" className="swiper-slide w-dyn-item">
                    <div className="slide-case-study">
                      <div className="slide-case-study_top">
                        <div className="slide-case-study_brand">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6f145c99431e8fd4cefd5_logotype.png"
                            alt=""
                            className="image-full"
                          />
                        </div>
                        <div className="text-color-white">
                          <h4 className="heading-style-h4">
                            &quot;Would you trust someone that doesn’t practice
                            what they preach? Of course not - thankfully, we
                            actually use our own videos to advertise, educate,
                            and convert new customers organically. The results
                            from just our brand video alone have been
                            incredible.”
                          </h4>
                        </div>
                      </div>
                      <div className="slide-case-study_middle">
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.375 3.125H3.625C3.29348 3.125 2.97554 3.2567 2.74112 3.49112C2.5067 3.72554 2.375 4.04348 2.375 4.375V15.625C2.375 15.9565 2.5067 16.2745 2.74112 16.5089C2.97554 16.7433 3.29348 16.875 3.625 16.875H17.375C17.7065 16.875 18.0245 16.7433 18.2589 16.5089C18.4933 16.2745 18.625 15.9565 18.625 15.625V4.375C18.625 4.04348 18.4933 3.72554 18.2589 3.49112C18.0245 3.2567 17.7065 3.125 17.375 3.125ZM16.125 15H4.875C4.70924 15 4.55027 14.9342 4.43306 14.8169C4.31585 14.6997 4.25 14.5408 4.25 14.375V5.625C4.25 5.45924 4.31585 5.30027 4.43306 5.18306C4.55027 5.06585 4.70924 5 4.875 5C5.04076 5 5.19973 5.06585 5.31694 5.18306C5.43415 5.30027 5.5 5.45924 5.5 5.625V11.6164L8.18281 8.93281C8.24086 8.8747 8.30979 8.8286 8.38566 8.79715C8.46154 8.7657 8.54287 8.74951 8.625 8.74951C8.70713 8.74951 8.78846 8.7657 8.86434 8.79715C8.94021 8.8286 9.00914 8.8747 9.06719 8.93281L10.5 10.3664L13.9914 6.875H12.375C12.2092 6.875 12.0503 6.80915 11.9331 6.69194C11.8158 6.57473 11.75 6.41576 11.75 6.25C11.75 6.08424 11.8158 5.92527 11.9331 5.80806C12.0503 5.69085 12.2092 5.625 12.375 5.625H15.5C15.6658 5.625 15.8247 5.69085 15.9419 5.80806C16.0592 5.92527 16.125 6.08424 16.125 6.25V9.375C16.125 9.54076 16.0592 9.69973 15.9419 9.81694C15.8247 9.93415 15.6658 10 15.5 10C15.3342 10 15.1753 9.93415 15.0581 9.81694C14.9408 9.69973 14.875 9.54076 14.875 9.375V7.75859L10.9422 11.6922C10.8841 11.7503 10.8152 11.7964 10.7393 11.8279C10.6635 11.8593 10.5821 11.8755 10.5 11.8755C10.4179 11.8755 10.3365 11.8593 10.2607 11.8279C10.1848 11.7964 10.1159 11.7503 10.0578 11.6922L8.625 10.2586L5.5 13.3836V13.75H16.125C16.2908 13.75 16.4497 13.8158 16.5669 13.9331C16.6842 14.0503 16.75 14.2092 16.75 14.375C16.75 14.5408 16.6842 14.6997 16.5669 14.8169C16.4497 14.9342 16.2908 15 16.125 15Z"
                                  fill="url(#paint0_radial_688_466)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_466"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(5.21875 3.125) rotate(53.6476) scale(17.8195 18.9578)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>Revenue Generated</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">$224K</h6>
                            </div>
                          </div>
                        </div>
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18.7812 6.25938C18.6053 6.05994 18.3888 5.90023 18.1464 5.79086C17.9039 5.68148 17.641 5.62495 17.375 5.625H13V4.375C13 3.5462 12.6708 2.75134 12.0847 2.16529C11.4987 1.57924 10.7038 1.25 9.875 1.25C9.75889 1.24992 9.64505 1.28218 9.54625 1.34317C9.44744 1.40417 9.36758 1.49148 9.31562 1.59531L6.36406 7.5H3C2.66848 7.5 2.35054 7.6317 2.11612 7.86612C1.8817 8.10054 1.75 8.41848 1.75 8.75V15.625C1.75 15.9565 1.8817 16.2745 2.11612 16.5089C2.35054 16.7433 2.66848 16.875 3 16.875H16.4375C16.8943 16.8752 17.3354 16.7085 17.6781 16.4065C18.0208 16.1044 18.2413 15.6876 18.2984 15.2344L19.2359 7.73438C19.2692 7.47033 19.2458 7.20224 19.1674 6.94792C19.089 6.6936 18.9574 6.45888 18.7812 6.25938ZM3 8.75H6.125V15.625H3V8.75Z"
                                  fill="url(#paint0_radial_688_472)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_472"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4.81261 1.25) rotate(55.1039) scale(19.8839 20.7921)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>Engagements</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">19.3K+</h6>
                            </div>
                          </div>
                        </div>
                        <div className="slide-case-study_value">
                          <div className="slide-case-study_value-icon-wrap">
                            <div className="svg-icon full w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.85626 17.0263C9.82246 17.1616 9.74444 17.2816 9.6346 17.3674C9.52475 17.4532 9.38938 17.4998 9.25001 17.4998C9.19735 17.5 9.14487 17.4937 9.09376 17.481L6.59376 16.856C6.52416 16.8386 6.45809 16.8092 6.39845 16.7693L4.52345 15.5193C4.38556 15.4273 4.28986 15.2843 4.25741 15.1218C4.22495 14.9592 4.2584 14.7904 4.3504 14.6525C4.4424 14.5146 4.58541 14.4189 4.74796 14.3865C4.91052 14.354 5.07931 14.3875 5.2172 14.4795L7.00157 15.6693L9.39689 16.2685C9.47692 16.2879 9.55233 16.323 9.61878 16.3716C9.68523 16.4202 9.74141 16.4815 9.7841 16.5519C9.82679 16.6224 9.85514 16.7005 9.86752 16.7819C9.87991 16.8634 9.87608 16.9464 9.85626 17.0263ZM20.2227 9.49041C20.1714 9.64617 20.0898 9.79023 19.9825 9.91427C19.8752 10.0383 19.7444 10.1399 19.5977 10.2131L17.7477 11.1381L16.5695 12.317L13.4445 15.442C13.3682 15.5183 13.2733 15.5735 13.1693 15.6022C13.0652 15.631 12.9555 15.6323 12.8508 15.606L7.85079 14.356C7.77476 14.3369 7.70295 14.3038 7.63907 14.2584L3.30157 11.1615L1.4047 10.2131C1.10824 10.0649 0.882777 9.805 0.777881 9.4906C0.672984 9.1762 0.697243 8.83301 0.845323 8.5365L2.78673 4.65447C2.93493 4.35801 3.1948 4.13255 3.50919 4.02765C3.82359 3.92275 4.16678 3.94701 4.46329 4.09509L6.18673 4.95447L10.3274 3.77166C10.4397 3.73953 10.5588 3.73953 10.6711 3.77166L14.8117 4.95447L16.5352 4.09509C16.8317 3.94701 17.1749 3.92275 17.4893 4.02765C17.8037 4.13255 18.0635 4.35801 18.2117 4.65447L20.1531 8.5365C20.2272 8.68302 20.2715 8.84276 20.2834 9.00649C20.2953 9.17023 20.2747 9.3347 20.2227 9.49041ZM15.1875 11.9263L13.0227 10.1927C11.4961 11.4427 9.55782 11.6076 7.95157 10.5834C7.79357 10.4829 7.66017 10.3481 7.56122 10.1892C7.46228 10.0302 7.40032 9.85099 7.37992 9.66485C7.35952 9.4787 7.3812 9.29035 7.44337 9.11371C7.50553 8.93707 7.60659 8.77665 7.73907 8.64431C7.74096 8.64204 7.74305 8.63994 7.74532 8.63806L11.25 5.23884L10.5 5.02478L6.56095 6.15056L4.42267 10.4263L8.26642 13.1724L12.8086 14.3076L15.1875 11.9263ZM16.6125 10.5013L14.4891 6.24978H12.0031L8.62501 9.53103C9.61407 10.1631 11.1649 10.3373 12.5563 8.93494C12.6649 8.82541 12.8103 8.75994 12.9643 8.75114C13.1184 8.74234 13.2702 8.79083 13.3906 8.88728L16.0789 11.0412L16.6125 10.5013Z"
                                  fill="url(#paint0_radial_688_478)"
                                />
                                <defs>
                                  <radialGradient
                                    id="paint0_radial_688_478"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4.13891 3.74756) rotate(48.448) scale(19.1806 21.2176)"
                                  >
                                    <stop stopColor="#F48D2E" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#F2A9EB"
                                    />
                                    <stop offset="1" stopColor="#4964EE" />
                                  </radialGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="slide-case-study_value-details">
                            <div>
                              <div>New Customers</div>
                            </div>
                            <div className="text-color-white">
                              <h6 className="heading-style-h6">52</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide-case-study_bottom">
                        <div className="slide-case-study_profile">
                          <div className="slide-case-study_profile-image">
                            <img
                              loading="lazy"
                              alt="Scott Millard"
                              src="https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6d7055f81b309ec722ef0_Scott%20Google%20Profile.jpg"
                              sizes="(max-width: 479px) 20vw, 47.99440002441406px"
                              srcSet="
                                  https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6d7055f81b309ec722ef0_Scott%20Google%20Profile-p-500.jpg   500w,
                                  https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6d7055f81b309ec722ef0_Scott%20Google%20Profile-p-800.jpg   800w,
                                  https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6d7055f81b309ec722ef0_Scott%20Google%20Profile-p-1080.jpg 1080w,
                                  https://cdn.prod.website-files.com/659ba24ba3e796a3652951d0/65a6d7055f81b309ec722ef0_Scott%20Google%20Profile.jpg        1277w
                                "
                              className="image-full cover"
                            />
                          </div>
                          <div className="slide-case-study_profile-details">
                            <div className="text-color-white">
                              <div className="text-weight-semibold">
                                <div className="text-size-medium">
                                  Scott Millard
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>Founder, Courchevel Media</div>
                            </div>
                          </div>
                        </div>
                        <div className="button-group is-position-relative">
                          <a
                            data-video-thumbnail=""
                            data-video-popup="https://cdn.vidzflow.com/v/rvcITXq67x_1080p_1704945132.mp4"
                            href="#"
                            target="_blank"
                            className="button is-small is-secondary w-inline-block"
                          >
                            <div className="svg-icon button-icon w-embed">
                              <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g filter="url(#filter0_b_688_489)">
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="10"
                                    fill="url(#paint0_radial_688_489)"
                                    fillOpacity="0.7"
                                  />
                                  <circle
                                    cx="10.5"
                                    cy="10.5"
                                    r="9.7"
                                    stroke="url(#paint1_linear_688_489)"
                                    strokeOpacity="0.3"
                                    strokeWidth="0.6"
                                  />
                                </g>
                                <path
                                  d="M14.0996 9.97892C14.4996 10.2099 14.4996 10.7872 14.0996 11.0182L9.14963 13.876C8.74963 14.107 8.24963 13.8183 8.24963 13.3564L8.24963 7.64065C8.24963 7.17877 8.74963 6.8901 9.14963 7.12104L14.0996 9.97892Z"
                                  fill="#0B0B0B"
                                />
                                <defs>
                                  <filter
                                    id="filter0_b_688_489"
                                    x="-3.1"
                                    y="-3.1"
                                    width="27.2"
                                    height="27.2"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                  >
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feGaussianBlur
                                      in="BackgroundImageFix"
                                      stdDeviation="1.8"
                                    />
                                    <feComposite
                                      in2="SourceAlpha"
                                      operator="in"
                                      result="effect1_backgroundBlur_688_489"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_backgroundBlur_688_489"
                                      result="shape"
                                    />
                                  </filter>
                                  <radialGradient
                                    id="paint0_radial_688_489"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(4 0.500001) rotate(58.0872) scale(24.592)"
                                  >
                                    <stop stopColor="#FFEFE0" />
                                    <stop
                                      offset="0.51861"
                                      stopColor="#FFDAFB"
                                    />
                                    <stop offset="1" stopColor="#F0F3FF" />
                                  </radialGradient>
                                  <linearGradient
                                    id="paint1_linear_688_489"
                                    x1="0.499999"
                                    y1="4.38932e-07"
                                    x2="19.125"
                                    y2="24.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="white" />
                                    <stop
                                      offset="1"
                                      stopColor="white"
                                      stopOpacity="0"
                                    />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div>Watch the video</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-case-studies-nav">
                <div className="swiper-nav-button swiper-button-prev">
                  <div className="svg-icon full w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.80783 10.4423L12.0578 16.6923C12.1159 16.7504 12.1848 16.7964 12.2607 16.8278C12.3366 16.8593 12.4179 16.8755 12.5 16.8755C12.5821 16.8755 12.6635 16.8593 12.7393 16.8278C12.8152 16.7964 12.8841 16.7504 12.9422 16.6923C13.0003 16.6342 13.0463 16.5653 13.0778 16.4894C13.1092 16.4135 13.1254 16.3322 13.1254 16.2501C13.1254 16.168 13.1092 16.0867 13.0778 16.0108C13.0463 15.9349 13.0003 15.866 12.9422 15.8079L7.13361 10.0001L12.9422 4.19229C13.0595 4.07502 13.1254 3.91596 13.1254 3.7501C13.1254 3.58425 13.0595 3.42519 12.9422 3.30792C12.8249 3.19064 12.6659 3.12476 12.5 3.12476C12.3342 3.12476 12.1751 3.19064 12.0578 3.30792L5.80783 9.55792C5.74972 9.61596 5.70362 9.68489 5.67217 9.76077C5.64072 9.83664 5.62453 9.91797 5.62453 10.0001C5.62453 10.0822 5.64072 10.1636 5.67217 10.2394C5.70362 10.3153 5.74972 10.3842 5.80783 10.4423Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="swiper-nav-number">
                  <div className="text-size-regular">
                    <span className="swiper-nav-number_active">01</span>/
                    <span className="swiper-nav-number_total">03</span>
                  </div>
                </div>
                <div className="swiper-nav-button swiper-button-next">
                  <div className="svg-icon full w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.1922 10.4423L7.9422 16.6923C7.88413 16.7504 7.81519 16.7964 7.73932 16.8278C7.66345 16.8593 7.58213 16.8755 7.50001 16.8755C7.41789 16.8755 7.33657 16.8593 7.2607 16.8278C7.18483 16.7964 7.11589 16.7504 7.05782 16.6923C6.99976 16.6342 6.95369 16.5653 6.92227 16.4894C6.89084 16.4135 6.87466 16.3322 6.87466 16.2501C6.87466 16.168 6.89084 16.0867 6.92227 16.0108C6.95369 15.9349 6.99976 15.866 7.05782 15.8079L12.8664 10.0001L7.05782 4.19229C6.94055 4.07502 6.87466 3.91596 6.87466 3.7501C6.87466 3.58425 6.94055 3.42519 7.05782 3.30792C7.1751 3.19064 7.33416 3.12476 7.50001 3.12476C7.66586 3.12476 7.82492 3.19064 7.9422 3.30792L14.1922 9.55792C14.2503 9.61596 14.2964 9.68489 14.3279 9.76077C14.3593 9.83664 14.3755 9.91797 14.3755 10.0001C14.3755 10.0822 14.3593 10.1636 14.3279 10.2394C14.2964 10.3153 14.2503 10.3842 14.1922 10.4423Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-case-studies_ornament">
          <img
            src="https://cdn.prod.website-files.com/659602a8a781e80b03a8096b/659b93ae8a59e9f3c7fdb3a0_home-case-studies_ornament.webp"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, 463.9925231933594px"
            srcSet="
                https://assets-global.website-files.com/659602a8a781e80b03a8096b/659b93ae8a59e9f3c7fdb3a0_home-case-studies_ornament-p-500.png 500w,
                https://assets-global.website-files.com/659602a8a781e80b03a8096b/659b93ae8a59e9f3c7fdb3a0_home-case-studies_ornament-p-800.png 800w,
                https://assets-global.website-files.com/659602a8a781e80b03a8096b/659b93ae8a59e9f3c7fdb3a0_home-case-studies_ornament.webp      930w
              "
            alt=""
            className="image-full h-auto"
          />
        </div>
        <div className="section_bg"></div>
      </section> */}
    </>
  );
};

export default Testimonials;
