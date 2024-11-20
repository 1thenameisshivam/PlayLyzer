import Feature from "@/components/custom/Feature";
import Hero from "@/components/custom/Hero";
import Lamp from "@/components/custom/Lamp";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <div className="flex justify-start items-center">
        <Feature />
        <div className="h-[12rem] flex items-center justify-center">
          <TextHoverEffect text="Playlyzer" />
        </div>
      </div>
      <Lamp />
    </div>
  );
}
