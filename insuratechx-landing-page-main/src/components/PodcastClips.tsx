import { Play, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const episodes = [
  {
    id: 1,
    title: "The Future of AI in Underwriting",
    description: "How machine learning is transforming risk assessment and policy pricing in the insurance industry.",
    duration: "42 min",
    episode: "EP 45",
    featured: true,
  },
  {
    id: 2,
    title: "Claims Automation Deep Dive",
    description: "Breaking down the technology behind instant claims processing and customer satisfaction.",
    duration: "38 min",
    episode: "EP 44",
    featured: false,
  },
  {
    id: 3,
    title: "InsurTech Startup Stories",
    description: "Interviews with founders who are disrupting traditional insurance models.",
    duration: "55 min",
    episode: "EP 43",
    featured: false,
  },
  {
    id: 4,
    title: "Regulatory Challenges in 2024",
    description: "Navigating compliance while innovating in the insurance technology space.",
    duration: "35 min",
    episode: "EP 42",
    featured: false,
  },
  {
    id: 5,
    title: "Customer Experience Revolution",
    description: "Why policyholder experience is the new battleground for insurance companies.",
    duration: "41 min",
    episode: "EP 41",
    featured: false,
  },
  {
    id: 6,
    title: "Data Security Best Practices",
    description: "Protecting sensitive customer information in an increasingly connected world.",
    duration: "47 min",
    episode: "EP 40",
    featured: false,
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
            Listen to Our
            <br />
            <span className="text-gradient">Latest Episodes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep dives into insurance technology, industry trends, and conversations
            with the leaders shaping the future of insurance.
          </p>
        </div>

        {/* Featured Episode */}
        {featuredEpisode && (
          <div className="mb-12">
            <div className="relative rounded-3xl bg-card border border-border overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 group">
              <div className="absolute inset-0 gradient-primary opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                {/* Play Button */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground ml-2" fill="currentColor" />
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
                  <Button variant="hero" size="lg">
                    <Play className="w-5 h-5" />
                    Listen Now
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
                {/* Mini Play Button */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
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
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {episode.description}
                  </p>
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
