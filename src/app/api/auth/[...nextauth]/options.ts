import { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        // Here can be added more fields like email, phone number, etc.
        // but username and password are usually enough
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // and return the user. If no user is found, return null
        // For simplicity reasons, we will return a dummy user but
        // Below is an example of how to check the credentials with static data

        // A real world example would be to check the credentials against a database

        return { id: "1", name: "J Smith", email: "" } as User;

        // if (
        //   credentials?.username === "demo" &&
        //   credentials?.password === "demo"
        // ) {
        //   return { id: "1", name: "J Smith", email: "" } as User;
        // }
        // return null;
      },
    }),
  ],
};
