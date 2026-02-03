import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PodcastClips from "@/components/PodcastClips";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <PodcastClips />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
