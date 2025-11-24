import React from "react";
import { ContentSection } from "./sections/ContentSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContainerSection } from "./sections/MainContainerSection";

const socialLinks = [
  {
    href: "#",
    icon: "https://c.animaapp.com/micu87i2SXE1a3/img/vector.svg",
    alt: "Twitter",
    className: "w-6 h-[29px]",
    imgClassName: "absolute w-[83.33%] h-[41.38%] top-[29.31%] left-[8.33%]",
  },
  {
    href: "#",
    icon: "https://c.animaapp.com/micu87i2SXE1a3/img/component-5.svg",
    alt: "GitHub",
    className: "w-6 h-6",
    imgClassName: "relative w-6 h-6",
  },
  {
    href: "#",
    icon: "https://c.animaapp.com/micu87i2SXE1a3/img/component-5-1.svg",
    alt: "LinkedIn",
    className: "w-6 h-6",
    imgClassName: "relative w-6 h-6",
  },
];

export const ElementDefault = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-full items-start bg-[linear-gradient(0deg,rgba(16,22,34,1)_0%,rgba(16,22,34,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]"
      data-model-id="9:125"
    >
      <HeaderSection />
      <MainContainerSection />
      <ContentSection />

      <footer className="flex flex-col items-start gap-4 pt-[33px] pb-8 px-0 w-full bg-[#1a1a1a] border-t border-[#ffffff1a]">
        <nav
          className="flex items-start justify-center gap-4 w-full"
          aria-label="Social media links"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center justify-center opacity-0 translate-y-[-1rem] animate-fade-in"
              style={
                {
                  "--animation-delay": `${600 + index * 100}ms`,
                } as React.CSSProperties
              }
              aria-label={link.alt}
            >
              {link.alt === "Twitter" ? (
                <div className="relative w-6 h-[29px]">
                  <img
                    className={link.imgClassName}
                    alt={link.alt}
                    src={link.icon}
                  />
                </div>
              ) : (
                <img
                  className={link.imgClassName}
                  alt={link.alt}
                  src={link.icon}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:900ms]">
          <p className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-sm text-center tracking-[0] leading-5">
            © 2024 Yuki Tanaka. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
