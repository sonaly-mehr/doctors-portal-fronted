import { jwtHelpers } from "@/helpers/jwtHelpers";
import { getNewAccessToken } from "@/services/getNewAccessToken";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      CredentialsProvider({
        id: "doctors-portal-backend",
        name: "Credentials",
        type: "credentials",
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "Your email.....",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          try {
            const res = await fetch(`${process.env.BACKEND_URL}/auth/signin`, {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            });
            const { data } = await res.json();
            const verifiedToken = jwtHelpers.verifyToken(
              data?.accessToken,
              process.env.JWT_SECRET
            );
            // console.log(data, "auth option")
            if (res.ok && data) {
              return {
                ...data,
                ...verifiedToken,
              };
            }
          } catch (error) {
            console.log(error);
            throw new Error(error.message);
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ],
    callbacks: {
      async jwt({ token, user }) {
        // console.log(token, "token auth option")
        // console.log(user, "user auth option")
        return {
          ...token,
          ...user,
        };
      },
      async session({ session, token }) {
        // console.log(session, "session auth option")
        // console.log(token, "token auth option inside session")
        const verifiedToken = jwtHelpers.verifyToken(
          token?.accessToken,
          process.env.JWT_SECRET
        );
        if (!verifiedToken) {
          console.log("token expired so new token generated");
          const { data } = await getNewAccessToken(token?.accessToken);
          token.accessToken = data?.accessToken;
        }
        return {
          ...session,
          ...token,
        };
      },
    },
    session: {
      strategy: "jwt",
      maxAge: 24 * 60 * 60,
    },
    jwt: {
      secret: process.env.NEXTAUTH_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/login",
      error: "/",
      signOut: "/login",
    },
  };