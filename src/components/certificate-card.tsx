import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  img: string;
  link: string;
  title: string;
}

export const CertificateCard = (props: CertificateCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-full max-h-full  rounded-xl shadow">
        <img
          src={props.img}
          alt="certificate image"
          className="w-full h-full rounded-xl object-contain"
        />
      </div>
      <a
        href={props.link}
        target="_blank"
        className="flex items-center gap-2 text-neutral-400 font-medium md:text-lg"
      >
        {props.title}
        <ExternalLink className="size-5" />
      </a>
    </div>
  );
};
