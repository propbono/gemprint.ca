import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactCard, FormMessage, Container, Section } from "components";
import { PageLayout } from "layouts";

import type { State } from "components";

export interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const defaultContactForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const styles = {
  mixedTitle:
    "text-3xl font-extrabold text-secondary lg:text-gray-100 mb-3 lg:mb-8 leading-tight",
  mixedTitlePrimary: "text-primary",
  form: "flex flex-col",
  field:
    "flex w-full rounded-lg  mb-4 flex-1 px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none focus:bg-gray-100 focus:border-primary focus:ring-primary",
  fieldError: "text-red-500 bg-red-200 border-red-800 focus:border-red-800",
};

const contactTitle = (
  <h1 className={styles.mixedTitle}>
    {"Let's talk! "}
    <span className={styles.mixedTitlePrimary}>{"Tell us about"}</span>
    {" your project."}
  </h1>
);

const RequestQuote = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    defaultValues: defaultContactForm,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const [message, setMessage] = useState("");
  const [state, setState] = useState<State>("IDLE");
  const isLoading = state === "LOADING" ? "animate-bounce" : "";

  const hasErrors = !!Object.keys(errors).length;

  const requestQuote: SubmitHandler<IContactForm> = async (data) => {
    setState("LOADING");
    setMessage("");
    try {
      await axios.post("/api/contact", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });
      setState("SUCCESS");
      setMessage(
        "Success! 🎉 We received your request. We will contact you soon."
      );
    } catch (error) {
      setState("ERROR");
      setMessage(error.response.data.error);
    }
  };

  useEffect(() => {
    if (state === "SUCCESS") {
      reset();
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }, [state, reset]);

  return (
    <PageLayout>
      <Head>
        <title>Gemprint - Request a Quote</title>
        <meta
          name="description"
          content="You can request a custom quote using this page. Fill all the forms and click send."
        />
        <meta
          name="keywords"
          content="Gemprint, custom quote, quote, print quote, printing quote, toronto printer, custom stickers"
        />
      </Head>
      <Section className="mt-4 md:mt-28">
        <Container>
          <ContactCard
            title={contactTitle}
            text="If you didn’t find the product you were looking for, please fill the below form to contact us and request a custom quote."
          >
            <form onSubmit={handleSubmit(requestQuote)} className={styles.form}>
              <input
                {...register("name", { required: true })}
                type="input"
                placeholder="Enter your Name / Company"
                id="name"
                className={`${styles.field} ${
                  !!errors?.name ? styles.fieldError : ""
                }`}
              />
              <input
                {...register("email", {
                  required: { value: true, message: "Please provide e-mail" },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please provide a valid e-mail",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                id="email"
                className={`${styles.field} ${
                  !!errors?.email ? styles.fieldError : ""
                }`}
              />
              <input
                {...register("phone")}
                type="input"
                placeholder="Enter your phone"
                id="phone"
                className={styles.field}
              />
              <input
                {...register("subject", { required: true })}
                type="input"
                placeholder="Enter the subject"
                id="subject"
                className={`${styles.field} ${
                  !!errors?.subject ? styles.fieldError : ""
                }`}
              />
              <textarea
                {...register("message", { required: true })}
                placeholder="Enter the quote request"
                id="message"
                rows={5}
                className={`${styles.field} ${
                  !!errors?.message ? styles.fieldError : ""
                }`}
              />

              <button
                type="submit"
                className="flex items-center justify-center btn btn-secondary"
              >
                {isLoading ? "Sending..." : "Send"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 mt-1 ml-2 ${isLoading}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </form>
            <FormMessage state={state} message={message} />

            <FormMessage
              state={"ERROR"}
              message={hasErrors ? "Please fix highlited fields." : null}
            />
          </ContactCard>
        </Container>
      </Section>
    </PageLayout>
  );
};

export default RequestQuote;
