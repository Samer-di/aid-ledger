import {
  faClipboardList,
  faChalkboardUser,
  faBook,
  faSchool,
  faLightbulb,
  faScaleBalanced,
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
              icon={faChalkboardUser}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-nowrap">
              Educational Support
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Help learners overcome academic difficulties, improve their
              understanding, and continue their education.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faBook}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap">
              Literacy & Numeracy
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Develop essential reading, writing, and mathematical skills to
              build a strong foundation for learning.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faSchool}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Inclusive Learning Opportunities
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Help individuals facing educational barriers access meaningful
              learning opportunities.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap">
              Life Skills Development
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Develop communication, critical thinking, problem-solving, and
              decision-making skills.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[95%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faScaleBalanced}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Rights & Citizenship Awareness
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Promote awareness of individual rights, civic responsibilities,
              and active community participation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
