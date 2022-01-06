import React, { useRef, useState } from "react";
import Head from "next/head";
import axios from "axios";
import {
  Layout,
  FormCard,
  FormMessage,
  Container,
  Section,
} from "@/components";
import { STATE } from "@/helpers/State";

const styles = {
  form: "flex flex-col h-auto",
  field:
    "flex w-full rounded-lg  mb-4 flex-1 px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none focus:bg-gray-100 focus:border-primary focus:ring-primary",
};

const RequestQuote = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const [message, setMessage] = useState("");
  const [state, setState] = useState(STATE.IDLE);
  const isLoading = state === STATE.LOADING ? "animate-bounce" : "";

  const mixedTitle = {
    one: "Let's talk!",
    two: " Tell us about",
    three: " your project.",
  };

  const requestQuote = async (e) => {
    e.preventDefault();
    setState(STATE.LOADING);
    setMessage("");
    try {
      const response = await axios.post("/api/contact", {
        type: "Request quote",
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        subject: subjectRef.current.value,
        message: messageRef.current.value,
      });
      setState(STATE.SUCCESS);
      setMessage(
        "Success! 🎉 We received your request. We will contact you soon."
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      setState(STATE.ERROR);
      setMessage(error.response.data.error);
    }
  };

  return (
    <Layout>
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
      <Section>
        <Container>
          <FormCard
            mixedTitle={mixedTitle}
            text="If you didn’t find the product you were looking for, please fill the below form to contact us and request a custom quote."
          >
            <div className="w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] lg:py-20">
              <form onSubmit={requestQuote} className={styles.form}>
                <input
                  ref={nameRef}
                  type="input"
                  placeholder="Enter your Name / Company"
                  id="name"
                  className={styles.field}
                />
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  className={styles.field}
                />
                <input
                  ref={phoneRef}
                  type="input"
                  placeholder="Enter your phone"
                  id="phone"
                  className={styles.field}
                />
                <input
                  ref={subjectRef}
                  type="input"
                  placeholder="Enter the subject"
                  id="subject"
                  className={styles.field}
                />
                <textarea
                  ref={messageRef}
                  type="text-area"
                  placeholder="Enter the quote request"
                  id="request"
                  rows={5}
                  className={styles.field}
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
              {message ? <FormMessage state={state} message={message} /> : null}
            </div>
          </FormCard>
        </Container>
      </Section>
    </Layout>
  );
};

export default RequestQuote;
