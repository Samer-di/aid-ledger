import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faHandHoldingHeart,
  faHeartPulse,
  faStethoscope,
  faLock,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Activity = () => {
  return (
    <div className="w-full grid grid-rows-[100px_auto]">
      <div className=" w-full flex items-center justify-center">
        <h1 className="text-[#0F1126] text-3xl font-bold">
          <FontAwesomeIcon
            icon={faFileLines}
            className="text-4xl text-[#1B4195]"
          />
          &nbsp;Our Activities
        </h1>
      </div>
      <div className=" w-full flex flex-col lg:flex-row flex-wrap lg:justify-center">
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-nowrap">
              Psychosocial Support
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Provide individual and group support to manage stress, strengthen
              resilience, and improve mental and emotional well-being.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faHeartPulse}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap">
              Physical Health & Wellness
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Promote healthy habits and support access to essential health
              services.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faStethoscope}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Maternal & Reproductive Health
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Support women&apos;s and girls&apos; reproductive health and
              promote the well-being of mothers and children.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faLock}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-nowrap">
              Protection & Safe Spaces
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Provide safe, supportive environments and contribute to the
              prevention of and response to violence.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Positive Parenting & Family Support
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Strengthen healthy family relationships and support parents in
              creating a safe and nurturing environment for their children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
