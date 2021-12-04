import React, { useState, useRef } from "react";
import axios from "axios";
import { FormCard, FormMessage } from "@/components";
import {STATE} from "@/helpers/State";

const styles = {
  section: "relative lg:top-[-12rem]",
  container: "container",
  form: "flex flex-col sm:flex-row",
  email:
    "flex flex-1  w-full mb-2 lg:mx-2 lg:mb-0 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none  focus:border-primary focus:ring-primary focus:bg-gray-100",
};

export const Subscribe = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [state, setState] = useState(STATE.IDLE);
  const isLoading = state === STATE.LOADING ? "animate-bounce" : "";

  const subscribe = async (e) => {
    e.preventDefault();
    setState(STATE.LOADING);
    setMessage("");
    try {
      const response = await axios.post("/api/subscribe", {
        email: inputRef.current.value,
      });

      setState(STATE.SUCCESS);
      setMessage("Success! 🎉 You are now subscribed to the newsletter.");
      inputRef.current.value = "";
    } catch (error) {
      setState(STATE.ERROR);
      setMessage(error.response.data.message);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FormCard
          title="Subscribe to our newsletter"
          text="We will only send emails once a month to update you on our offer. No Spam!"
        >
          <div className="lg:w-[600px]  lg:py-24">
            <form onSubmit={subscribe} className={styles.form}>
              <input
                ref={inputRef}
                type="email"
                placeholder="Enter your email"
                id="email-newsletter"
                className={styles.email}
              />

              <button
                type="submit"
                className="flex items-center justify-center btn btn-secondary"
              >
                Subscribe
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
            {message ? <FormMessage message={message} state={state} /> : null}
          </div>
        </FormCard>
      </div>
    </section>
  );
};
