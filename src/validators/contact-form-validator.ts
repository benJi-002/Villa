import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3, {message: 'The name must contain at least 3 letters'})/* .regex(new RegExp(/((\s|^)[A-Z]{1}[a-z]{1,23})+/g), {message: 'Please enter correct details (Name Surname)'}) */,
  email: z.string().email({message: 'Enter a correct email (example@email.com)'}),
  subject: z.string().max(20, {message: 'Must be less than 20 characters'}).nullable(),
  message: z.string().max(200, {message: 'Must be less than 200 characters'}).nullable()
});

export type ContactForm = z.infer<typeof ContactFormSchema>