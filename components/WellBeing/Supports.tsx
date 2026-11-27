import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChildren,
  faChildDress,
  faWheelchair,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
const Supports = () => {
  return (
    <div className="w-full h-auto grid grid-rows-[100px_auto] mt-25">
      <div className=" w-full flex items-center justify-center">
        <h1 className="text-3xl font-bold text-[#0F1126]">
          <FontAwesomeIcon icon={faUsers} className="text-[#1B4195] text-4xl" />
          &nbsp;&nbsp;Who We Support
        </h1>
      </div>
      <div className="w-full flex flex-col md:flex-row md:justify-center md:flex-wrap gap-12">
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faChildren}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3">Children</h2>
            <p className="p-3.75 text-center">
              Support their mental wellbeing, healthy development, and overall
              quality of life.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faChildDress}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3">Women</h2>
            <p className="p-3.75 text-center">
              Promote their physical and mental well-being, reproductive health,
              and access to safe and supportive spaces.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faWheelchair}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3">Children</h2>
            <p className="p-3.75 text-center">
              Support their well-being, inclusion, and equal access to needed
              services.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faPeopleRoof}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3">Children</h2>
            <p className="p-3.75 text-center">
              Provide holistic support to strengthen well-being, family
              stability, and quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;
