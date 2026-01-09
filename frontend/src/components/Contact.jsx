function Contact() {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "support@vio.com" },
    { icon: "📱", label: "Phone", value: "+91 9864673499" },
    
  ];

  return (
    <div id="contact" className="py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[#4B3BCB] shadow-sm">
            📧 Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#17153B]">
            Contact Us
          </h2>
          <p className="text-base text-slate-700 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Contact Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#17153B] mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-[#4B3BCB]/20 focus:outline-none focus:ring-2 focus:ring-[#4B3BCB] text-slate-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#17153B] mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-[#4B3BCB]/20 focus:outline-none focus:ring-2 focus:ring-[#4B3BCB] text-slate-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#17153B] mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help..."
                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-[#4B3BCB]/20 focus:outline-none focus:ring-2 focus:ring-[#4B3BCB] text-slate-700 resize-none"
              ></textarea>
            </div>
            <button className="w-full inline-flex items-center justify-center rounded-full bg-[#17153B] hover:bg-[#26235A] text-sm px-7 py-3 font-medium text-white transition-colors">
              Send Message
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#7C6CFF] via-[#B78BFF] to-[#FFE6FF] shadow-xl p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white/90">{info.label}</p>
                      <p className="text-white whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-white/90 mb-3">Follow us on social media</p>
                <div className="flex gap-3">
                  <button className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                    f
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                    𝕏
                  </button>
                  <button className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                    in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
