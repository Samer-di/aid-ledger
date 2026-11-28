import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPersonDress,
  faPeopleRoof,
  faBriefcase,
  faStore,
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
              icon={faBriefcase}
              className="text-5xl text-[#1B4195] pt-4"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3 text-wrap text-center">
              Youth & Job Seekers
            </h2>
            <p className="p-3.75 text-center">
              Support young people and job seekers in developing professional
              skills and accessing employment opportunities.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faPersonDress}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3">Women</h2>
            <p className="p-3.75 text-center">
              Promote women&apos;s economic empowerment, financial independence,
              and participation in the workforce.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faStore}
              className="text-6xl text-[#1B4195] pt-4"
            />
            <h2 className="text-3xl text-[#0F1126] font-bold pt-3 text-center">
              Small Business Owners
            </h2>
            <p className="p-1 text-center">
              Support small business owners in developing sustainable businesses
              and income-generating opportunities.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faPeopleRoof}
              className="text-6xl text-[#1B4195] pt-5"
            />
            <h2 className="text-3xl text-[#0F1126] font-bold  text-center text-wrap">
              Vulnerable Households
            </h2>
            <p className="p-2 text-center">
              Help economically disadvantaged households strengthen their
              financial stability and build sustainable sources of income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;
