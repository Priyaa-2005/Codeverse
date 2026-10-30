
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
  className={`min-h-screen ${
    darkMode
      ? "bg-zinc-950 text-white"
      : "bg-white text-zinc-900"
  }`}
>
      <main className="p-6 md:ml-64">

        <div className="mx-auto max-w-4xl">

          {/* Header */}

          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Settings
            </h1>

            <p className="mt-2 text-zinc-500">
              Manage your CodeVerse preferences.
            </p>
          </div>

          {/* Preferences */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60">

            <div className="border-b border-zinc-800 p-6">
              <h2 className="text-lg font-semibold">
                Preferences
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Customize your CodeVerse experience.
              </p>
            </div>

            {/* Notifications */}

            <div className="flex items-center justify-between border-b border-zinc-800 p-6">

              <div>
                <h3 className="font-medium">
                  Notifications
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Receive coding reminders and updates.
                </p>
              </div>

              <button
                onClick={() =>
                  setNotifications(!notifications)
                }
                className={`relative h-6 w-11 rounded-full transition ${
                  notifications
                    ? "bg-violet-600"
                    : "bg-zinc-700"
                }`}
              >

                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    notifications
                      ? "left-6"
                      : "left-1"
                  }`}
                />

              </button>

            </div>

            {/* Dark Mode */}

            <div className="flex items-center justify-between p-6">

              <div>
                <h3 className="font-medium">
                  Dark Mode
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  Use the dark theme for CodeVerse.
                </p>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative h-6 w-11 rounded-full transition ${
                  darkMode
                    ? "bg-violet-600"
                    : "bg-zinc-700"
                }`}
              >

                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    darkMode
                      ? "left-6"
                      : "left-1"
                  }`}
                />

              </button>

            </div>

          </div>

          {/* Account */}

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60">

            <div className="border-b border-zinc-800 p-6">

              <h2 className="text-lg font-semibold">
                Account
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Manage your CodeVerse account.
              </p>

            </div>

            <div className="p-6">

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-500/30 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
              >
                Logout
              </button>

            </div>

          </div>

          {/* Back */}

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-medium transition hover:bg-violet-500"
          >
            ← Back to Dashboard
          </button>

        </div>

      </main>

    </div>
  );
}

export default Settings;
