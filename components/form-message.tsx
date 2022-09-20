import React from "react";
import { State } from "./sections/subscribe";

interface IFormMessageProps {
  message: string;
  state: State;
}

export const FormMessage: React.FC<IFormMessageProps> = (props) => {
  if (!!!props.message) return null;

  return (
    <div
      className={`${
        props.state === "ERROR" ? "text-red-600" : "text-green-600"
      } mt-2 text-center`}
    >
      {props.message}
    </div>
  );
};

export default FormMessage;
