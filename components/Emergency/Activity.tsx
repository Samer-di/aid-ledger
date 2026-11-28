import {
  faClipboardList,
  faBoxOpen,
  faShirt,
  faSoap,
  faUtensils,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Activity = () => {
  return (
    <div className="w-full grid grid-rows-[100px_auto]">
      <div className=" w-full flex items-center justify-center">
        <h1 className="text-[#0F1126] text-3xl font-bold">
          <FontAwesomeIcon
            icon={faClipboardList}
            className="text-4xl text-[#1B4195]"
          />
          &nbsp;Our Activities
        </h1>
      </div>
      <div className=" w-full flex flex-col lg:flex-row flex-wrap lg:justify-center">
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Food Parcel Distribution
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Provide essential food supplies to vulnerable families facing food
              insecurity and emergency situations.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faShirt}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Non-Food Items Distribution
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Provide essential household items, clothing, blankets, and other
              basic supplies to individuals and families in need.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faSoap}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Hygiene & Dignity Kits
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Support personal hygiene and preserve human dignity by providing
              essential hygiene and personal care supplies.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faUtensils}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-2xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Community Meal Distribution
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Provide meals to vulnerable individuals and families facing
              difficult living conditions.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[95%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Emergency Preparedness & Response
            </h2>
            <p className="pt-1 text-justify lg:text-xl">
              Prepare for emergencies and coordinate humanitarian relief efforts
              to address urgent community needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
