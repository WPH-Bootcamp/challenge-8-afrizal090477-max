import { useEffect, useState } from "react";
import Container from "../ui/Container";
import logoImg from "../../../assets/logos/company.svg";
import { companyInfo } from "../../data/company";
import { footerNavItems } from "../../data/navigation";

const Footer = () => {
  const { footerLogoText, copyright, social } = companyInfo;
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
    <footer
      id="footer"
      className="w-full bg-panel-bg transition-colors duration-300 min-h-[408px] flex flex-col justify-center py-[40px]"
    >
      <Container className="max-w-[1440px] px-6 md:px-12 lg:px-[140px] flex flex-col gap-[8px]">
        <div
          className="w-full max-w-[1160px] md:h-[328px] rounded-[24px] p-6 md:p-[40px] flex flex-col justify-between gap-8 md:gap-[60px] shadow-xs select-none transition-all duration-300"
          style={{
            backgroundColor: isDarkMode ? "#0A0D12" : "#FAFAFA",
            border: isDarkMode ? "1px solid #252B37" : "1px solid #DFDFDF",
          }}
        >

          <div className="w-full md:h-[88px] flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-4">
            <h2
              className="text-2xl md:text-[32px] font-bold tracking-[-0.02em] text-[#0A0D12] max-w-full lg:w-[281px] lg:h-[88px] leading-[1.1] flex items-center transition-colors duration-300"
              style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
            >
              LET'S DISCUSS YOUR IDEAS
            </h2>
            
            <div className="flex items-center gap-[9.6px] h-[36px]">
              <img
                src={logoImg}
                alt="Tech Logo Icon"
                className="w-[29.58px] h-[32.46px] object-contain text-brand-orange"
                loading="lazy"
              />
              <span
                className="text-[24px] font-semibold leading-none h-[36px] flex items-center transition-colors duration-300 uppercase"
                style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
              >
                {footerLogoText || "Your Logo"}
              </span>
            </div>
          </div>

          <div className="w-full h-0 border-t border-[#DFDFDF] dark:border-[#252B37]" />
          
          <div className="w-full md:h-[40px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <nav className="grid w-full grid-cols-1 gap-2 text-left md:flex md:items-center md:w-auto">
              {footerNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="h-[36px] px-4 py-2 rounded-full text-[15px] font-semibold text-[#0A0D12] hover:text-[#FF623E] transition-all flex items-center justify-start md:justify-center cursor-pointer"
                  style={{ color: isDarkMode ? "#FFFFFF" : "#0A0D12" }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-[16px] h-[40px]">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white hover:bg-[#FF623E] hover:border-[#FF623E] transition-all duration-300 cursor-pointer shrink-0"
                style={{
                  backgroundColor: isDarkMode ? "#0A0D12" : "transparent",
                  border: isDarkMode ? "1px solid #252B37" : "1px solid #DFDFDF",
                  color: isDarkMode ? "#FFFFFF" : "#0A0D12",
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>

              <a
                href={social.instagram || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white hover:bg-[#FF623E] hover:border-[#FF623E] transition-all duration-300 cursor-pointer shrink-0"
                style={{
                  backgroundColor: isDarkMode ? "#0A0D12" : "transparent",
                  border: isDarkMode ? "1px solid #252B37" : "1px solid #DFDFDF",
                  color: isDarkMode ? "#FFFFFF" : "#0A0D12",
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white hover:bg-[#FF623E] hover:border-[#FF623E] transition-all duration-300 cursor-pointer shrink-0"
                style={{
                  backgroundColor: isDarkMode ? "#0A0D12" : "transparent",
                  border: isDarkMode ? "1px solid #252B37" : "1px solid #DFDFDF",
                  color: isDarkMode ? "#FFFFFF" : "#0A0D12",
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={social.tiktok || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-white hover:bg-[#FF623E] hover:border-[#FF623E] transition-all duration-300 cursor-pointer shrink-0"
                style={{
                  backgroundColor: isDarkMode ? "#0A0D12" : "transparent",
                  border: isDarkMode ? "1px solid #252B37" : "1px solid #DFDFDF",
                  color: isDarkMode ? "#FFFFFF" : "#0A0D12",
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.53.223A4.717 4.717 0 0 0 14.242 3.6c.725.545 1.62.868 2.583.896V7.45a7.397 7.397 0 0 1-4.295-1.373v6.167a5.16 5.16 0 1 1-5.16-5.16c.46 0 .897.063 1.313.176V10.3a2.122 2.122 0 1 0-1.313 3.993c1.176 0 2.132-.956 2.132-2.131V0h2.996c.01.074.015.148.028.223z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full gap-2 mt-4 select-none">
          <p className="text-[11px] text-zinc-400 dark:text-zinc-600 font-medium tracking-normal text-center">
            {copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;