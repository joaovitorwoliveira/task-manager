import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  password: z.string().min(1, {
    message: "Por favor, insira uma senha",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um email válido",
  }),
  password: z.string().min(6, {
    message: "Pelo menos 6 caracteres requeridos",
  }),
  name: z.string().min(1, {
    message: "Por favor, insira um nome",
  }),
});
