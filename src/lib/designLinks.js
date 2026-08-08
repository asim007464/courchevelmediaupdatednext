export const WHATSAPP_URL =
  "https://wa.me/33784534489?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20call!";

export const INSTAGRAM_URL = "https://www.instagram.com/courchevelmedia";

/** Inline styles so WhatsApp CTA stays green even if legacy CSS wins on Vercel */
export const WHATSAPP_BTN_STYLE = {
  backgroundColor: "#25d366",
  background: "#25d366",
  color: "#ffffff",
  borderColor: "#25d366",
};

export function packageWhatsAppUrl(pkg) {
  const message = encodeURIComponent(
    `Hi, I'm interested in the following package:\n\n` +
      `*Title:* ${pkg.title || pkg.name}\n` +
      `*Price:* ${pkg.price}\n` +
      `*Description:* ${pkg.description || pkg.blurb || ""}\n` +
      `*Features:* ${(pkg.features || pkg.items || []).join(", ")}`
  );
  return `https://wa.me/33784534489?text=${message}`;
}
