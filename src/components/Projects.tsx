import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const githubProjects = [
    {
      name: 'KEDAproject',
      description: 'Kubernetes Event-driven Autoscaling implementation for optimizing resource utilization in cloud-native applications',
      language: 'Python',
      url: 'https://github.com/starlight1805/KEDAproject',
      technologies: ['Kubernetes', 'KEDA', 'Python', 'Event-driven Architecture']
    },
    {
      name: 'Starlight-Handles',
      description: 'Full-stack web application with modern JavaScript frameworks and responsive design',
      language: 'JavaScript',
      url: 'https://github.com/starlight1805/Starlight-Handles',
      technologies: ['JavaScript', 'React', 'Node.js', 'Web Development']
    },
    {
      name: 'Pokedex',
      description: 'Interactive Pokemon database application with search and filter capabilities',
      language: 'Java',
      url: 'https://github.com/starlight1805/Pokedex',
      technologies: ['Java', 'API Integration', 'GUI Development']
    },
    {
      name: 'Dots and Boxes',
      description: 'Classic strategy game implementation with AI opponent and multiplayer support',
      language: 'Java',
      url: 'https://github.com/starlight1805/dotsandboxes',
      technologies: ['Java', 'Game Development', 'Algorithms']
    }
  ];

  const languageColors: { [key: string]: string } = {
    Python: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    Java: 'bg-red-500'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Projects</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            A collection of my work spanning DevOps automation, web development, and software engineering
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {githubProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Code2 className="text-slate-700 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center mb-4">
                  <span className={`w-3 h-3 rounded-full ${languageColors[project.language]} mr-2`}></span>
                  <span className="text-sm text-slate-600 font-medium">{project.language}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-full border border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/starlight1805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
