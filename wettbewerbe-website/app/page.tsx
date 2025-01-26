import Image from "next/image";
import Head from "./head"
import Footer from "./foot";

export var userInfo:{
  user_id:number,
  email: string;
  shortName: string;
}
|
{
  user_id:number,
  email: string;
  branch: number;
  class:string;
}
| null = null;

export function setUserInfo(user: {
  user_id:number,
  email: string;
  shortName: string;
}
|
{
  user_id:number,
  email: string;
  branch: number;
  class:string;
}
| null = null){
  userInfo = user;

}

export default function Home() {
  return (
    
    <div className="font-sans m-0 p-0 bg-gray-50 text-neutral-700">
      <Head /> 

      {
        
      }

      <Footer />
    </div>
  );
}


