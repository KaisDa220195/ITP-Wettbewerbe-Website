"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { signIn,useSession } from "@/lib/auth-client";
import LoginForm from "./form";


export default function LoginPage() {
  const session = useSession();
  console.log({ session });

  return (
    
      <section className="h-screen flex items-center justify-center">
        <div className="w-[600px]">
          <LoginForm />;
        </div>
      </section>
    
  );
}

