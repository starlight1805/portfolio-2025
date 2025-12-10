import React from "react";
import { ArrowLeft, Cpu, Network, Shield } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const KubernetesMlPlatformPage: React.FC = () => {
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/80">
            Kubernetes · Istio · MLOps
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Kubernetes Platform for ML Inference Workloads
          </h1>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl">
            Built a secure, observable Kubernetes environment for high-throughput ML
            inference, with clear separation between control plane and user workloads.
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200">
              <Cpu className="h-4 w-4" />
              GPU / CPU inference workloads
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-700 border border-sky-200">
              <Network className="h-4 w-4" />
              Istio traffic management & telemetry
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-slate-700 border border-slate-200">
              <Shield className="h-4 w-4" />
              Hardened image pipeline & policies
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
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Platform capabilities
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                Namespaced isolation between ML teams with RBAC and network policies.
              </li>
              <li>
                Seldon Core to package models as versioned inference graphs with canary
                and A/B support.
              </li>
              <li>
                Istio for mTLS, retries/timeouts and standardised access logging.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">Security & CI/CD</h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                Image build pipeline with vulnerability scanning, base-image pinning and
                dependency checks.
              </li>
              <li>
                Admission control to block images that don&apos;t meet policy thresholds.
              </li>
              <li>
                GitOps-style deployment flow (Helm / manifests in Git, reconciled by
                pipelines or controllers).
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/90 border border-slate-200 p-5 shadow-md md:col-span-2">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              What this taught me
            </h2>
            <ul className="list-disc space-y-2 pl-4 text-sm text-slate-700">
              <li>
                How to treat ML teams as &quot;tenants&quot; of a shared cluster while
                still giving them enough freedom to experiment.
              </li>
              <li>
                How service mesh and observability tools fit into day-to-day operations
                (SLOs, error budgets, latency analysis).
              </li>
              <li>
                Patterns that translate well to any large platform team: secure supply
                chain, standardised runtime, clear tenancy model.
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default KubernetesMlPlatformPage;
