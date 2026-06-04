import { useState, useEffect } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import companyLogo from "../../../assets/logos/company.svg";
import { navItems } from "../../data/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const handleScrollToContact = () => {
    setIsOpen(false); 
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 h-[84px] bg-panel-bg/80 backdrop-blur-[40px] transition-colors duration-300 border-b"
      style={{
        borderColor: isDark ? 'rgba(63, 63, 70, 0.4)' : '#DFDFDF'
      }}
    >
      <Container className="max-w-[1440px] px-6 md:px-12 lg:px-[140px] h-full">
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex h-9 items-center gap-[9.6px] p-0 rounded-none shrink-0 select-none w-auto">
            <img 
              src={companyLogo} 
              alt="Company Logo" 
              className="w-[26.3px] h-[28.85px] object-contain text-brand-orange"
            />
            <span 
              className="font-sans text-[21.33px] font-semibold leading-8 tracking-normal uppercase transition-colors duration-300"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
            >
              Your Logo
            </span>
          </div>

          <nav className="items-center hidden md:flex gap-[12px] h-9">
            {navItems.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.href}
                className="flex items-center h-9 pt-[8px] pb-[8px] px-[16px] text-sm font-semibold rounded-full transition-all duration-200 hover:text-brand-orange hover:bg-panel-border/20"
                style={{ color: isDark ? '#FDFDFD' : '#717680' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="items-center hidden gap-4 md:flex h-9">
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

            <Button 
              onClick={handleScrollToContact}
              size="sm" 
              variant="primary" 
              className="w-[197px] h-[44px] flex items-center justify-center gap-1 p-2 rounded-full bg-[#FF623E] hover:bg-[#ff4f25] text-white text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer shrink-0"
              style={{ boxShadow: 'inset 4px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
            >
              Let's Talk
            </Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center border rounded-full cursor-pointer h-9 w-9 border-panel-border bg-panel-bg"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-transparent border-none rounded-lg outline-none cursor-pointer"
              style={{ color: isDark ? '#FFFFFF' : '#0A0D12' }}
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </Container>
      
      {isOpen && (
        <div 
          className="fixed top-0 left-0 z-50 w-full transition-all duration-300 md:hidden h-dvh"
          style={{
            backgroundColor: '#000000',
          }}
        >
          <div 
            className="flex items-center justify-between w-full h-16 px-4 border-b"
            style={{ borderColor: 'rgba(63, 63, 70, 0.4)' }}
          >
            <div className="flex items-center gap-[8.53px] h-8 select-none">
              <img 
                src={companyLogo} 
                alt="Company Logo" 
                className="w-[26.3px] h-[28.85px] object-contain text-brand-orange"
              />
              <span className="font-sans text-[21.33px] font-semibold leading-8 uppercase text-white">
                Your Logo
              </span>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-6 h-6 p-2 text-white bg-transparent border-none rounded-lg outline-none cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-16 left-4 w-[calc(100%-32px)] max-w-[361px] flex flex-col gap-3 pt-3">
            
            {navItems.map((item, index) => {
              let displayLabel = item.label;
              if (item.label === "Projects") displayLabel = "Porfolio";
              if (item.label === "Reviews") displayLabel = "Testimonials";

              return (
                <a
                  key={`mobile-${item.label}-${index}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full h-9 py-2 text-sm font-semibold tracking-wide text-[#FDFDFD] transition-colors duration-200 hover:text-brand-orange flex items-center"
                >
                  {displayLabel}
                </a>
              );
            })}
              
            <Button 
              onClick={handleScrollToContact}
              size="md" 
              variant="primary" 
              className="w-full h-[44px] p-2 gap-1 rounded-full bg-[#FF623E] hover:bg-[#ff4f25] flex items-center justify-center text-white text-sm font-bold transition-all duration-300 cursor-pointer shrink-0"
              style={{ boxShadow: '4px 4px 4px 0px rgba(255, 255, 255, 0.25) inset' }}
            >
              Let’s Talk
            </Button>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;