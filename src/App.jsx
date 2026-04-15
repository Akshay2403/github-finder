import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import RepoDetails from "./pages/RepoDetail";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route
            path="/profile/:username/repos/:repoName"
            element={<RepoDetails />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="py-4 text-center text-slate-600 text-xs border-t border-slate-900">
        © {new Date().getFullYear()} Github Finder by /Akshay2403
      </footer>
    </div>
  );
}
