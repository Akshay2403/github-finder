import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useGithub } from "../hooks/useGithub";

export default function Profile() {
  const { username } = useParams();
  console.log("profile", useParams());
  const { data, loading, repos, error } = useGithub(username);

  const [sortBy, setSortBy] = useState("stars");
  const [langFilter, setLangFilter] = useState("All");

  const filteredRepos = useMemo(() => {
    let result = [...repos];
    if (langFilter !== "All") {
      result = result.filter((r) => r.language === langFilter);
    }
    if (sortBy === "stars") {
      result.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [repos, sortBy, langFilter]);

  const languages = useMemo(() => {
    const langs = repos.map((r) => r.language).filter(Boolean);
    return ["All", ...new Set(langs)];
  }, [repos]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-slate-200">
      {loading && <Loader />}
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg">
          {error}
        </div>
      )}

      {data && (
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <img
            src={data.avatar_url}
            alt={data.name}
            className="w-32 h-32 rounded-full border-4 border-blue-500/20 shadow-xl shadow-blue-500/10"
          />
          <div className="text-center md:text-left">
            <h1>{data.name || data.login}</h1>
            <p className="text-slate-400 max-w-xl mb-4">
              {data.bio || "No bio available"}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
              <span className="bg-slate-800 px-3 py-1 rounded-full text-blue-400">
                👥 {data.followers} Followers
              </span>
              <span className="bg-slate-800 px-3 py-1 rounded-full text-cyan-400">
                📦 {data.public_repos} Repos
              </span>
            </div>
          </div>
        </div>
      )}

      {repos.length > 0 && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2>Repositories ({filteredRepos.length})</h2>
            <div className="flex gap-3">
              <select
                onChange={(e) => setSortBy(e.target.value)}
                value={sortBy}
              >
                <option value="stars">⭐ Stars</option>
                <option value="name">🔤 Name</option>
                <option value="updated">🕐 Updated</option>
              </select>

              <select
                onChange={(e) => setLangFilter(e.target.value)}
                value={langFilter}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 📂 Repo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="group bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex justify-between items-start mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    {repo.name}
                  </a>
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {repo.language || "N/A"}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    ⭐ {repo.stargazers_count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
