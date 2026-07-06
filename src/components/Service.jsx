import React from "react";
import Link from "next/link";
const Service = () => {
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
          <h1 className="text-center font-[800] text-[55px]">
            Service Agreement
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
      <section className="Termscontent my-[50px]">
        <div className="max-w-[1600px] m-auto px-[20px]">
          <h1 className="mainheadingterms">Service Agreement</h1>
          <h2>1. Scope of Work</h2>
          <h4 className="">Ski Packages:</h4>
          <ul className="serviceagrelist">
            <li>
              <b> Option 1: Half-Day Highlights Package (€700):</b> <br />
              35+ Photos, Skiing Video Clips, 1-Minute Memories Recap, Drone
              Shots.
            </li>
            <li>
              <b>Option 2: Full-Day Signature Package (€1200):</b> <br />
              50+ Photos, Skiing Video Clips, 2-Minute Recap, Drone Shots,
              Après-Ski Moments.
            </li>
            <li>
              <b> Option 3: Full-Day Cinema Experience (€3500):</b> <br />
              Magazine-Worthy Photos, Hollywood-Grade Cameras, Cinematic Recap,
              Drone Shots, Après-Ski Moments.
            </li>
          </ul>
          <h4 className="">Event Packages:</h4>
          <ul className="serviceagrelist">
            <li>
              <b> Option 1: DJ Live Set Package (€1450):</b> <br />
              35+ Photos, 2 Highlight Reels, Live Set Video Edit, Drone Shots.
            </li>
            <li>
              <b>Option 2: Complete Marketing Package (€1500):</b> <br />
              50+ Photos, Event Recap Video, Drone Footage.
            </li>
            <li>
              <b> Option 3: Custom Package (Starting at €500):</b> <br />
              Tailored Content, Flexible Drone/Highlight Options, Customized
              Approach.
            </li>
          </ul>
          <h2>2. Responsibilities</h2>
          <h4 className="">Our Responsibilities:</h4>
          <ul className="serviceagrelist">
            <li>
              Deliver high-quality visuals tailored to the client’s needs.
            </li>
            <li>
              Be punctual and adaptable to ensure the best results in varying
              conditions.
            </li>
            <li>
              Safeguard equipment and maintain professionalism throughout the
              project.
            </li>
          </ul>
          <h4 className="">Client Responsibilities:</h4>
          <ul className="serviceagrelist">
            <li>Adhere to the agreed-upon schedule.</li>
            <li>
              For ski clients, having an instructor on-site is highly
              recommended for smoother coordination.
            </li>

            <b> For events:</b>
            <ul className="ml-[30px] eventslist">
              <li>Provide a safe working environment for the filmmaker.</li>
              <li>Ensure access to food and drinks during the event.</li>
              <li>Provide a secure space for storing equipment.</li>
            </ul>
          </ul>
          <h2>3. Deliverables</h2>

          <ul className="serviceagrelist">
            <li>Deliverables are provided in digital format.</li>
            <li>
              The number of photos and videos depends on client cooperation and
              event conditions.
            </li>
          </ul>
          <h2>4. Timelines</h2>

          <ul className="serviceagrelist">
            <li>
              Final deliverables are sent within 2-5 days. High-season workloads
              may cause minor delays.
            </li>
          </ul>
          <h2>5. Payment Terms</h2>

          <ul className="serviceagrelist">
            <li>Deposits are non-refundable.</li>
            <li>
              The remaining balance for ski services must be paid at least 24
              hours before the shoot. For events, payment terms will be
              specified in the contract.
            </li>
          </ul>
          <h2>6. Revisions and Edits</h2>

          <ul className="serviceagrelist">
            <li>
              One round of minor revisions is included in the service.
              Additional edits, including music changes, will incur a fee of
              €350.
            </li>
          </ul>
          <h2>7. Ownership of Content</h2>

          <ul className="serviceagrelist">
            <li>
              Clients own the final deliverables but grant Courchevel Media the
              right to use them for promotional and marketing purposes.
            </li>
          </ul>
          <h2>8. Cancellation Policy</h2>

          <ul className="serviceagrelist">
            <li>
              Cancellations made within 72 hours of the scheduled booking result
              in forfeited deposits.
            </li>
            <li>
              Credits are available for cancellations made earlier than 72 hours
              and can be used within the next season or transferred to another
              person.
            </li>
          </ul>
          <h2>9. Force Majeure</h2>

          <ul className="serviceagrelist pb-[50px]">
            <li>
              In unforeseen circumstances (e.g., illness, extreme weather), we
              will work with the client to reschedule or provide credit for
              future use. Courchevel Media is not liable for delays or
              disruptions caused by these events.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
  s;
};

export default Service;
