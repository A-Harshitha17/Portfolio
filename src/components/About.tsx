import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Code2, GraduationCap, Target, Sparkles } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
            <h2 className="section-heading gradient-text">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a motivated and enthusiastic B.Tech (Computer Science and Engineering) student at Rayalaseema University College of Engineering, driven by a strong interest in software development and modern technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy designing and developing efficient, scalable, and user-friendly applications while continuously improving my technical knowledge and problem-solving abilities. I have hands-on experience with Java, HTML, CSS, MySQL, and AWS, and I actively apply these technologies to real-world projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I am pursuing an internship in Java Full Stack Web Development at TAP Academy, which is strengthening my understanding of backend development, frontend integration, and end-to-end application design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My career goal is to become a Software Developer who contributes to impactful projects and innovative solutions. I am enthusiastic about learning new technologies, adapting to industry trends, and growing professionally through hands-on experience.
              </p>
            </div>

            {/* Right - Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-hover p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Full Stack</h3>
                <p className="text-sm text-muted-foreground">Java Development</p>
              </div>

              <div className="glass-card-hover p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">B.Tech CSE</h3>
                <p className="text-sm text-muted-foreground">Graduating 2026</p>
              </div>

              <div className="glass-card-hover p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Goal</h3>
                <p className="text-sm text-muted-foreground">Software Developer</p>
              </div>

              <div className="glass-card-hover p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Learning</h3>
                <p className="text-sm text-muted-foreground">TAP Academy Intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
