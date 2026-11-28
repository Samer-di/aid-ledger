"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Head = () => {
  return (
    <div className="w-full h-auto grid grid-rows-[400px_1fr] lg:grid-cols-[50%_1fr] caret-transparent">
      <div className="w-full lg:h-full flex justify-center items-center">
        <div className="w-[90%] h-75 md:w-[60%] lg:w-[95%] lg:h-full rounded-4xl bg-[url(/emergencyHead.jpg)] bg-no-repeat bg-size-[100%_100%]"></div>
      </div>
      <div className="w-full lg:h-full flex flex-col justify-start text-justify text-wrap pr-5">
        <h1 className="ml-5 text-4xl lg:text-5xl font-bold text-[#0F1126] pt-12.5">
          <FontAwesomeIcon
            icon={faHandHoldingHeart}
            className="lg:text-6xl text-[#1B4195]"
          ></FontAwesomeIcon>
          &nbsp;Emergency
        </h1>
        <p className="ml-3 font-bold text-2xl pt-5 text-[#181E33]">
          Providing immediate humanitarian assistance and essential support to
          individuals and communities affected by crises.
        </p>
        <p className="ml-5 pt-5 text-[#181E33] text-xl">
          Welcome to Akkarouna&apos;s Emergency Response program. Through timely
          humanitarian assistance and coordinated relief efforts, we help
          vulnerable individuals and families meet their urgent needs and
          overcome challenging circumstances with safety and dignity.
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
