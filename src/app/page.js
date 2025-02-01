import Banner from "@/components/ui/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Contact from "@/components/ui/Contact";
import Brand from "@/components/ui/Brand";

export default function Home() {
  return (
    // className="max-w-[1183px] mx-auto px-2"
    <div >
      <Navbar />
      <Banner />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
}
