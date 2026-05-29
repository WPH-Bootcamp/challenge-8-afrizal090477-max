import Container from "../ui/Container";
import { logoCloudData } from "../../data/logos";

const LogoCloudSection = () => {
  const { title, logos } = logoCloudData;

  return (
    <section className="overflow-hidden bg-panel-bg transition-colors duration-300 w-full min-h-[236px] flex flex-col justify-center">
      <Container className="max-w-[1440px]">
        
        
        <div className="flex items-center justify-center mb-6 h-9">
          <h2 className="text-lg font-bold tracking-normal text-center md:text-xl text-text-main dark:text-zinc-400">
            {title}
          </h2>
        </div>

        <div className="relative w-full overflow-hidden pt-10 pb-10 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            
            {logos.map((item) => (
              <div
                key={item.src}
                className="flex items-center justify-center h-12 select-none group"
              >
                <img 
                  src={item.src} 
                  alt="Company Logo"
                  
                  className="object-contain w-auto h-full transition-all duration-300 max-h-12 mix-blend-luminosity opacity-60 hover:opacity-100 group-hover:scale-105 dark:invert dark:opacity-80" 
                  loading="lazy"
                />
              </div>
            ))}

            {logos.map((item) => (
              <div
                key={`${item.src}-duplicate`}
                className="flex items-center justify-center h-12 select-none group"
              >
                <img 
                  src={item.src} 
                  alt="Company Logo"
                  className="object-contain w-auto h-full transition-all duration-300 max-h-12 mix-blend-luminosity opacity-60 hover:opacity-100 group-hover:scale-105 dark:invert dark:opacity-80" 
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