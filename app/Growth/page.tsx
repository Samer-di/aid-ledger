import About from "@/components/Growth/About";
import Activity from "@/components/Growth/Activity";
import Head from "@/components/Growth/Head";
import Photograph from "@/components/Growth/Photograph";
import Supports from "@/components/Growth/Supports";
import ProgramFooter from "@/components/Programes Footer/ProgramFooter";

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
