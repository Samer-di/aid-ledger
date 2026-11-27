import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
const About = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-[90%] h-[80%] lg:h-32.5 grid grid-rows-[80px_200px] md:grid-rows-[80px_100px] lg:grid-cols-[30%_1fr] p-5 mt-17.5 bg-white shadow-2xl rounded-4xl">
        <div className="h-full flex items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-r-[#D5DEE7] border-b-[#D5DEE7]">
          <h1 className="text-[#0F1126] text-2xl font-bold lg:text-3xl">
            <FontAwesomeIcon
              icon={faPagelines}
              className="text-[#007F80] text-3xl lg:text-4xl"
            />
            About Know-Ledge
          </h1>
        </div>
        <div className="h-full flex items-center justify-center">
          <p className="text-[#181E33] text-xl text-justify lg:pl-5">
            The Know-Ledge program aims to improve access to education, overcome
            learning barriers, promote awareness, and empower individuals with
            the knowledge and skills needed to actively participate in their
            communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
