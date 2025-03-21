"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client 
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  name: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
  classs: z.string().min(2, {
    message: "Password must be at least 6 characters.",
  }),
  branch: z.string().min(1),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = async (dataa: FormData) => {

    const { email, password,name } = dataa;

    const { data, error } = await authClient.signUp.email({
      email, // user email address
      password, // user password -> min 8 characters by default // user display name
      name,
      isTeacher: true,
      callbackURL: "/" // a url to redirect to after the user verifies their email (optional)
    }, {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        //redirect to the dashboard or sign in page
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    })
  };
  //className="w-2/3 space-y-6"
  return (
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="text-white p-4 md:p-16 border-[1.5px] rounded-lg border-gray-300 flex flex-col items-center justify-center gap-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provide Email</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Provide Email"
                  {...field}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provide Password</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Password"
                  {...field}
                  type="password"
                />
              </FormControl>
            </FormItem>
          )}
        />
      

        <FormField
          control={form.control}
          name="classs"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Provide Short Name</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="TEMI"
                  {...field}
                  type="text"
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="hover:scale-110 hover:bg-cyan-700"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Opening...." : "Log in"}
        </Button>
      </form>
    </Form>
  );
}