import Logo from "../assets/Logo.png";
import AuthButton from "../Auth";

function Navbar({ scrollToSection }) {
  return (
    <header className="flex items-center justify-between text-sm text-slate-700">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="VIO Logo" className="h-9 w-9 rounded-full object-cover" />
        <span className="font-semibold tracking-tight text-[#17153B]">
          VIO
        </span>
      </div>

      <nav className="hidden md:flex gap-6 text-slate-600">
        <button onClick={() => scrollToSection('home')} className="hover:text-[#17153B] text-base font-bold">
          Home
        </button>
        <button onClick={() => scrollToSection('about')} className="hover:text-[#17153B] text-base font-bold">
          About
        </button>
        <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#17153B] text-base font-bold">
          Testimonials
        </button>
        <button onClick={() => scrollToSection('contact')} className="hover:text-[#17153B] text-base font-bold">
          Contact
        </button>
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <button className="inline-flex items-center justify-center rounded-full bg-[#17153B] hover:bg-[#26235A] px-5 py-2 text-sm font-medium text-white transition-colors">
          Launch demo
        </button>
        <AuthButton />
      </div>
    </header>
  );
}

export default Navbar;
