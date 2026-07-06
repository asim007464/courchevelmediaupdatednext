import Link from "next/link";

export default function Privacy() {
  return (
    <div>
      <Link
        href="/"
        className="page-back-btn bg-white flex justify-center items-center rounded-full left-[20px] top-[20px] cursor-pointer w-[50px] h-[50px] absolute"
      >
        <i className="fa-solid fa-arrow-left text-black text-[22px] font-[800]"></i>
      </Link>

      <div className="sectionservice">
        <div className="max-w-[1200px] m-auto px-[20px]">
          <h1 className="text-center font-[800] text-[55px]">Privacy Policy</h1>
        </div>
      </div>
      <section className="Termscontent my-[50px]">
        <div className="max-w-[1600px] m-auto px-[20px]">
          <h1 className="mainheadingterms">Privacy Policy</h1>
          <ul className="privacylist pb-[50px]">
            <li>
              <b className="text-[22px]">1. Personal Information Collected</b>
              <br />
              We collect your name, email, phone number, and any additional
              details necessary to fulfill your booking, including special
              requests.
            </li>
            <li>
              <b className="text-[22px]">2. Data Usage</b>
              <br />
              We use your information to confirm bookings, deliver photo and
              video services, and respond to your inquiries.
            </li>
            <li>
              <b className="text-[22px]">3. Data Sharing</b>
              <br />
              We may share your data with trusted third-party providers, such as
              CRM tools and secure payment processors, to facilitate services.
            </li>
            <li>
              <b className="text-[22px]">4. Cookies & Analytics</b>
              <br />
              We use cookies to remember your cookie preferences and, if you
              accept, to analyze site traffic with Google Analytics. You can
              accept or reject analytics cookies via the cookie banner. Necessary
              cookies are required for the site to function.
            </li>
            <li>
              <b className="text-[22px]">5. Data Security</b>
              <br />
              We ensure your data is secure by limiting access to our systems and
              using PCI-compliant payment processors.
            </li>
            <li>
              <b className="text-[22px]">6. Client Rights</b>
              <br />
              Clients may request access to or deletion of their personal data by
              contacting us via email or WhatsApp.
            </li>
            <li>
              <b className="text-[22px]">7. Policy Updates</b>
              <br />
              Any updates to this privacy policy will be communicated via email
              or posted on this page.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
