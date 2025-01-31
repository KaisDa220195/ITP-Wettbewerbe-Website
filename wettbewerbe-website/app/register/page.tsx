import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import FormPage from "@/app/register/form";

export default async function RegisterPage() {
  const { data: session, status } = useSession();
  
  if (session) {
    redirect("/");
  }

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="w-[600px]">
        <FormPage />
      </div>
    </div>
  );
}