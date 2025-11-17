import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <img
              src="https://avatars.githubusercontent.com/u/63353165?v=4"
              alt="Varkala Vivek Vardhan"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">
            Varkala Vivek Vardhan
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6 animate-fade-in-up animation-delay-200">
            DevOps Engineer
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Architecting cloud-native infrastructure and automating deployments across Azure and Kubernetes ecosystems
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="https://github.com/starlight1805"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/vivekvarkala/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:vivekspaes111@gmail.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors animate-fade-in-up animation-delay-800"
          >
            <span>Explore my work</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
