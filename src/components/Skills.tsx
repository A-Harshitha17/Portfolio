import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Java', 'HTML', 'CSS', 'JavaScript', 'AWS'],
    color: 'primary',
  },
  {
    title: 'Backend',
    skills: ['Python'],
    color: 'accent',
  },
  {
    title: 'Databases',
    skills: ['MySQL'],
    color: 'primary',
  },
  {
    title: 'Tools',
    skills: ['AWS'],
    color: 'accent',
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT', 'Lovable', 'Claude'],
    color: 'primary',
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">What I work with</p>
            <h2 className="section-heading gradient-text">Skills & Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card-hover p-6 rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
