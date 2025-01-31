"use client"
import Image from "next/image";
import { SessionProvider,getSession } from "next-auth/react"

import React, { createContext, useContext, useState, useEffect } from "react";


import Head from "./head"
import Footer from "./foot";

export default async function Home(){

  const session = await getSession();

  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      
      <SessionProvider basePath={"/auth"} session={session}>
        <Head/>

        <Footer/>
      </SessionProvider>
      
    </div>
  );
}


// export var userInfo = createContext<{
//   user_id:number,
//   email: string;
//   shortName: string;
// }
// |
// {
//   user_id:number,
//   email: string;
//   branch: number;
//   class:string;
// }
// | null>(null);

// export function setUserInfo(user: {
//   user_id:number,
//   email: string;
//   shortName: string;
// }
// |
// {
//   user_id:number,
//   email: string;
//   branch: number;
//   class:string;
// }
// | null = null){
//   userInfo = user;

// }

