import { Mail, Phone, Linkedin, Github, MapPin, Briefcase, ChevronRight, LucideIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// --- TYPE DEFINITIONS FOR LinkCard ---

// Base props for all cards
interface BaseLinkCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
}

// Props for a STATIC card (href is optional/omitted)
interface StaticLinkCardProps extends BaseLinkCardProps {
    isStatic: true;
    href?: string; // Explicitly allow it to be omitted or undefined
}

// Props for a CLICKABLE card (href is required)
interface ClickableLinkCardProps extends BaseLinkCardProps {
    isStatic?: false; // Optional, or explicitly false
    href: string; // Required for clickable links
}

// Discriminated Union Type
type LinkCardProps = StaticLinkCardProps | ClickableLinkCardProps;


const LinkCard = (props: LinkCardProps) => {
    const { icon: Icon, label, value, href, isStatic = false } = props;

    const content = (
        <motion.div
            className={`flex items-center space-x-4 p-5 rounded-xl transition-all duration-300 ${
                isStatic 
                ? 'bg-slate-800 border border-slate-700' 
                : 'bg-slate-800/70 border border-cyan-800/30 hover:bg-cyan-900/40 hover:border-cyan-700 cursor-pointer'
            } group`}
            whileHover={!isStatic ? { scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" } : {}} // Neon Glow on hover
            whileTap={!isStatic ? { scale: 0.98 } : {}}
        >
            <Icon className={`flex-shrink-0 ${isStatic ? 'text-slate-500' : 'text-cyan-400 group-hover:text-white'} transition-colors`} size={28} />
            <div className='flex justify-between items-center w-full'>
                <div>
                    <div className="text-sm text-slate-400">{label}</div>
                    <div className="font-medium text-white break-words">{value}</div>
                </div>
                {!isStatic && <ChevronRight className="text-cyan-400 group-hover:text-white transition-opacity opacity-0 group-hover:opacity-100" size={20} />}
            </div>
        </motion.div>
    );

    // TypeScript now knows that if isStatic is false (or undefined), href exists and can be used here.
    return href && !isStatic ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        content
    );
};


// --- REST OF THE COMPONENT (UNCHANGED LOGIC, CORRECTED USAGE) ---

const Contact = () => {
  
  // Framer Motion Variants (omitted for brevity, assume they are still defined)
  const containerVariants: Variants = { /* ... */ };
  const itemVariants: Variants = { /* ... */ };


  return (
    <section 
        id="contact" 
        className="py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white relative"
    >
        <motion.div 
            className="container mx-auto px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-4xl mx-auto">
                
                {/* Header */}
                <motion.h2 
                    variants={itemVariants}
                    className="text-5xl font-extrabold mb-4 text-center tracking-tight
                               bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Get In Touch
                </motion.h2>
                <motion.p 
                    variants={itemVariants}
                    className="text-lg text-slate-400 text-center mb-16 max-w-2xl mx-auto font-light"
                >
                    I'm actively seeking new challenges and exciting DevOps/Cloud opportunities. Let's connect and build something great.
                </motion.p>

                {/* Main Contact Container (Glassy/Elevated) */}
                <motion.div 
                    variants={itemVariants}
                    className="bg-slate-800/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl shadow-cyan-900/30 border border-slate-700/50"
                >
                    <div className="grid md:grid-cols-2 gap-10">
                        
                        {/* Column 1: Direct Contact */}
                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-white border-b border-cyan-500/50 pb-3">Contact Details</h3>

                            <div className="space-y-6">
                                {/* Clickable Email (href MUST be present) */}
                                <LinkCard 
                                    icon={Mail} 
                                    label="Email Address" 
                                    value="vivekspaes111@gmail.com" 
                                    href="mailto:vivekspaes111@gmail.com" 
                                />
                                {/* Clickable Phone (href MUST be present) */}
                                <LinkCard 
                                    icon={Phone} 
                                    label="Mobile Number" 
                                    value="+91 7396666774" 
                                    href="tel:+917396666774" 
                                />
                                
                                {/* Static Location (isStatic: true, href NOT present) */}
                                <LinkCard 
                                    icon={MapPin} 
                                    label="Location" 
                                    value="Mumbai, India" 
                                    isStatic={true} 
                                />
                                {/* Static Status (isStatic: true, href NOT present) */}
                                <LinkCard 
                                    icon={Briefcase} 
                                    label="Status" 
                                    value="Open to Opportunities" 
                                    isStatic={true} 
                                />
                            </div>
                        </div>

                        {/* Column 2: Social & Opportunities */}
                        <div>
                            <h3 className="text-3xl font-bold mb-8 text-white border-b border-cyan-500/50 pb-3">Digital Presence</h3>

                            <div className="space-y-6">
                                {/* Clickable LinkedIn (href MUST be present) */}
                                <LinkCard 
                                    icon={Linkedin} 
                                    label="Connect on" 
                                    value="linkedin.com/in/vivekvarkala" 
                                    href="https://www.linkedin.com/in/vivekvarkala/" 
                                />
                                {/* Clickable GitHub (href MUST be present) */}
                                <LinkCard 
                                    icon={Github} 
                                    label="Code Repository" 
                                    value="github.com/starlight1805" 
                                    href="https://github.com/starlight1805" 
                                />
                            </div>

                            <motion.div 
                                variants={itemVariants}
                                className="mt-10 p-8 bg-slate-700 rounded-2xl border border-cyan-700/50"
                            >
                                <h4 className="text-xl font-bold mb-4 text-cyan-400">Opportunities I Welcome</h4>
                                <ul className="space-y-3 text-slate-200 list-none pl-0">
                                    <li className="flex items-start"><ChevronRight className='text-cyan-400 mr-2 mt-1 flex-shrink-0' size={18} />Full-time DevOps/SRE roles (Specialist/Senior)</li>
                                    <li className="flex items-start"><ChevronRight className='text-cyan-400 mr-2 mt-1 flex-shrink-0' size={18} />Cloud Infrastructure & Platform Engineering</li>
                                    <li className="flex items-start"><ChevronRight className='text-cyan-400 mr-2 mt-1 flex-shrink-0' size={18} />Remote & Hybrid positions</li>
                                    <li className="flex items-start"><ChevronRight className='text-cyan-400 mr-2 mt-1 flex-shrink-0' size={18} />High-impact Consulting engagements</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer/Built By */}
                <div className="mt-20 text-center border-t border-slate-700 pt-8">
                    <p className="text-slate-400 text-sm font-mono">
                        Built with React, TypeScript, and the power of Tailwind CSS
                    </p>
                    <p className="text-slate-500 mt-2 text-sm">
                        © 2025 Varkala Vivek Vardhan. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default Contact;