import Featured from "@/components/Featured";
import Slider from "@/components/Slider";
import VideoView from "@/components/VideoView";
import FunFacts from "@/components/FunFacts";
import BestDeal from "@/components/BestDeal";
import Properties from "@/components/Properties";
import ContactUs from "@/components/ContactUs";


export default function Home() {
  return (
    <>
      <main>
        <Slider/>
        <Featured/>
        <VideoView/>
        <FunFacts/>
        <BestDeal/>
        <Properties/>
        <ContactUs/>
      </main>
    </>
  );
}
