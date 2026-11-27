import About from "@/components/KnowLedge/About";
import Activity from "@/components/KnowLedge/Activity";
import Head from "@/components/KnowLedge/Head";
import Photograph from "@/components/KnowLedge/Photograph";
import Supports from "@/components/KnowLedge/Supports";
import ProgramFooter from "@/components/Programes Footer/ProgramFooter";

const page = () => {
  return (
    <main className="w-full mt-20 bg-[#F3F7FA]">
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
