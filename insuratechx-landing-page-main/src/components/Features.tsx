import { 
  Brain, 
  FileCheck, 
  BarChart3, 
  Users, 
  Shield, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Underwriting",
    description: "Leverage machine learning to assess risk faster and more accurately than traditional methods.",
  },
  {
    icon: FileCheck,
    title: "Automated Claims",
    description: "Process claims in minutes, not days. Our intelligent system handles the heavy lifting.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Gain insights into your portfolio with comprehensive dashboards and reporting tools.",
  },
  {
    icon: Users,
    title: "Customer Portal",
    description: "Give policyholders a modern self-service experience they'll love.",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Advanced algorithms identify suspicious patterns before they become costly.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Manage operations from anywhere with our responsive mobile applications.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything You Need to
            <br />
            <span className="text-gradient">Transform Insurance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive platform handles every aspect of modern insurance operations,
            from policy management to claims processing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
