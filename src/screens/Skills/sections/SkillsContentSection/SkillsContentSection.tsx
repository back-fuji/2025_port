import { skillIconMap, skillsDetailData } from "../../../../data/portfolio";

type Skill = (typeof skillsDetailData)[number];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`material-symbols-outlined ${
            index < rating ? "fill text-star-filled" : "text-star-empty"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const iconName = skillIconMap[skill.icon] ?? skill.icon;

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-border-dark bg-card-dark p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined !text-3xl">{iconName}</span>
        </div>
        <div>
          <h3 className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-lg tracking-[-0.33px] leading-[27.5px]">
            {skill.name}
          </h3>
          <p className="text-sm text-text-muted-dark">{skill.experience}</p>
        </div>
      </div>
      <StarRating rating={skill.rating} />
    </div>
  );
};

export const SkillsContentSection = (): JSX.Element => {
  return (
    <main className="flex flex-col gap-12 mt-10 md:mt-16">
      <div className="flex flex-wrap items-center justify-between gap-4 px-4">
        <div className="flex flex-col gap-2">
          <p className="[font-family:'Noto_Sans_JP',Helvetica] font-bold text-white text-[22px] tracking-[-0.33px] leading-[27.5px]">
            スキル <span className="font-display text-primary">SKILLS</span>
          </p>
          <p className="text-text-muted-dark text-base font-normal leading-normal">
            私がWebアプリケーション開発で使用する言語、フレームワーク、ツール一覧です。
          </p>
        </div>
      </div>

      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsDetailData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </main>
  );
};


