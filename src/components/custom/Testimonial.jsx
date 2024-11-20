import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "Playlyzer transformed the way I understand my audience. The analytics helped me optimize my playlists for maximum engagement!",
      name: "Emily Roberts",
      title: "Content Creator, Emily Vlogs",
    },
    {
      quote:
        "I was able to identify trends in my playlist and improve my video strategy. Playlyzer is a must-have for creators!",
      name: "James Carter",
      title: "YouTube Educator",
    },
    {
      quote:
        "The insights provided by Playlyzer allowed me to outpace competitors and improve my playlist growth by 50%.",
      name: "Sophia White",
      title: "Digital Marketer",
    },
    {
      quote:
        "As a data-driven creator, I love how Playlyzer gives detailed analytics on every video. It’s intuitive and powerful!",
      name: "Liam Anderson",
      title: "Tech Reviewer",
    },
    {
      quote:
        "Understanding audience retention and engagement for my playlists has never been this easy. Playlyzer is a game-changer!",
      name: "Mia Clark",
      title: "Fitness Influencer",
    },
  ];
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} />
    </div>
  );
};

export default Testimonial;
