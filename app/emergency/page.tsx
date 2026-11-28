import About from "@/components/Emergency/About";
import Activity from "@/components/Emergency/Activity";
import Head from "@/components/Emergency/Head";
import Photogragh from "@/components/Emergency/Photogragh";
import Supports from "@/components/Emergency/Supports";
import ProgramFooter from "@/components/Programes Footer/ProgramFooter";

const page = () => {
  return (
    <main className="w-full mt-20 bg-[#F3F7FA] caret-transparent">
      <Head />
      <About />
      <Supports />
      <Activity />
      <Photogragh />
      <ProgramFooter />
    </main>
  );
};

export default page;
