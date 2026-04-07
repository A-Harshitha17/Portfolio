import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Cloud Computing-Devops',
    platform: 'APSSDC',
    date: 'July 2025',
    skills: ['Cloud Computing', 'AWS'],
    verification: 'https://drive.google.com/file/d/1KKJlU7yMwKLQ7cU_jUXYisr4BANtnQQ6/view?usp=drivesdk',
  },
  {
    name: 'Software Engineering Job Simulation',
    platform: 'Forage',
    date: 'January 2025',
    skills: [],
    verification: 'https://drive.google.com/file/d/1E6_6zfLdZ0bsIsv5hQtm1iQSB4gWof5C/view?usp=drivesdk',
  },
  {
    name: 'Python Intermediate',
    platform: 'Sololearn',
    date: 'July 2023',
    skills: ['Python'],
    verification: 'https://api2.sololearn.com/v2/certificates/CC-FTYRYGN3/image/png?t=639041802386251455',
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My achievements</p>
            <h2 className="section-heading gradient-text">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="glass-card-hover p-6 rounded-xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1 truncate">{cert.name}</h3>
                    <p className="text-sm text-primary">{cert.platform}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={14} />
                  {cert.date}
                </div>

                {cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={cert.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink size={14} />
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
