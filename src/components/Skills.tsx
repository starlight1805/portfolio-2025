const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      skills: ['Azure', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Helm']
    },
    {
      category: 'CI/CD & Automation',
      skills: ['Azure DevOps', 'GitOps', 'Airflow', 'JFrog Artifactory', 'SonarQube', 'Blackduck']
    },
    {
      category: 'Monitoring & Observability',
      skills: ['Prometheus', 'Grafana', 'Checkmk', 'ELK Stack', 'Loki']
    },
    {
      category: 'Data & Analytics',
      skills: ['Databricks', 'Hadoop Ecosystem', 'Superset', 'Event Hubs', 'ADLS']
    },
    {
      category: 'Security & Governance',
      skills: ['HashiCorp Vault', 'Azure Key Vault', 'RBAC', 'Policy Enforcement', 'Security Scanning']
    },
    {
      category: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'PowerShell', 'YAML', 'JSON', 'HCL']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Skills & Technologies</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive expertise across cloud infrastructure, DevOps tools, and modern development practices
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b-2 border-slate-900 pb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-slate-100 text-slate-800 text-sm font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl text-white text-center">
              <div className="text-3xl font-bold mb-2">2.3+</div>
              <div className="text-slate-300">Years of Experience</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl text-white text-center">
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-slate-300">Business Units Served</div>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl text-white text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-slate-300">Professional Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
