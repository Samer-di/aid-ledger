import ProgramFooter from "@/components/Programes Footer/ProgramFooter";
import About from "@/components/WellBeing/About";
import Activity from "@/components/WellBeing/Activity";
import Head from "@/components/WellBeing/Head";
import Photograph from "@/components/WellBeing/Photograph";
import Supports from "@/components/WellBeing/Supports";

const page = () => {
  return (
    <main className="w-full mt-20 bg-[#F3F7FA] caret-transparent">
      <Head />
      <About />
      <Supports />
      <Activity />
      <Photograph />
      <ProgramFooter />
    </main>
  );
};

export default page;
