import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
import useSearchUser from "../hooks/useSearchUser";

function SearchBox() {
  const { query, searchUser, setQuery } = useSearchUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUser();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Github User..."
        className="bg-slate-800 text-white text-sm rounded-l-lg px-4 py-2 border-y border-l border-slate-700 focus:outline-none focus:border-blue-500 w-40 lg:w-64"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-r-lg border border-blue-600 transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default function Home() {
  const { recentSearches } = useContext(GithubContext);
  const { searchUser } = useSearchUser();

  const allRecenrsearches =
    JSON.parse(localStorage.getItem("recentSearches")) || recentSearches;

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] px-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="space-y-2">
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Discover developers, explore repositories, and track stats in
            seconds.
          </p>
        </div>
        <div className="flex justify-center pt-4">
          <SearchBox />
        </div>
        <div className="flex justify-center pt-4">
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Recent Searched Users ⬇
          </p>
        </div>

        <div className="flex justify-center">
          {allRecenrsearches.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {allRecenrsearches.map((search) => (
                <button
                  key={search}
                  onClick={() => searchUser(search)}
                  className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full"
                >
                  {search}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Real-time Data
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            Repo Analysis
          </div>
        </div>
      </div>
    </div>
  );
}
