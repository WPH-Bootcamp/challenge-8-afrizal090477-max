import Container from "../ui/Container";
import { logoCloudData } from "../../data/logos";

const LogoCloudSection = () => {
  const { title, logos } = logoCloudData;

  return (
    <section className="overflow-hidden bg-panel-bg transition-colors duration-300 w-full min-h-[236px] flex flex-col justify-center">
      <Container className="max-w-[1440px]"> 
        {/* area judul */}
        <div className="flex items-center justify-center mb-1 h-9">
          <h2 className="text-xl font-bold tracking-normal text-center text-text-main dark:text-zinc-300">
            {title}
          </h2>
        </div>

        <div className="relative w-full overflow-hidden pt-[40px] pb-[40px] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex items-center gap-[48px] animate-marquee whitespace-nowrap">
            
            {/* TRACK PERTAMA */}
            {logos.map((item, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center justify-center h-12 select-none group shrink-0"
              >
                <img 
                  src={item.src} 
                  alt="Company Logo"
                  className="object-contain w-auto h-full transition-all duration-300 max-h-12 mix-blend-luminosity opacity-40 hover:opacity-100 group-hover:scale-105 dark:opacity-50 dark:hover:opacity-100" 
                  loading="lazy"
                />
              </div>
            ))}

            {/* TRACK KEDUA (DUPLIKAT UNTUK EFEK LOOP INFINITE MARQUEE) */}
            {logos.map((item, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center justify-center h-12 select-none group shrink-0"
              >
                <img 
                  src={item.src} 
                  alt="Company Logo"
                  className="object-contain w-auto h-full transition-all duration-300 max-h-12 mix-blend-luminosity opacity-40 hover:opacity-100 group-hover:scale-105 dark:opacity-50 dark:hover:opacity-100" 
                  loading="lazy"
                />
              </div>
            ))}

          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoCloudSection;