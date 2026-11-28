"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Head = () => {
  return (
    <div className="w-full h-auto grid grid-rows-[400px_1fr] lg:grid-cols-[50%_1fr] caret-transparent">
      <div className="w-full lg:h-full flex justify-center items-center">
        <div className="w-[90%] h-75 md:w-[60%] lg:w-[95%] lg:h-full rounded-4xl bg-[url(/growthHead.jpg)] bg-no-repeat bg-size-[100%_100%]"></div>
      </div>
      <div className="w-full lg:h-full flex flex-col justify-start text-justify text-wrap pr-5">
        <h1 className="ml-5 text-4xl lg:text-5xl font-bold text-[#0F1126] pt-12.5">
          <FontAwesomeIcon
            icon={faChartLine}
            className="lg:text-6xl text-[#1B4195]"
          ></FontAwesomeIcon>
          &nbsp;Growth
        </h1>
        <p className="ml-5 font-bold text-2xl pt-5 text-[#181E33]">
          Empowering individuals and communities through economic opportunities,
          sustainable livelihoods, and financial independence.
        </p>
        <p className="ml-5 pt-5 text-[#181E33] text-xl">
          Welcome to Akkarouna&apos;s Growth program. Through vocational
          training, employment support, and entrepreneurship initiatives, we
          help individuals and families build sustainable livelihoods and
          achieve greater economic independence.
        </p>
        <button className="p-5 mt-5 ml-5 mb-5 text-2xl rounded-4xl bg-[#1B4195] text-white font-bold flex items-center justify-center cursor-pointer">
          <Link href={"/contact"}>Get involved</Link>
          &nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faArrowRightLong} className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Head;
