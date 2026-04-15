export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6">
      <div className="max-w-4xl text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />
          Built with ShipKit AI
        </div>

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
          Ship faster with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
            AI&#8209;generated apps
          </span>
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Describe what you want to build. We generate a working Next.js app with
          authentication, database, and deployment — all in one click.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="#start"
            className="rounded-lg bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            Get Started
          </a>
          <a
            href="#docs"
            className="rounded-lg border-2 border-slate-300 px-8 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors"
          >
            View Docs
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-10 w-full max-w-lg mx-auto">
          {[
            { label: "Apps Built", value: "12k+" },
            { label: "Avg Time", value: "30s" },
            { label: "Models", value: "5" },
          ].map((s) => (
            <div key={s.label} className="text-center px-2">
              <div className="text-3xl font-bold text-slate-900 tabular-nums">{s.value}</div>
              <div className="text-sm text-slate-500 mt-2 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}