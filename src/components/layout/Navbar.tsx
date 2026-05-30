import { useState, useEffect } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import companyLogo from "../../../assets/logos/company.svg";
import { navItems } from "../../data/navigation";

const Navbar = () => {
  // 1. State untuk mengontrol buka/tutup menu navigasi mobile (Hamburger)
  const [isOpen, setIsOpen] = useState(false);

  // 2. State untuk mengontrol mode tampilan (Default TRUE/Gelap seperti tema utama Figma)
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    // 🎯 FIGMA SPEC: h-[84px], border-bottom: 1px, backdrop-filter: blur(40px)
    <header 
      className="sticky top-0 z-50 h-[84px] bg-panel-bg/80 backdrop-blur-[40px] transition-colors duration-300 border-b"
      style={{
        borderColor: isDark ? 'rgba(63, 63, 70, 0.4)' : '#DFDFDF'
      }}
    >
      {/* 🎯 FIGMA SPEC: max-w: 1440px dengan padding kiri-kanan mutlak 140px di desktop (lg:px-[140px]) */}
      <Container className="max-w-[1440px] px-6 md:px-12 lg:px-[140px] h-full">
        {/* FLEX UTAMA: justify-content: space-between */}
        <div className="flex items-center justify-between w-full h-full">
          
          {/* 🎯 LOGO AREA: width: 158.625px, height: 36px, gap: 9.6px */}
          <div className="flex h-9 items-center gap-[9.6px] p-0 rounded-none shrink-0 select-none w-auto">
            <img 
              src={companyLogo} 
              alt="Company Logo" 
              // Ukuran asset figma: 29.58px x 32.46px
              className="w-[29.58px] h-[32.46px] object-contain text-brand-orange"
            />
            <span 
              // font-family-body, SemiBold (600), font-size: 24px, line-height: 36px
              className="font-sans text-[24px] font-semibold leading-[36px] tracking-normal uppercase transition-colors duration-300"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
            >
              Tech Logo
            </span>
          </div>

          {/* 🎯 NAVIGASI MENU: width: 499px (Desktop max), gap: 12px */}
          <nav className="items-center hidden md:flex gap-[12px] h-9">
            {navItems.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.href}
                // SemiBold (600), padding: pt-8 px-16 pb-8, rounded-full
                className="flex items-center h-9 pt-[8px] pb-[8px] px-[16px] text-sm font-semibold rounded-full transition-all duration-200 hover:text-brand-orange hover:bg-panel-border/20"
                style={{ color: isDark ? '#FDFDFD' : '#717680' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* INTERAKSI KANAN (Desktop) */}
          <div className="items-center hidden gap-4 md:flex h-9">
            {/* Tombol Sun/Moon Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center text-sm transition-all duration-200 border rounded-full cursor-pointer h-9 w-9 border-panel-border bg-panel-bg hover:bg-panel-border/30"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
              title={isDark ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* 🎯 TOMBOL LET'S TALK: width: 197px, height: 44px, padding: 8px, background: #FF623E */}
            <Button 
              size="sm" 
              variant="primary" 
              className="w-[197px] h-[44px] flex items-center justify-center gap-1 p-2 rounded-full bg-[#FF623E] hover:bg-[#ff4f25] text-white text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer shrink-0"
              // Inner Shadow dari spesifikasi Figma: X:4, Y:4, Blur:4, Spread:0, #FFFFFF dengan Opacity 25%
              style={{ boxShadow: 'inset 4px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
            >
              Let's Talk
            </Button>
          </div>

          {/* Interaksi Kanan Mobile (Hamburger Menu + Light/Dark Mode Switch) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Tombol Sun/Moon Mobile */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center border rounded-full cursor-pointer h-9 w-9 border-panel-border bg-panel-bg"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            
            {/* Tombol Hamburger Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-transparent border-none rounded-lg outline-none cursor-pointer"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </Container>
      
      {/* Menu Dropdown Mobile Responsive */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-[84px] left-4 right-4 z-50 rounded-2xl p-6 shadow-xl w-[calc(100%-32px)] mx-auto h-auto transition-all duration-300"
          style={{
            backgroundColor: isDark ? '#090B0F' : '#FFFFFF',
            border: isDark ? 'none' : '1px solid #DFDFDF'
          }}
        >
          <nav className="flex flex-col space-y-3 text-base font-semibold">
            {navItems.map((item, index) => (
              <a
                key={`mobile-${item.label}-${index}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-1 transition-colors duration-200 hover:text-brand-orange"
                style={{ color: isDark ? '#FFFFFF' : '#717680' }}
              >
                {item.label === "Testimonials" && index === 3 ? "Reviews" : item.label}
              </a>
            ))}
            
            {/* Tombol Let's Talk Versi Mobile Dropdown */}
            <div className="pt-3">
              <Button 
                size="md" 
                variant="primary" 
                className="w-full h-[44px] rounded-full bg-[#FF623E] flex items-center justify-center text-white font-bold transition-all duration-300"
                style={{ boxShadow: 'inset 4px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;