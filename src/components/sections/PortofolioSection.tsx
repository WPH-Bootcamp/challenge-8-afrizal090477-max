import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { portfolioData, type ProjectItem } from "../../data/portofolio";

const PortofolioSection = () => {
  const { title, subtitle, projects } = portfolioData;
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DETEKSI TEMA: Memantau perubahan class 'dark' di root HTML
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
      id="projects"
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[772px] flex flex-col justify-center"
    >
      <Container className="max-w-[1440px] px-6 py-16 md:px-12 lg:px-[140px] lg:py-[80px]">
        {/* Pembungkus utama dengan judul, deskripsi, dan grid proyek (gap: 64px) */}
        <div className="flex flex-col gap-[64px] items-center w-full">
          
          {/* Judul dan Deskripsi Portofolio */}
          <div className="max-w-[1160px] w-full text-center flex flex-col gap-[11px]">
            <h2 
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-tight transition-colors duration-300"
              style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
            >
              {title}
            </h2>
            {/* Deskripsi Subtitle */}
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400 max-w-[800px] mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Grid Portofolio */}
          <div className="w-full max-w-[1159px] lg:min-h-[449px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-items-center">
            {projects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="group flex flex-col w-full max-w-[373px] space-y-[12px]"
              >
                {/* Gambar Proyek dengan Efek Hover */}
                <div 
                  className="relative w-full h-[373px] md:w-[373px] md:h-[373px] rounded-[16px] overflow-hidden shadow-xs transition-all duration-300 group-hover:shadow-md shrink-0"
                  style={{ 
                    backgroundColor: isDarkMode ? '#090B0F' : 'rgba(24, 24, 27, 0.05)',
                    border: isDarkMode ? 'none' : '1px solid #DEDCDC'
                  }}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                {/* Kategori dan Judul Proyek */}
                <div className="flex flex-col gap-1 px-1">
                  <span className="text-sm md:text-[15px] font-medium text-[#FF623E] tracking-normal block">
                    {project.category || "Landing Page"}
                  </span>
                  <h3 
                    className="text-lg font-bold transition-colors duration-200 lg:text-xl"
                    style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default PortofolioSection;