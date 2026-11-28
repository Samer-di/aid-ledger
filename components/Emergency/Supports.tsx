import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPeopleRoof,
  faHouseChimneyUser,
  faHandHoldingHeart,
  faPeopleGroup,
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
              icon={faHouseChimneyUser}
              className="text-5xl text-[#1B4195] pt-4"
            />
            <h2 className="text-2xl text-[#0F1126] font-bold pt-3 text-wrap text-center">
              Displaced Families
            </h2>
            <p className="p-3.75 text-center">
              Support families forced to leave their homes by helping them
              access essential supplies and meet their immediate needs.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-2xl text-[#0F1126] font-bold pt-3 text-center">
              Crisis-Affected Communities
            </h2>
            <p className="p-2 text-center">
              Provide humanitarian assistance to communities affected by
              emergencies and challenging living conditions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faPeopleRoof}
              className="text-6xl text-[#1B4195] pt-4"
            />
            <h2 className="text-3xl text-[#0F1126] font-bold pt-3 text-center">
              Vulnerable Households
            </h2>
            <p className="p-1 text-center">
              Help households facing severe hardship meet their basic needs
              through essential relief assistance.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faPeopleGroup}
              className="text-6xl text-[#1B4195] pt-5"
            />
            <h2 className="text-3xl text-[#0F1126] font-bold  text-center text-wrap">
              Children & Elderly People
            </h2>
            <p className="p-2 text-center">
              Prioritize the urgent needs of children and elderly individuals
              who are particularly vulnerable during emergencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;
