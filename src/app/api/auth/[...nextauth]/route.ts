import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Github({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
    ],
    secret: process.env.JWT_SECRET,
  });

export default authHandler;
