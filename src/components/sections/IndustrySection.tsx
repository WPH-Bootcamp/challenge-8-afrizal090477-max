import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { industryData } from "../../data/industry";

const IndustrySection = () => {
  const { title, subtitle, industries } = industryData;

  const [activeTab, setActiveTab] = useState("fintech");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeData =
    industries.find((item) => item.id === activeTab) || industries[0];

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
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[758px] flex flex-col justify-center"
    >
      <Container className="max-w-[1440px] px-6 py-16 md:px-12 lg:px-[140px] lg:py-[80px]">
        {/* Pembungkus Konten Utama  */}
        <div className="flex flex-col gap-[64px] w-full">
          <div className="max-w-[1160px] w-full flex flex-col gap-[11px]">
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-tight transition-colors duration-300"
              style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
            >
              {title}
            </h2>
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-[#A4A7AE] transition-colors duration-300">
              {subtitle}
            </p>
          </div>

          <div className="w-full max-w-[1160px] flex flex-col md:flex-row gap-[64px] items-start lg:min-h-[435px]">
            {/* Daftar Industri */}
            <div className="w-full md:w-[256px] md:min-h-[150px] flex flex-col gap-[24px] shrink-0">
              {industries.map((item) => {
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="h-[34px] flex items-center gap-[8px] text-[20px] font-bold transition-all duration-300 text-left cursor-pointer select-none tracking-normal relative"
                  >
                    <div
                      className="transition-all duration-300 shrink-0"
                      style={{
                        width: "4px",
                        height: "32px",
                        borderRadius: "100px",
                        backgroundColor: isActive
                          ? "#FF623E"
                          : isDarkMode
                            ? "#3F3F46"
                            : "#535862",
                      }}
                    />

                    {/* Teks Nama Industri */}
                    <span
                      className="transition-colors duration-300"
                      style={{
                        color: isActive
                          ? isDarkMode
                            ? "#FFFFFF"
                            : "#0A0D12"
                          : isDarkMode
                            ? "#94A3B8"
                            : "#535862",
                      }}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Konten Visual & Deskripsi */}
            <div className="w-full md:w-[840px] md:h-[435px] flex flex-col gap-[20px] shrink-0">
              {/* Box Deskripsi Teks */}
              <div className="w-full md:h-[64px] flex items-start">
                <p
                  className="text-base md:text-[18px] font-medium leading-relaxed transition-colors duration-300 text-left"
                  style={{ color: isDarkMode ? "#FDFDFD" : "#0A0D12" }}
                >
                  {activeData.title}
                </p>
              </div>

              {/* Box Image */}
              <div
                className="w-full md:w-[840px] md:h-[351px] rounded-[24px] overflow-hidden shadow-sm shrink-0"
                style={{
                  backgroundColor: isDarkMode
                    ? "#0A0D12"
                    : "rgba(24, 24, 27, 0.03)",
                  border: isDarkMode ? "none" : "1px solid #DEDCDC",
                }}
              >
                <img
                  src={activeData.image}
                  alt={`${activeData.name} Visual`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.015]"
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
