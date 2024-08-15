import useEmblaCarousel from "embla-carousel-react";
import { ProjectCard } from "./projects-card";
import autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export const ProjectsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        <div className="embla__slide w-full lg:w-[50%] xl:w-[40%] shrink-0 md:w-2/3">
          <ProjectCard
            tags={["Frontend"]}
            technologies={[
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "React Hook Form",
              "Mobile-First",
              "UI/UX",
              "Figma",
            ]}
            image="portfolio.jpg"
            title="Portfólio"
            content="Desenvolvi este portfólio com uma combinação moderna de tecnologias e ferramentas. Utilizei React.js e TypeScript para criar uma interface interativa e dinâmica, enquanto o Tailwind CSS garantiu um design elegante e responsivo. A integração do React Hook Form proporcionou uma experiência de usuário fluida no formulário de contato, e as práticas de UI/UX aliadas ao Figma ajudaram a moldar uma interface intuitiva e agradável."
          />
        </div>
        <div className="embla__slide w-full lg:w-[50%] xl:w-[40%] shrink-0 md:w-2/3">
          <ProjectCard
            link="https://github.com/doguebart/Questyon"
            tags={["Backend", "APIs RESTful"]}
            technologies={[
              "Node.js",
              "Nest.js",
              "TypeScript",
              "Prisma",
              "PostgreSQL",
              "Redis",
              "Cache",
              "Cloudflare R2",
              "Docker",
              "JSON Web Token",
              "Vitest",
              "DDD",
              "SOLID",
              "Clean Architecture",
            ]}
            image="douglas.png"
            title="QuesTYon"
            content="O QuesTYon é um fórum de perguntas e respostas que oferece aos usuários a oportunidade de criar tópicos sobre uma ampla variedade de temas. Além de iniciar discussões, os usuários podem interagir com os tópicos de outros através da criação de respostas e comentários."
          />
        </div>
        <div className="embla__slide w-full lg:w-[50%] xl:w-[40%] shrink-0 md:w-2/3">
          <ProjectCard
            link="https://chromuspintura.com/"
            tags={["Frontend"]}
            technologies={[
              "HTML",
              "Tailwind CSS",
              "JavaScript",
              "SEO",
              "Mobile-First",
              "UI/UX",
              "Figma",
            ]}
            image="chromus.png"
            title="Chromus Pinturas"
            content="Desenvolvi a landing page para a Chromus Pinturas como freelancer, utilizando HTML, Tailwind CSS e JavaScript. A página foi projetada com HTML semântico para melhorar a acessibilidade e otimizada para SEO, garantindo melhor visibilidade nos mecanismos de busca. Com um design moderno e responsivo, a landing page oferece uma experiência de usuário envolvente e eficiente, refletindo a qualidade e o profissionalismo da Chromus Pinturas."
          />
        </div>
      </div>
    </div>
  );
};
