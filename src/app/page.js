import Banner from "@/components/ui/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Contact from "@/components/ui/Contact";
import Brand from "@/components/ui/Brand";
import FuturePlan from "@/components/ui/FuturePlan";
import Future from "@/components/ui/f/Future";

export default function Home() {
  return (
    // className="max-w-[1183px] mx-auto px-2"
    <div >
      <Navbar />
      <Banner />
      {/* <FuturePlan /> */}
      <Future />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
}
