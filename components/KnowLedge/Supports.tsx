import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faGraduationCap,
  faUserGroup,
  faPersonDress,
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
              icon={faGraduationCap}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3 text-wrap">
              Students
            </h2>
            <p className="p-3.75 text-center">
              Support their educational journey, strengthen their academic
              abilities, and encourage continuous learning.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faUserGroup}
              className="text-6xl text-[#1B4195]"
            />
            <h2 className="text-4xl text-[#0F1126] font-bold pt-3">Youth</h2>
            <p className="p-3.75 text-center">
              Provide learning opportunities that help young people develop
              essential knowledge and personal skills.
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
              Promote equal access to education, knowledge, and awareness of
              their rights.
            </p>
          </div>
        </div>
        <div className="w-full md:w-58 h-75 flex items-center justify-center">
          <div className="w-67 h-70 rounded-2xl bg-white shadow-2xl flex flex-col items-center justify-center">
            <FontAwesomeIcon
              icon={faPeopleRoof}
              className="text-6xl text-[#1B4195] pt-5"
            />
            <h2 className="text-2xl text-[#0F1126] font-bold  text-center">
              Underserved Communities
            </h2>
            <p className="p-3.75 text-center">
              Expand access to educational opportunities and learning resources
              for individuals facing social and economic barriers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;
