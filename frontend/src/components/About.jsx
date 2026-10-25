function About() {
  return (
    <div id="about" className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#4B3BCB] shadow-sm">
            ✨ Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#17153B]">
            About VIO
          </h2>
          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Empowering patients to practice therapy at home with AI-powered guidance and clinician-grade tracking.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7C6CFF] to-[#B78BFF] flex items-center justify-center text-2xl">
              🎯
            </div>
            <h3 className="text-2xl font-semibold text-[#17153B]">Our Mission</h3>
            <p className="text-slate-700">
              To make quality therapy accessible to everyone, everywhere. We believe that consistent practice at home is key to recovery, and our AI-assisted platform makes it possible for patients to get the support they need between clinical sessions.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7C6CFF] to-[#B78BFF] flex items-center justify-center text-2xl">
              💡
            </div>
            <h3 className="text-2xl font-semibold text-[#17153B]">Our Vision</h3>
            <p className="text-slate-700">
              A world where therapy is not limited by geography or resources. Where every patient has access to personalized, AI-powered guidance that helps them achieve their rehabilitation goals faster and more effectively.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="space-y-6 mt-12">
          <h3 className="text-3xl font-semibold text-center text-[#17153B]">What We Offer</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 to-[#B78BFF]/10 border border-[#4B3BCB]/20 p-6 space-y-3">
              <div className="text-3xl">🗣️</div>
              <h4 className="text-xl font-semibold text-[#17153B]">Speech Therapy</h4>
              <p className="text-sm text-slate-700">
                AI-powered speech analysis and real-time feedback to help improve articulation, fluency, and communication skills.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 to-[#B78BFF]/10 border border-[#4B3BCB]/20 p-6 space-y-3">
              <div className="text-3xl">🏃</div>
              <h4 className="text-xl font-semibold text-[#17153B]">Physiotherapy</h4>
              <p className="text-sm text-slate-700">
                Motion tracking and exercise guidance to help patients recover mobility and strength with proper form and technique.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 to-[#B78BFF]/10 border border-[#4B3BCB]/20 p-6 space-y-3">
              <div className="text-3xl">📊</div>
              <h4 className="text-xl font-semibold text-[#17153B]">Progress Tracking</h4>
              <p className="text-sm text-slate-700">
                Clinician-grade analytics and reports to help both patients and therapists monitor improvement over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
