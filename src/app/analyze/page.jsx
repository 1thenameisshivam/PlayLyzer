"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import Image from "next/image";
import PlayListChart from "@/components/custom/PlayListChart";
const Analyze = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScraping = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/playlist-scrap", {
        method: "POST",
        body: JSON.stringify({
          url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      setData(resData);
      console.log(resData);
      if (resData.success) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="bg-black w-screen min-h-screen">
      <div className="flex justify-center items-center pt-7  ">
        <Loader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <div className="w-2/3 bg-neutral-900 rounded-md p-5">
          <Input
            className="text-white"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your playlist URL"
            type="text"
          />
          <Button
            onClick={handleScraping}
            className="mt-5 bg-white text-black hover:bg-white hover:text-black"
          >
            Analyze
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="w-2/3  bg-neutral-900 flex h-96 overflow-hidden rounded-md p-5">
          <div className="w-[50%] overflow-scroll ">
            {data &&
              data?.vedioList?.map((item, index) => (
                <div key={index} className="gap-4 py-2 items-center flex">
                  <div>
                    <Image
                      width={100}
                      height={70}
                      src={
                        item.thumbnail ||
                        "https://ntiprit.gov.in/assets/front/img/broken-1.png"
                      }
                      alt="thumbnail"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h1 className="text-white">{item.title}</h1>
                    <h1 className="text-white">{item.views}</h1>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-[50%]">
            <PlayListChart data={data?.graphData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;

const loadingStates = [
  {
    text: "Grabbing popcorn for your playlist...",
  },
  {
    text: "Hopping onto YouTube...",
  },
  {
    text: "Finding hidden gems in your playlist...",
  },
  {
    text: "Scraping video titles...",
  },
  {
    text: "Analyzing views and likes...",
  },
  {
    text: "Fetching channel details...",
  },
  {
    text: "Uncovering audience insights...",
  },
  {
    text: "Almost there, stay tuned...",
  },
  {
    text: "Preparing your playlist summary...",
  },
];
