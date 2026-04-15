import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center px-4">
      {/* Visual Element */}
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black text-slate-900 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-blue-400 tracking-widest uppercase">
            User Not Found
          </p>
        </div>
      </div>

      <div className="max-w-md space-y-6">
        <p className="text-slate-400 text-lg">
          The GitHub explorer got lost in the void. This profile or page doesn't
          exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
