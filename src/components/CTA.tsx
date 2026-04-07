import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles size={16} />
                Open to work
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Let's Build Something Amazing</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Excited to learn, collaborate, and grow as a developer. Let's connect and create impactful solutions together!
              </p>

              <a
                href="#contact"
                className="glow-button inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-primary-foreground"
              >
                Get In Touch
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
