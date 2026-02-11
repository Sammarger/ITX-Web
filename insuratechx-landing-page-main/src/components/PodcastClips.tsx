import { Play, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

import Ep1ImpactOnLeaders from "../assets/EP1 - AIs Impact on leaders.mp4";
import Ep1ImpactOnOperations from "../assets/EP1 - AIs impact on operations.mp4";
import Ep1AmplifiedIncome from "../assets/EP1 - Amplified Income.mp4";
import Ep1DogWontEatDogFood from "../assets/EP1 - The dog who won't eat dog food.mp4";

const episodes = [
  {
    id: 1,
    title: "AI's Impact on Leaders",
    description:
      "From EP 1: how AI is reshaping leadership, decision making, and strategic planning in insurance organisations.",
    duration: "3 min clip",
    episode: "EP 1",
    featured: true,
    videoSrc: Ep1ImpactOnLeaders,
  },
  {
    id: 2,
    title: "AI's Impact on Operations",
    description:
      "From EP 1: a focused breakdown of how AI is driving efficiency and automation across insurance operations.",
    duration: "4 min clip",
    episode: "EP 1",
    featured: false,
    videoSrc: Ep1ImpactOnOperations,
  },
  {
    id: 3,
    title: "Amplified Income",
    description:
      "From EP 1: how brokers and carriers can use AI to unlock new revenue streams and amplify existing income.",
    duration: "5 min clip",
    episode: "EP 1",
    featured: false,
    videoSrc: Ep1AmplifiedIncome,
  },
  {
    id: 4,
    title: "The Dog Who Won't Eat Dog Food",
    description:
      "From EP 1: a story about why true product–market fit matters more than hype, especially with AI products.",
    duration: "3 min clip",
    episode: "EP 1",
    featured: false,
    videoSrc: Ep1DogWontEatDogFood,
  },
];

const PodcastClips = () => {
  const featuredEpisode = episodes.find((ep) => ep.featured);
  const regularEpisodes = episodes.filter((ep) => !ep.featured);

  return (
    <section id="podcast" className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Headphones className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              InsuraTechX Podcast
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Listen to Short
            <br />
            <span className="text-gradient">Podcast Clips</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Bite-sized highlights from our full-length episodes, featuring the most
            insightful moments on insurance technology, industry trends, and
            conversations with the leaders shaping the future of insurance.
          </p>
        </div>

        {/* Featured Episode */}
        {featuredEpisode && (
          <div className="mb-12">
            <div className="relative rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 group">
              <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                {/* Featured Clip Preview */}
                <div className="relative flex-shrink-0 w-full md:w-[320px]">
                  <div className="rounded-2xl overflow-hidden shadow-glow group-hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-black">
                    <video
                      src={featuredEpisode.videoSrc}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    NEW
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      {featuredEpisode.episode}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {featuredEpisode.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {featuredEpisode.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 max-w-xl">
                    {featuredEpisode.description}
                  </p>
                  <Button
                    variant="hero"
                    size="lg"
                    asChild
                  >
                    <a href={featuredEpisode.videoSrc} target="_blank" rel="noreferrer">
                      <Play className="w-5 h-5" />
                      Play Clip in New Tab
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Episode Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularEpisodes.map((episode) => (
            <div
              key={episode.id}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                {/* Mini Clip Preview */}
                <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-black group-hover:scale-110 transition-transform duration-300">
                  <video
                    src={episode.videoSrc}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary">
                      {episode.episode}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {episode.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {episode.description}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 h-8"
                    asChild
                  >
                    <a href={episode.videoSrc} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary">
                      <Play className="w-3 h-3" />
                      Play clip
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PodcastClips;
