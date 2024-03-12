'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactFormSchema, ContactForm as ContactFormTypes } from '@/validators/contact-form-validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import styles from '@/components/styles/ContactForm.module.scss';

const {
  Form: FormCss,
  FlexBox,
  FormLabel,
  FormInput,
  FormError,
  FormTextArea,
  FormButton,
  Fieldset
} = styles;

const ContactForm = () => {

  const {
    handleSubmit, 
    register,
    reset,
    formState
  } = useForm<ContactFormTypes>({ resolver: zodResolver(ContactFormSchema) });

  const onSubmit: SubmitHandler<ContactFormTypes> = async (formData: ContactFormTypes) => {
    console.log(formData)

    await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return(
    <form className={FormCss} onSubmit={handleSubmit(onSubmit)}>
      <div className={FlexBox}>

          <fieldset className={Fieldset}>
            <label className={FormLabel} htmlFor="name">Full Name</label>
            <input className={FormInput} type="text" placeholder="Your Name..." required pattern='([a-zA-Z]|\s|^)+' {...register('name')}/>
            <p className={FormError}>{formState.errors.name?.message}</p>
          </fieldset>

          <fieldset className={Fieldset}>
            <label className={FormLabel} htmlFor="email">Email Address</label>
            <input className={FormInput} type="text" placeholder="Your E-mail..." required {...register('email')}/>
            <p className={FormError}>{formState.errors.email?.message}</p>
          </fieldset>

          <fieldset className={Fieldset}>
            <label className={FormLabel} htmlFor="subject">Subject</label>
            <input className={FormInput} type="text" placeholder="Subject..." {...register('subject')}/>
            <p className={FormError}>{formState.errors.subject?.message}</p>
          </fieldset>

          <fieldset className={Fieldset}>
            <label className={FormLabel} htmlFor="message">Message</label>
            <textarea className={FormTextArea} placeholder="Your Message" {...register('message')}></textarea>
            <p className={FormError}>{formState.errors.message?.message}</p>
          </fieldset>

          <fieldset className={Fieldset}>
            <button className={FormButton} type="submit">Send Message</button>
          </fieldset>

      </div>
    </form>
  );
};

export default ContactForm;