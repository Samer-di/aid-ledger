import {
  faClipboardList,
  faScrewdriverWrench,
  faLightbulb,
  faHandshake,
  faWallet,
  faSeedling,
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
              icon={faScrewdriverWrench}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-nowrap">
              Vocational Training
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Provide practical and technical training that helps individuals
              develop professional skills aligned with labor market needs.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap">
              Employment Support
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Help individuals improve their employability and access suitable
              job opportunities.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-nowrap text-center">
              Business Development
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Support aspiring entrepreneurs and small businesses in developing
              business ideas and building sustainable income-generating
              projects.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[90%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faWallet}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap">
              Financial Literacy
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Develop essential financial management, budgeting, and saving
              skills to strengthen economic independence.
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-125 h-100 flex items-center justify-center">
          <div className="w-[70%] h-[95%] rounded-2xl shadow-2xl bg-white flex flex-col items-center p-7">
            <FontAwesomeIcon
              icon={faSeedling}
              className="text-7xl text-[#1B4195]"
            />
            <h2 className="text-xl lg:text-2xl font-bold pt-5 text-wrap text-center">
              Sustainable Livelihoods
            </h2>
            <p className="pt-5 text-justify lg:text-xl">
              Support income-generating activities, local production, and
              agricultural initiatives that contribute to long-term economic
              resilience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
