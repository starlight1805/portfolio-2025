import { Cloud, Zap, Eye, Database, Lock, Terminal, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-cyan-400',
      skills: ['Azure', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Helm']
    },
    {
      category: 'CI/CD & Automation',
      icon: Zap,
      color: 'text-blue-400',
      skills: ['Azure DevOps', 'GitOps', 'Airflow', 'JFrog Artifactory', 'SonarQube', 'Blackduck']
    },
    {
      category: 'Monitoring & Observability',
      icon: Eye,
      color: 'text-green-400',
      skills: ['Prometheus', 'Grafana', 'Checkmk', 'ELK Stack', 'Loki']
    },
    {
      category: 'Security & Governance',
      icon: Lock,
      color: 'text-red-400',
      skills: ['HashiCorp Vault', 'Azure Key Vault', 'RBAC', 'Policy Enforcement', 'Security Scanning']
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'text-indigo-400',
      skills: ['Databricks', 'Hadoop Ecosystem', 'Superset', 'Event Hubs', 'ADLS']
    },
    {
      category: 'Programming & Scripting',
      icon: Terminal,
      color: 'text-yellow-400',
      skills: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON', 'HCL']
    }
  ];

  // Smooth animation for each element
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-slate-900 text-gray-200 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900 rounded-full filter blur-3xl mix-blend-screen opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900 rounded-full filter blur-3xl mix-blend-screen opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* container stays visible instantly (no fade blocking section) */}
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Header */}
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-5xl font-extrabold text-center mb-6 font-sans tracking-tight 
                     bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          My Technical Arsenal
        </motion.h2>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-lg text-slate-400 text-center mb-16 max-w-2xl mx-auto font-light"
        >
          Comprehensive expertise across cloud infrastructure, DevOps tooling, and modern development practices — specialized in driving <strong className="text-cyan-400">efficiency and scale</strong>.
        </motion.p>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(0,255,255,.10)",
                  y: -4
                }}
                transition={{ duration: 0.25 }}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl transition-all duration-300 border border-slate-700/70"
              >
                <div className="flex items-center mb-5 border-b border-slate-700 pb-3">
                  <Icon className={`${category.color} mr-3 flex-shrink-0`} size={28} />
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: '#ffffff' }}
                      className="px-4 py-2 bg-slate-700 text-cyan-400 text-sm font-semibold rounded-lg 
                                 border border-cyan-700/50 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              value: "50+",
              label: "Databricks Workspaces Managed",
              iconColor: "text-cyan-400",
            },
            {
              icon: TrendingUp,
              value: "25%",
              label: "Cost Reduction Achieved",
              iconColor: "text-indigo-400",
            },
            {
              icon: Lightbulb,
              value: "99.99%",
              label: "Uptime Maintained",
              iconColor: "text-blue-400",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white text-center shadow-2xl shadow-cyan-900/50"
              >
                <Icon className={`${stat.iconColor} mx-auto mb-3`} size={32} />
                <div className="text-5xl font-extrabold mb-1 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-lg">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default Skills;
