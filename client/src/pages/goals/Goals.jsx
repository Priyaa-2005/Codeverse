
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Goals() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    target: "",
    deadline: "",
  });

  // ================= FETCH GOALS =================

  const fetchGoals = async () => {
    try {
      if (!user?.id) {
        setError("User not found. Please login again.");
        return;
      }

      const response = await api.get(`/goals/${user.id}`);

      if (response.data.success) {
        setGoals(response.data.goals);
      }
    } catch (error) {
      console.error("FETCH GOALS ERROR:", error);
      setError("Failed to load goals.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  // ================= FORM CHANGE =================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= ADD GOAL =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.title.trim()) {
      setError("Please enter a goal title.");
      return;
    }

    if (!form.target || Number(form.target) <= 0) {
      setError("Please enter a valid target.");
      return;
    }

    try {
      setAdding(true);

      const response = await api.post("/goals", {
        userId: user.id,
        title: form.title,
        target: Number(form.target),
        deadline: form.deadline || null,
      });

      if (response.data.success) {
        setForm({
          title: "",
          target: "",
          deadline: "",
        });

        await fetchGoals();
      }
    } catch (error) {
      console.error("ADD GOAL ERROR:", error);

      setError(
        error.response?.data?.message ||
          "Failed to create goal."
      );
    } finally {
      setAdding(false);
    }
  };

  // ================= UPDATE GOAL =================

  const updateGoal = async (goal) => {
    const newCurrent = prompt(
      `How many problems have you completed?\nTarget: ${goal.target}`,
      goal.current
    );

    if (newCurrent === null) {
      return;
    }

    const current = Number(newCurrent);

    if (Number.isNaN(current) || current < 0) {
      alert("Please enter a valid number.");
      return;
    }

    try {
      await api.put(`/goals/${goal.id}`, {
        current,
      });

      await fetchGoals();
    } catch (error) {
      console.error("UPDATE GOAL ERROR:", error);

      alert("Failed to update goal.");
    }
  };

  // ================= PROGRESS =================

  const getProgress = (goal) => {
    if (!goal.target) return 0;

    return Math.min(
      Math.round((goal.current / goal.target) * 100),
      100
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ================= SIDEBAR ================= */}

      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-zinc-800 bg-zinc-900 md:block">

        <div className="flex h-20 items-center gap-3 border-b border-zinc-800 px-6">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-bold">
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
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>⌂</span>
              Dashboard
            </button>

            <button
              onClick={() => navigate("/problems")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>💻</span>
              Problems
            </button>

            <button
              onClick={() => navigate("/analytics")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>📊</span>
              Analytics
            </button>

            <button
              onClick={() => navigate("/goals")}
              className="flex w-full items-center gap-3 rounded-xl bg-violet-600 px-4 py-3 text-left text-sm font-medium text-white"
            >
              <span>🎯</span>
              Goals
            </button>

            <button
              onClick={() => navigate("/dsa-roadmap")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
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
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>👤</span>
              Profile
            </button>

            <button
              onClick={() => navigate("/settings")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>⚙️</span>
              Settings
            </button>

          </div>

        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="absolute bottom-6 left-4 right-4 flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10"
        >
          <span>↪</span>
          Logout
        </button>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="md:ml-64">

        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 backdrop-blur-md">

          <div>
            <h1 className="text-xl font-semibold">
              Goals
            </h1>

            <p className="text-sm text-zinc-500">
              Set goals and track your coding progress.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold">
            {user?.name?.charAt(0).toUpperCase() || "D"}
          </div>

        </header>

        <div className="p-6">

          {/* Heading */}

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Coding Goals
            </h2>

            <p className="mt-2 text-zinc-500">
              Create goals and stay consistent with your coding journey.
            </p>

          </div>

          {/* Error */}

          {error && (
            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* ================= CREATE GOAL ================= */}

          <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

            <h3 className="mb-6 text-xl font-semibold">
              Create New Goal
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 md:grid-cols-3"
            >

              <div className="md:col-span-1">

                <label className="mb-2 block text-sm text-zinc-400">
                  Goal Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Solve 20 DSA Problems"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-zinc-400">
                  Target Problems
                </label>

                <input
                  type="number"
                  name="target"
                  min="1"
                  value={form.target}
                  onChange={handleChange}
                  placeholder="20"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-zinc-400">
                  Deadline
                </label>

                <input
                  type="date"
                  name="deadline"
                  value={form.deadline}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                />

              </div>

              <div className="md:col-span-3">

                <button
                  type="submit"
                  disabled={adding}
                  className="w-full rounded-xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {adding ? "Creating..." : "+ Create Goal"}
                </button>

              </div>

            </form>

          </div>

          {/* ================= GOALS ================= */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Your Goals
            </h3>

            {loading ? (

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 text-center text-zinc-500">
                Loading goals...
              </div>

            ) : goals.length === 0 ? (

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-10 text-center">

                <div className="text-4xl">
                  🎯
                </div>

                <h4 className="mt-4 text-lg font-semibold">
                  No goals yet
                </h4>

                <p className="mt-2 text-sm text-zinc-500">
                  Create your first coding goal above.
                </p>

              </div>

            ) : (

              <div className="grid gap-5 md:grid-cols-2">

                {goals.map((goal) => {

                  const progress = getProgress(goal);

                  return (
                    <div
                      key={goal.id}
                      className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <h4 className="text-lg font-semibold">
                            {goal.title}
                          </h4>

                          <p className="mt-1 text-sm text-zinc-500">
                            Target: {goal.target} problems
                          </p>

                        </div>

                        <span className="text-sm font-semibold text-violet-400">
                          {progress}%
                        </span>

                      </div>

                      {/* Progress */}

                      <div className="mt-6 h-3 overflow-hidden rounded-full bg-zinc-800">

                        <div
                          className="h-full rounded-full bg-violet-600 transition-all duration-500"
                          style={{
                            width: `${progress}%`,
                          }}
                        />

                      </div>

                      <div className="mt-3 flex justify-between text-sm">

                        <span className="text-zinc-400">
                          {goal.current} solved
                        </span>

                        <span className="text-zinc-600">
                          {goal.target} total
                        </span>

                      </div>

                      {goal.deadline && (
                        <p className="mt-4 text-xs text-zinc-500">
                          Deadline:{" "}
                          {new Date(
                            goal.deadline
                          ).toLocaleDateString()}
                        </p>
                      )}

                      {goal.completed ? (

                        <div className="mt-5 rounded-xl bg-emerald-500/10 px-4 py-3 text-center text-sm font-medium text-emerald-400">
                          ✓ Goal Completed
                        </div>

                      ) : (

                        <button
                          onClick={() => updateGoal(goal)}
                          className="mt-5 w-full rounded-xl border border-violet-500/30 py-3 text-sm font-medium text-violet-400 transition hover:bg-violet-500/10"
                        >
                          Update Progress
                        </button>

                      )}

                    </div>
                  );
                })}

              </div>

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default Goals;
