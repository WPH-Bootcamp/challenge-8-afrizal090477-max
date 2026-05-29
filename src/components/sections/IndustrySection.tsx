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
        
        {/* Pembungkus Konten Utama Bawaan Kode Awal Lo */}
        <div className="flex flex-col gap-[64px] w-full">
          
          {/* Header Judul Seksi (Tetap Utuh Penuh di Atas) */}
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

          {/* SINKRONISASI UTAMA (Desktop Tetap flex-row, Mobile Aman Menurun Vertikal) */}
          <div className="w-full max-w-[1160px] flex flex-col md:flex-row gap-[64px] items-start min-h-[435px]">
            
            {/* 🎯 SISI KIRI: Daftar Industri (Tombol Navigasi Fix Figma Mobile & Desktop) */}
            {/* Lebar desktop dikunci ke 361px (md:w-[361px]) dengan susunan flex-col & gap 12px konstan */}
            <div className="w-full md:w-[361px] flex flex-col gap-[12px] shrink-0">
              {industries.map((item) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    // h-[30px], gap-[6px] (jarak indikator ke teks), tracking-tight (-2%) sesuai spek figma lo
                    className={`h-[30px] flex items-center gap-[6px] text-base md:text-lg transition-all duration-300 text-left cursor-pointer select-none tracking-tight relative
                      ${isActive ? "scale-[1.01]" : ""}`}
                    style={{
                      fontWeight: isActive ? 700 : 600,
                      color: isActive 
                        ? (isDarkMode ? '#FFFFFF' : '#0A0D12') 
                        : (isDarkMode ? '#94A3B8' : '#717680')
                    }}
                  >
                    {/* 🎯 INDIKATOR AKTIF FIGMA: width: 4px, height: 24px, rounded-full (100px) */}
                    <div 
                      className="transition-all duration-300 shrink-0"
                      style={{
                        width: '4px',
                        height: '24px',
                        borderRadius: '100px',
                        backgroundColor: isActive ? '#FF623E' : (isDarkMode ? '#27272A' : '#DEDCDC'),
                      }}
                    />

                    {/* Jarak teks aman dari garis indikator */}
                    <span className="pl-2">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* SISI KANAN: Konten Visual (100% Utuh Sesuai Kode Awal Lo) */}
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