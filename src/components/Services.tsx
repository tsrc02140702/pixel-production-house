
import { Camera, Video, Tv, Youtube } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Video,
      title: "Commercial Production",
      description: "High-end commercial videos that showcase your brand with cinematic quality and professional storytelling.",
      features: ["Brand Films", "Product Showcases", "Corporate Videos", "Marketing Content"]
    },
    {
      icon: Camera,
      title: "Creative Direction",
      description: "From concept to completion, we guide your vision with creative expertise and industry experience.",
      features: ["Concept Development", "Storyboarding", "Art Direction", "Creative Strategy"]
    },
    {
      icon: Tv,
      title: "Post-Production",
      description: "Professional editing, color grading, and visual effects that bring your story to life with precision.",
      features: ["Video Editing", "Color Correction", "Visual Effects", "Motion Graphics"]
    },
    {
      icon: Youtube,
      title: "Content Strategy",
      description: "Strategic content planning and production optimized for digital platforms and audience engagement.",
      features: ["Social Media Content", "Digital Campaigns", "Brand Storytelling", "Multi-Platform Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video production services tailored to bring your creative vision to life with professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover-lift animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Arrow */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>Learn More</span>
                  <div className="w-4 h-4 border-r-2 border-t-2 border-primary transform rotate-45 transition-transform duration-300 group-hover:translate-x-1"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with our comprehensive video production services.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
