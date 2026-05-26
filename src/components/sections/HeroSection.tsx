import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import heroLight from "../../../assets/images/image-light.png";
import heroDark from "../../../assets/images/image-dark.png";

const HeroSection = () => {
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
      id="hero"
      className="overflow-hidden min-h-[747px] py-16 lg:py-0 relative transition-colors duration-300 bg-panel-bg w-full flex items-center"
    >
      <Container className="max-w-[1440px] w-full relative">
        {/* Konten Utama */}
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 w-full min-h-[747px] gap-12">
          {/* SISI KIRI: KONTEN TEKS & CTA */}
          <div className="text-center lg:text-left space-y-6 flex-1 min-w-full lg:min-w-[550px] z-20">
            <div className="max-w-[653px] flex flex-col gap-3 w-full mx-auto lg:mx-0">
              {/* Judul Utama */}
              {/* 🎯 FIX UTAMA: Menghapus text-[#0A0D12] kaku dan menggantinya dengan text-neutral-900 / dark:text-white */}
              <h1
                className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-[1.15] whitespace-normal transition-colors duration-300"
                style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
              >
                Your Tech Partner for <br className="hidden xl:block" />
                <span className="text-[#FF623E]">Smarter Growth</span>
              </h1>

              {/* Deskripsi Subtitle */}
              <p className="text-lg md:text-xl font-semibold leading-relaxed text-[#717680] dark:text-zinc-400 mt-1 transition-colors duration-300">
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </div>

            {/* BUTTON HERO */}
            <div className="flex flex-wrap justify-center pt-2 lg:justify-start">
              <Button
                size="lg"
                variant="primary"
                className="w-[200px] h-[48px] flex items-center justify-center gap-1 p-2 rounded-full bg-[#FF623E] hover:bg-[#ff4f25] text-white text-base font-bold tracking-wide transition-all duration-300 shadow-[inset_4px_4px_4px_rgba(255,255,255,0.4)] cursor-pointer border-none outline-none"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* SISI KANAN: VISUAL ILLUSTRATION 3D */}
          <div className="relative lg:absolute w-full lg:w-[747px] lg:h-[747px] lg:left-[696px] flex justify-center items-center shrink-0 z-10 mt-12 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[747px] lg:h-[747px] flex items-center justify-center bg-transparent">
              {/* Gambar Hero Utama */}
              <img
                src={isDarkMode ? heroDark : heroLight}
                alt="TechLogo Hero Illustration"
                className="w-full lg:w-[747px] lg:h-[747px] object-contain transition-all duration-500 block border-none outline-none mix-blend-normal relative z-10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
