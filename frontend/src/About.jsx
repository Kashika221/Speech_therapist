import "./index.css";
import AuthButton from "./Auth";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8E7FF] to-[#C9D4FF] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl rounded-[32px] shadow-xl bg-[#F6F5FF]">
        <div className="p-8 md:p-12 flex flex-col gap-8">
          {/* Top nav */}
          <header className="flex items-center justify-between text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="TalkRight Logo" className="h-9 w-9 rounded-full object-cover" />
              <span className="font-semibold tracking-tight text-[#17153B]">
                VIO
              </span>
            </div>

            <nav className="hidden md:flex gap-6 text-slate-600">
              <Link to="/" className="hover:text-[#17153B] text-base font-bold">Home</Link>
              <Link to="/about" className="hover:text-[#17153B] text-base font-bold">About</Link>
              <button className="hover:text-[#17153B] text-base font-bold">Testimonials</button>
              <button className="hover:text-[#17153B] text-base font-bold">Contact</button>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-full bg-[#17153B] hover:bg-[#26235A] px-5 py-2 text-sm font-medium text-white transition-colors">
                Launch demo
              </button>
              <AuthButton />
            </div>
          </header>

          {/* About Content */}
          <section className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#4B3BCB] shadow-sm">
                ✨ Our Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#17153B]">
                About VIO
              </h1>
              <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
                Empowering patients to practice therapy at home with AI-powered guidance and clinician-grade tracking.
              </p>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7C6CFF] to-[#B78BFF] flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h2 className="text-2xl font-semibold text-[#17153B]">Our Mission</h2>
                <p className="text-slate-700">
                  To make quality therapy accessible to everyone, everywhere. We believe that consistent practice at home is key to recovery, and our AI-assisted platform makes it possible for patients to get the support they need between clinical sessions.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7C6CFF] to-[#B78BFF] flex items-center justify-center text-2xl">
                  💡
                </div>
                <h2 className="text-2xl font-semibold text-[#17153B]">Our Vision</h2>
                <p className="text-slate-700">
                  A world where therapy is not limited by geography or resources. Where every patient has access to personalized, AI-powered guidance that helps them achieve their rehabilitation goals faster and more effectively.
                </p>
              </div>
            </div>

            {/* What We Offer Section */}
            <div className="space-y-6 mt-12">
              <h2 className="text-3xl font-semibold text-center text-[#17153B]">What We Offer</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 to-[#B78BFF]/10 border border-[#4B3BCB]/20 p-6 space-y-3">
                  <div className="text-3xl">🗣️</div>
                  <h3 className="text-xl font-semibold text-[#17153B]">Speech Therapy</h3>
                  <p className="text-sm text-slate-700">
                    AI-powered speech analysis and real-time feedback to help improve articulation, fluency, and communication skills.
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 to-[#B78BFF]/10 border border-[#4B3BCB]/20 p-6 space-y-3">
                  <div className="text-3xl">🏃</div>
                  <h3 className="text-xl font-semibold text-[#17153B]">Physiotherapy</h3>
                  <p className="text-sm text-slate-700">
                    Motion tracking and exercise guidance to help patients recover mobility and strength with proper form and technique.
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 to-[#B78BFF]/10 border border-[#4B3BCB]/20 p-6 space-y-3">
                  <div className="text-3xl">📊</div>
                  <h3 className="text-xl font-semibold text-[#17153B]">Progress Tracking</h3>
                  <p className="text-sm text-slate-700">
                    Clinician-grade analytics and reports to help both patients and therapists monitor improvement over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF] via-[#B78BFF] to-[#FFE6FF] shadow-2xl p-8 md:p-12 mt-12">
              <h2 className="text-3xl font-semibold text-white mb-6 text-center">Why Choose VIO?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Privacy First</h4>
                    <p className="text-sm text-white/90">Your exercises and data stay private on your device</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">AI-Powered</h4>
                    <p className="text-sm text-white/90">Advanced algorithms provide real-time feedback and guidance</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Clinician Approved</h4>
                    <p className="text-sm text-white/90">Built with input from experienced therapists and medical professionals</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Easy to Use</h4>
                    <p className="text-sm text-white/90">Simple, friendly interface that anyone can navigate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center space-y-4 mt-12">
              <h2 className="text-2xl font-semibold text-[#17153B]">Ready to Start Your Journey?</h2>
              <p className="text-slate-700">Join thousands of patients already improving their lives with VIO</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
