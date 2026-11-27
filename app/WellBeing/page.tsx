import About from "@/components/WellBeing/About";
import Activity from "@/components/WellBeing/Activity";
import Head from "@/components/WellBeing/Head";
import Supports from "@/components/WellBeing/Supports";

const page = () => {
  return (
    <main className="w-full mt-20 bg-[#F3F7FA]">
      <Head />
      <About />
      <Supports />
      <Activity />
    </main>
  );
};

export default page;
