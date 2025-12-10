import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Activity,
  ArrowRightLeft,
  CloudLightning,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const AirflowHaArchitecturePage: React.FC = () => {
  const navigate = useNavigate();

  const goBackToProjects = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-slate-900">
      {/* Background blobs + gradient overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.18)_0,_transparent_55%)]" />
        <div className="absolute -top-40 -left-10 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-indigo-400/30 blur-3xl" />
      </div>

      {/* Top bar / Back button */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-6">
        <button
          type="button"
          onClick={goBackToProjects}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-medium text-slate-800 shadow-[0_10px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:bg-white hover:border-slate-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to projects</span>
        </button>
        <span className="hidden rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl md:inline-flex">
          Project · HA Architecture
        </span>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-8">
        {/* Header / summary glass card */}
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 rounded-3xl border border-slate-200/70 bg-white/70 p-5 shadow-[0_24px_80px_rgba(148,163,184,0.45)] backdrop-blur-2xl sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/80">
            On-Prem · Airflow · High Availability
          </p>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Airflow PCS-Based HA Architecture
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                Two-node on-premises Apache Airflow cluster with{" "}
                <span className="font-semibold text-blue-700">
                  no single point of failure
                </span>
                : HAProxy VIP, PCS-managed API layer, active-active schedulers,
                local executors, and edge executors running on remote gateway
                nodes.
              </p>
            </div>

            {/* Meta info */}
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-md backdrop-blur-xl sm:text-[13px]">
              <p className="mb-1 font-semibold text-slate-900">
                Role &amp; context
              </p>
              <p>DevOps / Platform Engineer</p>
              <p>On-prem Airflow cluster · PCS &amp; HAProxy</p>
            </div>
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/80 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200/90 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4" />
              No single point of failure
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50/80 px-3 py-1 text-indigo-700 ring-1 ring-indigo-200/90 backdrop-blur-md">
              <Activity className="h-4 w-4" />
              Active-active schedulers
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50/80 px-3 py-1 text-fuchsia-700 ring-1 ring-fuchsia-200/90 backdrop-blur-md">
              <ArrowRightLeft className="h-4 w-4" />
              Active-passive API (PCS)
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-3 py-1 text-slate-700 ring-1 ring-slate-200/90 backdrop-blur-md">
              <CloudLightning className="h-4 w-4" />
              Edge executors on gateways
            </span>
          </div>
        </motion.header>

        {/* Main diagram section (dark core + glass frame) */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-slate-300/70 bg-white/40 p-4 shadow-[0_30px_120px_rgba(148,163,184,0.6)] backdrop-blur-2xl sm:p-6"
        >
          {/* Light overlay grid outside diagram */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,#dbeafe_1px,transparent_0)] [background-size:22px_22px]"
          />

          <div className="relative flex flex-col gap-4 sm:gap-6">
            {/* Layer labels */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              <span>Client &amp; Traffic Layer</span>
              <span>PCS &amp; Airflow Control Plane</span>
              <span>Execution &amp; Gateway Layer</span>
            </div>

            {/* Diagram card with hover 3D/glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 40px 120px rgba(15,23,42,0.65)",
                y: -4,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full rounded-[26px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-[1px]"
            >
              {/* Neon border gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(129,140,248,0.45),transparent_55%)] opacity-80" />

              {/* Diagram inner dark panel */}
              <div className="relative rounded-[24px] bg-slate-950/95 p-3 ring-1 ring-slate-800/80 sm:p-4">
                {/* Inner subtle grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[24px] opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,#475569_1px,transparent_0)] [background-size:18px_18px]"
                />
                <div className="relative w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 1200 520"
                    className="mx-auto block h-auto w-full max-h-[460px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Clients */}
                    <g transform="translate(600, 60)">
                      <motion.g
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <rect
                          x={-130}
                          y={-26}
                          width={260}
                          height={52}
                          rx={26}
                          fill="#020617"
                          stroke="#1e293b"
                          strokeWidth={1.2}
                        />
                        <text
                          x={0}
                          y={0}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill="#e2e8f0"
                          fontSize={14}
                          fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                        >
                          Users · Schedulers · API Clients
                        </text>
                      </motion.g>
                    </g>

                    {/* Clients to VIP (dashed) */}
                    <line
                      x1={600}
                      y1={86}
                      x2={600}
                      y2={132}
                      stroke="#64748b"
                      strokeWidth={1.6}
                      strokeDasharray="5 6"
                    />

                    {/* VIP */}
                    <g transform="translate(600, 160)">
                      <motion.g
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <rect
                          x={-155}
                          y={-30}
                          width={310}
                          height={60}
                          rx={16}
                          fill="#020617"
                          stroke="#22d3ee"
                          strokeWidth={1.8}
                        />
                        {/* glowing border */}
                        <rect
                          x={-160}
                          y={-34}
                          width={320}
                          height={68}
                          rx={20}
                          fill="none"
                          stroke="rgba(34,211,238,0.55)"
                          strokeWidth={1}
                        />
                        <text
                          x={0}
                          y={-4}
                          textAnchor="middle"
                          fill="#e0f2fe"
                          fontSize={14}
                          fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                        >
                          HAProxy Virtual IP (VIP)
                        </text>
                        <text
                          x={0}
                          y={16}
                          textAnchor="middle"
                          fill="#38bdf8"
                          fontSize={11}
                          fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                        >
                          PCS-managed floating address
                        </text>
                      </motion.g>
                    </g>

                    {/* VIP to HAProxy nodes */}
                    <line
                      x1={600}
                      y1={190}
                      x2={420}
                      y2={240}
                      stroke="#64748b"
                      strokeWidth={1.4}
                    />
                    <line
                      x1={600}
                      y1={190}
                      x2={780}
                      y2={240}
                      stroke="#64748b"
                      strokeWidth={1.4}
                    />

                    {/* HAProxy Nodes */}
                    <NodeBox
                      x={420}
                      y={240}
                      width={200}
                      height={70}
                      title="HAProxy Node 1"
                      subtitle="Active (when holding VIP)"
                    />
                    <NodeBox
                      x={780}
                      y={240}
                      width={200}
                      height={70}
                      title="HAProxy Node 2"
                      subtitle="Standby (promoted on failover)"
                    />

                    {/* HAProxy to Airflow nodes (dashed) */}
                    <line
                      x1={420}
                      y1={275}
                      x2={360}
                      y2={330}
                      stroke="#64748b"
                      strokeWidth={1.4}
                      strokeDasharray="4 6"
                    />
                    <line
                      x1={420}
                      y1={275}
                      x2={480}
                      y2={330}
                      stroke="#64748b"
                      strokeWidth={1.4}
                      strokeDasharray="4 6"
                    />
                    <line
                      x1={780}
                      y1={275}
                      x2={720}
                      y2={330}
                      stroke="#64748b"
                      strokeWidth={1.4}
                      strokeDasharray="4 6"
                    />
                    <line
                      x1={780}
                      y1={275}
                      x2={840}
                      y2={330}
                      stroke="#64748b"
                      strokeWidth={1.4}
                      strokeDasharray="4 6"
                    />

                    {/* Airflow Nodes */}
                    <AirflowNodeBox
                      x={360}
                      y={330}
                      label="Airflow Node 1"
                      api="API / Webserver (active/standby via PCS)"
                      scheduler="Scheduler (active)"
                      executors="Local + Edge executors"
                      preferred
                    />
                    <AirflowNodeBox
                      x={720}
                      y={330}
                      label="Airflow Node 2"
                      api="API / Webserver (peer when promoted)"
                      scheduler="Scheduler (active)"
                      executors="Local + Edge executors"
                    />

                    {/* Airflow to Gateways */}
                    <line
                      x1={420}
                      y1={390}
                      x2={420}
                      y2={430}
                      stroke="#475569"
                      strokeWidth={1.5}
                      strokeDasharray="4 6"
                    />
                    <line
                      x1={780}
                      y1={390}
                      x2={780}
                      y2={430}
                      stroke="#475569"
                      strokeWidth={1.5}
                      strokeDasharray="4 6"
                    />

                    {/* Gateways label */}
                    <text
                      x={600}
                      y={425}
                      textAnchor="middle"
                      fill="#cbd5f5"
                      fontSize={11}
                      fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                    >
                      Workloads from edge executors → gateway nodes
                    </text>

                    {/* Gateway Nodes */}
                    <GatewayBox
                      x={420}
                      y={460}
                      label="Gateway Node A"
                      desc="No Airflow install · receives tasks from edge executors"
                    />
                    <GatewayBox
                      x={780}
                      y={460}
                      label="Gateway Node B"
                      desc="Scales execution capacity without scheduler/API load"
                    />

                    {/* Animated traffic particles */}
                    <TrafficParticle
                      path="vertical"
                      x={600}
                      yFrom={86}
                      yTo={155}
                      delay={0}
                      duration={2.6}
                    />
                    <TrafficParticle
                      path="diagonal"
                      xFrom={590}
                      yFrom={190}
                      xTo={430}
                      yTo={240}
                      delay={0.5}
                      duration={2.8}
                    />
                    <TrafficParticle
                      path="diagonal"
                      xFrom={610}
                      yFrom={190}
                      xTo={770}
                      yTo={240}
                      delay={1}
                      duration={2.8}
                    />
                    <TrafficParticle
                      path="vertical"
                      x={420}
                      yFrom={390}
                      yTo={460}
                      delay={0.2}
                      duration={2.2}
                    />
                    <TrafficParticle
                      path="vertical"
                      x={780}
                      yFrom={390}
                      yTo={460}
                      delay={0.7}
                      duration={2.2}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* On-prem note glass strip */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-md backdrop-blur-xl sm:px-5 sm:text-[13px]"
            >
              <span className="inline-flex items-center gap-2">
                <Server className="h-4 w-4 text-slate-800" />
                Entire stack runs on-premises with PCS orchestrating HAProxy
                VIP and Airflow API roles, schedulers active on both nodes, and
                workloads pushed via edge executors to lightweight gateway
                nodes.
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-600 ring-1 ring-slate-200">
                On-Prem Cluster · PCS
              </span>
            </motion.div>
          </div>
        </motion.section>

        {/* Small explanation cards */}
                {/* Small explanation cards */}
                <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid gap-4 text-sm text-slate-700 md:grid-cols-2 md:text-[15px]"
        >
          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_55px_rgba(148,163,184,0.35)] backdrop-blur-xl sm:p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Reliability design
            </h2>
            <ul className="space-y-2 list-disc pl-4 marker:text-emerald-500">
              <li>VIP floats between HAProxy nodes via PCS.</li>
              <li>Airflow API/webserver is an active-passive PCS resource.</li>
              <li>
                Both schedulers are active, so task dispatch continues on node
                failure.
              </li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_55px_rgba(148,163,184,0.35)] backdrop-blur-xl sm:p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
              <CloudLightning className="h-4 w-4 text-blue-500" />
              Execution &amp; resource usage
            </h2>
            <ul className="space-y-2 list-disc pl-4 marker:text-blue-500">
              <li>Local executors run on both Airflow nodes.</li>
              <li>
                Edge executors send workloads to gateway nodes – no full
                Airflow installation there.
              </li>
              <li>
                Control plane stays light while compute is pushed to gateways.
              </li>
            </ul>
          </div>
        </motion.section>


        {/* Bottom back link */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="mt-4 flex justify-center"
        >
          <button
            type="button"
            onClick={goBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </button>
        </motion.div>
      </main>
    </div>
  );
};

/* ---------- Diagram sub-components ---------- */

type NodeBoxProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  subtitle: string;
};

const NodeBox: React.FC<NodeBoxProps> = ({
  x,
  y,
  width,
  height,
  title,
  subtitle,
}) => (
  <g transform={`translate(${x}, ${y})`}>
    <motion.g
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <rect
        x={-width / 2}
        y={-height / 2}
        width={width}
        height={height}
        rx={14}
        fill="#020617"
        stroke="#1e293b"
        strokeWidth={1.2}
      />
      <text
        x={0}
        y={-6}
        textAnchor="middle"
        fill="#e5e7eb"
        fontSize={12}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {title}
      </text>
      <text
        x={0}
        y={12}
        textAnchor="middle"
        fill="#a5b4fc"
        fontSize={11}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {subtitle}
      </text>
    </motion.g>
  </g>
);

type AirflowNodeBoxProps = {
  x: number;
  y: number;
  label: string;
  api: string;
  scheduler: string;
  executors: string;
  preferred?: boolean;
};

const AirflowNodeBox: React.FC<AirflowNodeBoxProps> = ({
  x,
  y,
  label,
  api,
  scheduler,
  executors,
  preferred,
}) => (
  <g transform={`translate(${x}, ${y})`}>
    <motion.g
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <rect
        x={-130}
        y={-32}
        width={260}
        height={104}
        rx={18}
        fill="#020617"
        stroke="#1f2937"
        strokeWidth={1.4}
      />
      {/* Header line */}
      <text
        x={-118}
        y={-14}
        fill="#e5e7eb"
        fontSize={12}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {label}
      </text>
      {preferred && (
        <text
          x={118}
          y={-14}
          textAnchor="end"
          fill="#4ade80"
          fontSize={10}
          fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
        >
          Preferred API node
        </text>
      )}

      {/* Divider */}
      <line
        x1={-120}
        y1={-8}
        x2={120}
        y2={-8}
        stroke="#1e293b"
        strokeWidth={1}
      />

      {/* API */}
      <text
        x={-118}
        y={10}
        fill="#a5b4fc"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        API:
      </text>
      <text
        x={-80}
        y={10}
        fill="#e5e7eb"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {api}
      </text>

      {/* Scheduler */}
      <text
        x={-118}
        y={28}
        fill="#a5b4fc"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        Scheduler:
      </text>
      <text
        x={-52}
        y={28}
        fill="#e5e7eb"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {scheduler}
      </text>

      {/* Executors */}
      <text
        x={-118}
        y={46}
        fill="#a5b4fc"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        Executors:
      </text>
      <text
        x={-52}
        y={46}
        fill="#e5e7eb"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {executors}
      </text>
    </motion.g>
  </g>
);

type GatewayBoxProps = {
  x: number;
  y: number;
  label: string;
  desc: string;
};

const GatewayBox: React.FC<GatewayBoxProps> = ({ x, y, label, desc }) => (
  <g transform={`translate(${x}, ${y})`}>
    <motion.g
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <rect
        x={-140}
        y={-22}
        width={280}
        height={64}
        rx={16}
        fill="#020617"
        stroke="#1e293b"
        strokeWidth={1.3}
      />
      <text
        x={-120}
        y={-4}
        fill="#e5e7eb"
        fontSize={12}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {label}
      </text>
      <text
        x={-120}
        y={14}
        fill="#9ca3af"
        fontSize={10}
        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
      >
        {desc}
      </text>
    </motion.g>
  </g>
);

type TrafficParticleProps =
  | {
      path: "vertical";
      x: number;
      yFrom: number;
      yTo: number;
      delay?: number;
      duration?: number;
    }
  | {
      path: "diagonal";
      xFrom: number;
      yFrom: number;
      xTo: number;
      yTo: number;
      delay?: number;
      duration?: number;
    };

const TrafficParticle: React.FC<TrafficParticleProps> = (props) => {
  if (props.path === "vertical") {
    const { x, yFrom, yTo, delay = 0, duration = 2.5 } = props;
    return (
      <motion.circle
        cx={x}
        cy={yFrom}
        r={4}
        fill="#22d3ee"
        opacity={0.95}
        animate={{ cy: [yFrom, yTo] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration,
          delay,
          ease: "linear",
        }}
      />
    );
  }

  const { xFrom, yFrom, xTo, yTo, delay = 0, duration = 2.5 } = props;
  return (
    <motion.circle
      cx={xFrom}
      cy={yFrom}
      r={4}
      fill="#22d3ee"
      opacity={0.95}
      animate={{ cx: [xFrom, xTo], cy: [yFrom, yTo] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration,
        delay,
        ease: "linear",
      }}
    />
  );
};

export default AirflowHaArchitecturePage;
