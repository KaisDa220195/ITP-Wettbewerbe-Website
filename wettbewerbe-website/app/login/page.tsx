"use client"
import Head from "../head"
import Footer from "../foot";
import { loginUser } from "@/src/db/handleUsers";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { setUserInfo } from "../page";


export default function logIn() {
  return (
    <div>
        <Head />
    
        <LoginForm/>

        <Footer />
    </div>
    
    
  );
}

async function handleSubmit(e: React.FormEvent<HTMLFormElement>,email:string,password:string){
    e.preventDefault();
    const temp = await loginUser(email,password)
    if(temp != null){
        setUserInfo(temp);
        Head.setTemp();
        console.log("Log-In successful");
    }
    else{
        console.log("log in not successful")
    }
}
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={(e) => handleSubmit(e, email, password)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passwort</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="******"
              />
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg">
              Einloggen
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};


