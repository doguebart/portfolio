import { useForm } from "react-hook-form";
import { AlertCircle, CheckCircle, Loader, Send } from "lucide-react";
import { formSchema } from "../utils/zod-form-schema-validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const serviceId = import.meta.env.VITE_SERVICE;
const templateId = import.meta.env.VITE_TEMPLATE;
const userId = import.meta.env.VITE_USER_ID;

export const ContactForm = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  type formSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: formSchema) => {
    try {
      setIsLoading(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        userId
      );
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      reset();
    } catch {
      setIsLoading(false);
      setIsError(true);
      reset();
    }
  };

  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <form
      data-aos="fade-up"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      {isError && (
        <div className="p-4 w-full md:w-fit mx-auto rounded-xl max-h-full flex items-center justify-center gap-4 bg-red-500 animate-menu-slide-in">
          <AlertCircle className="size-6 text-white" />
          <span className="text-white font-medium">
            Ops! Tente novamente mais tarde.
          </span>
        </div>
      )}

      {isSuccess && (
        <div className="p-4 w-full md:w-fit mx-auto rounded-xl max-h-full flex items-center justify-center gap-4 bg-green-500 animate-menu-slide-in">
          <CheckCircle className="size-6 text-white" />
          <span className="text-white font-medium">
            Mensagem enviada com sucesso!
          </span>
        </div>
      )}
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
        disabled={isLoading}
        className={`p-4 rounded-xl flex justify-center text-lg items-center gap-2 bg-blue-800 hover:bg-opacity-90 duration-150 ${
          isLoading && "bg-opacity-50"
        }`}
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Loader className="size-5 animate-spin" />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            Enviar
            <Send className="size-5" />
          </div>
        )}
      </button>
    </form>
  );
};
