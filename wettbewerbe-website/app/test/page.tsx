"use client"
import Image from "next/image";
import { addStudent, addTeacher,removeUser,getUser } from "@/src/db/handleUsers";

export default function Home() {
  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      
        <h1>High</h1>

        <button onClick={async () => {
          const user ={
            user_id: 0,
            email: "daniel@gmail.com",
            password: "passwort",
            branch: 1,
            class:"3AHMBM",
          }
          await addStudent(user)
        }}>Add Student</button>
        <br/>
        <button onClick={async () => {
          const user ={
            user_id: 0,
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

          const user = await getUser("daniel@gmail.com");
          
        }}>getUser</button>
        <br/>

    </div>
  );
}