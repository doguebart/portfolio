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
        <div className="embla__slide w-full lg:w-[50%] xl:w-[40%] shrink-0 md:w-2/3">
          <ProjectCard
            link="https://github.com/doguebart/Get-a-Pet.git"
            tags={["Backend", "APIs RESTful"]}
            technologies={[
              "Node.js",
              "Fastify",
              "TypeScript",
              "Prisma",
              "PostgreSQL",
              "Docker",
              "Fastify Cookies",
              "JSON Web Token",
              "Vitest",
              "SOLID",
              "Clean Architecture",
            ]}
            image="getApet.jpg"
            title="getApet"
            content="O projeto Get A Pet é uma plataforma inovadora que facilita a conexão entre ONGs, petshops e pessoas interessadas em adotar animais de estimação. Com funcionalidades abrangentes, a plataforma permite que organizações criem contas, façam login, e gerenciem suas informações e os perfis dos animais disponíveis para adoção. As ONGs e petshops podem cadastrar, editar e remover informações sobre os animais, além de atualizar o status de adoção para 'adotado' quando necessário. Usuários da plataforma têm acesso a uma lista completa de todos os animais disponíveis para adoção, podendo filtrar por nome e visualizar detalhes específicos de cada animal, incluindo espécie, tamanho, idade e características adicionais. Além disso, é possível visualizar informações detalhadas das organizações, como contato e descrição, promovendo uma adoção consciente e informada. Get A Pet simplifica o processo de adoção, conectando animais a novos lares de maneira eficiente e organizada."
          />
        </div>
      </div>
    </div>
  );
};
