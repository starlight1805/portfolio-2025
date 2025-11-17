import { Cloud, Zap, Eye, Database, Lock, Terminal, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-cyan-400', // Neon accent
      skills: ['Azure', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Helm']
    },
    {
      category: 'CI/CD & Automation',
      icon: Zap,
      color: 'text-blue-400', // Neon accent
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section 
        id="skills" 
        className="py-24 bg-slate-900 text-gray-200 relative overflow-hidden" // Deep dark background
    >
      
      {/* Subtle background glow/noise for atmosphere */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900 rounded-full filter blur-3xl mix-blend-screen opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900 rounded-full filter blur-3xl mix-blend-screen opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extrabold text-center mb-6 font-sans tracking-tight 
                       bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500" // Neon gradient title
          >
            My Technical Arsenal
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-400 text-center mb-16 max-w-2xl mx-auto font-light"
          >
            Comprehensive expertise across cloud infrastructure, DevOps tooling, and modern development practices, specialized in driving **efficiency and scale**.
          </motion.p>

          {/* Skill Categories Grid (Dynamic/Masonry Look) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 15px 30px rgba(0, 255, 255, 0.1)", // Light glow shadow
                      y: -5 
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-slate-800 p-8 rounded-2xl shadow-xl transition-all duration-300 ease-out 
                             border border-slate-700/70" // Dark card with subtle border
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
                                   border border-cyan-700/50 transition-all duration-200 cursor-default hover:bg-cyan-600 hover:text-white" // Neon skill chip
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Experience Stats Section (Vibrant Dark Footer) */}
          <div className="mt-20 grid md:grid-cols-3 gap-6">
            <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white text-center shadow-2xl shadow-cyan-900/50"
            >
              <CheckCircle className="text-cyan-400 mx-auto mb-3" size={32} />
              <div className="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">2.3+</div>
              <div className="text-slate-300 text-lg">Years of Experience</div>
            </motion.div>
            
            <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white text-center shadow-2xl shadow-cyan-900/50"
            >
              <CheckCircle className="text-cyan-400 mx-auto mb-3" size={32} />
              <div className="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">10+</div>
              <div className="text-slate-300 text-lg">Business Units Served</div>
            </motion.div>
            
            <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white text-center shadow-2xl shadow-cyan-900/50"
            >
              <CheckCircle className="text-cyan-400 mx-auto mb-3" size={32} />
              <div className="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">4</div>
              <div className="text-slate-300 text-lg">Professional Certifications</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;