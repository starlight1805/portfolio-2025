import { ExternalLink, Github, Code2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

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
    Python: 'bg-green-500',
    JavaScript: 'bg-yellow-500',
    Java: 'bg-red-500'
  };

  // Lighter animation for smoother scrolling
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 bg-white text-slate-900">
      {/* container stays visible instantly (no fade delay) */}
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-5xl font-extrabold text-center mb-6 font-sans tracking-tight 
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-800"
        >
          My Projects
        </motion.h2>
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto font-light"
        >
          A collection of my work spanning DevOps automation, web development, and software engineering.
        </motion.p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {githubProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(59,130,246,.15)",
                y: -4
              }}
              transition={{ duration: 0.2 }}
              className="relative bg-slate-50 rounded-2xl p-8 shadow-md transition-all duration-300 
                         border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Code2 className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-xl font-bold text-slate-900 font-sans">{project.name}</h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
                    title="View on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="text-slate-700 mb-5 leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center mb-4">
                  <span className={`w-3 h-3 rounded-full ${languageColors[project.language]} mr-2`}></span>
                  <span className="text-sm text-slate-600 font-medium font-mono">{project.language}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-slate-700 text-xs font-medium rounded-full border border-blue-300/50 shadow-sm hover:bg-blue-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <motion.a
            href="https://github.com/starlight1805"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 
                       text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl 
                       transform hover:scale-[1.02] transition-all duration-300"
          >
            <Github size={22} />
            <span>View More on GitHub</span>
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
