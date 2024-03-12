import { sendMail } from "@/helpers/nodemailer";
import { ContactForm, ContactFormSchema } from "@/validators/contact-form-validator";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  let data: ContactForm | null = null;
  try {
    data = ContactFormSchema.parse(body);
  } catch (error) {
    console.log(error);
    data = null;
  }

  if (data === null) {
    return new Response('Bad request', {
      status: 400
    })
  }

  const {name, email, subject, message} = data;

  const result = await sendMail(name, email, subject, message);

  console.log(result);

  return new Response('Succes');
}