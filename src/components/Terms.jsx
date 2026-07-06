import React from "react";
import Link from "next/link";
const Servicespage = () => {
  return (
    <div>
      <Link
        href="/"
        className="page-back-btn bg-white flex justify-center items-center rounded-full left-[20px] top-[20px] cursor-pointer w-[50px] h-[50px] absolute"
      >
        <i className="fa-solid fa-arrow-left text-black text-[22px] font-[800]"></i>
      </Link>

      <div className="sectionservice">
        <div className="max-w-[1200px]  m-auto px-[20px]">
          <h1 className="text-center font-[800] text-[55px] text-white">
            Terms of Service
          </h1>

          {/* <p className="text-center mt-[6px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
            fuga ex ipsum qui magnam esse quia illum aspernatur, repellat, animi
            voluptatibus laborum voluptatem. Quam eligendi saepe voluptatem
            totam suscipit! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Provident impedit quas tempore neque quisquam magnam odit
            eligendi recusandae laboriosam dolorum eaque sapiente accusamus fuga
            consectetur sed, similique voluptatem quia. Repellendus.
          </p> */}
        </div>
      </div>
      <section className="Termscontent my-[50px]" style={{color:"white"}}>
        <div className="max-w-[1600px] mb-[50px] m-auto px-[20px]">
          <h1 className="mainheadingterms">Terms of Service</h1>
          <h1>1. Introduction</h1>
          <p>
            Welcome to Courchevel Media. We specialize in professional video,
            photography, and drone services for ski families, groups, and
            private events. Our primary location is Courchevel, but we can
            travel within the 3 Vallées or to other destinations with additional
            fees for travel days and expenses.
          </p>
          <h1>2. Booking and Payment</h1>
          <ul>
            <li>
              To book our services, contact us to confirm availability, select
              your date, and secure the booking with a deposit or full payment
            </li>
            <li>
              A deposit is required to secure your date and is non-refundable.
              This deposit can be used as credit for a future booking within the
              next season. After that, credits expire.
            </li>
            <li>
              For event bookings, a signed contract is required before services
              commence.
            </li>
            <li>
              <strong>Payment Methods:</strong> We accept EUR bank transfers,
              cash, Zelle payments for US bank account holders, and link
              payments with an additional 3% credit card fee.
            </li>
          </ul>
          <h1>3. Cancellations and Refunds</h1>
          <ul>
            <li>
              <strong>Ski Services:</strong> Date changes are allowed if
              requested at least 72 hours in advance. Cancellations within 72
              hours of the scheduled booking result in forfeiture of the
              deposit. Refunds are not provided for bad weather.
            </li>
            <li>
              <strong>Event Services:</strong> The same policies as ski services
              apply.
            </li>
            <li>
              <strong>Credits:</strong> Deposits can be transferred as credit
              for future bookings within the next season or given to another
              person (e.g., friend or family).
            </li>
          </ul>

          <h1>4. Deliverables and Timelines</h1>
          <ul>
            <li>
              Deliverables are provided digitally within 2-5 days, depending on
              the season.
            </li>
            <li>
              Express delivery (within 24 hours) is available for an additional
              fee of €300.
            </li>
          </ul>
          <h1>5. Liability</h1>
          <ul>
            <li>
              Courchevel Media is not responsible for accidents or damages to
              clients during shoots unless caused by intentional actions.
            </li>
            <li>
              Clients are responsible for damages caused to equipment by their
              actions, accidental or intentional.
            </li>
          </ul>
          <h1>6. Ownership and Usage Rights</h1>
          <ul>
            <li>
              Clients retain ownership of the final deliverables upon payment.
              Courchevel Media retains the right to use the materials for
              promotional and marketing purposes.
            </li>
          </ul>
          <h1>7. Revisions</h1>
          <ul className="pb-[50px]">
            <li>
              Revisions are limited to minor adjustments, such as changes to
              clip order or basic edits.
            </li>
            <li>
              Requests to change music after editing incur an additional fee of
              €350. Clients must specify music preferences before editing
              begins.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
  s;
};

export default Servicespage;
