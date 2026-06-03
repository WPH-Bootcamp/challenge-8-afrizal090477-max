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


  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="overflow-hidden min-h-[747px] py-16 lg:py-0 relative transition-colors duration-300 bg-panel-bg w-full flex items-center"
    >
      <Container className="max-w-[1440px] w-full px-6 md:px-12 lg:px-[140px] relative">
        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 w-full min-h-[747px]">
          <div className="text-center lg:text-left flex flex-col gap-[40px] z-20 w-full lg:w-[653px] shrink-0 pt-10 lg:pt-0">

            <div className="w-full flex flex-col gap-[8px]">
              <h1
                className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-[-0.02em] leading-[1.15] whitespace-normal transition-colors duration-300"
                style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
              >
                Your Tech Partner for <br className="hidden xl:block" />
                <span className="text-[#FF623E]">Smarter Growth</span>
              </h1>
              <p className="text-lg lg:text-[20px] font-semibold leading-relaxed text-[#717680] dark:text-zinc-400 transition-colors duration-300">
                We deliver tailored IT solutions to help you scale with speed
                and confidence.
              </p>
            </div>


            <div className="flex flex-wrap justify-center lg:justify-start">
              <Button
                onClick={handleScrollToContact}
                size="lg"
                variant="primary"
                className="w-[200px] h-[48px] flex items-center justify-center gap-1 p-2 rounded-full bg-[#FF623E] hover:bg-[#ff4f25] text-white text-base font-bold tracking-wide transition-all duration-300 cursor-pointer border-none outline-none"
                style={{
                  boxShadow: "inset 4px 4px 4px 0px rgba(255, 255, 255, 0.25)",
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>

          <div className="relative lg:absolute w-full lg:w-[747px] lg:h-[747px] lg:left-[696px] flex justify-center items-center shrink-0 z-10 mt-12 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-none lg:w-[747px] lg:h-[747px] flex items-center justify-center bg-transparent">
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