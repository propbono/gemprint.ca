import React from "react";
import { STATE } from "@/helpers/State";


export const FormMessage = ({ message, state }) => {
  return (
    <div className={`${state === STATE.ERROR ? "text-red-600" : "text-green-600"} mt-2`}>{message}</div>
  );
};
