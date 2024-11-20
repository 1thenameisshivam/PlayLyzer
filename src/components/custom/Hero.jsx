"use client";
import { BackgroundLines } from "../ui/background-lines";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();
  return (
    <BackgroundLines className="flex bg-black items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-400 to-neutral-600 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Playlyzer, Your YouTube <br /> Playlist Analyzer
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 dark:text-neutral-400 text-center">
        Unlock deeper insights from your YouTube playlists with advanced
        analysis tools, including trend tracking, audience demographics, and
        performance analytics – all for free.
      </p>
      <div className=" mt-5 flex justify-center text-center">
        <HoverBorderGradient
          onClick={() => router.push("/analyze")}
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2"
        >
          <span>Analyze Now</span>
        </HoverBorderGradient>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
