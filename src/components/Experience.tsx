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
      description:
        'Designed and deployed a cost-optimized, secure Databricks architecture by provisioning shared clusters with Unity Catalog across multiple workspaces. Integrated Azure Key Vault for secret management and implemented Databricks Asset Bundles (DAB) for CI/CD automation.'
    },
    {
      title: 'Real-Time High-Scale Data Migration',
      period: 'Aug 2025 - Ongoing',
      description:
        'Automated scalable Azure infrastructure using Infrastructure as Code (Terraform) to enable ingestion and processing of petabytes of data. Provisioned ADF, Event Hubs, ADLS, and CI/CD agent VMs across 10+ business units.'
    },
    {
      title: 'Scalable Orchestration Service Architecture',
      period: 'May 2025 - Aug 2025',
      description:
        'Developed a high-availability Airflow architecture (API servers, schedulers, executors) with PCS-based auto-failover and remote logging, eliminating single points of failure.'
    },
    {
      title: 'Reliance Foundation Hospital',
      period: 'May 2024 - Aug 2024',
      description:
        'Built a secure Kubernetes infrastructure alongside a Hadoop cluster to support ML-driven healthcare predictions. Developed and maintained image build pipeline with integrated security scanning.'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      provider: 'Microsoft',
      status: 'Completed',
      highlight: 'Core Azure administration & operations'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      provider: 'Microsoft',
      status: 'Completed',
      highlight: 'Cloud fundamentals & Azure foundation'
    },
    {
      name: 'Databricks Platform Administrator',
      provider: 'Databricks',
      status: 'Completed',
      highlight: 'Lakehouse platform governance & operations'
    },
    {
      name: 'Airflow Administrator',
      provider: 'Apache Airflow',
      status: 'Completed',
      highlight: 'Workflow orchestration & scheduling at scale'
    },
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      provider: 'CNCF',
      status: 'Scheduled',
      examDate: 'January 2026',
      highlight:
        'Registered candidate — actively preparing with focus on cluster ops, troubleshooting, networking & security'
    }
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  const projectItemVariants: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <section id="experience" className="py-24 bg-slate-900 text-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-5xl font-extrabold text-center mb-16 font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Professional Experience
        </motion.h2>

        {/* Job Role */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ scale: 1.01, boxShadow: '0 20px 50px rgba(0,255,255,0.15)' }}
          className="mb-16 bg-slate-800 p-10 rounded-2xl shadow-2xl border border-cyan-800/50"
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

        {/* Notable Projects - Modern Alternating Timeline */}
        <div className="mt-20">
          <motion.h3
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-3xl font-bold text-white mb-10 text-center"
          >
            Notable Projects
          </motion.h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500/60 via-slate-600 to-blue-500/60" />

            <div className="space-y-10 md:space-y-12">
              {projectsData.map((project, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={projectItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className={`relative flex md:items-center ${
                      isLeft ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`
                        hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center 
                        w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]
                      `}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    </div>

                    {/* Connector line for mobile */}
                    <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-slate-700" />

                    {/* Card */}
                    <div
                      className={`
                        relative w-full md:w-1/2 
                        ${isLeft ? 'md:pr-10 md:text-right md:mr-4' : 'md:pl-10 md:text-left md:ml-4'}
                      `}
                    >
                      {/* Mobile dot */}
                      <div className="md:hidden absolute left-2 top-3 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-900" />

                      <div className="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-cyan-500/70 transition-all duration-300">
                        <div className="flex flex-col gap-2 md:gap-3">
                          <div
                            className={`flex items-center ${
                              isLeft ? 'md:justify-end' : 'md:justify-start'
                            } justify-between md:space-x-3`}
                          >
                            <h4 className="text-lg md:text-xl font-bold text-white">
                              {project.title}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900/70 border border-cyan-400/50 text-xs text-cyan-200">
                              <Clock size={14} />
                              {project.period}
                            </span>
                          </div>
                          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 rounded-2xl border border-blue-600/40 shadow-2xl shadow-blue-900/40"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-3xl font-bold text-blue-400 mb-3 md:mb-0">
                Certifications & Learning
              </h3>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/40 text-blue-200 text-sm font-medium">
                <Zap size={16} />
                Continuously upskilling in cloud & Kubernetes
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -3, boxShadow: '0 18px 40px rgba(59,130,246,0.35)' }}
                  className="relative overflow-hidden rounded-xl border border-slate-600/70 bg-slate-800/80 p-4 flex flex-col gap-2"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

                  <div className="mt-2 flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-wide text-slate-400">
                        {cert.provider}
                      </p>
                      <h4 className="text-base font-semibold text-slate-50 leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    {/* Status badges */}
                    <div className="flex-shrink-0">
                      {cert.status === 'Completed' && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/60 text-emerald-300 text-[11px] font-semibold">
                          <CheckCircle2 size={12} /> Completed
                        </span>
                      )}

                      {cert.status === 'Scheduled' && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/15 border border-blue-400/60 text-blue-300 text-[11px] font-semibold">
                          <Clock size={12} /> Exam — {cert.examDate}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300/80 mt-1">{cert.highlight}</p>

                  {/* CKA Progress Bar */}
                  {cert.status === 'Scheduled' && (
                    <div className="mt-3">
                      <div className="h-1.5 w-full bg-slate-700/60 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 w-[70%]" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        70% preparation complete — targeting January 2026
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
