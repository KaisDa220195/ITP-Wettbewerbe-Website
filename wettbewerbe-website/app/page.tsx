"use client"
import Image from "next/image";
import { useSession } from "next-auth/react"
import competitionCard from "./competitionCard";
import React, { createContext, useContext, useState, useEffect } from "react";


export default function Home(){

  const { data: session, status } = useSession();
  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      
      {competitionCard({
          comp_id: 1,
          name: "Jugend Innovativ",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer vel felis eu eros convallis tristique. Phasellus nec tortor ac erat fermentum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nec libero ut urna fermentum convallis. Fusce dapibus, metus id cursus rhoncus, sapien lorem tempus ligula, eget interdum ligula eros a lorem.Suspendisse potenti. Curabitur in justo non nulla varius vehicula. Aliquam erat volutpat. Donec euismod, magna id hendrerit sodales, velit justo tincidunt ex, at ultrices ligula augue sed justo. Ut sit amet libero vitae nisl pellentesque feugiat. Nunc sit amet felis quis turpis molestie eleifend. Praesent non nulla eget nisi scelerisque pharetra in vel quam.",
          lastRegistrationDate: new Date(2024, 1, 2, 10, 30, 15),
          lowestGrade: 4,
          prefBranch: "Maschinenbau", 
          link: "string",
          user_id: 2,
      }
      )
      }
      {competitionCard({
          comp_id: 0,
          name: "Next Generations Award",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer vel felis eu eros convallis tristique. Phasellus nec tortor ac erat fermentum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nec libero ut urna fermentum convallis. Fusce dapibus, metus id cursus rhoncus, sapien lorem tempus ligula, eget interdum ligula eros a lorem.Suspendisse potenti. Curabitur in justo non nulla varius vehicula. Aliquam erat volutpat. Donec euismod, magna id hendrerit sodales, velit justo tincidunt ex, at ultrices ligula augue sed justo. Ut sit amet libero vitae nisl pellentesque feugiat. Nunc sit amet felis quis turpis molestie eleifend. Praesent non nulla eget nisi scelerisque pharetra in vel quam.",
          lastRegistrationDate: new Date(2024, 1, 2, 10, 30, 15),
          lowestGrade: 4,
          prefBranch: "Maschinenbau", 
          link: "string",
          user_id: 2,
      }
      )
      }
      
      
    </div>
  )

  
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

