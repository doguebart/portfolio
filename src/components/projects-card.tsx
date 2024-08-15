import {
  CameraOff,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  link?: string;
  image?: string;
  title: string;
  content: string;
  tags: string[];
  technologies: string[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full min-h-80 max-h-full rounded-xl bg-neutral-950 p-8 flex flex-col gap-6 shadow"
    >
      {props.image ? (
        <div className="relative w-full h-60 lg:h-60 rounded-xl">
          <img
            src={props.image}
            alt="project image"
            className="object-cover w-full h-full rounded-xl"
          />
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              className="flex items-center justify-center size-14 bg-neutral-950 rounded-tl-xl absolute bottom-0 right-0"
            >
              <ExternalLink className="size-8 text-white" />
            </a>
          )}
        </div>
      ) : (
        <div className="relative w-full h-60 lg:h-60 rounded-xl">
          <div className="object-cover w-full h-full rounded-xl flex items-center justify-center border border-neutral-800">
            <CameraOff className="size-10 text-neutral-600" />
          </div>
          {props.link && (
            <a
              href={props.link}
              target="_blank"
              className="flex items-center justify-center size-14 bg-neutral-950 rounded-tl-xl absolute bottom-[-1px] right-[-1px] border-t border-l border-neutral-800"
            >
              <ExternalLink className="size-8 text-white" />
            </a>
          )}
        </div>
      )}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center gap-2">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center justify-center bg-blue-800 px-4 h-8 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-white text-xl font-bold capitalize md:text-xl">
          {props.title}
        </h2>
        <p
          className={`text-neutral-500 text-justify md:text-lg ${
            isMenuOpen ? "" : "line-clamp-6 lg:line-clamp-4"
          }`}
        >
          {props.content}
        </p>
        {isMenuOpen && (
          <div className="w-full flex justify-between">
            <div className="flex flex-col gap-2">
              {props.technologies
                .slice(0, Math.ceil(props.technologies.length / 2))
                .map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-neutral-500 flex items-center gap-2 md:text-lg"
                  >
                    <CheckCircle className="size-5 text-neutral-500" />
                    {tech}
                  </span>
                ))}
            </div>
            <div className="flex flex-col gap-2">
              {props.technologies
                .slice(Math.ceil(props.technologies.length / 2))
                .map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-neutral-500 flex items-center gap-2 md:text-lg"
                  >
                    <CheckCircle className="size-5 text-neutral-500" />
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={isMenuOpen ? closeMenu : openMenu}
          className="gap-1 text-blue-500 w-fit flex items-center"
        >
          {isMenuOpen ? (
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
