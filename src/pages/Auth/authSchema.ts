import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().nonempty("Email is required").email(),
  password: z.string().nonempty("Password is required").min(6),
});

export const RegisterSchema = z
  .object({
    first_name: z.string().nonempty("first name is required"),
    last_name: z.string().nonempty("last name is required"),
    email: z.string().nonempty("Email is required").email(),
    password: z.string().nonempty("Password is required").min(6),
    password_confirmation: z
      .string()
      .nonempty("Password confirmation is required"),
    trams:z.boolean().refine(value => value === true, {
      message: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Passwords do not match",
  });

