import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { formSchema } from "../utils/zod-form-schema-validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactForm = () => {
  type formSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: formSchema) => {
    console.log(data);
    reset();
  };

  return (
    <form
      data-aos="fade-up"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1">
        <label className="text-neutral-600 font-medium">Nome completo</label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Digite seu nome completo"
          className={`w-full p-4 bg-white border boder-neutral-400 text-neutral-600 outline-none rounded-xl focus:border-blue-800 ${
            errors.name && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-neutral-600 font-medium">E-mail</label>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Digite seu endereço de e-mail"
          className={`w-full p-4 bg-white border boder-neutral-400 text-neutral-600 outline-none rounded-xl focus:border-blue-800 ${
            errors.email && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-neutral-600 font-medium">Assunto</label>
        <input
          type="text"
          {...register("subject", { required: true })}
          placeholder="Por que está entrando em contato?"
          className={`w-full p-4 bg-white border boder-neutral-400 text-neutral-600 outline-none rounded-xl focus:border-blue-800 ${
            errors.subject && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.subject && (
          <span className="text-red-500">{errors.subject.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-neutral-600 font-medium">Mensagem</label>
        <textarea
          {...register("message", { required: true })}
          className={`w-full p-4 min-h-40 max-h-40 bg-white border boder-neutral-400 text-neutral-600 outline-none rounded-xl focus:border-blue-800 ${
            errors.message && "border-red-500 focus:border-red-500"
          }`}
        />

        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="p-4 rounded-xl flex justify-center text-lg items-center gap-2 bg-blue-800 hover:bg-opacity-90 duration-150"
      >
        Enviar
        <Send className="size-5" />
      </button>
    </form>
  );
};
