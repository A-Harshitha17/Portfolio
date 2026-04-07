import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'Task Manager App',
    status: 'Completed',
    category: 'AWS-Cloud Computing',
    description:
      'A task management web application built with TypeScript, HTML, and JavaScript that allows users to create, organize, and track their tasks easily. The app helps streamline daily to-dos by providing a simple and intuitive interface to add, update, and remove tasks.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'JSON', 'AWS Services'],
    liveDemo: null,
    github: 'https://github.com/A-Harshitha17/task-manager-app',
  },
];

const categories = ['All', 'AWS-Cloud Computing'];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My work</p>
            <h2 className="section-heading gradient-text">Projects</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card hover:border-primary/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card-hover rounded-xl overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Header */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-5xl font-bold gradient-text relative z-10">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </span>
                  <div className="absolute top-4 right-4 flex items-center gap-2 glass-card px-3 py-1 rounded-full text-xs">
                    <CheckCircle2 size={12} className="text-green-500" />
                    {project.status}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <span className="text-xs text-primary font-mono mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
