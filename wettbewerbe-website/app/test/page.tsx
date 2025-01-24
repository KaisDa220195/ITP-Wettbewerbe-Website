"use client"
import Image from "next/image";
import Head from "../head"
import Footer from "../foot";
import { addStudent, addTeacher,removeUser,getUser } from "@/src/db/handleUsers";

export default function Home() {
  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      <Head /> 
        <h1>High</h1>

        <button onClick={async () => {
          const user ={
            email: "this@gmail.com",
            password: "passwort",
            branch: "TEMI",
            class:"3AHMBM",
          }
          await addStudent(user)
        }}>Add Student</button>
        <br/>
        <button onClick={async () => {
          const user ={
            email: "temi@gmail.com",
            password: "passwort",
            shortName:"TEMI",
          }
          await addTeacher(user)
        }}>Add Teacher</button>
        <br/>
        <button onClick={async () => {
          
          await removeUser(12);
        }}>Delete user</button>
        <br/>
        <button onClick={async () => {
          
          const user = await getUser("temi@gmail.com");
          console.log(user)
        }}>getTeacher</button>
        <br/>

      <Footer />
    </div>
  );
}