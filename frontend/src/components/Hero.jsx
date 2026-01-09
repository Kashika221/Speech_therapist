function Hero() {
    
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      {/* Left text side */}
      <div className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#4B3BCB] shadow-sm">
          ✨ Therapy, but beautifully digital
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#17153B]">
          Where Better Speech <br className="hidden md:block" />
          &amp; Movement Grow
        </h1>
        <p className="text-sm md:text-base text-slate-700 max-w-md">
          VIO is an AI‑assisted therapy companion that helps
          patients practice speech and physiotherapy exercises at home,
          with clinician‑grade tracking and simple, friendly feedback.
        </p>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => window.location.href = 'http://localhost:8000/'}
            className="inline-flex items-center justify-center rounded-full bg-[#17153B] hover:bg-[#26235A] text-sm px-7 py-3 font-medium text-white transition-colors"
          >
            🗣️ Start Speech Therapy
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-[#4B3BCB]/40 text-[#17153B] bg-white/70 hover:bg-white text-sm px-7 py-3 font-medium transition-colors">
            🏃 Start Physiotherapy
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Your exercises stay private on your device.
        </p>
      </div>

      {/* Right visual stats card */}
      <div className="relative h-64 md:h-80 flex items-center justify-center">
        <div
          className="relative w-full max-w-sm h-56 rounded-[32px]
          bg-gradient-to-br from-[#7C6CFF] via-[#B78BFF] to-[#FFE6FF]
          shadow-2xl overflow-hidden
          transition-transform duration-500 ease-out
          hover:scale-[1.03] hover:shadow-[0_28px_80px_rgba(87,74,200,0.55)]
          animate-[float_6s_ease-in-out_infinite]"
        >
          <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,_#ffffffaa,_#ffffff00)] animate-pulse" />

          <div
            className="absolute left-6 bottom-6 right-6 rounded-2xl bg-white/70
            backdrop-blur-md shadow-lg px-5 py-4 flex flex-col gap-3
            transition-all duration-500 hover:bg-white/85"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">
                Today&apos;s practice
              </span>
              <span className="text-[10px] px-2 py-1 rounded-full bg-[#E7E3FF] text-[#4B3BCB] font-semibold animate-pulse">
                LIVE
              </span>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-semibold text-[#17153B]">18 min</div>
                <div className="text-[11px] text-slate-500">guided therapy</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-[#17153B]">92%</div>
                <div className="text-[11px] text-slate-500">speech accuracy</div>
              </div>
            </div>

            <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-[#4B3BCB] to-[#FF7AC2] animate-[progress_3s_ease-in-out_infinite]" />
            </div>

            <div className="flex justify-between text-[11px] text-slate-500">
              <span>Speech</span>
              <span>Physio</span>
            </div>
          </div>

          <div className="absolute -left-6 top-10 h-16 w-16 rounded-full bg-white/60 blur-[1px] animate-[floatBubble_8s_ease-in-out_infinite]" />
          <div className="absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-[#17153B]/80 animate-[floatBubble_7s_ease-in-out_infinite_reverse]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
