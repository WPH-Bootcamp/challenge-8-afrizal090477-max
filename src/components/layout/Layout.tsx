import { useState, useEffect, type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showCover, setShowCover] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // { 1. Setelah 2 detik, mulai jalankan efek memudar (fade-out)}
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // 2. Setelah 2.5 detik, hapus total cover dari memori DOM browser
    const removeTimeout = setTimeout(() => {
      setShowCover(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-panel-bg">
      {/* Layer Cover Pembuka dengan animasi memudar setelah 2 detik, dan dihapus setelah 2.5 detik untuk efisiensi performa */}
      {showCover && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f172a] transition-opacity duration-500 select-none pointer-events-none ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="px-6 text-center transition-all duration-700 transform animate-pulse">
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
              Company <br />
              <span className="text-brand-orange">Profile</span>
            </h1>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-brand-orange animate-bounce"></div>
          </div>
        </div>
      )}

      {/* Kontainer utama yang membungkus Navbar, Konten, dan Footer dengan transisi untuk efek memudar saat cover hilang */}
      <div className={`w-full max-w-[1440px] mx-auto transition-all duration-700 ${showCover ? "opacity-0 scale-98" : "opacity-100 scale-100"}`}>
        <Navbar />
        
        {/* konten utama homepage yang akan diisi oleh section-section lain seperti Hero, About, Services, dll. dengan transisi untuk efek memudar saat cover hilang */}
        <main>
          {children}
        </main>

        <Footer />
      </div>

    </div>
  );
};

export default Layout;