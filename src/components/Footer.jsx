"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      <footer className="section">
        <div className="padding-section-medium padding-section_footer">
          <div className="container-large">
            <div className="footer-content-wrap">
              <div className="footer-content-top">
                <div className="footer-brand">
                  <Link
                    href="/"
                    aria-current="page"
                    className="footer-brand_logo-wrap w-nav-brand w--current"
                  >
                    <div className="footer-brand_logo flex gap-[20px] mb-10">
                      <img
                        src="/images/reallogoofwebsite.webp"
                        loading="lazy"
                        alt=""
                        style={{ width: "100px", height: "100px" }}
                        className="relative top-[-40px]"
                      />
                      <span className="text-white text-[25px] relative top-[-20px]">
                        Courchevel Media
                      </span>
                    </div>
                  </Link>
                  <div className="footer-brand_paragraph">
                    <div className="text-weight-medium">
                      <div className="text-white">{t("footer.text")}</div>
                    </div>
                  </div>
                </div>
                <div className="footer-menu text-white">
                  <Link href="/terms" className="footer-menu_link text-white">
                    {t("footer.terms")}
                  </Link>
                  <Link href="/Privacy" className="footer-menu_link text-white">
                    {t("footer.privacy")}
                  </Link>
                  <Link href="/Service" className="footer-menu_link text-white">
                    {t("footer.serviceAgreement")}
                  </Link>
                </div>
              </div>
              <div className="footer-content-bottom">
                <div className="footer-social hide">
                  <a
                    href="#"
                    className="footer-social_icon-link w-inline-block"
                  >
                    <div className="svg-icon full w-embed">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.163C8.525 2.163 8.163 2.175 6.95 2.233C5.737 2.292 4.888 2.5 4.15 2.813C3.383 3.138 2.738 3.575 2.094 4.219C1.45 4.863 1.013 5.508 0.688 6.275C0.375 7.013 0.167 7.862 0.108 9.075C0.05 10.288 0.038 10.65 0.038 14.125C0.038 17.6 0.05 17.962 0.108 19.175C0.167 20.388 0.375 21.237 0.688 21.975C1.013 22.742 1.45 23.387 2.094 24.031C2.738 24.675 3.383 25.112 4.15 25.437C4.888 25.75 5.737 25.958 6.95 26.017C8.163 26.075 8.525 26.087 12 26.087C15.475 26.087 15.837 26.075 17.05 26.017C18.263 25.958 19.112 25.75 19.85 25.437C20.617 25.112 21.262 24.675 21.906 24.031C22.55 23.387 22.987 22.742 23.312 21.975C23.625 21.237 23.833 20.388 23.892 19.175C23.95 17.962 23.962 17.6 23.962 14.125C23.962 10.65 23.95 10.288 23.892 9.075C23.833 7.862 23.625 7.013 23.312 6.275C22.987 5.508 22.55 4.863 21.906 4.219C21.262 3.575 20.617 3.138 19.85 2.813C19.112 2.5 18.263 2.292 17.05 2.233C15.837 2.175 15.475 2.163 12 2.163ZM12 4.838C15.425 4.838 15.763 4.85 16.963 4.908C18.075 4.963 18.675 5.163 19.075 5.325C19.613 5.538 20 5.813 20.413 6.225C20.825 6.638 21.1 7.025 21.313 7.563C21.475 7.963 21.675 8.563 21.73 9.675C21.788 10.875 21.8 11.213 21.8 14.638C21.8 18.063 21.788 18.401 21.73 19.601C21.675 20.713 21.475 21.313 21.313 21.713C21.1 22.251 20.825 22.638 20.413 23.05C20 23.463 19.613 23.738 19.075 23.951C18.675 24.113 18.075 24.313 16.963 24.368C15.763 24.426 15.425 24.438 12 24.438C8.575 24.438 8.237 24.426 7.037 24.368C5.925 24.313 5.325 24.113 4.925 23.951C4.387 23.738 4 23.463 3.588 23.05C3.175 22.638 2.9 22.251 2.688 21.713C2.525 21.313 2.325 20.713 2.27 19.601C2.212 18.401 2.2 18.063 2.2 14.638C2.2 11.213 2.212 10.875 2.27 9.675C2.325 8.563 2.525 7.963 2.688 7.563C2.9 7.025 3.175 6.638 3.588 6.225C4 5.813 4.387 5.538 4.925 5.325C5.325 5.163 5.925 4.963 7.037 4.908C8.237 4.85 8.575 4.838 12 4.838ZM12 7.838C9.163 7.838 6.838 10.163 6.838 13C6.838 15.837 9.163 18.163 12 18.163C14.837 18.163 17.163 15.837 17.163 13C17.163 10.163 14.837 7.838 12 7.838ZM12 16.163C10.619 16.163 9.5 15.044 9.5 13.663C9.5 12.282 10.619 11.163 12 11.163C13.381 11.163 14.5 12.282 14.5 13.663C14.5 15.044 13.381 16.163 12 16.163ZM17.388 7.538C17.388 8.294 16.769 8.913 16.013 8.913C15.256 8.913 14.638 8.294 14.638 7.538C14.638 6.781 15.256 6.163 16.013 6.163C16.769 6.163 17.388 6.781 17.388 7.538Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="footer-copyright">
                  <div className="text-weight-medium">
                    <div className="text-color-white">
                      © {new Date().getFullYear()} Courchevel Media.{" "}
                      {t("footer.copyright")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
