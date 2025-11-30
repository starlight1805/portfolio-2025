import { GraduationCap, Briefcase, CheckCircle, Award, Building2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const About = () => {
  // Animation for each item (fast + smooth)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const stats = [
    {
      icon: Briefcase,
      value: "2.3+",
      label: "Years in DevOps & Cloud",
    },
    {
      icon: Building2,
      value: "10+",
      label: "Business Units Onboarded",
    },
    {
      icon: Award,
      value: "4",
      label: "Professional Certifications",
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 bg-gray-50 text-slate-900"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Title + subtitle pill */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="text-5xl font-extrabold font-sans tracking-tight 
                       text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-700 mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/70 border border-indigo-200 text-indigo-700 text-sm font-medium"
          >
            <CheckCircle size={16} />
            <span>DevOps & Cloud Engineer · Azure · Kubernetes · Databricks</span>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)", y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="text-indigo-600 mr-4" size={28} />
              <h3 className="text-2xl font-bold font-sans">Education</h3>
            </div>
            <p className="text-slate-700 font-semibold mb-1">
              B.Tech in Electronics and Communication Engineering
            </p>
            <p className="text-slate-600">
              National Institute of Technology, Tiruchchirapalli
            </p>
            <p className="text-slate-500 text-sm mt-2">
              2019 - 2023 · GPA: 8.6
            </p>
          </motion.div>

          {/* Current Role Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(79, 70, 229, 0.15)", y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="text-blue-600 mr-4" size={28} />
              <h3 className="text-2xl font-bold font-sans">Current Role</h3>
            </div>
            <p className="text-slate-700 font-semibold mb-1">DevOps Engineer</p>
            <p className="text-slate-600">Jio Platforms Ltd, Mumbai</p>
            <p className="text-slate-500 text-sm mt-2">
              Aug 2023 - Present · 4 years
            </p>
          </motion.div>

        </div>

        {/* Professional Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-gradient-to-br from-indigo-50 to-blue-100 p-10 rounded-2xl shadow-xl border border-blue-200"
        >
          <h3 className="text-3xl font-bold text-indigo-800 mb-4 font-sans tracking-tight">
            Professional Summary
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3 text-lg">
            DevOps Engineer with <strong className="text-indigo-700">2.4+ years of hands-on experience</strong>{' '}
            designing, automating, and operating{' '}
            <strong className="text-blue-700">cloud-native, scalable platforms</strong> across Azure and
            on-premise environments. Specialized in Kubernetes, Terraform, and Databricks to deliver
            highly available, cost-optimized, and secure infrastructure.
          </p>
          <p className="text-slate-700 leading-relaxed text-lg mb-5">
            I focus on building self-service infrastructure, mature CI/CD practices, and strong
            observability so engineering teams can ship faster with confidence. Currently exploring
            opportunities where I can contribute to large-scale, data-intensive systems and platform
            engineering.
          </p>

          {/* Focus bullets */}
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            {[
              "Cloud-native architectures & Kubernetes",
              "CI/CD, release automation & DevOps tooling",
              "Observability, reliability & cost optimization",
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-sm text-slate-700"
              >
                <CheckCircle className="text-indigo-600 mt-1 flex-shrink-0" size={16} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ scale: 1.03, translateY: -4 }}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl text-white text-center shadow-2xl shadow-cyan-900/50"
              >
                <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                <div className="text-4xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
