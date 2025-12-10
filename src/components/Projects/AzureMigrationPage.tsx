import React from "react";
import { ArrowLeft, Cloud, Database, ArrowRightLeft } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const AzureMigrationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-8">
        {/* Back */}
        <button
          type="button"
          onClick={() => navigate("/", { state: { scrollTo: "experience" } })}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 shadow-sm hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to experience
        </button>

        {/* Header */}
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/80">
            Azure · Streaming · Terraform
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Real-Time Data Migration & Azure Infrastructure Automation
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Platform work to onboard 10+ business units onto a shared Azure data
            foundation, using modular Terraform and event-driven ingestion patterns
            instead of one-off scripts.
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-200">
              <Cloud className="h-4 w-4" />
              Azure Event Hubs · ADLS Gen2
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-slate-700 border border-slate-200">
              <Database className="h-4 w-4" />
              ADF pipelines & self-hosted agents
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
              <ArrowRightLeft className="h-4 w-4" />
              Reusable Terraform modules
            </span>
          </div>
        </motion.header>

        {/* Content */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.05 }}
          className="mt-8 grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Problem & constraints
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>Multiple BUs wanted real-time migration from on-prem to Azure.</li>
              <li>Each team had slightly different requirements and SLAs.</li>
              <li>Previous pattern was manual portal setup and copy-paste scripting.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Architecture & approach
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                Created opinionated Terraform modules for Event Hubs, Event Hub
                namespaces, ADF, ADLS Gen2 and networking.
              </li>
              <li>
                Parameterised naming, RBAC, diagnostics and DR settings so each BU could
                deploy its own stack safely.
              </li>
              <li>
                Provisioned self-hosted agent pools and pipelines that call the same
                modules from Git, keeping infra in sync with code.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md md:col-span-2">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Outcome & learnings
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                New teams can spin up a compliant, monitored Azure data landing zone by
                filling a parameter file and running the pipeline.
              </li>
              <li>
                Reduced manual portal work and environment drift, and made it easier to
                roll out global changes (log settings, policies, tags).
              </li>
              <li>
                Stronger understanding of how to design Terraform modules for
                multi-tenant internal platforms, which is directly transferable to
                platform work at Salesforce.
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AzureMigrationPage;
