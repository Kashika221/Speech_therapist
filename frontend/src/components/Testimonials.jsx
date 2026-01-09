function Testimonials() {
  const testimonials = [
    {
      initials: "SM",
      name: "Sarah Martinez",
      role: "Speech Therapy Patient",
      text: "VIO has been a game-changer for my speech therapy. The AI feedback is incredibly accurate, and I can practice at my own pace. My therapist is amazed at my progress!"
    },
    {
      initials: "JK",
      name: "James Kumar",
      role: "Physiotherapy Patient",
      text: "After my knee surgery, VIO helped me maintain my exercise routine between clinic visits. The motion tracking ensures I'm doing exercises correctly. Highly recommend!"
    },
    {
      initials: "EW",
      name: "Emily Wong",
      role: "Stroke Recovery",
      text: "The combination of speech and physio therapy in one app is perfect. VIO makes recovery less overwhelming and more manageable. It's like having a therapist at home!"
    },
    {
      initials: "DP",
      name: "David Parker",
      role: "Athlete Recovery",
      text: "As an athlete, proper form is everything. VIO's motion tracking helped me rehab my shoulder injury correctly and get back to training faster than expected!"
    },
    {
      initials: "AL",
      name: "Anna Lee",
      role: "Senior Citizen",
      text: "At 72, I was skeptical about using an app for therapy. But VIO made it so simple and encouraging. I look forward to my daily exercises now!"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "500K+", label: "Sessions Completed" }
  ];

  return (
    <div id="testimonials" className="py-16">
      <div className="space-y-12">
        <div className="text-center space-y-4 px-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#17153B]">
            Trusted by Smart Patients.
          </h2>
          <p className="text-base text-slate-700 max-w-2xl mx-auto">
            Discover how VIO empowers users to practice therapy confidently and recover faster with AI-driven insights.
          </p>
        </div>

        {/* Auto-scrolling testimonials */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 px-8 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[400px] rounded-2xl bg-gradient-to-br from-[#7C6CFF]/10 via-[#B78BFF]/10 to-[#FFE6FF]/10 border border-[#4B3BCB]/20 backdrop-blur-sm p-6 space-y-6 hover:border-[#4B3BCB]/40 hover:shadow-xl transition-all"
              >
                <p className="text-base text-slate-700 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#7C6CFF] to-[#B78BFF] flex items-center justify-center overflow-hidden">
                    <span className="text-white font-semibold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#17153B]">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 px-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#17153B]">{stat.value}</div>
              <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
