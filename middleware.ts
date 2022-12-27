import { withAuth } from "next-auth/middleware";
import { NextRequest } from "next/server";
import { GemprintToken } from "pages/api/auth/[...nextauth]";

export default withAuth({
  callbacks: {
    authorized({ req, token }: { req: NextRequest; token: GemprintToken }) {
      if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return token?.userRole === "admin";
      }
      return !!token;
    },
  },
});

export const config = { matcher: ["/dashboard", "/dashboard/:path*"] };
