import Navigation from "@/components/Reusable/Navigation";
import Heropage from "@/components/Hero"
import Image from "next/image";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Reusable/Footer";
import Utility from "@/components/Utility";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Heropage />
      <Roadmap />
      <Utility />
      <Footer />
    </div>

  );
}
