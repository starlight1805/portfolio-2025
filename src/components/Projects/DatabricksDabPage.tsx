import React from "react";
import { ArrowLeft, GitBranch, ShieldCheck, Database } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const DatabricksDabPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-8">
        <button
          type="button"
          onClick={() => navigate("/", { state: { scrollTo: "experience" } })}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to experience
        </button>

        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-700/80">
            Databricks · CI/CD · Governance
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Databricks Deployment & Governance Automation (DAB)
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Using Databricks Asset Bundles (DAB) and Git-based workflows to standardise
            how jobs, notebooks and clusters are promoted across dev / UAT / prod, while
            keeping cost and security controls in one place.
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 border border-indigo-200">
              <GitBranch className="h-4 w-4" />
              Git-driven DAB deployments
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-slate-700 border border-slate-200">
              <Database className="h-4 w-4" />
              Shared job / workflow templates
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              Cluster policies & secrets governance
            </span>
          </div>
        </motion.header>

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">What I built</h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                Base DAB templates for common patterns: ingestion jobs, scheduled
                notebooks, and delta maintenance workflows.
              </li>
              <li>
                Promotion pipelines that deploy the same bundle config into dev, UAT and
                prod with environment-specific overrides.
              </li>
              <li>
                Integration with Azure Key Vault for secrets so credentials never live in
                Databricks configs directly.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Governance & optimisation
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>Defined cluster policies for node types, autoscaling, and tagging.</li>
              <li>
                Encouraged small, job-specific clusters instead of long-running
                interactive clusters to cut idle time.
              </li>
              <li>
                Added standard logging hooks so platform team can trace which bundle
                deployed which job.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md md:col-span-2">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Why it matters for platform / SRE roles
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                DAB turns Databricks objects into versioned, reviewable assets — similar
                to how modern internal platforms treat services and configs.
              </li>
              <li>
                The same design thinking applies to any platform work at Salesforce:
                opinionated templates, guard-rails, and Git-based workflows.
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DatabricksDabPage;

