
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Problems() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    platform: "LeetCode",
    difficulty: "Easy",
    topic: "Array",
  });

  // ================= FETCH PROBLEMS =================

  const fetchProblems = async () => {
    try {
      if (!user?.id) {
        setError("User not found. Please login again.");
        return;
      }

      const response = await api.get(`/problems/${user.id}`);

      if (response.data.success) {
        setProblems(response.data.problems);
      }
    } catch (error) {
      console.error("FETCH PROBLEMS ERROR:", error);
      setError("Failed to load problems.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  // ================= FORM CHANGE =================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ================= ADD PROBLEM =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.title.trim()) {
      setError("Please enter a problem title.");
      return;
    }

    try {
      setAdding(true);

      const response = await api.post("/problems", {
        userId: user.id,
        title: form.title,
        platform: form.platform,
        difficulty: form.difficulty,
        topic: form.topic,
      });

      if (response.data.success) {
        setForm({
          title: "",
          platform: "LeetCode",
          difficulty: "Easy",
          topic: "Array",
        });

        await fetchProblems();
      }
    } catch (error) {
      console.error("ADD PROBLEM ERROR:", error);

      setError(
        error.response?.data?.message ||
          "Failed to add problem."
      );
    } finally {
      setAdding(false);
    }
  };

  // ================= DIFFICULTY STYLE =================

  const getDifficultyStyle = (difficulty) => {
    if (difficulty === "Easy") {
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    }

    if (difficulty === "Medium") {
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }

    if (difficulty === "Hard") {
      return "bg-red-500/10 text-red-400 border-red-500/20";
    }

    return "bg-zinc-800 text-zinc-400 border-zinc-700";
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* ================= SIDEBAR ================= */}

      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-zinc-800 bg-zinc-900 md:block">

        {/* Logo */}

        <div className="flex h-20 items-center gap-3 border-b border-zinc-800 px-6">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-bold shadow-lg shadow-violet-600/20">
            {"</>"}
          </div>

          <span className="text-xl font-bold">
            Code<span className="text-violet-400">Verse</span>
          </span>

        </div>

        {/* Navigation */}

        <nav className="mt-6 px-4">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Main Menu
          </p>

          <div className="space-y-2">

            <button
              onClick={() => navigate("/dashboard")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>⌂</span>
              Dashboard
            </button>

            <button
              onClick={() => navigate("/problems")}
              className="flex w-full items-center gap-3 rounded-xl bg-violet-600 px-4 py-3 text-left text-sm font-medium text-white"
            >
              <span>💻</span>
              Problems
            </button>

            <button
              onClick={() => navigate("/analytics")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
            >
              <span>📊</span>
              Analytics
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

        {/* Logout */}

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="absolute bottom-6 left-4 right-4 flex w-[calc(100%-2rem)] items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10"
        >
          <span>↪</span>
          Logout
        </button>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="md:ml-64">

        {/* Header */}

        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 backdrop-blur-md">

          <div>
            <h1 className="text-xl font-semibold">
              Problem Tracker
            </h1>

            <p className="text-sm text-zinc-500">
              Track every problem you solve.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold">
            {user?.name?.charAt(0).toUpperCase() || "D"}
          </div>

        </header>

        <div className="p-6">

          {/* Page Heading */}

          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Coding Problems
            </h2>

            <p className="mt-2 text-zinc-500">
              Add and manage your solved coding problems.
            </p>
          </div>

          {/* Error */}

          {error && (
            <div className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* ================= ADD PROBLEM ================= */}

          <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

            <h3 className="mb-6 text-xl font-semibold">
              Add New Problem
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >

              {/* Title */}

              <div className="lg:col-span-2">
                <label className="mb-2 block text-sm text-zinc-400">
                  Problem Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g. Two Sum"
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
              </div>

              {/* Platform */}

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Platform
                </label>

                <select
                  name="platform"
                  value={form.platform}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                >
                  <option>LeetCode</option>
                  <option>CodeChef</option>
                  <option>HackerRank</option>
                  <option>GeeksforGeeks</option>
                  <option>Codeforces</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Difficulty */}

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Difficulty
                </label>

                <select
                  name="difficulty"
                  value={form.difficulty}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                >
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              {/* Topic */}

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Topic
                </label>

                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-violet-500"
                >
                  <option>Array</option>
                  <option>String</option>
                  <option>Linked List</option>
                  <option>Stack</option>
                  <option>Queue</option>
                  <option>Hashing</option>
                  <option>Binary Search</option>
                  <option>Tree</option>
                  <option>Graph</option>
                  <option>Dynamic Programming</option>
                  <option>Greedy</option>
                  <option>Recursion</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Button */}

              <div className="flex items-end lg:col-span-3">

                <button
                  type="submit"
                  disabled={adding}
                  className="w-full rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {adding ? "Adding..." : "+ Add Problem"}
                </button>

              </div>

            </form>

          </div>

          {/* ================= PROBLEMS LIST ================= */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60">

            <div className="flex items-center justify-between border-b border-zinc-800 p-6">

              <div>
                <h3 className="text-xl font-semibold">
                  Solved Problems
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {problems.length} problem
                  {problems.length !== 1 ? "s" : ""} solved
                </p>
              </div>

              <button
                onClick={() => navigate("/analytics")}
                className="rounded-lg border border-violet-500/30 px-4 py-2 text-sm text-violet-400 transition hover:bg-violet-500/10"
              >
                View Analytics →
              </button>

            </div>

            {loading ? (

              <div className="p-10 text-center text-zinc-500">
                Loading problems...
              </div>

            ) : problems.length === 0 ? (

              <div className="p-10 text-center">

                <div className="text-4xl">
                  💻
                </div>

                <h4 className="mt-4 text-lg font-semibold">
                  No problems yet
                </h4>

                <p className="mt-2 text-sm text-zinc-500">
                  Add your first solved problem above.
                </p>

              </div>

            ) : (

              <div className="divide-y divide-zinc-800">

                {problems.map((problem) => (

                  <div
                    key={problem.id}
                    className="flex flex-col gap-4 p-5 transition hover:bg-zinc-800/30 md:flex-row md:items-center md:justify-between"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                        ✓
                      </div>

                      <div>

                        <h4 className="font-semibold">
                          {problem.title}
                        </h4>

                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">

                          <span>
                            {problem.platform}
                          </span>

                          <span>•</span>

                          <span>
                            {problem.topic || "Other"}
                          </span>

                          <span>•</span>

                          <span>
                            {new Date(
                              problem.solvedAt
                            ).toLocaleDateString()}
                          </span>

                        </div>

                      </div>

                    </div>

                    <span
                      className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${getDifficultyStyle(
                        problem.difficulty
                      )}`}
                    >
                      {problem.difficulty || "N/A"}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </main>

    </div>
  );
}

export default Problems;