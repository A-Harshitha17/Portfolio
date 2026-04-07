import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B-Tech (CSE)',
    institute: 'Rayalaseema University College of Engineering',
    location: 'Kurnool',
    status: 'Graduation 2026',
    description: null,
  },
  {
    degree: 'Intermediate',
    institute: 'Pragna Junior College',
    location: 'Allagadda, Kurnool',
    status: 'Graduated 2022',
    description: null,
  },
  {
    degree: 'SSC',
    institute: 'Keshava Reddy Residential School',
    location: 'Panyam, Kurnool',
    status: 'Graduated 2020',
    description: null,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My academic journey</p>
            <h2 className="section-heading gradient-text">Education</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

              {education.map((item, index) => (
                <div
                  key={item.degree}
                  className="relative pl-20 pb-12 last:pb-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_hsl(174_72%_56%_/_0.5)]" />

                  <div className="glass-card-hover p-6 rounded-xl">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                        <p className="text-primary font-medium">{item.institute}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {item.status}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      {item.location}
                    </div>
                    {item.description && (
                      <p className="mt-4 text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
