import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Photograph = () => {
  return (
    <div className="w-full grid grid-rows-[100px_400px]">
      <div className="border-2 border-black w-full flex items-center justify-center">
        <h2 className="text-3xl">
          <FontAwesomeIcon icon={faImage} className="text-5xl" />
          Program Moments
        </h2>
      </div>
      <div className="border-2 border-black w-full"></div>
    </div>
  );
};

export default Photograph;
