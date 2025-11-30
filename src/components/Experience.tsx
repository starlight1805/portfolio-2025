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
      title: 'Real-Time Data Migration & Azure Infrastructure Automation',
      period: 'Aug 2025 - Ongoing',
      focus: 'Azure • Terraform • Streaming',
      description:
        'Architected and automated a highly scalable Azure data platform to support real-time, petabyte-scale data migration across 10+ business units. Built modular, reusable, and fully parameterized Terraform modules to provision Azure Event Hubs, ADF pipelines, ADLS Gen2, and self-hosted CI/CD agent pools with strict compliance and DR patterns. Standardized IaC workflows to enable consistent, repeatable environments and seamless multi-team onboarding.'
    },
    {
      title: 'Databricks Deployment & Governance Automation (DAB)',
      period: 'Jul 2025 - Ongoing',
      focus: 'Databricks • CI/CD • Governance',
      description:
        'Architected a DAB-based CI/CD framework for Databricks, standardizing deployments across 10+ BUs and 3 environments. Delivered reusable templates, automated job/workflow promotions, and workspace-level configuration governance. Integrated Azure Key Vault for secure secret management and optimized cluster configurations for better cost and performance.'
    },
    {
      title: 'Scalable Orchestration Service Architecture',
      period: 'May 2025 - July 2025',
      focus: 'Airflow • HA • Orchestration',
      description:
        'Developed a high-availability Airflow architecture (API servers, schedulers, executors) with PCS-based auto-failover and remote logging, eliminating single points of failure.'
    },
    {
      title: 'Kubernetes for ML Workloads',
      period: 'May 2024 - Aug 2024',
      focus: 'Kubernetes • Istio • MLOps',
      description:
        'Designed and deployed a secure, scalable Kubernetes platform to run high-performance ML inference workloads. Integrated Istio service mesh for traffic control, observability, and performance bottleneck analysis. Operationalized model inference using Seldon Core, enabling reliable and reproducible deployments. Built and maintained a hardened image-build pipeline with automated security scanning, dependency checks, and vulnerability reporting to ensure production-grade compliance.'
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

        {/* Notable Projects – upgraded, more "wow" */}
        <div className="mt-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col items-center gap-3 text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white">Notable Projects</h3>
            <p className="max-w-2xl text-sm md:text-base text-slate-300">
              A curated snapshot of the platforms, pipelines, and Kubernetes/Databricks
              foundations I’ve helped build and scale.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center spine */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-500/80 via-slate-600 to-blue-500/80" />

            <div className="space-y-12 md:space-y-14">
              {projectsData.map((project, index) => {
                const isLeft = index % 2 === 0;
                const projectNumber = String(index + 1).padStart(2, '0');
                const focusTags = project.focus
                  ? project.focus.split('•').map(tag => tag.trim())
                  : [];

                return (
                  <motion.div
                    key={index}
                    variants={projectItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className={`relative flex md:items-stretch ${
                      isLeft ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Timeline node */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)]">
                      <span className="text-xs font-semibold text-cyan-200">
                        {projectNumber}
                      </span>
                    </div>

                    {/* Mobile vertical line & node */}
                    <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-slate-700" />
                    <div className="md:hidden absolute left-3 top-3 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 border border-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]">
                      <span className="text-[10px] font-semibold text-cyan-200">
                        {projectNumber}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={`
                        relative w-full md:w-1/2 
                        ${isLeft ? 'md:pr-10 md:text-right md:mr-4' : 'md:pl-10 md:text-left md:ml-4'}
                      `}
                    >
                      <div className="group relative bg-slate-900/85 border border-slate-700/70 rounded-2xl p-6 md:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-[0_20px_50px_rgba(34,211,238,0.35)]">
                        {/* Top gradient bar */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-80" />

                        {/* Subtle gradient glow */}
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative flex flex-col gap-3">
                          <div
                            className={`flex items-start justify-between gap-3 ${
                              isLeft ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <div>
                              <h4 className="text-lg md:text-xl font-bold text-white">
                                {project.title}
                              </h4>
                              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                                {project.focus}
                              </p>
                            </div>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/80 border border-cyan-400/60 text-[11px] text-cyan-200 whitespace-nowrap">
                              <Clock size={13} />
                              {project.period}
                            </span>
                          </div>

                          {/* Focus tags as chips */}
                          {focusTags.length > 0 && (
                            <div
                              className={`flex flex-wrap gap-2 text-[11px] ${
                                isLeft ? 'md:justify-end' : 'md:justify-start'
                              }`}
                            >
                              {focusTags.map(tag => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-slate-800/80 border border-slate-600/70 px-2.5 py-1 text-slate-200"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <p className="text-sm md:text-[15px] text-slate-200 leading-relaxed">
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
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: '0 18px 40px rgba(59,130,246,0.35)'
                  }}
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
