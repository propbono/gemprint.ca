type UserRole = "admin" | "client";

export const isAdmin = ({
  req: { user },
}: {
  req: { user: { role: UserRole } };
}) => {
  if (user && user.role === "admin") {
    return true;
  }

  return false;
};
