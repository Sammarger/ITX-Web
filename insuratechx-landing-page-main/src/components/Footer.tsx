import { Instagram, Youtube, Twitter } from "lucide-react";
import ITXHeaderLogo from "@/assets/ITX_Header_Logo.svg";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "API"],
    Company: ["About", "Careers", "Blog", "Press"],
    Resources: ["Documentation", "Help Center", "Webinars", "Partners"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/insuratechx/?next=%2F", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@InsuraTechX", label: "YouTube" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <footer id="contact" className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center bg-transparent">
                <img
                  src={ITXHeaderLogo}
                  alt="InsuraTechX logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-secondary-foreground">
                Insura<span className="text-primary">TechX</span>
              </span>
            </a>
            <p className="text-secondary-foreground/70 mb-6 max-w-xs">
              Transforming insurance operations with intelligent technology solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-secondary-foreground mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-secondary-foreground/50">
              © {new Date().getFullYear()} InsuraTechX. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
