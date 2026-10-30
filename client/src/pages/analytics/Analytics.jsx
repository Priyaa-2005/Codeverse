import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import api from "../../services/api";

function Analytics() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        if (!user?.id) return;

        const response = await api.get(`/analytics/${user.id}`);

        if (response.data.success) {
          setAnalytics(response.data);
        }
      } catch (error) {
        console.error("ANALYTICS FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [user?.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 p-8 text-white">
        <p className="text-zinc-400">Loading analytics...</p>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-zinc-950 p-8 text-white">
        <p className="text-red-400">
          Failed to load analytics.
        </p>
      </div>
    );
  }

  const difficultyData = Object.entries(
    analytics.difficultyCounts
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const platformData = Object.entries(
    analytics.platformCounts
  ).map(([name, value]) => ({
    name,
    value,
  }));

  const topicData = Object.entries(
    analytics.topicCounts
  ).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="min-h-screen bg-zinc-950 p-6 text-white md:p-8">

      
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Analytics
        </h1>

        <p className="mt-2 text-zinc-500">
          Understand your coding progress and performance.
        </p>
      </div>

      
      <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-500">
            Total Problems
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {analytics.totalProblems}
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-500">
            Easy
          </p>

          <h2 className="mt-2 text-3xl font-bold text-emerald-400">
            {analytics.difficultyCounts.Easy}
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-500">
            Medium
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-400">
            {analytics.difficultyCounts.Medium}
          </h2>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-500">
            Hard
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-400">
            {analytics.difficultyCounts.Hard}
          </h2>
        </div>

      </div>

      
      <div className="grid gap-6 lg:grid-cols-2">

        
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Problems by Difficulty
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={difficultyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

                <XAxis
                  dataKey="name"
                  stroke="#71717a"
                />

                <YAxis
                  allowDecimals={false}
                  stroke="#71717a"
                />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#7c3aed"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-6 text-xl font-semibold">
            Problems by Platform
          </h2>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {platformData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index % 2 === 0
                          ? "#7c3aed"
                          : "#a78bfa"
                      }
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 lg:col-span-2">
          <h2 className="mb-6 text-xl font-semibold">
            Problems by Topic
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topicData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#27272a"
                />

                <XAxis
                  dataKey="name"
                  stroke="#71717a"
                />

                <YAxis
                  allowDecimals={false}
                  stroke="#71717a"
                />

                <Tooltip />

                <Bar
                  dataKey="value"
                  fill="#8b5cf6"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;