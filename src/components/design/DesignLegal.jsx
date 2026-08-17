"use client";

import Link from "next/link";
import { DesignShell } from "@/components/design/DesignShell";

const LEGAL = {
  terms: {
    title: "Terms & Conditions",
    updated: "August 2026",
    href: "/terms",
    sections: [
      [
        "Services",
        [
          "Courchevel Media provides premium photography and filmmaking experiences for ski holidays, private events and bespoke productions. Services are primarily offered in Courchevel and the Three Valleys, with worldwide coverage available upon request. Each booking is tailored to the client's plans and may include photography, filmmaking, drone footage (where permitted), editing and content delivery as agreed before the service.",
        ],
      ],
      ["Booking", ["Dates are reserved exclusively for the client and are no longer available to other bookings."]],
      [
        "Payment",
        [
          {
            list: [
              "A booking is confirmed once the required deposit has been received.",
              "The remaining balance must be paid before the scheduled service unless otherwise agreed in writing.",
              "Prices shown on the website are starting prices and may vary depending on duration, location, travel requirements or project scope.",
            ],
          },
          "Accepted payment methods:",
          {
            list: [
              "Bank Transfer",
              "Revolut",
              "Zelle (US clients)",
              "Cash",
              "Secure payment link (card processing fees apply)",
            ],
          },
        ],
      ],
      [
        "Cancellation & Rescheduling",
        [
          "A non-refundable 50% deposit is required to secure every booking.",
          "Bookings cancelled within 15 days of the scheduled service are fully non-refundable. However, date changes may be accommodated based on availability. Alternatively, any payments made can be used as credit towards the following winter season or transferred as booking credit to another person.",
        ],
      ],
      [
        "Weather",
        [
          "Mountain weather is part of the experience and is not considered a valid reason for cancellation or refund.",
          "If weather conditions become genuinely unsafe or make photography or filming impossible, Courchevel Media will work with you to find the most appropriate solution, which may include rescheduling subject to availability.",
        ],
      ],
      [
        "Delivery",
        [
          "Standard delivery is typically completed within 3 to 5 days. Delivery may vary during periods of high demand. Express delivery may be available for an additional fee.",
        ],
      ],
      [
        "Creative Process",
        [
          "The final creative style, editing, colour grading and artistic decisions remain at the discretion of Courchevel Media.",
        ],
      ],
      [
        "Drone Footage",
        [
          "Drone footage is included whenever weather, regulations and safety permit. Drone footage cannot be guaranteed.",
        ],
      ],
      [
        "Intellectual Property",
        [
          "All photographs and films remain the intellectual property of Courchevel Media. Clients receive a licence for personal use. Commercial use requires prior written permission unless otherwise agreed.",
        ],
      ],
      [
        "Portfolio Use",
        [
          "Unless agreed otherwise before the service, Courchevel Media may use selected photographs and films for its portfolio, website and marketing.",
        ],
      ],
      [
        "Liability",
        [
          "Courchevel Media is not responsible for delays or inability to perform services caused by force majeure, severe weather, lift closures, road closures or other circumstances beyond reasonable control.",
        ],
      ],
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "August 2026",
    href: "/Privacy",
    sections: [
      [
        "Information We Collect",
        [
          "Name, email address, phone number, booking information, payment information and communication history.",
        ],
      ],
      [
        "How We Use Your Information",
        [
          "To respond to enquiries, confirm bookings, deliver services, process payments, improve our services and send updates where you have opted in.",
        ],
      ],
      [
        "Data Sharing",
        [
          "Information may be shared with trusted providers such as payment processors, cloud storage providers and communication platforms when necessary.",
        ],
      ],
      ["Data Security", ["Reasonable technical and organisational measures are used to protect your information."]],
      [
        "Cookies",
        ["The website may use cookies and analytics tools to improve performance and user experience."],
      ],
      [
        "Your Rights",
        ["You may request access, correction or deletion of your personal information where applicable under GDPR."],
      ],
    ],
  },
  service: {
    title: "Service Policy",
    updated: "August 2026",
    href: "/Service",
    sections: [
      [
        "Our Approach",
        [
          "Every experience is planned individually to create timeless photography and cinematic films while allowing clients to enjoy their holiday naturally.",
        ],
      ],
      [
        "Ski Experiences",
        [
          {
            term: "Half Experience: From €1,000.",
            text: "Up to four hours of coverage, curated gallery, cinematic ski clips, one-minute highlight film and drone footage when conditions allow.",
          },
          {
            term: "Full Experience: From €1,500.",
            text: "Full-day coverage, curated gallery, cinematic ski clips, two-minute highlight film, drone footage when conditions allow and après-ski coverage.",
          },
        ],
      ],
      [
        "Event Experiences",
        [
          { term: "Private Event:", text: "Discreet coverage for celebrations and dinners." },
          {
            term: "DJ Event:",
            text: "High-energy photography and filmmaking focused on atmosphere and performances.",
          },
          {
            term: "Bespoke Experience:",
            text: "Tailored for destination celebrations, luxury weddings, multi-day holidays and international assignments. Custom quote.",
          },
        ],
      ],
      [
        "What's Included",
        [
          "Depending on the booking: photography, cinematic filmmaking, drone footage where permitted, professional editing, private online delivery and creative planning.",
        ],
      ],
      [
        "Delivery",
        ["Standard delivery is 3 to 5 days. Express delivery may be available upon request."],
      ],
      [
        "Creative Process",
        [
          "Image selection, colour grading, pacing, music and storytelling remain at the discretion of Courchevel Media.",
        ],
      ],
      [
        "Drone Footage",
        [
          "Drone operations depend on weather, regulations and safety, therefore cannot be guaranteed.",
        ],
      ],
      [
        "Client Responsibilities",
        [
          "Arrive on time, communicate schedule changes, obtain venue permissions where required and follow safety instructions.",
        ],
      ],
      [
        "Our Commitment",
        ["To provide a discreet, premium and effortless experience from enquiry through final delivery."],
      ],
    ],
  },
};

const LEGAL_NAV = [
  ["terms", "Terms & Conditions"],
  ["privacy", "Privacy Policy"],
  ["service", "Service Policy"],
];

function Block({ item }) {
  if (typeof item === "string") return <p>{item}</p>;
  if (item.list) {
    return (
      <ul>
        {item.list.map((entry, n) =>
          typeof entry === "string" ? (
            <li key={n}>{entry}</li>
          ) : (
            <li key={n}>
              <strong>{entry.b}</strong>
              {entry.text ? ` ${entry.text}` : ""}
              {entry.b2 ? <strong>{entry.b2}</strong> : null}
            </li>
          )
        )}
      </ul>
    );
  }
  return (
    <p>
      <strong>{item.term}</strong> {item.text}
    </p>
  );
}

export default function DesignLegal({ page = "terms" }) {
  const doc = LEGAL[page] || LEGAL.terms;

  return (
    <DesignShell>
      <section style={{ padding: "var(--space-20) 0 var(--space-24)" }}>
        <div className="legal-head">
          <p className="eyebrow" style={{ margin: "0 0 var(--space-6)" }}>
            Legal
          </p>
          <h1 className="legal-title">{doc.title}</h1>
          <p className="legal-updated">Last updated {doc.updated}</p>
        </div>

        <nav
          aria-label="Legal documents"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-3)",
            maxWidth: 720,
            margin: "0 auto var(--space-12)",
            paddingBottom: "var(--space-6)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          {LEGAL_NAV.map(([key, label]) => {
            const href = LEGAL[key].href;
            const active = key === page;
            return (
              <Link
                key={key}
                href={href}
                className="pill"
                aria-current={active ? "page" : undefined}
                style={
                  active
                    ? { color: "var(--text-primary)", borderColor: "var(--border-strong)" }
                    : undefined
                }
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="legal-body">
          {doc.sections.map(([heading, blocks]) => (
            <section key={heading} className="legal-section">
              <h2>{heading}</h2>
              {blocks.map((block, i) => (
                <Block key={i} item={block} />
              ))}
            </section>
          ))}
        </div>

        <div className="legal-links legal-body">
          {LEGAL_NAV.filter(([key]) => key !== page).map(([key, label]) => (
            <Link key={key} href={LEGAL[key].href}>
              {label}
            </Link>
          ))}
        </div>
      </section>
    </DesignShell>
  );
}
