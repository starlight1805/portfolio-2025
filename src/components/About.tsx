import { GraduationCap, Briefcase, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const About = () => {
  // Framer Motion Variants for staggered entry
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.15,
        when: "beforeChildren"
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section 
      id="about" 
      className="relative py-24 bg-gray-50 text-slate-900" // Slightly increased padding and fixed light background
    >
      <motion.div 
        className="container mx-auto px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" // Animate when in view
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extrabold text-center mb-16 font-sans tracking-tight 
                       text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700" // Modern gradient title
          >
            About Me
          </motion.h2>

          {/* Education and Experience Cards (Equal Height Grid) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch"> 
            
            {/* Education Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)", y: -5 }} // Stronger hover lift and shadow
              whileTap={{ scale: 0.98 }}
              className="h-full relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 
                         cursor-pointer transition-all duration-300 ease-out"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-indigo-600 mr-4" size={28} /> {/* Accent color */}
                <h3 className="text-2xl font-bold text-slate-900 font-sans">Education</h3>
              </div>
              <p className="text-slate-700 font-semibold mb-1">B.Tech in Electronics and Communication Engineering</p>
              <p className="text-slate-600">National Institute of Technology, Tiruchchirapalli</p>
              <p className="text-slate-500 text-sm mt-2">2019 - 2023 | GPA: 8.6</p>
            </motion.div>

            {/* Current Role Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)", y: -5 }} // Stronger hover lift and shadow
              whileTap={{ scale: 0.98 }}
              className="h-full relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100
                         cursor-pointer transition-all duration-300 ease-out"
            >
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-4" size={28} /> {/* Different accent color */}
                <h3 className="text-2xl font-bold text-slate-900 font-sans">Current Role</h3>
              </div>
              <p className="text-slate-700 font-semibold mb-1">DevOps Engineer</p>
              <p className="text-slate-600">Jio Platforms Ltd, Mumbai</p>
              <p className="text-slate-500 text-sm mt-2">Aug 2023 - Present (2.3 years)</p>
            </motion.div>
          </div>

          {/* Professional Summary */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-50 to-blue-100 p-10 rounded-2xl shadow-xl border border-blue-200"
          >
            <h3 className="text-3xl font-bold text-indigo-800 mb-4 font-sans tracking-tight">Professional Summary</h3>
            <p className="text-slate-700 leading-relaxed mb-4 text-lg">
              DevOps Engineer with <strong className="text-indigo-700">2.3 years of experience</strong> architecting and automating <strong className="text-blue-700">cloud-native, scalable infrastructure</strong> across Azure and on-premises environments. Specialized in Kubernetes, Terraform, and Databricks for delivering high-availability, cost-optimized, and secure deployments.
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              Passionate about building self-service infrastructure, CI/CD automation, and observability frameworks. Currently actively seeking new opportunities to leverage my expertise in cloud automation and DevOps excellence.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            
            {/* Stat 1: Workspaces Managed */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.3)" }} // Hover effect
              whileTap={{ scale: 0.98 }}
              className="text-center p-8 bg-slate-900 text-white rounded-2xl shadow-2xl shadow-blue-500/10 cursor-pointer transition-all duration-300"
            >
              <Award className="text-blue-400 mx-auto mb-4" size={32} />
              <div className="text-5xl font-extrabold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">50+</div>
              <div className="text-slate-300 text-lg">Databricks Workspaces Managed</div>
            </motion.div>
            
            {/* Stat 2: Cost Reduction */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.3)" }} // Hover effect
              whileTap={{ scale: 0.98 }}
              className="text-center p-8 bg-slate-900 text-white rounded-2xl shadow-2xl shadow-blue-500/10 cursor-pointer transition-all duration-300"
            >
              <TrendingUp className="text-indigo-400 mx-auto mb-4" size={32} />
              <div className="text-5xl font-extrabold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">25%</div>
              <div className="text-slate-300 text-lg">Cost Reduction Achieved</div>
            </motion.div>
            
            {/* Stat 3: Uptime */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(37, 99, 235, 0.3)" }} // Hover effect
              whileTap={{ scale: 0.98 }}
              className="text-center p-8 bg-slate-900 text-white rounded-2xl shadow-2xl shadow-blue-500/10 cursor-pointer transition-all duration-300"
            >
              <Lightbulb className="text-blue-400 mx-auto mb-4" size={32} />
              <div className="text-5xl font-extrabold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">99.99%</div>
              <div className="text-slate-300 text-lg">Uptime Maintained</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;