
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DSARoadmap() {
  const navigate = useNavigate();

  const [completed, setCompleted] = useState([]);

  const topics = [
    {
      id: 1,
      name: "Arrays",
      problems: 15,
      level: "Beginner",
    },
    {
      id: 2,
      name: "Strings",
      problems: 12,
      level: "Beginner",
    },
    {
      id: 3,
      name: "Linked List",
      problems: 12,
      level: "Intermediate",
    },
    {
      id: 4,
      name: "Stack & Queue",
      problems: 10,
      level: "Intermediate",
    },
    {
      id: 5,
      name: "Binary Search",
      problems: 10,
      level: "Intermediate",
    },
    {
      id: 6,
      name: "Trees",
      problems: 15,
      level: "Intermediate",
    },
    {
      id: 7,
      name: "Graphs",
      problems: 15,
      level: "Advanced",
    },
    {
      id: 8,
      name: "Dynamic Programming",
      problems: 15,
      level: "Advanced",
    },
  ];

  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const progress = Math.round(
    (completed.length / topics.length) * 100
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Sidebar */}

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
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              🏠 Dashboard
            </button>

            <button
              onClick={() => navigate("/problems")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              💻 Problems
            </button>

            <button
              onClick={() => navigate("/analytics")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              📊 Analytics
            </button>

            <button
              onClick={() => navigate("/goals")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              🎯 Goals
            </button>

            <button
              onClick={() => navigate("/dsa-roadmap")}
              className="flex w-full items-center gap-3 rounded-xl bg-violet-600 px-4 py-3 text-left text-sm font-medium text-white"
            >
              🧠 DSA Roadmap
            </button>

          </div>

          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Account
          </p>

          <div className="space-y-2">

            <button
              onClick={() => navigate("/profile")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              👤 Profile
            </button>

            <button
              onClick={() => navigate("/settings")}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              ⚙️ Settings
            </button>

          </div>

        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="absolute bottom-6 left-4 right-4 rounded-xl px-4 py-3 text-left text-sm text-red-400 hover:bg-red-500/10"
        >
          ↪ Logout
        </button>

      </aside>

      {/* Main */}

      <main className="md:ml-64">

        <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 backdrop-blur-md">

          <div>
            <h1 className="text-xl font-semibold">
              DSA Roadmap
            </h1>

            <p className="text-sm text-zinc-500">
              Master Data Structures & Algorithms step by step.
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 font-semibold">
            D
          </div>

        </header>

        <div className="p-6">

          {/* Heading */}

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              DSA Learning Roadmap
            </h2>

            <p className="mt-2 text-zinc-500">
              Follow the roadmap and complete each topic.
            </p>

          </div>

          {/* Progress */}

          <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="text-lg font-semibold">
                  Overall Progress
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {completed.length} of {topics.length} topics completed
                </p>
              </div>

              <span className="text-2xl font-bold text-violet-400">
                {progress}%
              </span>

            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">

              <div
                className="h-full rounded-full bg-violet-600 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

          {/* Topics */}

          <div className="grid gap-5 md:grid-cols-2">

            {topics.map((topic, index) => {

              const isCompleted = completed.includes(topic.id);

              return (
                <div
                  key={topic.id}
                  className={`rounded-2xl border p-6 transition ${
                    isCompleted
                      ? "border-violet-500/40 bg-violet-500/5"
                      : "border-zinc-800 bg-zinc-900/60"
                  }`}
                >

                  <div className="flex items-start gap-4">

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${
                        isCompleted
                          ? "bg-violet-600"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-3">

                        <h3 className="text-lg font-semibold">
                          {topic.name}
                        </h3>

                        <span className="text-xs text-violet-400">
                          {topic.level}
                        </span>

                      </div>

                      <p className="mt-2 text-sm text-zinc-500">
                        Practice {topic.problems} problems
                      </p>

                      <button
                        onClick={() => toggleComplete(topic.id)}
                        className={`mt-5 rounded-xl px-4 py-2 text-sm font-medium transition ${
                          isCompleted
                            ? "bg-violet-600 text-white hover:bg-violet-500"
                            : "border border-zinc-700 text-zinc-300 hover:border-violet-500 hover:text-violet-400"
                        }`}
                      >
                        {isCompleted
                          ? "Completed ✓"
                          : "Mark Complete"}
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </main>

    </div>
  );
}

export default DSARoadmap;
