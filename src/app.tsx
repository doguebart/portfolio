import {
  ChevronsDown,
  Figma,
  Github,
  Laptop,
  Linkedin,
  MoveRight,
  Server,
  Smartphone,
} from "lucide-react";
import { Header } from "./components/header";
import StarryBackground from "./components/starry-background";
import { HardSkillsCarousel } from "./components/hard-skills-carousel";
import { ServiceCard } from "./components/service-card";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import { ContactForm } from "./components/contact-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CertificateCard } from "./components/certificate-card";

import { ProjectsCarousel } from "./components/projects-carousel";
import { ProjectCard } from "./components/projects-card";

export const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full h-full flex flex-col">
        <section
          id="#hero"
          className="px-4 w-full h-screen flex items-center justify-center relative"
        >
          <div className="z-10 flex flex-col items-center space-y-8">
            <h1 className="drop-shadow uppercase text-6xl md:text-9xl leading-0 text-white text-center font-black">
              Douglas <br /> Welber
            </h1>
            <div className="flex flex-col items-center space-y-2 md:space-y-4">
              <a
                href="#projects"
                className="bg-blue-800 w-fit rounded-xl px-4 py-2 md:text-lg md:py-4"
              >
                Veja meus projetos
              </a>
              <a
                href="#contact"
                className="border border-neutral-600 flex items-center gap-2 w-fit rounded-xl px-4 py-2 md:text-lg md:py-4"
              >
                Entre em contato <MoveRight className="size-5" />
              </a>
            </div>
            <a href="#aboutMe">
              <ChevronsDown className="animate-bounce size-8 text-blue-600 md:size-10" />
            </a>
          </div>
          <StarryBackground />
        </section>
        <section
          id="aboutMe"
          className="px-4 z-10 bg-white pt-40 md:pt-60 lg:pt-64 pb-20"
        >
          <div className="md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto flex flex-col space-y-10">
            <div className="flex flex-col space-y-6">
              <div className="relative flex items-center justify-center w-full h-60 md:h-80 bg-neutral-950 rounded-tl-xl rounded-tr-xl">
                <div className="absolute top-[-20%] w-3/4 h-72 md:top-[-40%] md:h-[28rem] lg:h-[30rem] lg:w-2/3 xl:w-1/2 lg:top-[-50%]">
                  <img
                    src="douglas.png"
                    alt=""
                    className="rounded-tl-xl rounded-tr-xl min-w-full min-h-full max-w-full max-h-full md:h-full object-cover"
                  />
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col space-y-6">
                <div className="px-2 flex items-center justify-between">
                  <p className="w-fit text-neutral-800 text-xl font-bold md:text-2xl">
                    Douglas Welber
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/douglaswelber/"
                      target="_blank"
                      className="size-10 flex items-center justify-center rounded-xl bg-neutral-800"
                    >
                      <Linkedin className="text-neutral-50 size-5" />
                    </a>
                    <a
                      href="https://github.com/doguebart"
                      target="_blank"
                      className="size-10 flex items-center justify-center rounded-xl bg-neutral-800"
                    >
                      <Github className="text-neutral-50 size-5" />
                    </a>
                  </div>
                </div>
                <p className="px-2 text-justify text-neutral-600 md:text-lg">
                  Olá! Meu nome é Douglas Welber, tenho 20 anos e sou um
                  entusiasta de tecnologia morando em Osasco, São Paulo. Sou
                  Desenvolvedor Full-Stack, formado em Análise e Desenvolvimento
                  de Sistemas pela FIAP - Faculdade de Informática e
                  Administração Paulista. <br /> <br /> Desde pequeno, sempre
                  fui fascinado por tecnologia, especialmente por causa dos
                  jogos que eu jogava. Essa paixão me levou a mergulhar no mundo
                  do desenvolvimento, onde transformo ideias em soluções
                  práticas e inovadoras. Se você está procurando alguém que
                  combine conhecimento técnico com criatividade e dedicação, sou
                  a pessoa certa.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="py-10">
          <HardSkillsCarousel />
        </div>
        <section id="services" className="px-4 z-10 bg-neutral-900 py-24">
          <div className="md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto flex flex-col space-y-20">
            <div
              className="flex flex-col items-center gap-2"
              data-aos="fade-left"
            >
              <span className="md:text-xl font-normal text-lg leading-none text-neutral-400 tracking-widest ">
                O que eu faço?
              </span>
              <h2 className="md:text-4xl text-center uppercase font-bold text-2xl leading-8 tracking-wider">
                Serviços & <br /> especialidades
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <ServiceCard
                title="Design & Prototipagem"
                content="Transformo suas ideias em designs atraentes e funcionais. Utilizando ferramentas modernas, crio protótipos interativos que ajudam a visualizar e validar o conceito antes mesmo do desenvolvimento começar. Tudo para garantir que o produto final atenda às expectativas e necessidades dos usuários."
              >
                <Figma className="size-8" />
              </ServiceCard>
              <ServiceCard
                title="Interfaces responsivas"
                content="Desenvolvo interfaces que se adaptam perfeitamente a qualquer dispositivo, proporcionando uma experiência de usuário consistente e agradável, seja em desktops, tablets ou smartphones. Com foco em usabilidade e design, suas aplicações serão visualmente atrativas e fáceis de usar."
              >
                <Laptop className="size-8" />
              </ServiceCard>
              <ServiceCard
                title="Mobile-First"
                content="Adoto a abordagem Mobile-First para garantir que seus projetos estejam preparados para a era mobile. Começo o desenvolvimento pensando primeiro nos dispositivos móveis, garantindo que a experiência seja otimizada para os usuários que acessam seus serviços em smartphones e tablets."
              >
                <Smartphone className="size-8" />
              </ServiceCard>
              <ServiceCard
                title="APIs RESTful"
                content="Com amplo conhecimento em Node.js e Nest.js, desenvolvo APIs RESTful robustas e eficientes que garantem uma comunicação eficaz entre diferentes partes do seu sistema. Minhas APIs são bem documentadas, seguras e escaláveis, permitindo que seu negócio cresça de maneira consistente e sem problemas.

"
              >
                <Server className="size-8" />
              </ServiceCard>
            </div>
          </div>
        </section>
        <section id="experiences" className="px-4 z-10 bg-neutral-950 py-24">
          <div className="md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto flex flex-col space-y-20">
            <div className="flex flex-col items-center" data-aos="fade-right">
              <span className="font-normal text-lg leading-none text-neutral-400 tracking-widest md:text-2xl">
                Confira as minhas
              </span>
              <h2 className="md:text-4xl uppercase font-bold text-2xl leading-normal tracking-wider">
                Experiências
              </h2>
            </div>
            <div className="w-full max-h-full flex flex-col">
              <Experiences
                img="tunetraders_logo.jpg"
                company="Tunetraders"
                role="Desenvolvedor Full-Stack"
                date="Nov/2023 - Jul/2024 | 9 meses"
              >
                Como Desenvolvedor Full Stack Freelancer na TuneTraders,
                desempenhei um papel essencial no desenvolvimento e manutenção
                de aplicações web de alta qualidade e intuitivas. Minhas
                responsabilidades incluíram o desenvolvimento de novas
                funcionalidades, otimização de performance e garantia de que a
                aplicação estivesse sempre atualizada e livre de bugs. Minhas
                contribuições impactaram significativamente os clientes,
                melhorando o gerenciamento das NFTs e a experiência geral do
                usuário. <br /> <br /> Destaques: <br /> <br /> - Prototipei e
                desenvolvi interfaces intuitivas e responsivas usando React,
                Typescript, Context API e , resultando em uma experiência de
                usuário significativamente melhorada. <br /> <br /> - Desenvolvi
                e implementei soluções escaláveis utilizando Node.js, Postgres,
                Express, Princípios do SOLID, garantindo uma arquitetura backend
                robusta e eficiente. <br /> <br /> - Utilizei tecnologias como
                React, Typescript, APIs RESTful, Context API, React Query,
                Postgres, princípios SOLID, testes unitários com JEST,
                Mobile-First, Docker e GIT para controle de versão. <br />{" "}
                <br /> - Desenvolvi e implementei funcionalidades que
                facilitaram o gerenciamento das NFTs pelos clientes, melhorando
                a eficiência e a usabilidade do sistema. <br /> <br /> -
                Gerenciei implementações e mudanças no banco de dados Postgres,
                garantindo integridade e desempenho otimizados. <br /> <br /> -
                Adotei metodologias Agile e Scrum para colaborar de forma eficaz
                com as equipes de desenvolvimento, entregando todas as tarefas
                requisitadas dentro do prazo e atendendo às expectativas dos
                clientes. <br /> <br /> - Realizei testes unitários, testes de
                integração e testes e2e utilizando TDD com JEST, assegurando a
                qualidade e a confiabilidade do código através de uma abordagem
                de desenvolvimento orientada a testes. <br /> <br /> - Otimizei
                a performance do site e implementei estratégias de SEO para
                aumentar a visibilidade online e melhorar a experiência do
                usuário.
              </Experiences>
              <Experiences
                img="logo_sim.png"
                company="SIM Instituto Social"
                role="Desenvolvedor Full-Stack"
                date="Mai/2023 - Dez/2023 | 8 meses"
              >
                No SIM Instituto Social, desempenhei um papel fundamental na
                sustentação e desenvolvimento da plataforma web voltada para
                projetos sociais. Assumi a gestão do seu desenvolvimento,
                comunicando-me diretamente com o cliente e implementando novas
                funcionalidades que aprimoraram significativamente o site.{" "}
                <br /> <br />
                Destaques: <br /> <br /> - Utilizei HTML, CSS, JavaScript e
                Bootstrap para criar e aprimorar todas as páginas relacionadas
                aos projetos sociais da instituição, resultando em um design
                atraente, informações organizadas de maneira eficaz e uma
                experiência do usuário melhorada. <br /> <br /> - Implementei um
                formulário de contato funcional com o uso do EmailJs,
                simplificando a interação dos visitantes com a organização, o
                que levou a um maior engajamento e melhor comunicação entre o
                público e o SIM Instituto Social. <br /> <br /> - Introduzi
                seções de depoimentos e documentos, destacando o impacto
                positivo das ações da organização e promovendo a confiança entre
                os apoiadores. Essa iniciativa aumentou a transparência e a
                confiabilidade dos projetos realizados.
              </Experiences>
              <Experiences
                img="chromus_logo.png"
                company="Chromus Pinturas"
                role="Desenvolvedor Full-Stack"
                date="Jan/2023 - Mar/2023 | 3 meses"
              >
                Na Chromus Pinturas, desempenhei um papel fundamental como único
                responsável pelo desenvolvimento do site da empresa, incluindo a
                criação do design do Figma (UI/UX) e arquitetura da aplicação.{" "}
                <br /> <br />
                Destaques: <br /> <br /> - Criei o site da empresa Chromus
                Pinturas utilizando HTML, JavaScript e Tailwind CSS para criar
                um site responsivo e visualmente atraente. <br /> <br /> -
                Mantive uma comunicação direta e contínua com o cliente,
                assegurando a superação de suas expectativas ao longo de todo o
                processo de construção do site.
                <br /> <br /> - Utilizei meus conhecimentos em Figma (UI/UX)
                para criar o design do site, garantindo uma interface intuitiva
                e agradável para os usuários. <br /> <br /> - Implementei um
                formulário de contato com o objetivo de facilitar a comunicação
                entre clientes e a empresa, melhorando a interação e
                direcionando potenciais clientes para os serviços oferecidos.{" "}
                <br /> <br /> - Apliquei conhecimentos em (UI/UX) e adotei uma
                abordagem Mobile-First para garantir uma experiência de usuário
                otimizada em diferentes dispositivos. <br /> <br /> -
                Implementei estratégias de SEO para aumentar a visibilidade
                orgânica do site nos mecanismos de busca, atingindo a primeira
                colocação do Google.
              </Experiences>
            </div>
          </div>
        </section>
        <section id="projects" className="px-4 z-10 bg-neutral-900 py-24">
          <div className="md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto flex flex-col space-y-20">
            <div className="flex flex-col items-center" data-aos="fade-left">
              <span className="font-normal text-lg leading-none text-neutral-400 tracking-widest md:text-2xl">
                Meus últimos
              </span>
              <h2 className="md:text-4xl uppercase font-bold text-2xl leading-normal tracking-wider">
                Projetos
              </h2>
            </div>
            <div className="lg:hidden">
              <ProjectsCarousel />
            </div>
            <div className="hidden lg:grid grid-cols-2 xl:grid-cols-2 gap-10">
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
        </section>
        <section id="certificates" className="px-4 z-10 bg-neutral-950 py-24">
          <div className="md:w-[90%] lg:w-[80%] xl:w-[60%] mx-auto flex flex-col space-y-20">
            <div data-aos="fade-right" className="flex flex-col items-center">
              <span className="font-normal text-lg leading-none text-neutral-400 tracking-widest md:text-2xl">
                Confira as minhas
              </span>
              <h2 className="md:text-4xl uppercase font-bold text-2xl leading-normal tracking-wider">
                Certificações
              </h2>
            </div>
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-10"
            >
              <CertificateCard
                img="node_rocketseat.png"
                link="https://app.rocketseat.com.br/certificates/87672a07-e89c-45fb-b631-514d1f81b5e0"
                title="Especialista em Node.js"
              />
              <CertificateCard
                img="figma_rockeseat.png"
                link="https://app.rocketseat.com.br/certificates/e70c26d8-ebdb-4c89-ad8d-05eb9ecc70fa"
                title="Figma"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="px-4 z-10 bg-white py-24">
          <div className="md:w-[90%] lg:w-[60%] xl:w-[40%] mx-auto flex flex-col space-y-20">
            <div className="flex flex-col items-center" data-aos="fade-up">
              <span className="font-normal text-lg leading-none text-neutral-600 tracking-widest md:text-2xl">
                Quer falar comigo?
              </span>
              <h2 className="md:text-4xl text-neutral-800 uppercase font-bold text-2xl leading-normal tracking-wider">
                Entre em contato
              </h2>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
