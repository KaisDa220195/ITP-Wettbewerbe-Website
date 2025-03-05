import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src/db/index"; //  drizzle instance
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {

        provider: "pg", // pg for postgres
    }), 

    emailAndPassword: {  
        enabled: true
    },

    user: {
        additionalFields: {
          class: {
            type: "string",
            required: false,
            input: true
          },
          branch:{
            type:"number",
            required:false,
            input: true
          }
        },
      },
    
    
})

