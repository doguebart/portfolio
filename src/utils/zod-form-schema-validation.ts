import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .nonempty("Informe seu nome completo antes de continuar.")
    .min(3, "Digite um nome válido."),
  email: z
    .string()
    .nonempty("Digite seu endereço de e-mail antes de continuar.")
    .email("Digite um endereço de e-mail válido."),
  subject: z
    .string()
    .nonempty("Informe o assunto antes de continuar.")
    .min(3, "Digite um assunto válido."),
  message: z
    .string()
    .nonempty("Digite uma mensagem antes de continuar.")
    .min(30, "Digite uma mensagem válida."),
});
