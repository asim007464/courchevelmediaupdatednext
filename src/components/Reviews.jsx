

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";

const REVIEWS_DATA = [
    {
      id: 1,
      rating: 5,
      date: "Nov 10, 2024",
      name: "Kylian Breliere",
      review:
        "Insane content. I’ll recommend it. Kevin is a man who can shoot, edit and directions a project!",
    },
    {
      id: 2,
      rating: 4,
      date: "Nov 8, 2024",
      name: "Ria Tab",
      review:
        "As artistic director for this place, ive never seen such professionalism and beauty in one.Gracias Kevin",
    },
    {
      id: 3,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Niccolo Bucciero",
      review:
        "Kevin was a great support catching the content I need for my professional content. It was very professional working with him and he is very punctual. He is my go to when needed to shoot some content !",
    },
    {
      id: 4,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Emanuele Corno",
      review:
        "As a ski instructor in Courchevel and across the Alps, I often have clients who want photos and videos of their experience. I've relied on Courchevel Media multiple times, and I can confidently say that neither I nor my clients have ever been disappointed. Not only is the quality of the content produced top-notch, ",
    },
    {
      id: 5,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Elin Silverio",
      review:
        "I have worked with Kevin several times and I don't trust anyone else. In addition to being very professional and a 360° expert in his sector, he is a very enthusiastic person: he manages to put you at ease, he is cheerful and creates a relaxed and positive environment.The best filmmaker in Courchevel, without a doubt!",
    },
    {
      id: 6,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Gustavo Ruybal",
      review:
        "Great service, we called Kelvin to do a photo shoot for a marriage proposal. The result was surprising. I recommend it, excellent professional. 📷 …",
    },
    {
      id: 7,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Coralie Evalet",
      review:
        "Absolutely perfect service! Thank you very much, Kevin is very professional!",
    },
    {
      id: 8,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Luis Fernando Judez Zubillaga",
      review: "The best 🙌🏼 …",
    },
    {
      id: 9,
      rating: 5,
      date: "Nov 5, 2024",
      name: "Marco Surza",
      review: "",
    },
];

const Reviews = () => {
  const { t } = useLanguage();
  const [loopedReviews, setLoopedReviews] = useState([]);

  useEffect(() => {
    const updateReviews = () => {
      if (window.innerWidth < 768) {
        setLoopedReviews(REVIEWS_DATA.slice(0, 4));
      } else {
        setLoopedReviews([...REVIEWS_DATA, ...REVIEWS_DATA]);
      }
    };

    updateReviews();

    window.addEventListener("resize", updateReviews);
    return () => window.removeEventListener("resize", updateReviews);
  }, []);
  return (
    <>
      <section className="section md:mb-0 mb-[-84px]" id="reviews">
        <div className="padding-section-large padding-section_home-review">
          <div className="container-medium">
            <div className="section-heading-horizontal">
              <div className="text-color-white">
                <h2 className="heading-style-h2 text-white">
                  {t("reviews.title")}
                  <span className="text-color-gradient">{t("reviews.titleGradient")}</span>
                  {t("reviews.titleEnd")}
                </h2>
              </div>
            </div>
          </div>
          <div className="padding-top padding-xlarge">
            <div className="home-reviews-outer-wrap">
              <div className="container-medium medium-container-custom">
                <div className="home-reviews-wrap">
                  <div className="home-reviews-stack ">
                    <div className="card card-review-stack">
                      <div className="text-align-center">
                        <div className="text-color-white">
                          <div className="text-weight-medium">
                            <div className="text-size-xlarge">{t("reviews.excellent")}</div>
                          </div>
                        </div>
                      </div>
                      <div className="card-review_stars-wrap">
                        <div className="card-review_star">
                          <div className="svg-icon full w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 33 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1999 0H0.199951V32H32.1999V0Z"
                                fill="transparent"
                              />
                              <path
                                d="M16.1995 21.571L21.0662 20.3376L23.0995 26.6043L16.1995 21.571ZM27.3995 13.471H18.8328L16.1995 5.4043L13.5662 13.471H4.99951L11.9328 18.471L9.29951 26.5376L16.2328 21.5376L20.4995 18.471L27.3995 13.471Z"
                                fill="#FABB05"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="card-review_star">
                          <div className="svg-icon full w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 33 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1999 0H0.199951V32H32.1999V0Z"
                                fill="transparent"
                              />
                              <path
                                d="M16.1995 21.571L21.0662 20.3376L23.0995 26.6043L16.1995 21.571ZM27.3995 13.471H18.8328L16.1995 5.4043L13.5662 13.471H4.99951L11.9328 18.471L9.29951 26.5376L16.2328 21.5376L20.4995 18.471L27.3995 13.471Z"
                                fill="#FABB05"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="card-review_star">
                          <div className="svg-icon full w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 33 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1999 0H0.199951V32H32.1999V0Z"
                                fill="transparent"
                              />
                              <path
                                d="M16.1995 21.571L21.0662 20.3376L23.0995 26.6043L16.1995 21.571ZM27.3995 13.471H18.8328L16.1995 5.4043L13.5662 13.471H4.99951L11.9328 18.471L9.29951 26.5376L16.2328 21.5376L20.4995 18.471L27.3995 13.471Z"
                                fill="#FABB05"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="card-review_star">
                          <div className="svg-icon full w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 33 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1999 0H0.199951V32H32.1999V0Z"
                                fill="transparent"
                              />
                              <path
                                d="M16.1995 21.571L21.0662 20.3376L23.0995 26.6043L16.1995 21.571ZM27.3995 13.471H18.8328L16.1995 5.4043L13.5662 13.471H4.99951L11.9328 18.471L9.29951 26.5376L16.2328 21.5376L20.4995 18.471L27.3995 13.471Z"
                                fill="#FABB05"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="card-review_star">
                          <div className="svg-icon full w-embed">
                            <svg
                              width="34"
                              height="32"
                              viewBox="0 0 34 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M32.1999 0H0.199951V32H32.1999V0Z"
                                fill="transparent"
                              />
                              <path
                                d="M16.1995 21.571L21.0662 20.3376L23.0995 26.6043L16.1995 21.571ZM27.3995 13.471H18.8328L16.1995 5.4043L13.5662 13.471H4.99951L11.9328 18.471L9.29951 26.5376L16.2328 21.5376L20.4995 18.471L27.3995 13.471Z"
                                fill="#FABB05"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-align-center">
                        <div className="text-color-white">
                          <div className="text-size-regular">
                            {t("reviews.basedOn")} <span>{t("reviews.our")}</span>
                            <span className="ml-1 text-style-underline">
                              {t("reviews.reviewsLink")}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-review_brand-logo">
                        <img
                          src="/images/googlereviews.webp"
                          loading="lazy"
                          alt=""
                          className="w-[90px]"
                        />
                      </div>
                      <div className="card-review_cta-wrap">
                        <a
                          humblytics="trustpilot_button"
                          href="https://maps.app.goo.gl/peLM2SUPLABFt1cA9"
                          className="button is-small is-secondary w-button"
                        >
                          {t("reviews.readMore")}
                        </a>
                      </div>
                      <div className="card_noise"></div>
                    </div>
                  </div>

                  <div className="reviews-wrapper">
                    <div className="reviews-track">
                      {loopedReviews.map((review, index) => (
                        <div className="review-card mb-6 md:mb-0" key={index}>
                          <div className="card card-review">
                            <div className="card-review_stars-and-time flex justify-between">
                              <div className="card-review_stars-small-wrap flex">
                                {[...Array(review.rating)].map((_, index) => (
                                  <div className="card-review_star-small" key={index}>
                                    <div className="svg-icon full w-embed">
                                      <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 33 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path d="M32.1999 0H0.199951V32H32.1999V0Z" fill="transparent" />
                                        <path
                                          d="M16.1995 21.571L21.0662 20.3376L23.0995 26.6043L16.1995 21.571ZM27.3995 13.471H18.8328L16.1995 5.4043L13.5662 13.471H4.99951L11.9328 18.471L9.29951 26.5376L16.2328 21.5376L20.4995 18.471L27.3995 13.471Z"
                                          fill="#FABB05"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="text-align-right">
                                <div>{review.date}</div>
                              </div>
                            </div>
                            <div className="card-review_title text-color-white text-weight-medium text-size-large">
                              {review.name}
                            </div>
                            <div className="card-review_body">&quot;{review.review}&quot;</div>
                            <div className="card_noise"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* <div className="home-reviews_left-section-overlay"></div> */}
                </div>
              </div>
              {/* <div className="home-reviews_overlay right-side"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
