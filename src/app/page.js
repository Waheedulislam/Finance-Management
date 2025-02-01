import Banner from "@/components/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    // className="max-w-[1183px] mx-auto px-2"
    <div >
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
}
