import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { industryData } from "../../data/industry";

const IndustrySection = () => {
  const { title, subtitle, industries } = industryData;

  const [activeTab, setActiveTab] = useState("fintech");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeData = industries.find((item) => item.id === activeTab) || industries[0];

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="industry"
      className="w-full bg-panel-bg border-b border-panel-border transition-colors duration-300 min-h-[758px] flex flex-col justify-center"
    >
      <Container className="max-w-[1440px] px-6 py-16 md:px-12 lg:px-[140px] lg:py-[80px]">
        
        {/* Pembungkus Konten Utama */}
        <div className="flex flex-col gap-[64px] w-full">
          
          {/* Header Judul Seksi */}
          <div className="max-w-[1160px] w-full flex flex-col gap-[11px]">
            <h2 
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-tight transition-colors duration-300"
              style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
            >
              {title}
            </h2>
            {/* Deskripsi Subtitle */}
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400">
              {subtitle}
            </p>
          </div>

         {/* SINKRONISASI UTAMA */}
          <div className="w-full max-w-[1160px] flex flex-col md:flex-row gap-[64px] items-start min-h-[435px]">
            {/* SISI KIRI: Daftar Industri (Tombol Navigasi) */}
            <div className="w-full md:w-[256px] flex flex-row md:flex-col gap-[24px] overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 no-scrollbar shrink-0">
              {industries.map((item) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`h-[34px] flex items-center gap-2 font-bold text-base md:text-lg transition-all duration-300 text-left whitespace-nowrap md:whitespace-normal border-l-[3px] pl-4 cursor-pointer select-none
                      ${isActive ? "border-[#FF623E] font-bold scale-[1.02]" : "border-[#DEDCDC] dark:border-zinc-800 font-semibold"}`}
                    // Menata warna teks tombol aktif dan non-aktif secara dinamis agar kontras di kedua tema
                    style={{
                      color: isActive 
                        ? (isDarkMode ? '#FFFFFF' : '#0A0D12') 
                        : (isDarkMode ? '#94A3B8' : '#717680')
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            {/* SISI KANAN: Konten Visual */}
            <div className="flex-grow md:max-w-[840px] flex flex-col gap-[20px] w-full h-full">
              <div className="w-full md:h-[64px] flex items-start">
                <h3 
                  className="text-lg md:text-xl font-medium leading-relaxed text-[#0A0D12] transition-colors duration-300"
                  style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                >
                  {activeData.title}
                </h3>
              </div>

              <div 
                className="w-full md:w-[840px] md:h-[351px] rounded-[24px] overflow-hidden shadow-sm shrink-0"
                style={{
                  backgroundColor: isDarkMode ? '#090B0F' : 'rgba(24, 24, 27, 0.05)',
                  border: isDarkMode ? 'none' : '1px solid #DEDCDC'
                }}
              >
                <img
                  src={activeData.image}
                  alt={`${activeData.name} Visual`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default IndustrySection;