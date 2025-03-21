"use client"
import React from "react";
import { useSession } from "@/lib/auth-client";
import LoginForm from "./form";


export default function LoginPage() {
  const {data: session} = useSession();
  
  if(!session?.user.isTeacher){
     return (
      <div>
        <h1>Seite nicht verfügbar</h1>
      </div>)
  }

  return (
    
      <section className="h-screen flex items-center justify-center">
        <div className="w-[600px]">
          <LoginForm />;
        </div>
      </section>
    
  );
}

