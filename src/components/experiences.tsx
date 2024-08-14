import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

interface ExperiencesProps {
  img: string;
  company: string;
  role: string;
  date: string;
  children: ReactNode | string;
}

export const Experiences = (props: ExperiencesProps) => {
  const [isExperienceMenuOpen, setIsExperienceMenuOpen] = useState(false);

  const openMenu = () => {
    setIsExperienceMenuOpen(true);
  };

  const closeMenu = () => {
    setIsExperienceMenuOpen(false);
  };

  return (
    <div data-aos="fade-up" className="w-full max-h-full flex gap-4">
      <div className="flex flex-col gap-1 items-center">
        <div className="min-w-16 max-w-16 min-h-16 max-h-16 rounded-full bg-neutral-800 ">
          <img
            src={props.img}
            alt="company logo"
            className="min-w-16 max-w-16 min-h-16 max-h-16 rounded-full object-cover"
          />
        </div>
        <div className="w-px h-full rounded-full bg-neutral-800" />
      </div>
      <div className="flex flex-col justify-between gap-4 pb-4">
        <div>
          <p className="font-bold text-xl md:text-xl">{props.company}</p>
          <p className="font-medium text-lg md:text-lg">{props.role}</p>
          <p className="text-sm italic text-neutral-400 md:text-md">
            {props.date}
          </p>
        </div>
        <p
          className={`text-neutral-400 md:text-lg  ${
            isExperienceMenuOpen ? "" : "line-clamp-[7]"
          }`}
        >
          {props.children}
        </p>
        <button
          type="button"
          onClick={isExperienceMenuOpen ? closeMenu : openMenu}
          className="gap-1 text-blue-500 w-fit flex items-center"
        >
          {isExperienceMenuOpen ? (
            <span className="flex items-center gap-1">
              Fechar
              <ChevronUp className="size-5" />
            </span>
          ) : (
            <span className="flex items-center gap-1">
              Ler mais <ChevronDown className="size-5" />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
