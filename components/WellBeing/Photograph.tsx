import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Photograph = () => {
  return (
    <div className="w-full grid grid-rows-[100px_auto]">
      <div className="w-full flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          <FontAwesomeIcon icon={faImage} className="text-3xl text-[#1B4195]" />
          &nbsp;Program Moments
        </h2>
      </div>
      <div className="w-full flex flex-col gap-8 md:flex-row  md:gap-5 justify-center flex-wrap">
        <div className="w-full md:w-[23%] lg:w-[47%] h-auto flex items-center justify-center">
          <Image
            src={"/wellBeing1.png"}
            width={300}
            height={450}
            alt="WellBeing Moment"
            className="rounded-4xl shadow-2xl lg:w-[90%] lg:h-auto"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[23%] lg:w-[47%] h-auto flex items-center justify-center">
          <Image
            src={"/wellBeing2.png"}
            width={300}
            height={450}
            alt="WellBeing Moment"
            className="rounded-4xl shadow-2xl lg:w-[90%] lg:h-auto"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[23%] lg:w-[47%] h-auto flex items-center justify-center">
          <Image
            src={"/wellBeing3.png"}
            width={300}
            height={450}
            alt="WellBeing Moment"
            className="rounded-4xl shadow-2xl lg:w-[90%] lg:h-auto"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[23%] lg:w-[47%] h-auto flex items-center justify-center">
          <Image
            src={"/wellBeing4.png"}
            width={300}
            height={450}
            alt="WellBeing Moment"
            className="rounded-4xl shadow-2xl lg:w-[90%] lg:h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Photograph;
