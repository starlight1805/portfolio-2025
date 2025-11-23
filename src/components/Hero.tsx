import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ProfileImage from '../images/Image2.jpg'; 
import { motion, Variants } from 'framer-motion'; 

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Framer Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  };
  
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15, y: 50 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 14, 
        delay: 0.6 
      } 
    } 
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-40 flex items-center justify-center bg-slate-950 text-white overflow-hidden" 
    >
      {/* Background Effect: Dynamic Gradient Blob */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: ['-10%', '10%', '-10%'], 
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] opacity-70"
        />
        <motion.div 
          animate={{ 
            x: ['10%', '-10%', '10%'], 
            y: ['-10%', '10%', '-10%'],
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] opacity-70"
        />
      </div>
      
      {/* Content Container */}
      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-6xl mx-auto">
          {/* Balanced 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            
            {/* LEFT: Image (centered, no weird gap) */}
            <motion.div 
              className="lg:col-span-5 flex justify-center lg:justify-center order-1 lg:order-none" 
              variants={imageVariants}
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 blur-[60px] opacity-40 animate-pulse" />
                
                {/* Circular frame */}
                <div className="relative w-[280px] h-[280px] rounded-full p-[4px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-500 shadow-2xl shadow-cyan-500/30">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src={ProfileImage}
                      alt="Varkala Vivek Vardhan"
                      className="w-full h-full object-cover rounded-full transition-transform duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] hover:scale-[1.07]"
                    />
                  </div>
                </div>

                {/* Floating accent ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full pointer-events-none border border-cyan-400/20 [mask-image:radial-gradient(circle,transparent_40%,black)]"
                />
              </div>
            </motion.div>

            {/* RIGHT: Text Content & Actions */}
            <div className="lg:col-span-7 text-center lg:text-left lg:pl-8">
              
              <motion.p 
                variants={itemVariants} 
                className="text-lg font-medium text-blue-400 mb-1 tracking-widest uppercase"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1 
                variants={itemVariants} 
                className="text-6xl md:text-8xl font-black mb-3 leading-none"
              >
                <span className="text-white block transition-colors duration-300 hover:text-cyan-400 cursor-default">
                  Varkala Vivek
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 block transition-all duration-300 hover:tracking-widest cursor-default">
                  Vardhan.
                </span> 
              </motion.h1>

              {/* Title/Role */}
              <motion.p 
                variants={itemVariants} 
                className="text-2xl md:text-4xl font-extralight text-gray-400 mt-3 mb-7 tracking-wide transition-transform duration-300 hover:scale-[1.01] hover:text-white cursor-default"
              >
                Cloud & DevOps Engineer
              </motion.p>

              {/* Description */}
              <motion.p 
                variants={itemVariants} 
                className="text-base text-gray-300 mb-10 max-w-xl lg:max-w-2xl border-l-4 border-cyan-500/50 pl-4 italic mx-auto lg:mx-0"
              >
                "Architecting cloud-native infrastructure and automating deployments across Azure and Kubernetes ecosystems. Focused on delivering reliable, scalable, and secure solutions."
              </motion.p>

              {/* Actions & Socials */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
                
                <motion.button
                  variants={itemVariants}
                  onClick={() => scrollToSection('about')}
                  className="inline-flex items-center space-x-3 text-lg font-semibold py-3 px-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 transition-all duration-300 shadow-xl shadow-cyan-500/40 hover:shadow-cyan-500/80 hover:-translate-y-1"
                >
                  <span>Explore Portfolio</span>
                  <ArrowDown size={20} className="animate-bounce" />
                </motion.button>

                <motion.div variants={itemVariants} className="flex space-x-4">
                  <a
                    href="https://github.com/starlight1805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-125 text-white hover:text-cyan-400 border border-white/10"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vivekvarkala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-125 text-white hover:text-cyan-400 border border-white/10"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="mailto:vivekspaes111@gmail.com"
                    className="p-3 bg-white/10 hover:bg-cyan-500/20 rounded-full transition-all duration-300 hover:scale-125 text-white hover:text-cyan-400 border border-white/10"
                  >
                    <Mail size={20} />
                  </a>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
