import React from "react";

const STATE = {
  ERROR: "error",
};

export const FormMessage = ({ message, state }) => {
  return (
    <div
      className={`${
        state === STATE.ERROR ? "text-red-600" : "text-green-600"
      } mt-2`}
    >
      {message}
    </div>
  );
};

export default FormMessage;
