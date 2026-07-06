"use client";

import { useLanguage } from "@/context/LanguageProvider";

const Watsappbtn = () => {
  const { t } = useLanguage();
  const phoneNumber = "+33784534489";
  const defaultMessage = "Hello, I'm interested in booking a call!";

  const handleWhatsAppClick = (event) => {
    event.preventDefault();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <a
      href="#"
      className="whatsappbtn whatsappbtn-link"
      onClick={handleWhatsAppClick}
    >
      <i className="fa-brands fa-whatsapp whatsappbtn-icon" aria-hidden="true"></i>
      <span className="whatsappbtn-text">{t("common.whatsapp")}</span>
    </a>
  );
};

export default Watsappbtn;
