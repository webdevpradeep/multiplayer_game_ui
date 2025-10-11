const Loader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8">
        {/* Simple circular loader */}
        <div className="relative w-32 h-32">
          {/* Spinning circle */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin"></div>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Loading</h2>
          <p className="text-sm text-gray-400">Please wait...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
