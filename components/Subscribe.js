import React, { useState, useRef } from "react";

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

  const subscribe = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: inputRef.current.value }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }
    inputRef.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <div className={styles.subscribe}>
            <div className="px-8 py-6 lg:py-0">
              <h2 className={styles.title}>
                Subscribe to our newsletter
              </h2>
              <p className={styles.text}>
                We will only send emails once a month to update you on our
                offer. No Spam!
              </p>
            </div>
          </div>
          <div className={styles.input}>
            <div className="lg:w-[600px]">
              <form
                onSubmit={subscribe}
                className={styles.form}
              >
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="Enter your email"
                  id="email-newsletter"
                  className={styles.email}
                />
                <button
                  type="submit"
                  className="btn btn-secondary"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="text-red-600">{message}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
