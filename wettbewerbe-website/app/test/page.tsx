"use client"
import Image from "next/image";
import Head from "../head"
import Footer from "../foot";
import { addTeacher } from "@/src/db/handleUsers";

export default function Home() {
  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      <Head /> 
        <h1>High</h1>

        <button onClick={async () => {
          const user ={
            email: "this@gmail.com",
            password: "passwort",
            shortName: "TEMI",
          }
          await addTeacher(user)
        }}>Add User</button>
      <Footer />
    </div>
  );
}