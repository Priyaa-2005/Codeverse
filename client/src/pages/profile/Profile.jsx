
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <main className="p-6 md:ml-64">

        <div className="mx-auto max-w-4xl">

          {/* Header */}

          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              My Profile
            </h1>

            <p className="mt-2 text-zinc-500">
              View your CodeVerse account information.
            </p>
          </div>

          {/* Profile Card */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">

            <div className="flex flex-col items-center gap-6 sm:flex-row">

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-600 text-3xl font-bold">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  {user?.name || "User"}
                </h2>

                <p className="mt-1 text-zinc-500">
                  {user?.email || "No email available"}
                </p>

                <span className="mt-3 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400">
                  CodeVerse Member
                </span>
              </div>

            </div>

            {/* Information */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm text-zinc-500">
                  Full Name
                </p>

                <p className="mt-2 font-medium">
                  {user?.name || "Not available"}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
                <p className="text-sm text-zinc-500">
                  Email Address
                </p>

                <p className="mt-2 font-medium">
                  {user?.email || "Not available"}
                </p>
              </div>

            </div>

          </div>

          {/* Back Button */}

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

export default Profile;