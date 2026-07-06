"use client";

import React from "react";
import Watsappbtn from "./Watsappbtn";
import { useLanguage } from "@/context/LanguageProvider";

const Process = () => {
  const { t } = useLanguage();
  const steps = t("process.steps") || [];
  return (
    <>
      <section id="process" className="section">
        <div className="padding-section-large padding-section_home-hiw">
          <div className="container-medium">
            <div>
              <div className=" flex justify-between gap-3 items-center flex-col md:flex-row">
                <div className="text-color-white">
                  <h2 className="heading-style-h2 text-white  text-center md:text-left">
                    {t("process.title")}
                    <span className="text-color-gradient ml-2">
                      {t("process.titleGradient")}
                    </span>
                  </h2>
                </div>
                <div>
                  <Watsappbtn />
                </div>
              </div>
              <div className="padding-top padding-xlarge">
                <div className="home-hiw-grid">
                  <div className="card-hiw_wrap">
                    <div className="card card-hiw">
                      <div className="card-hiw_icon-wrap">
                        <div className="svg-icon full w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M22.2874 3.8623H5.39083C4.9427 3.8623 4.51293 4.04032 4.19607 4.35719C3.87919 4.67406 3.70117 5.10383 3.70117 5.55196V22.4485C3.70117 22.8966 3.87919 23.3264 4.19607 23.6432C4.51293 23.9601 4.9427 24.1382 5.39083 24.1382H16.8689C17.0908 24.1386 17.3106 24.0949 17.5156 24.0099C17.7206 23.925 17.9067 23.8001 18.0632 23.6429L23.4817 18.2244C23.6391 18.0679 23.7638 17.8817 23.8488 17.6767C23.9338 17.4718 23.9774 17.2519 23.977 17.03V5.55196C23.977 5.10383 23.799 4.67406 23.4821 4.35719C23.1653 4.04032 22.7355 3.8623 22.2874 3.8623ZM10.4598 9.7761H17.2184C17.4425 9.7761 17.6573 9.86511 17.8158 10.0235C17.9742 10.182 18.0632 10.3968 18.0632 10.6209C18.0632 10.845 17.9742 11.0598 17.8158 11.2183C17.6573 11.3767 17.4425 11.4658 17.2184 11.4658H10.4598C10.2357 11.4658 10.0209 11.3767 9.86242 11.2183C9.70398 11.0598 9.61496 10.845 9.61496 10.6209C9.61496 10.3968 9.70398 10.182 9.86242 10.0235C10.0209 9.86511 10.2357 9.7761 10.4598 9.7761ZM13.8391 18.2244H10.4598C10.2357 18.2244 10.0209 18.1354 9.86242 17.9769C9.70398 17.8185 9.61496 17.6036 9.61496 17.3795C9.61496 17.1554 9.70398 16.9406 9.86242 16.7822C10.0209 16.6237 10.2357 16.5347 10.4598 16.5347H13.8391C14.0632 16.5347 14.278 16.6237 14.4365 16.7822C14.5949 16.9406 14.6839 17.1554 14.6839 17.3795C14.6839 17.6036 14.5949 17.8185 14.4365 17.9769C14.278 18.1354 14.0632 18.2244 13.8391 18.2244ZM10.4598 14.8451C10.2357 14.8451 10.0209 14.756 9.86242 14.5976C9.70398 14.4392 9.61496 14.2243 9.61496 14.0002C9.61496 13.7761 9.70398 13.5613 9.86242 13.4029C10.0209 13.2444 10.2357 13.1554 10.4598 13.1554H17.2184C17.4425 13.1554 17.6573 13.2444 17.8158 13.4029C17.9742 13.5613 18.0632 13.7761 18.0632 14.0002C18.0632 14.2243 17.9742 14.4392 17.8158 14.5976C17.6573 14.756 17.4425 14.8451 17.2184 14.8451H10.4598ZM17.2184 22.099V17.3795H21.9389L17.2184 22.099Z" fill="url(#paint0_radial_11_743)"/>
  <defs>
    <radialGradient id="paint0_radial_11_743" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.24945 3.86231) rotate(58.0872) scale(24.9312)">
      <stop stopColor="white"/>
      <stop offset="0.51861" stopColor="#D3D3D3"/>
      <stop offset="1" stopColor="#A4A4A4"/>
    </radialGradient>
  </defs>
</svg>
                        </div>
                      </div>
                      <div className="card-hiw_text-content h-[200px]">
                        <div className="text-color-white">
                          <div className="text-weight-medium">
                            <div className="text-size-xlarge">{steps[0]?.title}</div>
                          </div>
                        </div>
                        <div className="text-weight-medium">
                          <div className="text-size-regular">
                            {steps[0]?.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-hiw_wrap">
                    <div className="card card-hiw">
                      <div className="card-hiw_icon-wrap">
                        <div className="svg-icon full w-embed">
                         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M24.299 5.55176H4.02315C3.57503 5.55176 3.14525 5.72977 2.82838 6.04664C2.51151 6.36352 2.3335 6.79329 2.3335 7.24141V20.7587C2.3335 21.2068 2.51151 21.6365 2.82838 21.9534C3.14525 22.2703 3.57503 22.4483 4.02315 22.4483H24.299C24.7471 22.4483 25.1769 22.2703 25.4938 21.9534C25.8106 21.6365 25.9886 21.2068 25.9886 20.7587V7.24141C25.9886 6.79329 25.8106 6.36352 25.4938 6.04664C25.1769 5.72977 24.7471 5.55176 24.299 5.55176ZM6.55763 14H8.24729C8.47135 14 8.68623 14.0891 8.84467 14.2475C9.00311 14.4059 9.09212 14.6208 9.09212 14.8449C9.09212 15.069 9.00311 15.2838 8.84467 15.4422C8.68623 15.6007 8.47135 15.6897 8.24729 15.6897H6.55763C6.33357 15.6897 6.11868 15.6007 5.96025 15.4422C5.80181 15.2838 5.71281 15.069 5.71281 14.8449C5.71281 14.6208 5.80181 14.4059 5.96025 14.2475C6.11868 14.0891 6.33357 14 6.55763 14ZM16.6955 19.069H6.55763C6.33357 19.069 6.11868 18.98 5.96025 18.8215C5.80181 18.6631 5.71281 18.4483 5.71281 18.2242C5.71281 18.0001 5.80181 17.7852 5.96025 17.6268C6.11868 17.4684 6.33357 17.3793 6.55763 17.3793H16.6955C16.9196 17.3793 17.1345 17.4684 17.2929 17.6268C17.4514 17.7852 17.5404 18.0001 17.5404 18.2242C17.5404 18.4483 17.4514 18.6631 17.2929 18.8215C17.1345 18.98 16.9196 19.069 16.6955 19.069ZM21.7645 19.069H20.0749C19.8509 19.069 19.6359 18.98 19.4775 18.8215C19.319 18.6631 19.23 18.4483 19.23 18.2242C19.23 18.0001 19.319 17.7852 19.4775 17.6268C19.6359 17.4684 19.8509 17.3793 20.0749 17.3793H21.7645C21.9886 17.3793 22.2034 17.4684 22.3619 17.6268C22.5203 17.7852 22.6093 18.0001 22.6093 18.2242C22.6093 18.4483 22.5203 18.6631 22.3619 18.8215C22.2034 18.98 21.9886 19.069 21.7645 19.069ZM21.7645 15.6897H11.6266C11.4026 15.6897 11.1877 15.6007 11.0292 15.4422C10.8708 15.2838 10.7818 15.069 10.7818 14.8449C10.7818 14.6208 10.8708 14.4059 11.0292 14.2475C11.1877 14.0891 11.4026 14 11.6266 14H21.7645C21.9886 14 22.2034 14.0891 22.3619 14.2475C22.5203 14.4059 22.6093 14.6208 22.6093 14.8449C22.6093 15.069 22.5203 15.2838 22.3619 15.4422C22.2034 15.6007 21.9886 15.6897 21.7645 15.6897Z" fill="url(#paint0_radial_11_749)"/>
  <defs>
    <radialGradient id="paint0_radial_11_749" cx="0" cy="0" r="1" gradientTransform="matrix(15.3759 17.6358 -24.6901 10.9828 6.47315 5.55176)" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="0.51861" stopColor="#D3D3D3"/>
      <stop offset="1" stopColor="#A4A4A4"/>
    </radialGradient>
  </defs>
</svg>
                        </div>
                      </div>
                      <div className="card-hiw_text-content h-[200px]">
                        <div className="text-color-white">
                          <div className="text-weight-medium">
                            <div className="text-size-xlarge">
                              {steps[1]?.title}
                            </div>
                          </div>
                        </div>
                        <div className="text-weight-medium">
                          <div>
                            {steps[1]?.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-hiw_wrap">
                    <div className="card card-hiw">
                      <div className="card-hiw_icon-wrap">
                        <div className="svg-icon full w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M23.625 11.3748H11.1661L22.9688 8.25874C23.0805 8.2293 23.1853 8.17803 23.2771 8.10789C23.3689 8.03774 23.4459 7.95011 23.5036 7.85006C23.5614 7.75 23.5988 7.63949 23.6136 7.52491C23.6284 7.41034 23.6204 7.29396 23.59 7.18249L22.6975 3.90124C22.5747 3.45979 22.2829 3.0845 21.8853 2.85665C21.4878 2.6288 21.0164 2.56674 20.5734 2.6839L3.91673 7.08077C3.69494 7.13834 3.48688 7.23958 3.3047 7.37856C3.12253 7.51754 2.96991 7.69146 2.85579 7.89015C2.74103 8.0864 2.66688 8.30371 2.63776 8.52918C2.60863 8.75465 2.62513 8.98368 2.68626 9.20265L3.50001 12.2017C3.50001 12.217 3.50001 12.2334 3.50001 12.2498V21.8748C3.50001 22.339 3.68438 22.7841 4.01257 23.1123C4.34076 23.4405 4.78588 23.6248 5.25001 23.6248H22.75C23.2141 23.6248 23.6593 23.4405 23.9874 23.1123C24.3156 22.7841 24.5 22.339 24.5 21.8748V12.2498C24.5 12.0178 24.4078 11.7952 24.2437 11.6311C24.0796 11.467 23.8571 11.3748 23.625 11.3748ZM14.9231 5.98483L17.9999 7.76546L11.5577 9.46624L8.48204 7.68562L14.9231 5.98483ZM22.75 21.8748H5.25001V13.1248H22.75V21.8748Z" fill="url(#paint0_radial_11_755)"/>
  <defs>
    <radialGradient id="paint0_radial_11_755" cx="0" cy="0" r="1" gradientTransform="matrix(14.2196 21.9175 -22.8333 13.6493 6.45212 2.62598)" gradientUnits="userSpaceOnUse">
      <stop stopColor="white"/>
      <stop offset="0.51861" stopColor="#D3D3D3"/>
      <stop offset="1" stopColor="#A4A4A4"/>
    </radialGradient>
  </defs>
</svg>
                        </div>
                      </div>
                      <div className="card-hiw_text-content h-[200px]">
                        <div className="text-color-white">
                          <div className="text-weight-medium">
                            <div className="text-size-xlarge">
                              {steps[2]?.title}
                            </div>
                          </div>
                        </div>
                        <div className="text-weight-medium">
                          <div>
                           {steps[2]?.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
