import React, { useState, useRef } from "react";

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
    <section className="relative lg:top-[-12rem]">
      <div className="container">
        <div className="flex flex-col my-10 overflow-hidden transition duration-500 ease-in-out bg-white rounded-lg shadow-lg lg:h-56 lg:flex-row group lg:hover:scale-105">
          <div className="items-center justify-center lg:flex lg:w-1/3 lg:bg-secondary">
            <div className="px-8 py-6 lg:py-0">
              <h2 className="text-2xl font-bold text-secondary lg:text-gray-100">
                Subscribe to our newsletter
              </h2>
              <p className="mt-2 text-secondary lg:text-gray-400">
                We will only send emails once a month to update you on our
                offer. No Spam!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full pb-6 transition duration-1000 ease-in-out lg:py-0 lg:w-2/3 lg:border-b-8 border-secondary lg:group-hover:border-primary">
            <div className="w-[600px]">
              <form
                onSubmit={subscribe}
                className="flex flex-col overflow-hidden rounded-lg sm:flex-row"
              >
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="Enter your email"
                  id="email-newsletter"
                  className="flex flex-1 max-w-6xl px-4 py-3 text-gray-800 placeholder-gray-500 bg-gray-200 border-2 border-gray-300 outline-none focus:bg-gray-100"
                />
                <button
                  type="submit"
                  className="flex-none btn btn-secondary"
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
