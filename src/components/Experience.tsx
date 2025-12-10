import { CheckCircle2, Clock, Zap, Target, Briefcase, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

const Experience = () => {
  const responsibilities = [
    "Designing and operating cloud & on-prem infrastructure across Azure, Kubernetes and Hadoop.",
    "Owning Kubernetes clusters for application and ML workloads with high availability SLAs.",
    "Embedding observability with Prometheus, Grafana, Checkmk and structured alerting.",
  ];

  const achievements = [
    "Cut Databricks compute cost by ~25% with cluster policies and job optimisations.",
    "Improved deployment throughput using CI/CD pipelines, approvals and quality gates.",
    "Built KEDA-based autoscaling using Kafka metrics to reduce idle compute.",
  ];

  const projectsData = [
    {
      title: "Real-Time Data Migration & Azure Platform",
      period: "Aug 2025 – Ongoing",
      focus: ["Azure", "Terraform", "Streaming"],
      summary:
        "Automating a shared Azure data platform for multiple business units with reusable Terraform modules and real-time ingestion.",
      route: "/azure-migration",
    },
    {
      title: "Databricks Deployment & Governance (DAB)",
      period: "Jul 2025 – Ongoing",
      focus: ["Databricks", "CI/CD", "Governance"],
      summary:
        "Standardised Databricks deployments across environments using DAB, with secure secrets and opinionated cluster templates.",
      route: "/databricks-dab",
    },
    {
      title: "Airflow HA Orchestration Service",
      period: "May 2025 – Jul 2025",
      focus: ["Airflow", "PCS", "HA"],
      summary:
        "Designed a no-SPOF Airflow control plane with PCS, HAProxy and edge executors for remote execution nodes.",
      route: "/airflow-ha",
    },
    {
      title: "Kubernetes Platform for ML Inference",
      period: "May 2024 – Aug 2024",
      focus: ["Kubernetes", "Istio", "MLOps"],
      summary:
        "Hardened K8s platform with mesh, Seldon Core and secure image build pipeline for production model serving.",
      route: "/k8s-ml-platform",
    },
    {
      title: "KEDA Kafka-Driven Autoscaling",
      period: "Side Project",
      focus: ["KEDA", "Kafka", "Jupyter"],
      summary:
        "Personal project implementing Kafka-lag-based autoscaling of Jupyter workloads with a single automation script.",
      route: "/keda-architecture",
    },
  ];

  const certifications = [
    {
      name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
      provider: "Microsoft",
      status: "Completed",
      highlight: "Core Azure administration & operations",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      provider: "Microsoft",
      status: "Completed",
      highlight: "Cloud fundamentals & Azure foundation",
    },
    {
      name: "Databricks Platform Administrator",
      provider: "Databricks",
      status: "Completed",
      highlight: "Lakehouse platform governance & operations",
    },
    {
      name: "Airflow Administrator",
      provider: "Apache Airflow",
      status: "Completed",
      highlight: "Workflow orchestration & scheduling at scale",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      provider: "CNCF",
      status: "Scheduled",
      examDate: "January 2026",
      highlight:
        "Registered candidate — focusing on cluster ops, troubleshooting, networking & security.",
    },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
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
          className="text-5xl font-extrabold text-center mb-10 font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Professional Experience
        </motion.h2>

        {/* Current role – compact */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-16 bg-slate-800/90 p-8 rounded-2xl shadow-2xl border border-slate-700/80"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-700/60 pb-4 mb-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">DevOps Engineer</h3>
              <p className="text-base md:text-lg text-gray-400">Jio Platforms Ltd · Mumbai</p>
            </div>
            <span className="inline-flex items-center gap-2 text-cyan-300 font-semibold text-sm md:text-base bg-slate-900/70 px-3 py-2 rounded-full border border-cyan-500/50">
              <Briefcase size={18} />
              Aug 2023 – Present
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                <Target size={20} className="mr-2" /> Focus Areas
              </h4>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-200">
                    <CheckCircle2 className="text-cyan-400 mr-3 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center">
                <Zap size={20} className="mr-2" /> Impact Highlights
              </h4>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-200">
                    <CheckCircle2 className="text-blue-400 mr-3 flex-shrink-0 mt-0.5" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Key Projects – simple grid with case-study buttons */}
        <div className="mt-10">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col items-center gap-2 text-center mb-10"
          >
            <h3 className="text-3xl font-bold text-white">Key Platforms & Projects</h3>
            <p className="max-w-2xl text-sm md:text-base text-slate-300">
              A quick overview of the things I&apos;ve actually built. Click into a project
              if you want the deeper architecture view.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: "0 22px 60px rgba(15,23,42,0.85)",
                }}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-slate-900/90 p-6 shadow-xl transition-all"
              >
                {/* top accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500" />

                <div className="relative space-y-3 mb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-50">
                        {project.title}
                      </h4>
                      <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-slate-300">
                        {project.focus.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-800/80 border border-slate-600/80 px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 border border-slate-600/80 px-3 py-1 text-[11px] text-slate-200 whitespace-nowrap">
                      <Clock size={12} />
                      {project.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="relative flex justify-end">
                  <Link
                    to={project.route}
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md hover:bg-cyan-400 transition-colors"
                  >
                    View case study
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
              <h3 className="text-3xl font-bold text-blue-400 mb-1 md:mb-0">
                Certifications & Learning
              </h3>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/40 text-blue-200 text-sm font-medium">
                <Zap size={16} />
                Keeping skills sharp for cloud & Kubernetes
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
                    boxShadow: "0 18px 40px rgba(59,130,246,0.35)",
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

                    <div className="flex-shrink-0">
                      {cert.status === "Completed" && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/60 text-emerald-300 text-[11px] font-semibold">
                          <CheckCircle2 size={12} /> Completed
                        </span>
                      )}

                      {cert.status === "Scheduled" && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-500/15 border border-blue-400/60 text-blue-300 text-[11px] font-semibold">
                          <Clock size={12} /> Exam — {cert.examDate}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300/80 mt-1">{cert.highlight}</p>

                  {cert.status === "Scheduled" && (
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
