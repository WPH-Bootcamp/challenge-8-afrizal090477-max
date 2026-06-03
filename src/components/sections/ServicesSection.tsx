import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { services } from "../../data/service";


const ServicesSection = () => {
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
      id="services"
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[949px] flex flex-col justify-center"
    >
      <Container className="max-w-[1440px] px-6 py-16 md:px-12 lg:px-[140px] lg:py-[80px]">
        <div className="flex flex-col gap-[64px] items-center w-full">
          <div className="max-w-[1160px] w-full text-center flex flex-col gap-[11px]">
            <h2
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-tight transition-colors duration-300"
              style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
            >
              Smart IT Solutions That Grow With You
            </h2>
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400 max-w-[800px] mx-auto">
              Tailored tech to boost efficiency, security, and results.
            </p>
          </div>

          <div className="w-full max-w-[1160px] lg:min-h-[626px] grid gap-x-[20px] gap-y-[40px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative p-6 pt-16 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col h-auto md:min-h-[182px] group"
                style={{
                  backgroundColor: isDarkMode ? "#090B0F" : "#FFFFFF",
                  border: isDarkMode ? "none" : "1px solid #DEDCDC",
                }}
              >
                <div className="absolute w-20 h-20 transition-transform duration-300 pointer-events-none -top-10 left-6 group-hover:scale-105">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="object-contain w-full h-full"
                    loading="lazy"
                  />
                </div>

                <h3
                  className="text-lg lg:text-xl font-bold tracking-normal text-[#0A0D12] transition-colors duration-200"
                  style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
                >
                  {service.title}
                </h3>
                <p className="mt-2 text-sm lg:text-[15px] font-medium leading-relaxed text-[#717680] dark:text-zinc-400 flex-grow">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
