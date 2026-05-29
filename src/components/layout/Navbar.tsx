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
    <header className="sticky top-0 z-50 h-[84px] bg-panel-bg/80 backdrop-blur-[40px] transition-colors duration-300">
      <Container className="max-w-[1440px] px-6 md:px-[140px] h-full">
        {/* FLEX UTAMA: Menyusun tiga pilar utama (Logo, Navigasi, Interaksi) dengan penyesuaian responsif */}
        <div className="flex items-center justify-between h-full">
          
           {/* Logo Perusahaan (Kiri) */}
          <div className="flex h-9 items-center gap-[9.6px] p-0 rounded-none shrink-0 select-none">
            <img 
              src={companyLogo} 
              alt="TechLogo Logo" 
              className="object-contain w-auto h-full text-brand-orange"
            />
            <span 
              className="font-sans text-2xl font-semibold leading-9 tracking-normal uppercase transition-colors duration-300"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
            >
              Tech Logo
            </span>
          </div>

          {/* Navigasi Utama (Tengah Desktop) */}
          <nav className="items-center hidden gap-3 h-9 md:flex">
            {navItems.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.href}
                className="flex items-center h-full px-2 text-sm font-medium transition-colors duration-200 hover:text-brand-orange"
                style={{ color: isDark ? '#D1D5DB' : '#717680' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Interaksi Kanan (Desktop & Mobile) */}
          <div className="items-center hidden gap-3 md:flex h-9">
            {/* Tombol Sun/Moon Desktop */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center h-full p-2 text-sm transition-all duration-200 border rounded-full cursor-pointer aspect-square border-panel-border bg-panel-bg hover:bg-panel-border/30"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
              title={isDark ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"}
            >
              {isDark ? (
                <Moon className="w-4 h-4 text-amber-500" />
              ) : (
                <Sun className="w-4 h-4 text-slate-700" />
              )}
            </button>

           {/* Tombol Let's Talk Desktop */}
            <Button 
              size="sm" 
              variant="primary" 
              className="md:w-[197px] h-[44px] flex items-center justify-center gap-1 p-2 rounded-full bg-[#FF623E] hover:bg-[#ff4f25] text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-[inset_3px_3px_4px_rgba(255,255,255,0.4)] cursor-pointer shrink-0"
            >
              Let's Talk
            </Button>
          </div>

          {/* Interaksi Kanan Mobile (Tombol Sun/Moon + Hamburger) */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Tombol Sun/Moon Mobile */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-sm border rounded-full cursor-pointer border-panel-border bg-panel-bg"
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
      {/* Menu Navigasi Mobile yang muncul saat hamburger diklik, dengan transisi dan penyesuaian warna untuk kedua mode */}
      {isOpen && (
        <div 
          className="md:hidden absolute top-[84px] left-4 right-4 z-50 rounded-2xl p-6 shadow-xl w-[calc(100%-32px)] mx-auto h-auto transition-all duration-300"
          style={{
            backgroundColor: isDark ? '#090B0F' : '#FFFFFF',
            border: isDark ? 'none' : '1px solid #DFDFDF'
          }}
        >
          {/* Navigasi Mobile (Tautan + Tombol CTA) dengan penyesuaian warna teks untuk kontras di kedua mode */}
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
            
            {/* Tombol Let's Talk Mobile */}
            <div className="pt-3">
              <Button size="md" variant="primary" className="w-full h-[44px] rounded-full bg-[#FF623E] flex items-center justify-center text-white font-bold">
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