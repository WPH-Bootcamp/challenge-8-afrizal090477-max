import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { faqData } from "../../data/faq";
import faqCtaImg from "../../../assets/images/consultation.svg";

const FAQSection = () => {
  const { title, subtitle, ctaTitle, ctaSubtitle, questions } = faqData;

  const [openId, setOpenId] = useState<number | null>(1);
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

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[822px] flex flex-col justify-center py-[80px]"
    >
      <Container className="max-w-[1440px] px-6 md:px-12 lg:px-[120px] flex flex-col gap-[48px]">
        {/* Area Baris Judul Kepala */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 min-h-[112px]">
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] max-w-full lg:h-[112px] leading-[1.1] transition-colors duration-300"
            style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
          >
            {title.includes("Here.") ? (
              <>
                {title.replace("Here.", "")}
                <br className="hidden lg:block" />
                Here.
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400 max-w-full lg:w-[245px] lg:h-[64px] text-left md:text-right leading-relaxed pb-1">
            {subtitle}
          </p>
        </div>

        {/* Garis Pembatas Atas */}
        <div className="w-full border-t border-zinc-300/20 dark:border-[#252B37]" />

        {/* AREA TINGGI RATA AIR */}
        <div className="flex flex-col lg:flex-row lg:gap-[73px] items-stretch w-full lg:h-[454px]">
          {/* SISI KIRI: Daftar FAQ */}
          <div className="w-full lg:w-[798px] h-full flex flex-col justify-between overflow-hidden">
            {questions.map((item) => {
              const isOpen = item.id === openId;

              return (
                <div
                  key={item.id}
                  className="w-full flex flex-col justify-center pb-[16px] border-b border-zinc-300/20 dark:border-zinc-800/60 min-h-[82px] gap-[10px]"
                >
                  {/* Tombol Pertanyaan */}
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="flex justify-between items-center w-full text-left font-bold text-lg lg:text-[20px] hover:text-[#CC4E32] transition-colors duration-200 group h-auto md:h-[36px] cursor-pointer"
                    style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
                  >
                    <span>{item.question}</span>
                    <span
                      className="flex items-center justify-center w-6 h-6 ml-4 text-2xl font-medium leading-none transition-colors duration-300 select-none shrink-0"
                      style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Jawaban Accordion */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm md:text-base lg:text-[16px] font-medium leading-relaxed text-[#717680] dark:text-zinc-400 pr-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SISI KANAN: CTA KONSULTASI ( */}
          <div className="w-full lg:w-[329px] flex justify-center lg:justify-end shrink-0 mt-8 lg:mt-0 h-full">
            <div className="bg-[#CC4E32] p-[24px] rounded-[24px] w-full md:w-[329px] h-full flex flex-col justify-between gap-[20px] shadow-sm">
              <div className="w-full md:w-[281px] flex flex-col gap-[4px]">
                <h3 className="text-2xl md:text-[32px] font-bold tracking-[-0.02em] text-white leading-[1.1] h-[88px] flex items-center">
                  {ctaTitle}
                </h3>
                <p className="text-base md:text-[17px] font-semibold text-white/90 leading-normal h-[64px] mt-1">
                  {ctaSubtitle}
                </p>
              </div>

              <div className="w-full md:w-[281px] h-[153.37px] rounded-[16px] overflow-hidden border border-white/10 bg-zinc-900/20 shrink-0">
                <img
                  src={faqCtaImg}
                  alt="Team Consultation Meeting"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              <button
                className="w-full md:w-[281px] h-[48px] font-bold text-sm md:text-[15px] tracking-[-0.02em] rounded-full shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer shrink-0 border-none outline-none"
                style={{
                  backgroundColor: isDarkMode ? "#FFFFFF" : "#000000",
                  color: isDarkMode ? "#0A0D12" : "#FFFFFF",
                  boxShadow: !isDarkMode
                    ? "inset 4px 4px 4px 0px rgba(255, 255, 255, 0.25)"
                    : "none",
                }}
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
