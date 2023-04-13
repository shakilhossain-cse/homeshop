import * as z from "zod";

export const InfoSchema = z.object({
  first_name: z.string().nonempty("First Name is required"),
  last_name: z.string().nonempty("Last Name is required"),
  birthday: z
    .string()
    .transform((str) => new Date(str)),
  gender: z.enum(["Male", "Female", "Other"]),
  phone: z.string().nonempty("phone number is required"),
  avatar: z.string().nonempty("Avatar is required"),
});

export const changePasswordSchema = z
  .object({
    current_password: z
      .string()
      .nonempty("Current Password is required")
      .min(6),
    password: z.string().nonempty("New Password is required").min(6),
    password_confirmation: z
      .string()
      .nonempty("Password confirmation is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Confirm Password in not match with new password",
  });
