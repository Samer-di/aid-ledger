import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ProgramFooter = () => {
  return (
    <footer
      className="mx-auto my-8 flex w-[94%] flex-col items-center
      justify-between gap-5 rounded-4xl bg-white px-5 py-6
      text-center sm:px-8 lg:flex-row lg:gap-6 lg:rounded-[48px]
      lg:px-10 lg:text-left xl:px-12 2xl:px-20 2xl:py-4 caret-transparent"
    >
      <h2
        className="flex shrink-0 items-center justify-center gap-3
        text-2xl font-bold text-[#0F1126] sm:text-3xl
        2xl:text-[42px]"
      >
        <FontAwesomeIcon icon={faPagelines} className="text-[#007F80]" />
        Get in Touch
      </h2>

      <p
        className="w-full min-w-0 flex-1 text-base leading-relaxed
        text-[#181E33] lg:w-auto lg:border-l-2
        lg:border-[#D5DEE7] lg:pl-6 xl:text-lg 2xl:text-xl"
      >
        Would you like to learn more about this program? We&apos;d be happy to
        hear from you.
      </p>

      <Link
        href="/contact"
        className="inline-flex w-full max-w-75 shrink-0
        items-center justify-center gap-3 rounded-full bg-[#1B4195]
        px-6 py-3 text-lg font-bold text-white transition-colors
        hover:bg-[#153477] focus-visible:outline-2
        focus-visible:outline-offset-4 focus-visible:outline-[#1B4195]
        sm:w-auto xl:px-10 2xl:min-w-75 2xl:py-5
        2xl:text-2xl"
      >
        Learn More
        <FontAwesomeIcon icon={faArrowRightLong} className="shrink-0" />
      </Link>
    </footer>
  );
};

export default ProgramFooter;
