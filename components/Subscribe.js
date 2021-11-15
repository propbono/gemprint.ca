import React, { useState, useRef } from "react";
import axios from "axios";

const styles = {
  section: "relative lg:top-[-12rem]",
  container: "container",
  newsletter:
    "flex flex-col my-10 overflow-hidden transition duration-500 ease-in-out bg-white rounded-lg shadow-lg lg:h-56 lg:flex-row group lg:hover:scale-105",
  subscribe: "items-center justify-center lg:flex lg:w-1/3 lg:bg-secondary",
  title: "text-2xl font-bold text-secondary lg:text-gray-100",
  text: "mt-2 text-secondary lg:text-gray-400",
  input:
    "flex flex-col items-center justify-center w-full pb-6 transition duration-1000 ease-in-out lg:py-0 lg:w-2/3 lg:border-b-8 border-secondary lg:group-hover:border-primary",
  form: "flex flex-col overflow-hidden rounded-lg sm:flex-row",
  email:
    "flex flex-1 px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none focus:bg-gray-100",
};

export const Subscribe = () => {
  const inputRef = useRef(null);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("IDLE");
  const messageClass = state === "SUCCESS" ? "text-green-600 mt-1" : "text-red-600 mt-1";
  const isLoading = state === "LOADING" ? "animate-bounce" : "";
  
  const subscribe = async (e) => {
    e.preventDefault();
    setState("LOADING");
    setMessage("");
    try {
      const response = await axios.post("/api/subscribe", {email: inputRef.current.value});
      console.log("Response: ", response);
      setState("SUCCESS");
      setMessage("Success! 🎉 You are now subscribed to the newsletter.");
      inputRef.current.value = "";
    } catch (error) {
      console.log("Error: ", error)
      setState("ERROR");
      setMessage(error.response.data.message);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <div className={styles.subscribe}>
            <div className="px-8 py-6 lg:py-0">
              <h2 className={styles.title}>Subscribe to our newsletter</h2>
              <p className={styles.text}>
                We will only send emails once a month to update you on our
                offer. No Spam!
              </p>
            </div>
          </div>
          <div className={styles.input}>
            <div className="lg:w-[600px]">
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
            </div>
            <div className={messageClass}>{message}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
