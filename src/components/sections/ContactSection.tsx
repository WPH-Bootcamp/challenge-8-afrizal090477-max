import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { contactData } from "../../data/contact";
import successIcon from "../../../assets/icons/Message-send.svg";
import failedIcon from "../../../assets/icons/Message-failed.svg";

const ContactSection = () => {
  // Ambil data murni dari contactData
  const { title, subtitle, serviceOptions } = contactData;

  // State untuk form fields (Controlled Input)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // State checkbox
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // State Notifikasi Pop-up
  const [notificationType, setNotificationType] = useState<"success" | "failed" | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Memantau perubahan class 'dark' di root HTML
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

  const handleServiceChange = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    //Jika input email mengandung kata 'error' atau 'fail', pop-up GAGAL akan muncul
    if (email.toLowerCase().includes("error") || email.toLowerCase().includes("fail")) {
      setNotificationType("failed");
    } else {
      // Jika email normal, tetap memicu pop-up SUKSES
      setNotificationType("success");
      setName("");
      setEmail("");
      setMessage("");
      setSelectedServices([]); 
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-panel-bg border-b border-panel-border transition-colors duration-300 min-h-[956px] flex flex-col justify-center py-[80px]"
    >
      <style>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: ${isDarkMode ? '#FFFFFF' : '#000000'} !important;
          -webkit-box-shadow: 0 0 0px 1000px ${isDarkMode ? '#090B0F' : '#FFFFFF'} inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <Container className="max-w-[1440px] px-6 md:px-12 lg:px-[140px]">
        {/* SINKRONISASI UTAMA */}
        <div className="flex flex-col gap-[64px] items-center w-full">
          {/* Judul dan Deskripsi Kontak */}
          <div className="w-full max-w-[720px] h-auto md:h-[104px] text-center flex flex-col gap-4">
            <h2 
              className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-[-0.02em] text-[#0A0D12] leading-none transition-colors duration-300"
              style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
            >
              {title}
            </h2>
            <p className="text-base md:text-lg font-medium text-[#717680] dark:text-zinc-400 leading-normal">
              {subtitle}
            </p>
          </div>

          {/* Formulir utama dengan input fields dan pilihan services */}
          <div className="w-full max-w-[720px] min-h-[644px] flex flex-col gap-[40px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full min-h-[556px]">
              {/* Name Input Field */}
              <div className="w-full h-auto md:h-[82px] flex flex-col gap-[6px]">
                <label 
                  className="text-sm font-bold text-[#0A0D12] h-[28px] flex items-center transition-colors duration-300"
                  style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                >
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full h-[48px] px-4 rounded-xl text-md font-medium placeholder-[#717680] focus:outline-none focus:border-[#FF623E]"
                  style={{
                    backgroundColor: isDarkMode ? '#090B0F' : '#FFFFFF',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    border: isDarkMode ? 'none' : '1px solid #DFDFDF'
                  }}
                />
              </div>
              {/* Email Input Field */}
              <div className="w-full h-auto md:h-[82px] flex flex-col gap-[6px]">
                <label 
                  className="text-sm font-bold text-[#0A0D12] h-[28px] flex items-center transition-colors duration-300"
                  style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                >
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-[48px] px-4 rounded-xl text-md font-medium placeholder-[#717680] focus:outline-none focus:border-[#FF623E]"
                  style={{
                    backgroundColor: isDarkMode ? '#090B0F' : '#FFFFFF',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    border: isDarkMode ? 'none' : '1px solid #DFDFDF'
                  }}
                />
              </div>
              {/* MESSAGE TEXTAREA */}
              <div className="w-full h-auto md:h-[168px] flex flex-col gap-[6px]">
                <label 
                  className="text-sm font-bold text-[#0A0D12] h-[28px] flex items-center transition-colors duration-300"
                  style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                >
                  Message
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message"
                  className="w-full h-[134px] p-4 rounded-xl text-md font-medium placeholder-[#717680] focus:outline-none focus:border-[#FF623E] resize-none"
                  // 🎯 FIX UTAMA MESSAGE: Mengunci warna ketikan text area pesan
                  style={{
                    backgroundColor: isDarkMode ? '#090B0F' : '#FFFFFF',
                    color: isDarkMode ? '#FFFFFF' : '#000000',
                    border: isDarkMode ? 'none' : '1px solid #DFDFDF'
                  }}
                />
              </div>

              {/* Pilihan Services Checkbox */}
              <div className="w-full h-auto md:h-[164px] flex flex-col gap-[14px]">
                <label 
                  className="text-sm font-bold text-[#0A0D12] h-[28px] flex items-center transition-colors duration-300"
                  style={{ color: isDarkMode ? '#FFFFFF' : '#0A0D12' }}
                >
                  Services
                </label>
                <div className="w-full md:h-[122px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-[37px] gap-y-[16px]">
                  {serviceOptions.map((service) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <label 
                        key={service} 
                        className="flex items-center gap-[12px] cursor-pointer select-none h-[30px] w-full max-w-[232px] group"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleServiceChange(service)}
                          className="hidden"
                        />
                        <div 
                          className="h-[20px] w-[20px] rounded-[4px] flex items-center justify-center transition-all duration-200 shrink-0 text-white"
                          style={{
                            backgroundColor: isChecked ? '#FF623E' : (isDarkMode ? '#090B0F' : '#FFFFFF'),
                            border: isChecked ? 'none' : (isDarkMode ? 'none' : '1px solid #DFDFDF')
                          }}
                        >
                          {isChecked && (
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span 
                          className="text-[15px] font-medium transition-colors duration-300"
                          style={{
                            color: isChecked 
                              ? '#FF623E' 
                              : (isDarkMode ? '#FFFFFF' : '#0A0D12'),
                            fontWeight: isChecked ? 600 : 500
                          }}
                        >
                          {service}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 5. Tombol Send */}
              <div className="w-full h-[48px] pt-2">
                <button
                  type="submit"
                  className="w-full h-[48px] bg-[#FF623E] hover:bg-[#e04f2c] text-white font-bold text-[15px] tracking-[-0.02em] rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center"
                  style={{ boxShadow: '4px 4px 4px 0px rgba(255, 255, 255, 0.25) inset' }}
                >
                  Send
                </button>
              </div>

            </form>
          </div>

        </div>

        {/* POP-UP NOTIFIKASI */}
        {notificationType !== null && (
          <div className="fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-300 bg-zinc-950/70 " style={{ zIndex: 99999 }}>
            <div className="bg-white dark:bg-[#0b0f19] border border-zinc-100 dark:border-zinc-900 p-8 rounded-3xl w-full max-w-sm text-center shadow-2xl space-y-5 transform scale-100 transition-transform duration-300">
              <div className="flex items-center justify-center w-20 h-20 mx-auto">
                <img 
                  src={notificationType === "success" ? successIcon : failedIcon} 
                  alt={notificationType === "success" ? "Success" : "Failed"} 
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black tracking-wide text-black dark:text-white">
                  {notificationType === "success" ? "Message Received!" : "Send Message Failed!"}
                </h3>
                <p className="px-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {notificationType === "success" 
                    ? "Thank you for reaching out! Our team will get back to you as soon as possible."
                    : "Something went wrong on our end. Please check your connection and try again."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setNotificationType(null)}
                className="w-full h-[48px] bg-[#FF623E] text-white font-bold text-sm rounded-full transition-all duration-200 cursor-pointer"
              >
                {notificationType === "success" ? "Back to Home" : "Try Again"}
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ContactSection;