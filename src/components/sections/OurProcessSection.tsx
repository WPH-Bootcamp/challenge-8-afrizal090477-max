import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { processData } from "../../data/process";

const OurProcess = () => {
  const { title, subtitle, steps } = processData;
  const [isDarkMode, setIsDarkMode] = useState(false);


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
      id="process"
      className="w-full bg-panel-bg border-b border-panel-border transition-colors duration-300 min-h-[1099px] flex flex-col justify-center"
    >
      <Container className="max-w-[1440px] px-6 py-16 md:px-12 lg:px-[140px] lg:py-[80px]">
        {/* Pembungkus Konten Utama */}
        <div className="flex flex-col gap-[64px] items-center w-full">
          <div className="max-w-[1160px] w-full text-center space-y-4">
            <h2 
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-tight transition-colors duration-300"
              style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
            >
              {title}
            </h2>
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400 max-w-[800px] mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Pembungkus Utama Area Timeline */}
          <div className="relative w-full max-w-[1160px] flex flex-col gap-4">
            <div className="absolute left-[24px] md:left-1/2 top-10 bottom-10 w-[1px] bg-[#717680] dark:bg-zinc-800 pointer-events-none z-0 md:-translate-x-1/2" />
            {/* SINKRONISASI GRID AREA */}
            <div className="relative z-10 w-full space-y-8 md:space-y-4">
              {steps.map((step, index) => {
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={step.id}
                    className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full gap-4 md:gap-0"
                  >
                    <div 
                      className={`w-full max-w-[532px] min-h-[116px] p-6 rounded-[16px] flex items-center justify-between gap-6 transition-all duration-300 hover:shadow-sm select-none group col-start-2 order-2
                        ${!isEven ? 'md:col-start-1 md:order-1 md:justify-self-end' : 'md:col-start-3 md:order-3 md:justify-self-start'}`}
                      /// Koresi gaya latar belakang dan border untuk mendukung dark mode
                      style={{ 
                        backgroundColor: isDarkMode ? '#090B0F' : '#FAFAFA',
                        border: isDarkMode ? 'none' : '1px solid #DEDCDC'
                      }}
                    >
                      <div className="flex flex-col justify-center text-left">
                        {/* Judul dan Deskripsi Langkah */}
                        <h3 
                          className="text-lg lg:text-xl font-bold text-[#0A0D12] transition-colors duration-300"
                          style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm lg:text-[15px] font-medium text-[#717680] dark:text-zinc-400 mt-1 leading-snug">
                          {step.desc}
                        </p>
                      </div>
                      <div className="text-[#717680] shrink-0">
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>

                    {/* LINGKARAN PENANDA LANGKAH (BERISI ANGKA) - POSISI TETAP DI TENGAH GARIS */}
                    <div className="z-20 flex items-center justify-center order-1 col-start-1 md:px-6 shrink-0 md:col-start-2 md:order-2">
                      <div className="h-12 w-12 rounded-full bg-[#FF623E] text-white font-bold text-base flex items-center justify-center shadow-md select-none">
                        {step.id}
                      </div>
                    </div>
                    {/* AREA KOSONG SIMETRIS (HANYA UNTUK DESKTOP, DISSEMBUNYIKAN DI MOBILE) */}
                    <div className={`hidden md:block w-full max-w-[532px] ${!isEven ? 'md:col-start-3 md:order-3' : 'md:col-start-1 md:order-1'}`} />

                  </div>
                );
              })}
            </div>
            
          </div>

        </div>
      </Container>
    </section>
  );
};

export default OurProcess;