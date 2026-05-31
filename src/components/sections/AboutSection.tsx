import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { aboutData } from "../../data/about";

const AboutSection = () => {
  const { title, description, stats } = aboutData;
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
      id="about"
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[598px] flex flex-col justify-center"
    >
      <Container className="max-w-[1440px] px-6 py-16 md:px-12 lg:px-[140px] lg:py-[80px]">
        {/* Pembungkus utama */}
        <div className="flex flex-col gap-[64px] items-center w-full">
          {/* Header dengan judul dan deskripsi */}
          <div className="max-w-[1160px] w-full text-center flex flex-col gap-[11px]">
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] leading-tight transition-colors duration-300"
              style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
            >
              {title}
            </h2>
            {/* Deskripsi */}
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-[#A4A7AE] max-w-[800px] mx-auto leading-relaxed transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Grid Statistik lingkaran */}
          <div className="w-full max-w-[1160px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[20px] justify-items-center">
            {stats.map((stat, index) => (
              <div
                key={`${stat.label}-${index}`}
                className="w-[275px] h-[275px] rounded-full flex flex-col items-center justify-center p-[16px] gap-[6px] transition-all duration-300 transform hover:scale-[1.03] select-none shadow-sm group"
                style={{
                  backgroundColor: isDarkMode ? "#0A0D12" : "#FAFAFA",
                  border: isDarkMode
                    ? "1px solid #181D27"
                    : "1px solid #DEDCDC",
                }}
              >
                {/* Angka stat */}
                <span className="text-4xl lg:text-[48px] font-bold tracking-[-0.02em] text-[#FF623E] leading-none">
                  {stat.value}
                </span>

                {/* Label teks */}
                <p
                  className="text-base md:text-lg lg:text-[20px] font-semibold text-center max-w-[243px] leading-snug transition-colors duration-300 px-2"
                  style={{ color: isDarkMode ? "#FDFDFD" : "#0A0D12" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
