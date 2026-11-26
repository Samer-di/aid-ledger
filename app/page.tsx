
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHandHoldingHeart,
  faShieldHalved,
  faUsers,
  faScaleBalanced,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "About Us | AidLedger - Akkarouna",
  description:
    "Learn about Akkarouna's story, mission, vision, and core values.",
};

export default function AboutPage() {
  const values = [
    {
      icon: faHandHoldingHeart,
      title: "Dignity in Giving",
      description:
        "Ensuring every household receives food and aid with unconditional respect and personal privacy.",
    },
    {
      icon: faScaleBalanced,
      title: "Integrity & Fairness",
      description:
        "Transparent eligibility rules and verified distribution to eliminate double claims.",
    },
    {
      icon: faUsers,
      title: "Community-Led",
      description:
        "Partnering directly with local field volunteers and neighborhood committees on the ground.",
    },
    {
      icon: faShieldHalved,
      title: "Full Accountability",
      description:
        "Verifiable distribution logs and clear reporting to community partners and donors.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F3F7FA] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">

        <div className="relative overflow-hidden bg-white rounded-2xl border border-[#D5DEE7] p-6 sm:p-10 shadow-sm text-center">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1B4195] via-[#007F80] to-[#1B4195]" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECF1F7] border border-[#D5DEE7] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#007F80]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#007F80]">
              Association Akkarouna
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1126] tracking-tight mb-3">
            About Our Organization
          </h1>

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-1 w-10 rounded-full bg-[#1B4195]" />
            <span className="h-1 w-10 rounded-full bg-[#007F80]" />
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#181E33] font-medium leading-relaxed">
            Delivering transparent, dignified assistance and sustainable
            community empowerment across Northern Lebanon through grassroots
            solidarity and verified aid distribution.
          </p>
        </div>

        <section
          id="our-story"
          aria-labelledby="story-heading"
          className="bg-white rounded-xl border border-[#D5DEE7] p-6 sm:p-8 shadow-sm"
        >
          <div className="border-b border-[#D5DEE7] pb-3 mb-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded bg-[#ECF1F7] text-[#007F80]">
                <FontAwesomeIcon icon={faBookOpen} className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#007F80]">
                Background & History
              </span>
            </div>

            <h2
              id="story-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#0F1126] tracking-tight"
            >
              <span className="border-l-4 border-[#1B4195] pl-3">
                Our Story
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3 text-sm text-[#181E33] leading-relaxed">
              <p>
                Founded to address urgent social and economic vulnerabilities,{" "}
                <strong className="text-[#0F1126]">Akkarouna</strong> began as
                a grassroots initiative supporting underserved families with
                food kits and emergency relief.
              </p>

              <p>
                As community needs expanded, manual paper lists and
                spreadsheets created distribution delays and double
                registrations. Our work evolved into a modern relief operation
                powered by real-time tracking through AidLedger to ensure
                fairness and transparency.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#ECF1F7] border border-[#D5DEE7] rounded-lg p-5 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F1126]">
                Key Highlights
              </h3>

              <ul className="space-y-2 text-xs text-[#181E33]">
                <li className="flex items-start gap-2">
                  <span className="p-0.5 rounded-full bg-[#007F80] text-white shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                  </span>
                  <span>
                    <strong>Grassroots Roots:</strong> Led directly by field
                    volunteers.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="p-0.5 rounded-full bg-[#007F80] text-white shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                  </span>
                  <span>
                    <strong>Community Reach:</strong> Providing nutritional and
                    skills support.
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <span className="p-0.5 rounded-full bg-[#1B4195] text-white shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                  </span>
                  <span>
                    <strong>Verified Aid:</strong> Eliminating double pickups
                    with QR tracking.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <section
            id="our-mission"
            aria-labelledby="mission-heading"
            className="bg-white rounded-xl border border-[#D5DEE7] p-5 shadow-sm border-t-4 border-t-[#007F80]"
          >
            <div className="mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#007F80]">
                Purpose & Action
              </span>

              <h2
                id="mission-heading"
                className="text-lg sm:text-xl font-extrabold text-[#0F1126] tracking-tight mt-0.5"
              >
                Our Mission
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#181E33] leading-relaxed">
              To provide direct, equitable humanitarian assistance and
              capacity-building programs to families in hardship, working
              closely with local volunteer networks and community kitchens to
              foster lasting self-reliance.
            </p>
          </section>

          <section
            id="our-vision"
            aria-labelledby="vision-heading"
            className="bg-white rounded-xl border border-[#D5DEE7] p-5 shadow-sm border-t-4 border-t-[#1B4195]"
          >
            <div className="mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B4195]">
                Looking Forward
              </span>

              <h2
                id="vision-heading"
                className="text-lg sm:text-xl font-extrabold text-[#0F1126] tracking-tight mt-0.5"
              >
                Our Vision
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#181E33] leading-relaxed">
              A united, resilient community where basic nutritional needs and
              human dignity are permanently safeguarded, and where aid
              distribution is transparent, rapid, and fair for every household.
            </p>
          </section>
        </div>

        <section
          id="our-values"
          aria-labelledby="values-heading"
          className="bg-white rounded-xl border border-[#D5DEE7] p-6 sm:p-8 shadow-sm space-y-6"
        >
          <div className="text-center max-w-md mx-auto space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#007F80]">
              Guiding Principles
            </span>

            <h2
              id="values-heading"
              className="text-2xl font-extrabold text-[#0F1126] tracking-tight"
            >
              Our Values
            </h2>

            <p className="text-xs sm:text-sm text-[#181E33]/80">
              The principles that direct our fieldwork and community
              relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-[#F3F7FA] border border-[#D5DEE7] rounded-lg p-4 space-y-2 hover:border-[#1B4195] transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-white border border-[#D5DEE7] text-[#1B4195] flex items-center justify-center text-sm">
                  <FontAwesomeIcon icon={val.icon} className="w-4 h-4" />
                </div>

                <h3 className="font-bold text-[#0F1126] text-sm">
                  {val.title}
                </h3>

                <p className="text-xs text-[#181E33] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
