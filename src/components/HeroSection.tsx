import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        duration={0.7}
        className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-20"
      >
        {['About', 'Price', 'Projects', 'Contact'].map((item) => {
          const href =
            item === 'About'
              ? '#about'
              : item === 'Price'
              ? '#services'
              : item === 'Projects'
              ? '#projects'
              : 'mailto:knahag9@gmail.com';

          return (
            <a
              key={item}
              href={href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {item}
            </a>
          );
        })}
      </FadeIn>

      {/* Main Center Area with Heading */}
      <div className="relative w-full flex-1 flex flex-col items-center justify-center -mt-6 sm:-mt-8 md:-mt-12">
        {/* Massive Hero Heading */}
        <div className="w-full overflow-hidden flex justify-center items-center pointer-events-none">
          <FadeIn
            delay={0.15}
            y={40}
            duration={0.8}
            className="w-full text-center"
          >
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
              Hi, i&apos;m extra
            </h1>
          </FadeIn>
        </div>

        {/* Hero Portrait with Magnet effect */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
          <FadeIn delay={0.6} y={30} duration={0.8}>
            <Magnet
              padding={150}
              strength={3}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
              className="w-full flex justify-center items-center"
            >
              <img
                src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                alt="Extra - 3D Creator Portrait"
                className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                loading="eager"
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20} duration={0.7}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
