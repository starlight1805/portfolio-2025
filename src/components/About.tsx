import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-slate-700 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">Education</h3>
              </div>
              <p className="text-slate-700 font-medium">B.Tech in Electronics and Communication Engineering</p>
              <p className="text-slate-600">National Institute of Technology, Tiruchchirapalli</p>
              <p className="text-slate-500">2019 - 2023 | GPA: 8.6</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Briefcase className="text-slate-700 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-slate-900">Current Role</h3>
              </div>
              <p className="text-slate-700 font-medium">DevOps Engineer</p>
              <p className="text-slate-600">Jio Platforms Ltd, Mumbai</p>
              <p className="text-slate-500">Aug 2023 - Present (2.3 years)</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              DevOps Engineer with 2.3 years of experience architecting and automating cloud-native, scalable infrastructure across Azure and on-premises environments. Specialized in Kubernetes, Terraform, and Databricks for delivering high-availability, cost-optimized, and secure deployments.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Passionate about building self-service infrastructure, CI/CD automation, and observability frameworks. Currently actively seeking new opportunities to leverage my expertise in cloud automation and DevOps excellence.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-900 text-white rounded-xl">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-slate-300">Databricks Workspaces Managed</div>
            </div>
            <div className="text-center p-6 bg-slate-900 text-white rounded-xl">
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="text-slate-300">Cost Reduction Achieved</div>
            </div>
            <div className="text-center p-6 bg-slate-900 text-white rounded-xl">
              <div className="text-4xl font-bold mb-2">99.99%</div>
              <div className="text-slate-300">Uptime Maintained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
