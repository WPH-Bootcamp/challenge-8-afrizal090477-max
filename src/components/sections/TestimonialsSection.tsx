import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { testimonials as originalTestimonials } from "../../data/testimonials";
import quoteIcon from "../../../assets/icons/kutip.svg";

const TestimonialsSection = () => {
  const [data, setData] = useState(originalTestimonials);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const activeIndex = 1;

  // 🎯 DETEKSI TEMA: Memantau perubahan class 'dark' di root HTML
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

  const handleCardClick = (clickedId: number) => {
    const targetIndex = data.findIndex((item) => item.id === clickedId);
    if (targetIndex === activeIndex) return;

    const newData = [...data];
    if (targetIndex === 0) {
      const last = newData.pop();
      if (last) newData.unshift(last);
    } else if (targetIndex === 2) {
      const first = newData.shift();
      if (first) newData.push(first);
    }
    setData(newData);
  };

  const handleDotClick = (dotIndex: number) => {
    const targetId = originalTestimonials[dotIndex].id;
    const currentTrackIndex = data.findIndex((item) => item.id === targetId);
    
    if (currentTrackIndex === 0 || currentTrackIndex === 2) {
      handleCardClick(targetId);
    }
  };

  return (
    <section 
      id="testimonials" 
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[723px] flex flex-col justify-center py-[80px] overflow-hidden"
    >
      <Container className="max-w-[1440px] px-4 md:px-8">
        <div className="flex flex-col gap-[80px] items-center w-full">
          <div className="w-full max-w-[1440px] text-center flex flex-col gap-[11px] h-[99px]">
            <h2 
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] h-[56px] flex items-center justify-center transition-colors duration-300"
              style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
            >
              What Partners Say About Working With Us
            </h2>
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400 h-[32px] flex items-center justify-center">
              Trusted voices. Real experiences. Proven results.
            </p>
          </div>

          <div className="w-full max-w-[1440px] flex justify-center items-center pt-6 overflow-visible">
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[40px] w-full md:w-auto">
              {data.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.id)}
                    className={`relative rounded-[16px] px-[24px] pt-[24px] pb-[48px] flex-col justify-between cursor-pointer transition-all duration-500 min-h-[292px] gap-[24px] select-none shrink-0 w-full md:w-[594px]
                      ${isActive 
                        ? "flex scale-100 opacity-100 shadow-xl z-10" 
                        : "hidden md:flex scale-90 opacity-30 blur-[1px] hover:opacity-60"
                      }
                    `}
                    style={{
                      backgroundColor: isDarkMode ? '#090B0F' : '#FAFAFA',
                      borderWidth: isActive ? '1px' : '0px',
                      borderStyle: isActive ? 'solid' : 'none',
                      borderImageSource: isActive 
                        ? (isDarkMode 
                            ? 'linear-gradient(116.18deg, #FF6C37 -22.52%, #090B0F 33.35%)' 
                            : 'linear-gradient(116.18deg, #FF6C37 -22.52%, #DEDCDC 33.35%)')
                        : undefined,
                      borderImageSlice: isActive ? 1 : undefined,
                    }}
                  >
                    {/* Ikon Kutipan dengan posisi absolut di atas kartu testimonial */}
                    <div className="absolute -top-[23px] left-[40px] w-[63.33px] h-[46.66px] pointer-events-none">
                      <img 
                        src={quoteIcon} 
                        alt="Quote Icon" 
                        className="object-contain w-full h-full" 
                      />
                    </div>
                    {/* Komentar Testimonial */}
                    <div className="flex flex-col gap-[12px] mt-4">
                      <div className="w-[136px] h-[24px] flex items-center justify-center gap-[4px] mx-auto text-[#F3B64C] text-xl select-none leading-none">
                        {[...Array(item.stars)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    {/* Komentar Testimonial dengan penyesuaian warna teks untuk mode gelap dan terang */}
                      <div className="w-full h-auto min-h-[96px] flex items-center justify-center mx-auto">
                        <p 
                          className="text-base md:text-md font-semibold text-center leading-relaxed text-[#0A0D12] transition-colors duration-300"
                          style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                        >
                          {item.comment}
                        </p>
                      </div>
                    </div>
                    {/* Avatar dengan efek border dan skala saat aktif, serta penyesuaian warna border untuk mode gelap dan terang */}
                    <div className="flex flex-col justify-center mt-2 text-center">
                      <h4 
                        className="text-base md:text-lg font-semibold text-[#0A0D12] transition-colors duration-300"
                        style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                      >
                        {item.name}
                      </h4>
                      <p className={`text-sm md:text-[15px] font-semibold transition-colors duration-300 ${
                        isActive ? "text-[#FF6C37]" : "text-gray-400 dark:text-zinc-500"
                      }`}>
                        {item.role} at {item.company}
                      </p>
                    </div>
                    {/* Avatar dengan efek border dan skala saat aktif, serta penyesuaian warna border untuk mode gelap dan terang */}
                    <div className="absolute -bottom-[37.5px] left-1/2 -translate-x-1/2 w-[75px] h-[75px]">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className={`w-[75px] h-[75px] rounded-full object-cover shadow-sm border-2 transition-all duration-300 ${
                          isActive ? "border-[#FF6C37] scale-105" : "border-transparent"
                        }`}
                        style={{
                          borderColor: isActive 
                            ? '#FF6C37' 
                            : (isDarkMode ? 'transparent' : '#DEDCDC')
                        }}
                      />
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center items-center gap-[6px] mt-8">
            {originalTestimonials.map((item, index) => {
              const isDotActive = data[1].id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleDotClick(index)}
                  className={`h-[12px] rounded-full transition-all duration-300 cursor-pointer ${
                    isDotActive ? "bg-[#FF6C37] w-[24px]" : "bg-[#DEDCDC] dark:bg-zinc-800 w-[12px]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;