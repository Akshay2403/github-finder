export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-400 font-medium">Fetching Data...</p>
    </div>
  );
}
