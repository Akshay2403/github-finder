import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const activeClass = (path) => {
    const isHome = path === "/" && location.pathname === "/";
    // Check if it's the specific path OR if the URL starts with the path (for /profile/...)
    const isProfile =
      path === "/profile" && location.pathname.startsWith("/profile");

    return isHome || isProfile
      ? "text-blue-400 border-b-2 border-blue-400"
      : "text-slate-300 hover:text-white transition-colors";
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Github Finder
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className={`pb-1 ${activeClass("/")}`}>
              Home
            </Link>
            <Link to="/profile" className={`pb-1 ${activeClass("/profile")}`}>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

//bradtraversy
