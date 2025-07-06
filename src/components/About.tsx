
import { Users, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Awards Won" }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Visionary leader with 10+ years in commercial video production."
    },
    {
      name: "Sarah Chen",
      role: "Lead Cinematographer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning cinematographer specializing in brand storytelling."
    },
    {
      name: "Michael Torres",
      role: "Post-Production Supervisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Technical expert in editing, color grading, and visual effects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Pixel Production</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of creative professionals dedicated to crafting exceptional video content that elevates brands and tells compelling stories.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2019, Pixel Production emerged from a shared vision to create video content that doesn't just look beautiful, but tells stories that resonate deeply with audiences.
              </p>
              <p>
                Our journey began with a simple belief: every brand has a unique story worth telling. Through cinematic craftsmanship and innovative storytelling techniques, we've helped over 50 brands across various industries communicate their vision effectively.
              </p>
              <p>
                Today, we continue to push creative boundaries, combining technical excellence with artistic vision to deliver video content that captivates, engages, and drives results.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <img
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
              alt="Our creative process"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of creatives, technicians, and storytellers work together to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`group text-center animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h4>
                
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Professional Excellence
                </h4>
                <p className="text-muted-foreground">
                  We maintain the highest standards in every aspect of production, from pre-planning to final delivery.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  Collaborative Approach
                </h4>
                <p className="text-muted-foreground">
                  We work closely with our clients as partners, ensuring their vision is at the heart of every project.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-3">
                {[
                  "Award-winning creative team",
                  "State-of-the-art equipment",
                  "Proven track record of success",
                  "Flexible and scalable solutions",
                  "Dedicated project management"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
