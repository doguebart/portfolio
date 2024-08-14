import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div
      className={`fixed top-0 w-full bg-neutral-950 z-50 ${
        isMenuOpen ? "" : "border-b border-neutral-700"
      }`}
    >
      <header className="w-full md:w-[90%] lg:container mx-auto lg:flex lg:items-center lg:justify-between">
        <div className="px-4 py-6 flex items-center justify-between">
          <a href="#">
            <h1 className="text-xl md:text-2xl text-white font-black uppercase">
              DODO
            </h1>
          </a>
          <button
            type="button"
            onClick={isMenuOpen ? closeMenu : openMenu}
            className="lg:hidden"
          >
            {isMenuOpen ? (
              <X className="size-6 md:size-8" />
            ) : (
              <Menu className="size-6 md:size-8" />
            )}
          </button>
        </div>
        <nav className="hidden w-full md:w-[90%] lg:w-fit lg:flex items-center gap-8">
          <a
            href="#aboutMe"
            onClick={handleLinkClick}
            className="md:text-lg hover:text-neutral-300 duration-150 w-fit text-white"
          >
            Sobre mim
          </a>
          <a
            href="#services"
            onClick={handleLinkClick}
            className="md:text-lg hover:text-neutral-300 duration-150 w-fit text-white"
          >
            Serviços
          </a>
          <a
            href="#experiences"
            onClick={handleLinkClick}
            className="md:text-lg hover:text-neutral-300 duration-150 w-fit text-white"
          >
            Experiências
          </a>
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="md:text-lg hover:text-neutral-300 duration-150 w-fit text-white"
          >
            Projetos
          </a>
          <a
            href="#certificates"
            onClick={handleLinkClick}
            className="md:text-lg hover:text-neutral-300 duration-150 w-fit text-white"
          >
            Certificações
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="md:text-lg flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-xl hover:bg-opacity-90 duration-150 w-fit"
          >
            Entre em contato
            <MoveRight className="size-5" />
          </a>
        </nav>
        {isMenuOpen && (
          <nav
            className={`bg-neutral-900 w-full md:w-[90%] absolute top-[100%] flex flex-col ${
              isMenuOpen ? "animate-menu-slide-in" : "animate-menu-slide-out"
            }`}
          >
            <a
              href="#aboutMe"
              onClick={handleLinkClick}
              className="md:text-lg font-medium w-full p-4 bg-neutral-950 text-white border-b border-t border-neutral-800"
            >
              Sobre mim
            </a>
            <a
              href="#services"
              onClick={handleLinkClick}
              className="md:text-lg font-medium w-full p-4 bg-neutral-950 text-white border-b border-neutral-800"
            >
              Serviços
            </a>
            <a
              href="#experiences"
              onClick={handleLinkClick}
              className="md:text-lg font-medium w-full p-4 bg-neutral-950 text-white border-b border-neutral-800"
            >
              Experiências
            </a>
            <a
              href="#projects"
              onClick={handleLinkClick}
              className="md:text-lg font-medium w-full p-4 bg-neutral-950 text-white border-b border-neutral-800"
            >
              Projetos
            </a>
            <a
              href="#certificates"
              onClick={handleLinkClick}
              className="md:text-lg font-medium w-full p-4 bg-neutral-950 text-white border-b border-neutral-800"
            >
              Certificações
            </a>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="md:text-lg flex items-center gap-2 font-medium w-full p-4 bg-neutral-950 text-white border-b border-neutral-800"
            >
              Entre em contato
              <MoveRight className="size-5" />
            </a>
          </nav>
        )}
      </header>
    </div>
  );
};
