"use client";

import Link from "next/link";
import Watsappbtn from "./Watsappbtn.jsx";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageProvider";

const Navbar = () => {
  const { t } = useLanguage();

  return (
    <div
      data-w-id="465a3d13-3783-e283-361b-97c7699bec95"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container-navbar">
        <div className="navbar_brand-wrap">
          <Link
            href="/"
            className="flex items-center navbarlogo w-nav-brand gap-0 text-[24px] no-underline"
          >
            <img
              style={{ height: "60px" }}
              src="/images/reallogoofwebsite.webp"
              alt=""
            />
            <span className="text-white"> Courchevel Media</span>
          </Link>
        </div>
        <nav role="navigation" className="navbar-menu w-nav-menu">
          <a href="#service" className="navbar-menu_link">
            {t("nav.service")}
          </a>
          <a href="#portfolio" className="navbar-menu_link">
            {t("nav.portfolio")}
          </a>
          <a href="#process" className="navbar-menu_link">
            {t("nav.process")}
          </a>
          <a href="#reviews" className="navbar-menu_link">
            {t("nav.reviews")}
          </a>
          <a href="#pricing" className="navbar-menu_link">
            {t("nav.pricing")}
          </a>
          <a href="#faqs" className="navbar-menu_link">
            {t("nav.faqs")}
          </a>
        </nav>
        <div className="navbar_cta-wrap">
          <LanguageSwitcher />
          <Watsappbtn />
        </div>
        <div className="navbar_menu-button w-nav-button">
          <div className="svg-icon full w-embed">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
