import { CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Orchestrating the full-cycle development and deployment of intricate systems within Azure and Hadoop ecosystems',
    'Managed and optimized multiple Kubernetes clusters hosting diverse application and ML workloads, achieving 99.99% uptime',
    'Integrated JFrog, SonarQube in CI/CD pipelines to enforce artifact governance, code quality, and security compliance',
    'Configured and maintained Prometheus, Grafana, and Checkmk for real-time monitoring and telemetry visualization'
  ];

  const achievements = [
    'Reduced Databricks compute cost by 25% by enforcing cluster policies and optimizing job scheduling',
    'Executed and scaled CI/CD pipelines achieving a 60% boost in deployment efficiency',
    'Reduced idle compute by 30% through autoscaling with KEDA and Kafka metrics',
    'Scaled secret management throughput beyond 20K RPS with high-availability HashiCorp Vault infrastructure'
  ];

  const projectsData = [
    {
      title: 'Jio New Energy Platform',
      period: 'Jan 2025 - Ongoing',
      description: 'Designed and deployed a cost-optimized, secure Databricks architecture by provisioning shared clusters with Unity Catalog across multiple workspaces. Integrated Azure Key Vault for secret management and implemented Databricks Asset Bundles (DAB) for CI/CD automation.'
    },
    {
      title: 'Real-Time High-Scale Data Migration',
      period: 'Aug 2025 - Ongoing',
      description: 'Automated scalable Azure infrastructure using Infrastructure as Code (Terraform) to enable ingestion and processing of petabytes of data. Provisioned ADF, Event Hubs, ADLS, and CI/CD agent VMs across 10+ business units.'
    },
    {
      title: 'Scalable Orchestration Service Architecture',
      period: 'May 2025 - Aug 2025',
      description: 'Developed a high-availability Airflow architecture (API servers, schedulers, executors) with PCS-based auto-failover and remote logging, eliminating single points of failure.'
    },
    {
      title: 'Reliance Foundation Hospital',
      period: 'May 2024 - Aug 2024',
      description: 'Built a secure Kubernetes infrastructure alongside a Hadoop cluster to support ML-driven healthcare predictions. Developed and maintained image build pipeline with integrated security scanning.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>

          <div className="mb-12 bg-white p-8 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">DevOps Engineer</h3>
                <p className="text-lg text-slate-700">Jio Platforms Ltd, Mumbai</p>
              </div>
              <span className="text-slate-600 font-medium">Aug 2023 - Present</span>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Notable Projects</h3>
            <div className="grid gap-6">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-slate-900"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-slate-900">{project.title}</h4>
                    <span className="text-sm text-slate-600 whitespace-nowrap ml-4">{project.period}</span>
                  </div>
                  <p className="text-slate-700">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle2 className="mr-3 text-green-400" size={20} />
                <span>Microsoft Certified: Azure Administrator Associate (AZ-104)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-3 text-green-400" size={20} />
                <span>Microsoft Certified: Azure Fundamentals (AZ-900)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-3 text-green-400" size={20} />
                <span>Databricks Platform Administrator</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="mr-3 text-green-400" size={20} />
                <span>Airflow Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
