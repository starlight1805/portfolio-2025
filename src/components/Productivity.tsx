import { useEffect, useMemo, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Cell,
} from "recharts";

/* ---------------- DEFAULT HABITS ---------------- */

const DEFAULT_HABITS = [
  { name: "Gym", color: "#ef4444" },
  { name: "Upskilling", color: "#3b82f6" },
  { name: "Cardio", color: "#f97316" },
  { name: "No Junk Food", color: "#eab308" },
  { name: "Reading (5 pages)", color: "#8b5cf6" },
  { name: "Sleep ≥ 7 hrs", color: "#6366f1" },
  { name: "Limit Social Media", color: "#ec4899" },
  { name: "Skin Care", color: "#14b8a6" },
  { name: "Hair Care", color: "#84cc16" },
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const YEARS = [2026, 2027, 2028];

const daysInMonth = (y: number, m: number) =>
  new Date(y, m + 1, 0).getDate();

const dayLabel = (y: number, m: number, d: number) =>
  new Date(y, m, d).toLocaleDateString("en-US", { weekday: "short" });

/* ================= PAGE ================= */

export default function Productivity() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(0);

  const [habits, setHabits] = useState(DEFAULT_HABITS);
  const [data, setData] = useState<any>({});
  const [goals, setGoals] = useState<any>({});

  const [showHabitModal, setShowHabitModal] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [newColor, setNewColor] = useState("#22c55e");

  const days = daysInMonth(year, month);
  const docId = `${year}-${String(month + 1).padStart(2, "0")}`;

  /* ---------------- FETCH ---------------- */

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, "productivity", docId));
      if (snap.exists()) {
        const d = snap.data();
        setHabits(d.habits || DEFAULT_HABITS);
        setData(d.data || {});
        setGoals(d.goals || {});
      } else {
        setHabits(DEFAULT_HABITS);
        setData({});
        setGoals({});
      }
    };
    fetch();
  }, [docId]);

  const save = async (d = data, g = goals, h = habits) => {
    await setDoc(
      doc(db, "productivity", docId),
      { data: d, goals: g, habits: h },
      { merge: true }
    );
  };

  /* ---------------- ACTIONS ---------------- */

  const toggle = (habit: string, day: number) => {
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const updated = {
      ...data,
      [habit]: {
        ...data[habit],
        [key]: !data?.[habit]?.[key],
      },
    };
    setData(updated);
    save(updated);
  };

  const updateGoal = (habit: string, value: number) => {
    const g = { ...goals, [habit]: value };
    setGoals(g);
    save(data, g);
  };

  const addHabit = () => {
    if (!newHabit.trim()) return;
    if (habits.some(h => h.name === newHabit)) return;

    const updated = [...habits, { name: newHabit, color: newColor }];
    setHabits(updated);
    setNewHabit("");
    setNewColor("#22c55e");
    save(data, goals, updated);
  };

  const removeHabit = (name: string) => {
    const updated = habits.filter(h => h.name !== name);
    setHabits(updated);
    save(data, goals, updated);
  };

  /* ---------------- ANALYTICS ---------------- */

  const analytics = useMemo(() => {
    let totalDone = 0;
    let totalGoal = 0;

    const habitStats = habits.map(h => {
      let done = 0;
      for (let d = 1; d <= days; d++) {
        const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        if (data?.[h.name]?.[key]) done++;
      }

      const goal = goals?.[h.name] || days;
      totalDone += done;
      totalGoal += goal;

      return {
        ...h,
        done,
        goal,
        percent: Math.round((done / goal) * 100),
      };
    });

    const topHabit = [...habitStats].sort((a, b) => b.percent - a.percent)[0];
    const weakHabit = [...habitStats].sort((a, b) => a.percent - b.percent)[0];
    const goalsHit = habitStats.filter(h => h.done >= h.goal).length;

    return {
      habitStats,
      overallPercent: totalGoal ? Math.round((totalDone / totalGoal) * 100) : 0,
      topHabit,
      weakHabit,
      goalsHit,
    };
  }, [habits, data, goals, month, year]);

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* ===== HERO HEADER ===== */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 shadow-lg">
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Productivity Dashboard
            </h1>
            <p className="text-blue-100 mt-1 text-sm max-w-xl">
              Track habits daily, measure consistency, and improve discipline over time.
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={() => setShowHabitModal(true)}
              className="bg-white text-indigo-700 font-medium px-4 py-2 rounded-lg shadow hover:shadow-md transition"
            >
              Manage Habits
            </button>

            <select
              value={month}
              onChange={e => setMonth(+e.target.value)}
              className="rounded-lg px-3 py-2 text-slate-800"
            >
              {MONTHS.map((m, i) => (
                <option key={m} value={i}>{m}</option>
              ))}
            </select>

            <select
              value={year}
              onChange={e => setYear(+e.target.value)}
              className="rounded-lg px-3 py-2 text-slate-800"
            >
              {YEARS.map(y => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ===== KPI CARDS ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Stat title="Overall %" value={`${analytics.overallPercent}%`} />
        <Stat title="Top Habit" value={analytics.topHabit?.name || "-"} />
        <Stat title="Weak Habit" value={analytics.weakHabit?.name || "-"} />
        <Stat title="Goals Hit" value={`${analytics.goalsHit}/${habits.length}`} />
      </div>

      {/* ===== ANALYTICS ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        {/* Chart 1 */}
        <div className="bg-white rounded-2xl shadow relative h-[360px]">
          <h2 className="absolute top-4 left-4 font-semibold">
            Goal Achievement per Habit (%)
          </h2>

          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="w-full h-[240px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={analytics.habitStats}>
                  <XAxis type="number" domain={[0, 100]} tickFormatter={v => `${v}%`} />
                  <YAxis type="category" dataKey="name" width={170} interval={0} />
                  <Tooltip formatter={(v: any) => `${v}%`} />
                  <Bar dataKey="percent" radius={[0, 10, 10, 0]}>
                    {analytics.habitStats.map((h, i) => (
                      <Cell key={i} fill={h.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="bg-white rounded-2xl shadow relative h-[360px]">
          <h2 className="absolute top-4 left-4 font-semibold">
            Overall Goal Achievement
          </h2>

          <div className="absolute inset-0 flex items-center justify-center">
            <RadialBarChart
              width={220}
              height={220}
              innerRadius="70%"
              outerRadius="100%"
              data={[{ value: analytics.overallPercent }]}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar dataKey="value" fill="#16a34a" />
              <text x={110} y={115} textAnchor="middle" className="text-2xl font-bold">
                {analytics.overallPercent}%
              </text>
              <text x={110} y={140} textAnchor="middle" className="text-xs fill-slate-500">
                Goals Achieved
              </text>
            </RadialBarChart>
          </div>
        </div>

        {/* Chart 3 */}
        <div className="bg-white rounded-2xl shadow p-4">
          <h2 className="font-semibold mb-3">Habit Goal Progress</h2>

          {analytics.habitStats.map(h => (
            <div key={h.name} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>{h.name}</span>
                <span>{h.done} / {h.goal}</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${Math.min(h.percent, 100)}%`,
                    background: h.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== TABLE ===== */}
      <div className="bg-white rounded-2xl shadow overflow-x-auto mb-8">
        <table className="min-w-max text-sm">
          <thead className="bg-slate-100 sticky top-0">
            <tr>
              <th className="sticky left-0 bg-slate-100 px-3 py-2">Habit</th>
              <th className="sticky left-[140px] bg-slate-100 px-3 py-2">Goal</th>
              {Array.from({ length: days }, (_, i) => (
                <th key={i} className="px-2 py-1 text-center">
                  <div>{i + 1}</div>
                  <div className="text-xs text-slate-500">
                    {dayLabel(year, month, i + 1)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map(h => (
              <tr key={h.name}>
                <td className="sticky left-0 bg-white px-3 py-2 font-medium">
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{ background: h.color }}
                  />
                  {h.name}
                </td>

                <td className="sticky left-[140px] bg-white px-3 py-2">
                  <input
                    type="number"
                    value={goals?.[h.name] ?? ""}
                    onChange={e => updateGoal(h.name, Number(e.target.value))}
                    className="w-16 border rounded px-2 py-1 text-xs"
                  />
                </td>

                {Array.from({ length: days }, (_, i) => (
                  <td key={i} className="text-center">
                    <input
                      type="checkbox"
                      checked={!!data?.[h.name]?.[
                        `${year}-${String(month + 1).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`
                      ]}
                      onChange={() => toggle(h.name, i + 1)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== MANAGE HABITS MODAL ===== */}
      {showHabitModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-semibold">Manage Habits</h2>
              <button onClick={() => setShowHabitModal(false)}>✕</button>
            </div>

            <h3 className="text-sm font-medium text-slate-500 mb-2">
              Default Habits
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {DEFAULT_HABITS.map(h => (
                <div
                  key={h.name}
                  className="bg-slate-100 rounded-lg px-3 py-2 flex items-center gap-2"
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: h.color }} />
                  <span>{h.name}</span>
                  <span className="ml-auto text-xs text-slate-400">Locked</span>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-medium text-slate-500 mb-2">
              Custom Habits
            </h3>

            {habits
              .filter(h => !DEFAULT_HABITS.some(d => d.name === h.name))
              .map(h => (
                <div key={h.name} className="flex gap-3 mb-2">
                  <input
                    type="color"
                    value={h.color}
                    onChange={e => {
                      const updated = habits.map(x =>
                        x.name === h.name ? { ...x, color: e.target.value } : x
                      );
                      setHabits(updated);
                      save(data, goals, updated);
                    }}
                  />
                  <input
                    value={h.name}
                    disabled
                    className="flex-1 border rounded px-2 py-1"
                  />
                  <button
                    onClick={() => removeHabit(h.name)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}

            <div className="border-t pt-4 mt-4">
              <h3 className="text-sm font-medium text-slate-500 mb-2">
                Add New Habit
              </h3>
              <div className="flex gap-3">
                <input
                  value={newHabit}
                  onChange={e => setNewHabit(e.target.value)}
                  placeholder="Habit name"
                  className="border rounded px-3 py-2 flex-1"
                />
                <input
                  type="color"
                  value={newColor}
                  onChange={e => setNewColor(e.target.value)}
                />
                <button
                  onClick={addHabit}
                  className="bg-black text-white px-4 rounded"
                >
                  Add
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- STAT CARD ---------------- */

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
}
