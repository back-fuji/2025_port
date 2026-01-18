import { ChevronDownIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Stars } from "./Stars";
import { Waves } from "./Waves";

const technologies = [
  { name: "Laravel", highlighted: true },
  { name: "TypeScript", highlighted: false },
  { name: "Vue.js", highlighted: true },
  { name: "Next.js", highlighted: false },
  { name: "Word Press", highlighted: true },
  { name: "AWS", highlighted: false },
  { name: "JavaScript", highlighted: true },
  { name: "API", highlighted: false },
];

export const MainContainerSection = (): JSX.Element => {
  const scrollToExperience = (): void => {
    const el = document.getElementById("experience");
    if (!el) return;
    // HeaderSection と同じオフセット（固定ヘッダー分）を差し引いてスクロール
    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col min-h-screen items-start relative w-full bg-[#1a1a1a] pt-[56.5px]">
      <div className="flex flex-col items-center justify-center pt-8 pb-28 px-6 relative flex-1 w-full bg-[#00000080]">
        <Stars />
        <Waves />
        <div className="flex flex-col max-w-screen-lg w-full items-center">
          <div className="inline-flex flex-col max-w-2xl items-center pt-0 pb-6 px-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className={`px-3 py-1 text-sm font-medium ${
                    tech.highlighted
                      ? "bg-[#0d59f21a] text-[#0d59f2] hover:bg-[#0d59f21a]"
                      : "bg-[#6b72801a] text-gray-300 hover:bg-[#6b72801a]"
                  }`}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col max-w-screen-md w-full items-start gap-6">
            <div className="flex flex-col items-start gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="items-center flex flex-col w-full">
                <h1 className="[font-family:'Inter',Helvetica] font-black text-white text-4xl sm:text-7xl text-center tracking-[0.01em] leading-[1.5] sm:leading-[60px]">
                  Consultative &amp; 
                  <br />
                  Craftsmanship &amp;
                  <br />
                  Delivery
                </h1>
              </div>

              <div className="items-start px-12 py-0 flex flex-col w-full">
                <div className="max-w-2xl items-center flex flex-col w-full">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-gray-400 text-lg text-center tracking-[0] leading-7">
                    クリーンで高性能、そして使いやすいWeb体験を
                    <br />
                    提案力のあるエンジニアを目指して。
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <div className="flex items-start justify-center w-full">
                <Button
                  size="lg"
                  className="h-12 px-6 bg-[#0d59f2] hover:bg-[#0d59f2]/90 text-white font-bold text-base tracking-[0.24px] transition-colors"
                  type="button"
                  onClick={scrollToExperience}
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 pt-6 inset-x-0 mx-auto bottom-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-fit">
          <div className="inline-flex flex-col items-start">
            <div className="[font-family:'Inter',Helvetica] font-medium text-gray-400 text-xs tracking-[1.20px] leading-4 whitespace-nowrap">
              SCROLL
            </div>
          </div>
          <div className="inline-flex flex-col items-start px-0 py-0.5">
            <ChevronDownIcon className="w-5 h-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
