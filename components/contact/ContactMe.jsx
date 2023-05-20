import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const ContactMe = () => {
  const formRef = useRef();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {
      errors,
      isDirty,

      isValid,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
    },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Thank you, I will reply as soon as possible :)');
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div
      className="container  px-4 mt-12  tablet:max-w-2xl laptop:max-w-5xl "
      id="contact"
    >
      <div className="text-center mb-10">
        <h4 className="text-light text-sm font-semibold tracking-tight mb-2  tablet:text-base tablet:tracking-normal">
          Get In Touch <br /> I do receive your messages and will respond asap
          if the valid email is provided :)
        </h4>
        <h2 className="text-primary text-xl font-semibold">Contact Me</h2>
      </div>
      <div className="grid gap-8 tablet:grid-cols-3 laptop:grid-cols-7">
        <div className="grid gap-4 tablet:col-span-1 laptop:col-span-2 ">
          <div className="bg-backGroundVariant py-4  rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant    ">
            <div className="flex flex-col justify-center items-center">
              <AiOutlineMail className="h-6 w-6 text-primary" />
              <h4 className="mt-4  font-semibold">Email</h4>
              <p className="text-light  font-semibold text-sm mb-4">
                abdi@swiftapp.ch
              </p>
              <Link
                href="mailto: abdi@swiftapp.ch"
                target="_blank"
                className="text-primary text-sm font-semibold"
              >
                Send a message
              </Link>
            </div>
          </div>
          <div className="bg-backGroundVariant py-4  rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant   ">
            <div className="flex flex-col justify-center items-center">
              <RiMessengerLine className="h-6 w-6 text-primary" />
              <h4 className="mt-4  font-semibold">Messenger</h4>
              <p className="text-light  font-semibold text-sm mb-4">
                Abdu Ahmed
              </p>
              <Link
                href="https://m.me/abdulkadir.ahmed.3139"
                target="_blank"
                className="text-primary text-sm font-semibold"
              >
                Send a message
              </Link>
            </div>
          </div>
          <div className="bg-backGroundVariant py-4  rounded-3xl transition-custom hover:bg-transparent hover:border hover:border-primaryVariant ">
            <div className="flex flex-col justify-center items-center">
              <FaWhatsapp className="h-6 w-6 text-primary" />
              <h4 className="mt-4  font-semibold">WhatsApp</h4>
              <p className="text-light  font-semibold text-sm mb-4">
                +41 76 214 76 90
              </p>
              <Link
                href="https://api.whatsapp.com/send?phone=+41762147690"
                target="_blank"
                className="text-primary text-sm font-semibold"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
        <div className="tablet:col-span-2  tablet:self-center laptop:col-span-4 laptop:col-start-4 ">
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 space-y-5"
            noValidate
          >
            <div>
              <input
                type="text"
                {...register('name', {
                  required: { value: true, message: 'Please enter your name.' },
                })}
                className="block w-full bg-transparent py-4 px-6 border-2 border-primaryVariant rounded-lg  text-light  placeholder:text-sm text:light placeholder:text-light font-semibold  focus:outline-none"
                placeholder="Your Full Name"
              />
              <p className="px-2 text-red-500 text-sm ">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <input
                type="email"
                {...register('email', {
                  required: { value: true, message: 'Please enter your name.' },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: 'Please enter valid email address.',
                  },
                })}
                className="block w-full bg-transparent py-4 px-6 border-2 border-primaryVariant rounded-lg text-light placeholder:text-sm text:light placeholder:text-light font-semibold focus:outline-none"
                placeholder="Your Email Address"
              />
              <p className="px-2 text-red-500 text-sm ">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows="7"
                {...register('message', {
                  required: {
                    value: true,
                    message: 'Please write your message.',
                  },
                })}
                className="block w-full bg-transparent  py-4 px-6 border-2 border-primaryVariant rounded-lg text-sm  text-light  placeholder:text-sm text:sm placeholder:text-light font-semibold focus:outline-none"
              ></textarea>
              <p className="px-2 text-red-500 text-sm ">
                {errors.message?.message}
              </p>
            </div>
            {/* {message && (
                <div className="p-2 rounded-lg bg-backGroundVariant text-light ">
                  <p>Thank you, I'll reply as soon as possible :)</p>
                </div>
              )} */}
            <button
              type="submit"
              // disabled={!isDirty || !isValid || isSubmitting}
              className={`px-3 py-2 bg-primary rounded-md text-backGround hover:bg-white font-semibold transition-custom  `}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <DevTool control={control} /> {/* set up the dev tool */}
    </div>
  );
};

export default ContactMe;
