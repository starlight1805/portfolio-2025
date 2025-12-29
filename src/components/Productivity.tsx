import { useEffect, useMemo, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { RadialBarChart, RadialBar } from "recharts";

/* ---------------- CONFIG ---------------- */

const HABITS = [
  { name: "Gym", color: "bg-red-500" },
  { name: "Upskilling", color: "bg-blue-500" },
  { name: "Cardio", color: "bg-orange-500" },
  { name: "No Junk Food", color: "bg-yellow-500" },
  { name: "Reading (5 pages)", color: "bg-purple-500" },
  { name: "Sleep ≥ 7 hrs", color: "bg-indigo-500" },
  { name: "Limit Social Media", color: "bg-pink-500" },
  { name: "Skin Care", color: "bg-teal-500" },
  { name: "Hair Care", color: "bg-lime-500" },
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

/* ---------------- PAGE ---------------- */

export default function Productivity() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(0);
  const [data, setData] = useState<any>({});
  const [goals, setGoals] = useState<any>({});

  const days = daysInMonth(year, month);
  const docId = `${year}-${String(month + 1).padStart(2, "0")}`;

  useEffect(() => {
    const fetch = async () => {
      const snap = await getDoc(doc(db, "productivity", docId));
      if (snap.exists()) {
        setData(snap.data().data || {});
        setGoals(snap.data().goals || {});
      } else {
        setData({});
        setGoals({});
      }
    };
    fetch();
  }, [docId]);

  const save = async (d: any, g = goals) => {
    await setDoc(doc(db, "productivity", docId), { data: d, goals: g }, { merge: true });
  };

  const toggle = async (habit: string, day: number) => {
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

  const updateGoal = async (habit: string, value: number) => {
    const g = { ...goals, [habit]: value };
    setGoals(g);
    save(data, g);
  };

  /* ---------------- ANALYTICS ---------------- */

  const analytics = useMemo(() => {
    let totalDone = 0;
    let totalPossible = HABITS.length * days;

    const habitStats = HABITS.map(h => {
      let done = 0;
      for (let d = 1; d <= days; d++) {
        const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        if (data?.[h.name]?.[key]) done++;
      }
      totalDone += done;
      const goal = goals?.[h.name] || days;
      return {
        name: h.name,
        color: h.color,
        done,
        goal,
        percent: Math.round((done / goal) * 100),
      };
    });

    const best = habitStats.reduce((a, b) => b.percent > a.percent ? b : a, habitStats[0]);
    const worst = habitStats.reduce((a, b) => b.percent < a.percent ? b : a, habitStats[0]);

    return {
      overall: Math.round((totalDone / totalPossible) * 100),
      best,
      worst,
      goalsHit: habitStats.filter(h => h.done >= h.goal).length,
      habitStats,
    };
  }, [data, goals, month, year]);

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 sm:p-6 animate-fadeIn">

      {/* HEADER */}
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
          Productivity Dashboard
        </h1>

        <div className="flex gap-3">
          <select
            value={month}
            onChange={e => setMonth(+e.target.value)}
            className="rounded-xl border bg-white/70 backdrop-blur px-3 py-1 shadow-sm hover:shadow transition"
          >
            {MONTHS.map((m, i) => (
              <option key={m} value={i}>{m}</option>
            ))}
          </select>

          <select
            value={year}
            onChange={e => setYear(+e.target.value)}
            className="rounded-xl border bg-white/70 backdrop-blur px-3 py-1 shadow-sm hover:shadow transition"
          >
            {YEARS.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Stat title="Overall %" value={`${analytics.overall}%`} />
        <Stat title="Top Habit" value={analytics.best?.name} />
        <Stat title="Weak Habit" value={analytics.worst?.name} />
        <Stat title="Goals Hit" value={`${analytics.goalsHit}/${HABITS.length}`} />
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* LEFT — TABLE */}
        <div className="lg:col-span-3 bg-white/80 backdrop-blur rounded-2xl shadow-lg overflow-x-auto transition hover:shadow-xl">
          <table className="min-w-max text-sm border-collapse">
            <thead className="bg-slate-100 sticky top-0 z-20">
              <tr>
                <th className="sticky left-0 z-30 bg-slate-100 px-3 py-2 text-left">Habit</th>
                <th className="sticky left-[140px] z-30 bg-slate-100 px-3 py-2 text-left">Goal</th>
                {Array.from({ length: days }, (_, i) => (
                  <th key={i} className="px-2 py-1 text-center">
                    <div>{i + 1}</div>
                    <div className="text-xs text-slate-500">{dayLabel(year, month, i + 1)}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {HABITS.map(h => (
                <tr key={h.name} className="hover:bg-slate-50 transition">
                  <td className="sticky left-0 z-20 bg-white px-3 py-2 font-medium whitespace-nowrap">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${h.color}`} />
                    {h.name}
                  </td>

                  <td className="sticky left-[140px] z-20 bg-white px-3 py-2">
                    <input
                      type="number"
                      min={0}
                      max={days}
                      value={goals?.[h.name] ?? ""}
                      placeholder={`${days}`}
                      onChange={e => updateGoal(h.name, Number(e.target.value))}
                      className="w-16 border rounded-lg px-2 py-1 text-xs focus:ring-2 focus:ring-blue-400 transition"
                    />
                  </td>

                  {Array.from({ length: days }, (_, i) => {
                    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`;
                    return (
                      <td key={i} className="text-center">
                        <input
                          type="checkbox"
                          checked={!!data?.[h.name]?.[key]}
                          onChange={() => toggle(h.name, i + 1)}
                          className="w-4 h-4 accent-green-600 transition transform hover:scale-110"
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT — ANALYTICS */}
        <div className="lg:col-span-2 space-y-6">

          <Card title="Overall Trend">
            <RadialBarChart
              width={180}
              height={180}
              innerRadius="70%"
              outerRadius="100%"
              data={[{ value: analytics.overall }]}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar dataKey="value" fill="#22c55e" />
              <text x={90} y={100} textAnchor="middle"
                className="text-xl font-bold fill-slate-800">
                {analytics.overall}%
              </text>
            </RadialBarChart>
          </Card>

          <Card title="Habit Goal Progress">
            {analytics.habitStats.map(h => (
              <div key={h.name} className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>{h.name}</span>
                  <span className="font-medium">{h.done} / {h.goal}</span>
                </div>
                <div className="h-2 bg-slate-200 rounded overflow-hidden">
                  <div
                    className={`h-2 rounded transition-all duration-700 ${h.done >= h.goal ? "bg-green-500" : "bg-blue-500"}`}
                    style={{ width: `${Math.min(h.percent, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Stat({ title, value }: any) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-4 transition hover:shadow-lg">
      <div className="text-xs text-slate-500">{title}</div>
      <div className="text-xl font-bold mt-1 text-slate-800">{value}</div>
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md p-4 transition hover:shadow-lg">
      <h2 className="font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}
