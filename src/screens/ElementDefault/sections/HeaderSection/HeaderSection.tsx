import React from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full items-center justify-center bg-[#101622cc] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="flex max-w-screen-lg w-full items-center justify-between pt-4 pb-[17px] px-10 border-b border-gray-800">
        <div className="inline-flex items-center gap-3">
          <div className="flex flex-col w-5 h-5 items-start">
            <img
              className="w-5 h-5"
              alt="Component"
              src="https://c.animaapp.com/micu87i2SXE1a3/img/component-3.svg"
            />
          </div>

          <div className="inline-flex items-start flex-col">
            <h1 className="[font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[-0.27px] leading-[22.5px] whitespace-nowrap">
              Engineer&#39;s Name
            </h1>
          </div>
        </div>

        <nav className="inline-flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="[font-family:'Inter',Helvetica] font-medium text-gray-300 text-sm tracking-[0] leading-5 whitespace-nowrap hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
