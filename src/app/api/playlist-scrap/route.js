import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const POST = async (req, res) => {
  const { url: playlistUrl } = await req.json();

  // Validate the playlist URL
  if (!playlistUrl) {
    return NextResponse.json(
      { message: "Playlist URL is required", success: false },
      { status: 400 }
    );
  }

  const playlistId = new URL(playlistUrl).searchParams.get("list");
  if (!playlistId) {
    return NextResponse.json(
      { message: "Invalid Playlist Id", success: false },
      { status: 400 }
    );
  }

  const videos = [];
  try {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the playlist URL
    await page.goto(playlistUrl, { waitUntil: "networkidle2" });

    // Scroll to load all videos
    while (true) {
      const previousHeight = await page.evaluate("document.body.scrollHeight");
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulates a dela
      const currentHeight = await page.evaluate("document.body.scrollHeight");
      if (currentHeight === previousHeight) break;
    }

    const extractedVideos = await page.$$eval(
      "#contents ytd-playlist-video-renderer",
      (elements) =>
        elements.map((el) => {
          const title =
            el.querySelector("#video-title")?.textContent?.trim() || "No Title";
          const viewsText =
            el.querySelector("#video-info span")?.textContent?.trim() ||
            "0 views";
          const thumbnail = el.querySelector("img")?.src || "";
          // Parse views
          const viewsMatch = viewsText.match(/^([\d,.]+[KMB]?)\s*views?$/i);
          let views = 0;
          if (viewsMatch) {
            const viewString = viewsMatch[1].replace(/,/g, "");
            if (viewString.endsWith("K")) views = parseFloat(viewString) * 1000;
            else if (viewString.endsWith("M"))
              views = parseFloat(viewString) * 1000000;
            else if (viewString.endsWith("B"))
              views = parseFloat(viewString) * 1000000000;
            else views = parseInt(viewString);
          }

          return { title, views, thumbnail };
        })
    );
    videos.push(...extractedVideos);
    // Close the browser
    await browser.close();

    // Prepare graph data
    const graphData = videos.map((video, index) => ({
      name: `Video ${index + 1}`,
      views: video.views,
    }));

    return NextResponse.json({ vedioList: videos, graphData, success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
};
