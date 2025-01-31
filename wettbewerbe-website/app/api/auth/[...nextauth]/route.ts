import NextAuth from "next-auth";
import authOptions from "@/app/api/auth/authOptions"; 

export default NextAuth(authOptions);
