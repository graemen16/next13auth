
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    /*
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "", // note Taxonomy had sensibly renamed these .env vars
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    */
    GithubProvider({
      clientId: (process.env.GITHUB_ID ||= ""), // the || ='' is to avoid build error if build can't access .env
      clientSecret: (process.env.GITHUB_SECRET ||= ""),
    }),
    GoogleProvider({
      clientId: (process.env.GOOGLE_ID ||= ""),
      clientSecret: (process.env.GOOGLE_SECRET ||= ""),
    }),
    
  ],
  pages: {
    signIn: '/signin'
  }
  /*
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  },
  */
};
