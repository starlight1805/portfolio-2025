import { ExternalLink, Github, Code2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const githubProjects = [
    {
      name: "KEDAproject",
      description:
        "Autoscaling Kubernetes workloads using event-driven triggers with KEDA.",
      language: "Python",
      url: "https://github.com/starlight1805/KEDAproject",
      technologies: ["Kubernetes", "KEDA", "Python", "Autoscaling"],
      hasArchitecturePage: true,
      archPage: "/keda-architecture",
    },
    {
      name: "Starlight-Handles",
      description:
        "Full-stack web application built with modern JavaScript frameworks.",
      language: "JavaScript",
      url: "https://github.com/starlight1805/Starlight-Handles",
      technologies: ["React", "Node.js", "REST APIs"],
    },
    {
      name: "Airflow PCS HA Architecture",
      description:
        "On-premises Apache Airflow HA setup using PCS, VIP, schedulers, and edge executors.",
      language: "Linux",
      url: "/airflow-ha",
      technologies: [
        "Apache Airflow",
        "PCS",
        "HAProxy",
        "Linux",
        "On-Prem Infrastructure",
      ],
      hasArchitecturePage: true,
      archPage: "/airflow-ha",
    },
    {
      name: "Dots and Boxes",
      description: "Classic strategy game with AI opponent.",
      language: "Java",
      url: "https://github.com/starlight1805/dotsandboxes",
      technologies: ["Java", "Game Development"],
    },
  ];

  const languageColors: { [key: string]: string } = {
    Python: "bg-green-500",
    JavaScript: "bg-yellow-500",
    Java: "bg-red-500",
    Linux: "bg-blue-500",
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-6 bg-clip-text 
                     text-transparent bg-gradient-to-r from-blue-700 to-indigo-800"
        >
          My Projects
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto"
        >
          A collection of my work in DevOps, automation, and platform engineering.
        </motion.p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {githubProjects.map((project, index) => {
            const isGithub = project.url.includes("github");

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.25 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-md
                           flex flex-col justify-between"
              >
                <div>
                  {/* Title + GitHub Link */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Code2 className="text-blue-600 mr-2" size={22} />
                      <h3 className="text-xl font-bold">{project.name}</h3>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-200 rounded-lg hover:bg-slate-300 transition"
                    >
                      {isGithub ? <Github size={18} /> : <ExternalLink size={18} />}
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 mb-4">{project.description}</p>

                  {/* Architecture Button */}
                  {project.hasArchitecturePage && (
                    <Link
                      to={project.archPage}
                      className="inline-flex items-center justify-center gap-2 w-full mt-2 
                                 px-4 py-2 rounded-xl bg-gradient-to-r 
                                 from-blue-600 to-indigo-700 text-white font-semibold 
                                 hover:scale-[1.02] shadow-md hover:shadow-lg transition-all"
                    >
                      <Code2 size={16} />
                      View Architecture
                    </Link>
                  )}
                </div>

                {/* Language + Tech Stack */}
                <div className="mt-6">
                  <div className="flex items-center mb-3">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        languageColors[project.language] || "bg-slate-400"
                      } mr-2`}
                    ></span>
                    <span className="text-sm text-slate-600 font-mono">
                      {project.language}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-slate-200 
                                   text-xs rounded-full shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer → GitHub CTA */}
        <div className="mt-20 text-center">
          <motion.a
            href="https://github.com/starlight1805"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r 
                       from-slate-800 to-black rounded-full text-white text-lg 
                       shadow-xl hover:scale-[1.03] transition-all"
          >
            <Github size={22} />
            View More on GitHub
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
