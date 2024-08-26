"use server";
import * as z from "zod";
import { AuthError } from "next-auth";

import { signIn } from "../auth";
import { LoginSchema } from "../schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "../lib/db";

import { DEFAULT_LOGIN_REDIRECT } from "../routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Campos inválidos!" };
  }

  const { email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email não existe!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciais inválidas" };
        default:
          return { error: "Algo deu errado!" };
      }
    }

    throw error;
  }

  return { success: "Login feito com sucesso!" };
};
