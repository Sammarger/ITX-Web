import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl gradient-dark p-12 md:p-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Ready to Transform Your
              <br />
              <span className="text-primary">Insurance Business?</span>
            </h2>
            <p className="text-lg text-secondary-foreground/70 mb-10 max-w-xl mx-auto">
              Join hundreds of insurance companies already using InsuraTechX to 
              streamline operations and delight customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:border-secondary-foreground/50">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-secondary-foreground/50 mt-6">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
