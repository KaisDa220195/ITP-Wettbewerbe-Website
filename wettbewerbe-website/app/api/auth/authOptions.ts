import { loginUser } from "@/src/db/handleUsers";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth/"
import NextAuth, { type DefaultSession} from "next-auth"

declare module "next-auth" {
  interface User {
    shortName?:string | null,
    branch?: number | null,
    class?: string | null,
  }
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface Session {
    user: User & DefaultSession["user"]
  }
}

export const authOptions: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/auth/error", // Error handling page
    verifyRequest: "/auth/verify-request", // Email verification page
    newUser: "/register", // Redirect for new users
  },
  callbacks: {
    session({ session, token, user }) {
      // `session.user.address` is now a valid property, and will be type-checked
      // in places like `useSession().data.user` or `auth().user`
      return {
        ...session,
        user: {
          ...session.user,
          shortName: user.shortName,
          branch: user.branch,
          class: user.class,
        },
      }
    },
  },
  
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { },//label: "Email", type: "text", placeholder: "jsmith@mail.com" },
      password: { } //label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
        
        const user = await loginUser(credentials!.email,credentials!.password)

        if(user){
            return {
                id: String(user.user_id),
                name: null,
                email: user.email,
                image: null,
                shortName: user!.shortName,
                branch: user!.branch,
                class: user!.branch,
            }
            return
        }
        return null;
    }
  })
  ],
}

