import { useTypingEffect } from '@/hooks/useTypingEffect';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const typingRoles = ['Software Developer', 'Java Developer', 'Web Developer'];

const Hero = () => {
  const typedText = useTypingEffect(typingRoles, 100, 50, 2000);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-in-up">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-200">
              <span className="gradient-text">Ayaluri Harshitha</span>
            </h1>
            <div className="h-12 md:h-14 mb-6 animate-fade-in-up animation-delay-400">
              <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                {typedText}
              </span>
              <span className="typing-cursor" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-600">
              Passionate Java Full Stack Developer in the Making
            </p>

            {/* Location & Experience */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-muted-foreground animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Open to work</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-600">
              <a
                href="https://www.linkedin.com/in/harshitha1745/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-3 rounded-full"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="https://github.com/A-Harshitha17"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-3 rounded-full"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="mailto:ayaluriharshitha@gmail.com"
                className="glass-card-hover p-3 rounded-full"
              >
                <Mail size={20} className="text-primary" />
              </a>
              <a
                href="https://harshithaportfolio.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-3 rounded-full"
              >
                <ExternalLink size={20} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up animation-delay-400">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border animate-glow-pulse">
                <img
                  src="https://image2url.com/r2/default/images/1768829962470-11a900e8-fb37-45be-a876-655fec7e0dc9.jpeg"
                  alt="Ayaluri Harshitha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Java Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
