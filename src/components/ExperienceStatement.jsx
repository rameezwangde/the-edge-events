import { Sparkles, Activity, Star } from "lucide-react";
import DisplayCards from "./ui/display-cards";

export default function ExperienceStatement() {
  const customCards = [
    {
      icon: <Sparkles className="w-4 h-4 text-cyan" />,
      title: "Thoughtful Creativity",
      description: "Designed with intention",
      date: "01",
      iconClassName: "text-cyan",
      titleClassName: "text-white",
      className:
        "[grid-area:stack] hover:-translate-y-4 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-deepblue/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Activity className="w-4 h-4 text-cyan" />,
      title: "Seamless Coordination",
      description: "Flawless execution everywhere",
      date: "02",
      iconClassName: "text-cyan",
      titleClassName: "text-white",
      className:
        "[grid-area:stack] translate-x-2 md:translate-x-4 translate-y-24 md:translate-y-32 hover:translate-y-20 md:hover:translate-y-28 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-deepblue/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Star className="w-4 h-4 text-cyan" />,
      title: "Meaningful Experiences",
      description: "Memories that last",
      date: "03",
      iconClassName: "text-cyan",
      titleClassName: "text-white",
      className:
        "[grid-area:stack] translate-x-4 md:translate-x-8 translate-y-48 md:translate-y-64 hover:translate-y-44 md:hover:translate-y-60",
    },
  ];

  return (
    <section className="people section-space">
      <div className="people-visual"><img src="/images/showcase-1.jpg" alt="Guests sharing a memorable Edge Events experience" width="1600" height="900" loading="lazy" /></div>
      <div className="page-shell people-content">
        <div className="people-title"><p className="eyebrow">Built around people</p><h2>Great events are not measured only by scale.<br /><em>They are remembered by how they make people feel.</em></h2></div>
        <div className="flex w-full items-center justify-center py-20 lg:py-0 lg:justify-start lg:-ml-32 min-h-[480px] lg:min-h-0">
          <DisplayCards cards={customCards} />
        </div>
      </div>
    </section>
  )
}
