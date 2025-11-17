import { CheckCircle2, Clock, Zap, Target, Briefcase } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Experience = () => {
  const responsibilities = [
    'Orchestrating the full-cycle development and deployment of intricate systems within Azure and Hadoop ecosystems',
    'Managed and optimized multiple Kubernetes clusters hosting diverse application and ML workloads, achieving 99.99% uptime',
    'Integrated JFrog, SonarQube in CI/CD pipelines to enforce artifact governance, code quality, and security compliance',
    'Configured and maintained Prometheus, Grafana, and Checkmk for real-time monitoring and telemetry visualization'
  ];

  const achievements = [
    'Reduced Databricks compute cost by 25% by enforcing cluster policies and optimizing job scheduling',
    'Executed and scaled CI/CD pipelines achieving a 60% boost in deployment efficiency',
    'Reduced idle compute by 30% through autoscaling with KEDA and Kafka metrics',
    'Scaled secret management throughput beyond 20K RPS with high-availability HashiCorp Vault infrastructure'
  ];

  const projectsData = [
    {
      title: 'Jio New Energy Platform',
      period: 'Jan 2025 - Ongoing',
      description: 'Designed and deployed a cost-optimized, secure Databricks architecture by provisioning shared clusters with Unity Catalog across multiple workspaces. Integrated Azure Key Vault for secret management and implemented Databricks Asset Bundles (DAB) for CI/CD automation.'
    },
    {
      title: 'Real-Time High-Scale Data Migration',
      period: 'Aug 2025 - Ongoing',
      description: 'Automated scalable Azure infrastructure using Infrastructure as Code (Terraform) to enable ingestion and processing of petabytes of data. Provisioned ADF, Event Hubs, ADLS, and CI/CD agent VMs across 10+ business units.'
    },
    {
      title: 'Scalable Orchestration Service Architecture',
      period: 'May 2025 - Aug 2025',
      description: 'Developed a high-availability Airflow architecture (API servers, schedulers, executors) with PCS-based auto-failover and remote logging, eliminating single points of failure.'
    },
    {
      title: 'Reliance Foundation Hospital',
      period: 'May 2024 - Aug 2024',
      description: 'Built a secure Kubernetes infrastructure alongside a Hadoop cluster to support ML-driven healthcare predictions. Developed and maintained image build pipeline with integrated security scanning.'
    }
  ];

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
  };
  
  const projectItemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "tween", duration: 0.5 } },
  };


  return (
    <section 
        id="experience" 
        className="py-24 bg-slate-900 text-gray-200 overflow-hidden" // Dark background
    >
      <motion.div 
        className="container mx-auto px-6 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate on scroll
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Header */}
        <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extrabold text-center mb-16 font-sans tracking-tight 
                       bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" // Accent colors
        >
            Professional Experience
        </motion.h2>

        {/* 1. Job Role Card (Elevated Focus) */}
        <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.01, boxShadow: "0 20px 50px rgba(0, 255, 255, 0.15)" }}
            className="mb-16 bg-slate-800 p-10 rounded-2xl shadow-2xl border border-cyan-800/50" // Dark, accented card
        >
          <div className="flex justify-between items-start mb-8 border-b border-slate-700/50 pb-4">
            <div>
              <h3 className="text-3xl font-bold text-white">DevOps Engineer</h3>
              <p className="text-xl text-gray-400">Jio Platforms Ltd, Mumbai</p>
            </div>
            <span className="text-blue-400 font-semibold text-lg flex items-center">
              <Briefcase size={20} className="mr-2" />
              Aug 2023 - Present
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Key Responsibilities */}
            <div>
              <h4 className="text-xl font-semibold text-cyan-400 mb-5 flex items-center">
                <Target size={24} className="mr-3" /> Key Responsibilities
              </h4>
              <ul className="space-y-4">
                {responsibilities.map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-start">
                    <CheckCircle2 className="text-cyan-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-5 flex items-center">
                <Zap size={24} className="mr-3" /> Key Achievements
              </h4>
              <ul className="space-y-4">
                {achievements.map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-start">
                    <CheckCircle2 className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 font-light">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 2. Notable Projects (Timeline Style) */}
        <div>
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-10 text-center border-b border-slate-700/50 pb-4"
          >
            Notable Projects
          </motion.h3>
          
          <div className="relative border-l-4 border-cyan-500/50 space-y-12 ml-4 md:ml-12">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={projectItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ backgroundColor: "#1e293b", scale: 1.01 }} // Subtle background highlight on hover
                className="relative pl-8 md:pl-12 py-2 group cursor-pointer"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full 
                                border-4 border-slate-900 group-hover:bg-blue-400 transition-colors duration-300"></div>

                <div
                  className="bg-slate-800/70 p-6 rounded-xl shadow-xl border border-slate-700/50"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                    <h4 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                    <span className="text-sm text-gray-400 font-medium whitespace-nowrap md:mt-0 mt-1 flex items-center">
                        <Clock size={16} className="mr-1" />
                        {project.period}
                    </span>
                  </div>
                  <p className="text-gray-300 font-light">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Certifications */}
        <div className="mt-20">
            <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-10 rounded-2xl border border-blue-600/50 shadow-2xl shadow-blue-900/40"
            >
                <h3 className="text-3xl font-bold text-blue-400 mb-6 border-b border-slate-600 pb-3">Certifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Cert 1 */}
                    <motion.div 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.02, backgroundColor: "#4a556820" }} // Subtle hover on light card
                        className="flex items-center p-3 rounded-lg border border-slate-600 transition-colors"
                    >
                        <CheckCircle2 className="mr-4 text-cyan-400 flex-shrink-0" size={24} />
                        <span className="text-gray-200">Microsoft Certified: Azure Administrator Associate (AZ-104)</span>
                    </motion.div>
                    
                    {/* Cert 2 */}
                    <motion.div 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.02, backgroundColor: "#4a556820" }}
                        className="flex items-center p-3 rounded-lg border border-slate-600 transition-colors"
                    >
                        <CheckCircle2 className="mr-4 text-cyan-400 flex-shrink-0" size={24} />
                        <span className="text-gray-200">Microsoft Certified: Azure Fundamentals (AZ-900)</span>
                    </motion.div>
                    
                    {/* Cert 3 */}
                    <motion.div 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.02, backgroundColor: "#4a556820" }}
                        className="flex items-center p-3 rounded-lg border border-slate-600 transition-colors"
                    >
                        <CheckCircle2 className="mr-4 text-cyan-400 flex-shrink-0" size={24} />
                        <span className="text-gray-200">Databricks Platform Administrator</span>
                    </motion.div>
                    
                    {/* Cert 4 */}
                    <motion.div 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.02, backgroundColor: "#4a556820" }}
                        className="flex items-center p-3 rounded-lg border border-slate-600 transition-colors"
                    >
                        <CheckCircle2 className="mr-4 text-cyan-400 flex-shrink-0" size={24} />
                        <span className="text-gray-200">Airflow Administrator</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;