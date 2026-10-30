import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [dashboardData, setDashboardData] = useState({
    totalProblems: 0,
    platformCounts: {},
  });

  const [loading, setLoading] = useState(true);
  const [streak, setStreak] = useState(0);
  const [weeklyGoal, setWeeklyGoal] = useState(null);

  

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        if (!user?.id) {
          console.error("User ID not found.");
          return;
        }

        const response = await api.get(`/dashboard/${user.id}`);

        if (response.data.success) {
          setDashboardData({
            totalProblems: response.data.totalProblems,
            platformCounts: response.data.platformCounts,
          });

          setWeeklyGoal(response.data.weeklyGoal);
        }

        const streakResponse = await api.get(
          `/dashboard/${user.id}/streak`
        );

        if (streakResponse.data.success) {
          setStreak(streakResponse.data.currentStreak);
        }
      } catch (error) {
        console.error("Dashboard API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user?.id]);

  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  

  const platformData = [
    {
      name: "LeetCode",
      icon: "🟠",
      count: dashboardData.platformCounts?.LeetCode || 0,
    },
    {
      name: "CodeChef",
      icon: "🟡",
      count: dashboardData.platformCounts?.CodeChef || 0,
    },
    {
      name: "HackerRank",
      icon: "🟢",
      count: dashboardData.platformCounts?.HackerRank || 0,
    },
    {
      name: "GeeksforGeeks",
      icon: "🟢",
      count: dashboardData.platformCounts?.GeeksforGeeks || 0,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

     

      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-zinc-800 bg-zinc-900 md:block">

       

        <div className="flex h-20 items-center gap-3 border-b border-zinc-800 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-bold shadow-lg shadow-violet-600/20">
            {"</>"}
          </div>

          <span className="text-xl font-bold">
            Code<span className="text-violet-400">Verse</span>
          </span>
        </div>

        

        <nav className="mt-6 px-4">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Main Menu
          </p>

          <div className="space-y-2">

            

            <button
              onClick={() => navigate("/dashboard")}
              className="flex w-full items-center gap-3 rounded-xl bg-violet-600 px-4 py-3 text-left text-sm font-medium text-white"
            >
              <span>⌂</span>
              Dashboard
            </button>

           

            <button
              onClick={() => navigate("/platforms")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>💻</span>
              Platforms
            </button>

            

            <button
              onClick={() => navigate("/analytics")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>📊</span>
              Analytics
            </button>

            

            <button
              onClick={() => navigate("/problems")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>💻</span>
              Problems
            </button>

           

            <button
              onClick={() => navigate("/goals")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>🎯</span>
              Goals
            </button>

            

            <button
              onClick={() => navigate("/dsa-roadmap")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>🧠</span>
              DSA Roadmap
            </button>

          </div>

          

          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Account
          </p>

          <div className="space-y-2">

            

            <button
              onClick={() => navigate("/profile")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>👤</span>
              Profile
            </button>

            

            <button
              onClick={() => navigate("/settings")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>⚙️</span>
              Settings
            </button>

          </div>

        </nav>

        

        <div className="absolute bottom-6 left-4 right-4">

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10"
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>

      

      <main className="md:ml-64">

       

        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 backdrop-blur-md">

          <div>
            <h1 className="text-xl font-semibold">
              Dashboard
            </h1>

            <p className="text-sm text-zinc-500">
              Track your coding journey
            </p>
          </div>

          <div className="flex items-center gap-4">

           

            <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 text-zinc-400 transition hover:border-violet-500 hover:text-white sm:flex">
              🔔
            </button>

            

            <div className="flex items-center gap-3">

              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium">
                  {user?.name || "Developer"}
                </p>

                <p className="text-xs text-zinc-500">
                  Developer
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold">
                {user?.name?.charAt(0).toUpperCase() || "D"}
              </div>

            </div>

          </div>

        </header>

        

        <div className="p-6">

         

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Welcome back,{" "}
              <span className="text-violet-400">
                {user?.name || "Developer"}
              </span>{" "}
              👋
            </h2>

            <p className="mt-2 text-zinc-500">
              Here's an overview of your coding progress.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-violet-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                  💻
                </div>

                <span className="text-xs text-emerald-400">
                  Live
                </span>

              </div>

              <p className="mt-5 text-sm text-zinc-500">
                Problems Solved
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                {loading ? "..." : dashboardData.totalProblems}
              </h3>

            </div>

            

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-violet-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-xl">
                  🔥
                </div>

                <span className="text-xs text-emerald-400">
                  Best: 21
                </span>

              </div>

              <p className="mt-5 text-sm text-zinc-500">
                Current Streak
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                {loading
                  ? "..."
                  : `${streak} ${streak === 1 ? "day" : "days"}`}
              </h3>

            </div>

           

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-violet-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                  🌐
                </div>

                <span className="text-xs text-zinc-500">
                  Active
                </span>

              </div>

              <p className="mt-5 text-sm text-zinc-500">
                Active Platforms
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                {loading
                  ? "..."
                  : Object.keys(
                      dashboardData.platformCounts
                    ).length}
              </h3>

            </div>

            

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-violet-500/40">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-xl">
                  ⏱️
                </div>

                <span className="text-xs text-emerald-400">
                  +8%
                </span>

              </div>

              <p className="mt-5 text-sm text-zinc-500">
                Coding Hours
              </p>

              <h3 className="mt-1 text-3xl font-bold">
                46h
              </h3>

            </div>

          </div>


          <div className="mt-8 grid gap-6 lg:grid-cols-3">

            {/* Coding Activity */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 lg:col-span-2">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="text-lg font-semibold">
                    Coding Activity
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Your activity over the last 7 days
                  </p>
                </div>

                <select className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-300 outline-none">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>

              </div>

              {/* Activity Bars */}

              <div className="mt-8 flex h-56 items-end justify-between gap-3">

                {[40, 65, 45, 80, 55, 90, 70].map(
                  (height, index) => (

                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-3"
                    >

                      <div className="flex h-full w-full items-end">

                        <div
                          className="w-full rounded-t-lg bg-violet-600 transition hover:bg-violet-500"
                          style={{
                            height: `${height}%`,
                          }}
                        />

                      </div>

                      <span className="text-xs text-zinc-600">
                        {
                          [
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ][index]
                        }
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

            {/* Goals */}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-lg font-semibold">
                  Weekly Goal
                </h3>

                <span className="text-sm text-violet-400">
                  {weeklyGoal
                    ? `${weeklyGoal.progress}%`
                    : "0%"}
                </span>

              </div>

              <p className="mt-2 text-sm text-zinc-500">
                {weeklyGoal?.title || "No goal set"}
              </p>

              <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">

                <div
                  className="h-full rounded-full bg-violet-600 transition-all duration-500"
                  style={{
                    width: `${weeklyGoal?.progress || 0}%`,
                  }}
                />

              </div>

              <div className="mt-4 flex justify-between text-sm">

                <span className="text-zinc-400">
                  {weeklyGoal?.current || 0} solved
                </span>

                <span className="text-zinc-600">
                  {weeklyGoal?.target || 0} total
                </span>

              </div>

              <button
                onClick={() => navigate("/goals")}
                className="mt-8 w-full rounded-xl border border-violet-500/40 py-3 text-sm font-medium text-violet-400 transition hover:bg-violet-500/10"
              >
                View Goals
              </button>

            </div>

          </div>

          {/* ================= PLATFORMS ================= */}

          <div className="mt-8">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <h3 className="text-xl font-semibold">
                  Your Platforms
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Track your progress across coding platforms
                </p>
              </div>

              <button
                onClick={() => navigate("/platforms")}
                className="text-sm text-violet-400 hover:text-violet-300"
              >
                View All →
              </button>

            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {platformData.map((platform) => (

                <div
                  key={platform.name}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:-translate-y-1 hover:border-violet-500/40"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-lg">
                      {platform.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold">
                        {platform.name}
                      </h4>

                      <p className="text-xs text-zinc-500">
                        {loading
                          ? "Loading..."
                          : `${platform.count} problems`}
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 h-2 rounded-full bg-zinc-800">

                    <div
                      className="h-full rounded-full bg-violet-600 transition-all"
                      style={{
                        width: `${Math.min(
                          platform.count * 5,
                          100
                        )}%`,
                      }}
                    />

                  </div>

                  <p className="mt-2 text-xs text-zinc-500">
                    {platform.count > 0
                      ? `${platform.count} solved`
                      : "No problems solved yet"}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;