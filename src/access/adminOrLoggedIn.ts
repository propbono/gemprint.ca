import { User } from "payload/auth";
import type { Access, AccessArgs } from "payload/config";
import { isAdmin } from "./admin";

export const adminsOrLoggedIn: Access = ({ req }: AccessArgs<User>) => {
  if (isAdmin({ req })) {
    return true;
  }

  return !!req.user;
};
