import Image from "next/image";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const Feature = () => {
  const content = [
    {
      title: "Playlist Insights",
      description:
        "Gain valuable insights into your YouTube playlists, including performance analytics, audience engagement, and top-performing videos. Maximize the potential of your content with real-time data.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Playlist Insights
        </div>
      ),
    },
    {
      title: "Audience Demographics",
      description:
        "Understand your audience better by analyzing demographics such as age, location, and interests. Tailor your content strategy to reach the right audience at the right time.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-800),var(--yellow-800))] flex items-center justify-center text-white">
          Audience Demographics
        </div>
      ),
    },
    {
      title: "Trend Tracking",
      description:
        "Track how videos in your playlists are performing over time. Identify trends, track video growth, and adjust your content strategy to stay ahead of the curve.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Trend Tracking
        </div>
      ),
    },
    {
      title: "Competitor Analysis",
      description:
        "Monitor and compare your YouTube playlist performance against competitors. Understand what works for them and adopt strategies to improve your own content's performance.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Competitor Analysis
        </div>
      ),
    },
  ];
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
};

export default Feature;
