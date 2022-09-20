import React, { useState, useRef, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import { Container, FormMessage, Section, SubscribeCard } from "components";

export type State = "LOADING" | "IDLE" | "SUCCESS" | "ERROR";

export interface ISubscribe {
  email: string;
}

const styles = {
  section: "lg:top-[-12rem]",
  form: "flex flex-col sm:flex-row",
  email:
    "flex flex-1  w-full mb-2 lg:mx-2 lg:mb-0 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none  focus:border-primary focus:ring-primary focus:bg-gray-100",
};

export const Subscribe = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISubscribe>();

  const [message, setMessage] = useState("");
  const [state, setState] = useState<State>("IDLE");
  const isLoading = state === "LOADING" ? "animate-bounce" : "";

  const subscribe: SubmitHandler<ISubscribe> = async (data) => {
    setState("LOADING");
    setMessage("");
    try {
      await axios.post("/api/subscribe", {
        email: data.email,
      });
      setState("SUCCESS");
      setMessage("Success! 🎉 You are now subscribed to the newsletter.");
    } catch (error) {
      setState("ERROR");
      setMessage(
        "Something went wrong! You might be already on the list. If not try again later."
      );
    }
  };

  useEffect(() => {
    if (state === "SUCCESS") setValue("email", "");
  }, [state, setValue]);

  return (
    <Section className={styles.section}>
      <Container>
        <SubscribeCard
          title="Subscribe to our newsletter"
          subTitle="We will only send emails once a month to update you on our offer. No
            Spam!"
        >
          <form onSubmit={handleSubmit(subscribe)} className={styles.form}>
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
              id="email-newsletter"
              className={styles.email}
            />

            <button
              type="submit"
              className="flex items-center justify-center btn btn-secondary"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
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
          <FormMessage message={message} state={state} />

          <FormMessage message={errors?.email?.message} state={"ERROR"} />
        </SubscribeCard>
      </Container>
    </Section>
  );
};

export default Subscribe;
