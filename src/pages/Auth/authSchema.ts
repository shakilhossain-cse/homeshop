import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required").min(6),
  });
  