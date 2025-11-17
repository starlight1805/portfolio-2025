import { Mail, Phone, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Currently actively seeking new opportunities. Let's connect and discuss how I can contribute to your team's success.
          </p>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:vivekspaes111@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Mail className="text-white group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-sm text-slate-300">Email</div>
                      <div className="font-medium">vivekspaes111@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+917396666774"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Phone className="text-white group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-sm text-slate-300">Phone</div>
                      <div className="font-medium">+91 7396666774</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <MapPin className="text-white" size={24} />
                    <div>
                      <div className="text-sm text-slate-300">Location</div>
                      <div className="font-medium">Mumbai, India</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                    <div>
                      <div className="text-sm text-slate-300">Status</div>
                      <div className="font-medium">Open to Opportunities</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/vivekvarkala/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Linkedin className="text-white group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-sm text-slate-300">LinkedIn</div>
                      <div className="font-medium">linkedin.com/in/vivekvarkala</div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/starlight1805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <Github className="text-white group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <div className="text-sm text-slate-300">GitHub</div>
                      <div className="font-medium">github.com/starlight1805</div>
                    </div>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-lg border border-white/30">
                  <h4 className="text-lg font-bold mb-3">Open to</h4>
                  <ul className="space-y-2 text-slate-200">
                    <li>• Full-time DevOps/SRE roles</li>
                    <li>• Cloud Infrastructure positions</li>
                    <li>• Remote & Hybrid opportunities</li>
                    <li>• Consulting engagements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400">
              Built with React + TypeScript + Tailwind CSS
            </p>
            <p className="text-slate-500 mt-2">
              © 2025 Varkala Vivek Vardhan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
