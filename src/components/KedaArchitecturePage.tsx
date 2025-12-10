import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  CloudLightning,
  Database,
  Activity,
  ArrowRightLeft,
  Cpu,
  Boxes,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const KedaArchitecturePage: React.FC = () => {
  const navigate = useNavigate();

  const goBackToProjects = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-slate-900">
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22)_0,_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18)_0,_transparent_55%)]" />
        <div className="absolute -top-40 -left-16 h-72 w-72 rounded-full bg-blue-400/35 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      {/* Top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-6">
        <button
          type="button"
          onClick={goBackToProjects}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-medium text-slate-800 shadow-[0_10px_35px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:bg-white hover:border-slate-300"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to projects</span>
        </button>
        <span className="hidden rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl md:inline-flex">
          Project · KEDA Autoscaling
        </span>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-8">
        {/* Header */}
        <motion.header
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5 rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-[0_24px_80px_rgba(148,163,184,0.45)] backdrop-blur-2xl sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700/80">
            Kubernetes · Kafka · KEDA
          </p>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Event-Driven Autoscaling with KEDA &amp; Kafka
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                This project uses{" "}
                <span className="font-semibold text-blue-700">Kafka consumer lag</span> as
                a metric for KEDA to dynamically scale a Jupyter Notebook deployment on
                Kubernetes. When lag grows, KEDA increases pods; when lag falls, it scales
                them down to save resources.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-md backdrop-blur-xl sm:text-[13px]">
              <p className="mb-1 font-semibold text-slate-900">
                Repo automation highlight
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>
                  Single Python entry script that you run by providing a{" "}
                  <code>kubeconfig</code> path.
                </li>
                <li>
                  Script verifies cluster connectivity and installs prerequisites (like
                  Helm) if missing.
                </li>
                <li>
                  It then installs KEDA, deploys the Jupyter workload and creates the
                  ScaledObject wiring Kafka lag to autoscaling.
                </li>
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50/90 px-3 py-1 text-blue-700 ring-1 ring-blue-200/90 backdrop-blur-md">
              <Database className="h-4 w-4" />
              Kafka lag as scaling signal
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50/90 px-3 py-1 text-cyan-700 ring-1 ring-cyan-200/90 backdrop-blur-md">
              <CloudLightning className="h-4 w-4" />
              KEDA ScaledObject + trigger
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 px-3 py-1 text-slate-700 ring-1 ring-slate-200/90 backdrop-blur-md">
              <Cpu className="h-4 w-4" />
              Jupyter Notebook workload
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50/90 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200/90 backdrop-blur-md">
              <Boxes className="h-4 w-4" />
              One-command bootstrap
            </span>
          </div>
        </motion.header>

        {/* Diagram section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-slate-300/70 bg-white/50 p-4 shadow-[0_30px_120px_rgba(148,163,184,0.6)] backdrop-blur-2xl sm:p-6"
        >
          {/* Light grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_1px_1px,#dbeafe_1px,transparent_0)] [background-size:22px_22px]"
          />

          <div className="relative flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              <span>Kafka &amp; Producers</span>
              <span>KEDA Control Plane</span>
              <span>Kubernetes Workloads</span>
            </div>

            {/* Dark neon diagram */}
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
              {/* Outer glow */}
              <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.45),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.45),transparent_55%)] opacity-80" />

              <div className="relative rounded-[24px] bg-slate-950/95 p-3 ring-1 ring-slate-800/80 sm:p-4">
                {/* Inner grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[24px] opacity-[0.14] [background-image:radial-gradient(circle_at_1px_1px,#475569_1px,transparent_0)] [background-size:18px_18px]"
                />
                <div className="relative w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 1200 420"
                    className="mx-auto block h-auto w-full max-h-[380px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Main row Y = 200 */}

                    {/* Producers */}
                    <g transform="translate(160,200)">
                      <rect
                        x={-80}
                        y={-32}
                        width={160}
                        height={64}
                        rx={20}
                        fill="#020617"
                        stroke="#38bdf8"
                        strokeWidth={1.6}
                      />
                      <circle cx={-56} cy={-8} r={6} fill="#22d3ee" />
                      <text
                        x={0}
                        y={-4}
                        textAnchor="middle"
                        fill="#e5e7eb"
                        fontSize={13}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        Producers
                      </text>
                      <text
                        x={0}
                        y={14}
                        textAnchor="middle"
                        fill="#9ca3af"
                        fontSize={10}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        apps / jobs
                      </text>
                    </g>

                    {/* Kafka Topic */}
                    <g transform="translate(380,200)">
                      <rect
                        x={-90}
                        y={-38}
                        width={180}
                        height={76}
                        rx={22}
                        fill="#020617"
                        stroke="#6366f1"
                        strokeWidth={1.6}
                      />
                      <circle cx={-68} cy={-12} r={6} fill="#38bdf8" />
                      <text
                        x={0}
                        y={-10}
                        textAnchor="middle"
                        fill="#e5e7eb"
                        fontSize={13}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        Kafka Topic
                      </text>
                      <text
                        x={0}
                        y={10}
                        textAnchor="middle"
                        fill="#38bdf8"
                        fontSize={11}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        lag metric
                      </text>
                      <text
                        x={0}
                        y={26}
                        textAnchor="middle"
                        fill="#9ca3af"
                        fontSize={9}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        per consumer group
                      </text>
                    </g>

                    {/* KEDA Operator */}
                    <g transform="translate(640,200)">
                      <rect
                        x={-120}
                        y={-46}
                        width={240}
                        height={92}
                        rx={26}
                        fill="#020617"
                        stroke="#22c55e"
                        strokeWidth={1.8}
                      />
                      <circle cx={-96} cy={-18} r={7} fill="#22c55e" />
                      <text
                        x={0}
                        y={-12}
                        textAnchor="middle"
                        fill="#e5e7eb"
                        fontSize={14}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        KEDA Operator
                      </text>
                      <text
                        x={0}
                        y={8}
                        textAnchor="middle"
                        fill="#38bdf8"
                        fontSize={11}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        ScaledObject + Kafka trigger
                      </text>
                      <text
                        x={0}
                        y={28}
                        textAnchor="middle"
                        fill="#a5b4fc"
                        fontSize={10}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        computes desired replicas
                      </text>
                    </g>

                    {/* Kubernetes API Server & HPA */}
                    <g transform="translate(640,320)">
                      <rect
                        x={-160}
                        y={-26}
                        width={320}
                        height={52}
                        rx={20}
                        fill="#020617"
                        stroke="#38bdf8"
                        strokeWidth={1.6}
                      />
                      <circle cx={-138} cy={-4} r={6} fill="#22d3ee" />
                      <text
                        x={0}
                        y={-4}
                        textAnchor="middle"
                        fill="#e5e7eb"
                        fontSize={12}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        Kubernetes API Server &amp; HPA
                      </text>
                      <text
                        x={0}
                        y={14}
                        textAnchor="middle"
                        fill="#9ca3af"
                        fontSize={10}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        applies replica changes to Jupyter Deployment
                      </text>
                    </g>

                    {/* Jupyter Deployment — aligned with API/HPA row */}
                    <g transform="translate(960,320)">
                      <rect
                        x={-120}
                        y={-46}
                        width={240}
                        height={92}
                        rx={26}
                        fill="#020617"
                        stroke="#f97316"
                        strokeWidth={1.8}
                      />
                      <circle cx={-96} cy={-18} r={7} fill="#f97316" />
                      <text
                        x={0}
                        y={-12}
                        textAnchor="middle"
                        fill="#e5e7eb"
                        fontSize={13}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        Jupyter Deployment
                      </text>
                      <text
                        x={0}
                        y={8}
                        textAnchor="middle"
                        fill="#a5b4fc"
                        fontSize={11}
                        fontFamily="system-ui, -apple-system,BlinkMacSystemFont,'SF Pro Text'"
                      >
                        Kubernetes Deployment + Service
                      </text>

                      {/* pods */}
                      <rect
                        x={-60}
                        y={20}
                        width={36}
                        height={22}
                        rx={9}
                        fill="#020617"
                        stroke="#1f2937"
                        strokeWidth={1}
                      />
                      <rect
                        x={-10}
                        y={20}
                        width={36}
                        height={22}
                        rx={9}
                        fill="#020617"
                        stroke="#1f2937"
                        strokeWidth={1}
                      />
                      <rect
                        x={40}
                        y={20}
                        width={36}
                        height={22}
                        rx={9}
                        fill="#020617"
                        stroke="#1f2937"
                        strokeWidth={1}
                      />
                    </g>

                    {/* Arrows */}
                    <DiagramArrow x1={240} y1={200} x2={290} y2={200} />
                    <DiagramArrow x1={470} y1={200} x2={520} y2={200} dashed />
                    {/* KEDA -> API (down) */}
                    <DiagramArrow x1={640} y1={250} x2={640} y2={294} dashed vertical />
                    {/* API -> Jupyter (bottom row) */}
                    <DiagramArrow x1={760} y1={320} x2={840} y2={320} />

                    {/* Traffic particles */}
                    <TrafficParticle
                      path="horizontal"
                      xFrom={240}
                      xTo={290}
                      y={200}
                      delay={0.1}
                      duration={2.2}
                    />
                    <TrafficParticle
                      path="horizontal"
                      xFrom={470}
                      xTo={520}
                      y={200}
                      delay={0.5}
                      duration={2.3}
                    />
                    <TrafficParticle
                      path="vertical"
                      x={640}
                      yFrom={250}
                      yTo={294}
                      delay={0.1}
                      duration={2.1}
                    />
                    <TrafficParticle
                      path="horizontal"
                      xFrom={780}
                      xTo={840}
                      y={320}
                      delay={1.2}
                      duration={2.5}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Caption */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-md backdrop-blur-xl sm:px-5 sm:text-[13px]"
            >
              <span className="inline-flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-600" />
                Kafka lag drives KEDA triggers, which update a ScaledObject. KEDA then
                adjusts the replica count for the Jupyter Deployment through the
                Kubernetes API server and HPA.
              </span>
            </motion.div>
          </div>
        </motion.section>

        {/* Explanation cards */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid gap-4 text-sm text-slate-700 md:grid-cols-3 md:text-[15px]"
        >
          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_55px_rgba(148,163,184,0.35)] backdrop-blur-xl sm:p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
              <Database className="h-4 w-4 text-blue-600" />
              Kafka &amp; lag
            </h2>
            <ul className="space-y-2 list-disc pl-4 marker:text-blue-500">
              <li>Producers write work items into a Kafka topic.</li>
              <li>Lag grows when consumers cannot keep up with messages.</li>
              <li>Lag metric is exposed for KEDA via the Kafka trigger.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_55px_rgba(148,163,184,0.35)] backdrop-blur-xl sm:p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
              <CloudLightning className="h-4 w-4 text-cyan-600" />
              KEDA control loop
            </h2>
            <ul className="space-y-2 list-disc pl-4 marker:text-cyan-500">
              <li>ScaledObject defines Kafka trigger and replica bounds.</li>
              <li>KEDA reads lag and computes the desired replica count.</li>
              <li>It updates the HPA / scale subresource on the Deployment.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-[0_18px_55px_rgba(148,163,184,0.35)] backdrop-blur-xl sm:p-5">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:text-base">
              <Boxes className="h-4 w-4 text-emerald-600" />
              Automation &amp; workload
            </h2>
            <ul className="space-y-2 list-disc pl-4 marker:text-emerald-500">
              <li>
                Main script accepts a <code>kubeconfig</code> path and validates cluster
                connectivity.
              </li>
              <li>Installs Helm and KEDA components if they are not already present.</li>
              <li>
                Deploys the Jupyter Notebook Deployment + Service and wires it to KEDA so
                pods scale automatically based on Kafka lag.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Flow summary */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 text-sm text-slate-700 shadow-[0_20px_70px_rgba(148,163,184,0.45)] backdrop-blur-2xl sm:p-6 md:text-[15px]"
        >
          <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-slate-900">
            <ArrowRightLeft className="h-5 w-5 text-blue-600" />
            End-to-end flow with automation
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <span className="font-medium">Run the script:</span> invoke the Python
              entrypoint with a <code>kubeconfig</code> file. It ensures it can talk to
              the cluster.
            </li>
            <li>
              <span className="font-medium">Bootstrap tooling:</span> if needed, the
              script downloads/installs Helm and KEDA, and prepares namespaces.
            </li>
            <li>
              <span className="font-medium">Deploy workload:</span> it applies manifests
              for the Jupyter Deployment, Service, and KEDA ScaledObject.
            </li>
            <li>
              <span className="font-medium">Traffic spike:</span> producers push more
              messages; Kafka lag grows.
            </li>
            <li>
              <span className="font-medium">Autoscaling:</span> KEDA adjusts the desired
              replica count via the Kubernetes API/HPA, then scales back down when lag is
              cleared.
            </li>
          </ol>
        </motion.section>
      </main>
    </div>
  );
};

/* ---------- Diagram helpers ---------- */

type DiagramArrowProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  vertical?: boolean;
};

const DiagramArrow: React.FC<DiagramArrowProps> = ({
  x1,
  y1,
  x2,
  y2,
  dashed,
  vertical,
}) => {
  const size = 7;
  let points: string;

  if (vertical) {
    const dir = y2 > y1 ? 1 : -1;
    points = `${x2},${y2} ${x2 - 4},${y2 - dir * size} ${x2 + 4},${y2 - dir * size}`;
  } else {
    const dir = x2 > x1 ? 1 : -1;
    points = `${x2},${y2} ${x2 - dir * size},${y2 - 4} ${x2 - dir * size},${y2 + 4}`;
  }

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#64748b"
        strokeWidth={1.6}
        strokeDasharray={dashed ? "5 6" : undefined}
      />
      <polygon points={points} fill="#64748b" />
    </g>
  );
};

type TrafficParticleProps =
  | {
      path: "horizontal";
      xFrom: number;
      xTo: number;
      y: number;
      delay?: number;
      duration?: number;
    }
  | {
      path: "vertical";
      x: number;
      yFrom: number;
      yTo: number;
      delay?: number;
      duration?: number;
    };

const TrafficParticle: React.FC<TrafficParticleProps> = (props) => {
  if (props.path === "horizontal") {
    const { xFrom, xTo, y, delay = 0, duration = 2.4 } = props;
    return (
      <motion.circle
        cx={xFrom}
        cy={y}
        r={4}
        fill="#22d3ee"
        opacity={0.95}
        animate={{ cx: [xFrom, xTo] }}
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

  const { x, yFrom, yTo, delay = 0, duration = 2.4 } = props;
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
};

export default KedaArchitecturePage;
