import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  content: string;
  children: ReactNode;
}

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      data-aos="fade-up"
      className="p-10 w-full max-h-full rounded-xl bg-neutral-950 shadow"
    >
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-center size-16 bg-blue-800 rounded-full">
          {props.children}
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold capitalize md:text-xl">
            {props.title}
          </p>
          <p className="text-neutral-500 text-justify md:text-lg">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
};
