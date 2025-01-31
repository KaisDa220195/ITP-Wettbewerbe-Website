"use client"

import { useState ,createContext,useContext} from 'react';
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"
import logIn from './login/page';

export default function Head(){
    
    
    return(
        <div className="text-white">
            <Title />
            
            <NavBar />
        </div>
        
    );

}

function NavBar(){
    return(
    <div className="bg-blue-900 flex justify-around p-10 flex-row">
        <a href="#"  className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Kategorien</a>
        <a href="kalender.html" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Kalender</a>
        <a href="wettbewerbeEinreichen.html" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Wettbewerb einreichen</a>
        <a href="test" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Test</a>
        <a href="/login" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Log-in</a>
    </div>
    );
} 

export function Title(){
    return(
        <div className="bg-blue-700 text-inherit p-20 text-center">
            
            <h1 className="m-0 text-3xl"><b>Wettbewerbfinder</b></h1>
            <p>Förderung der Teilnahme von Schüler*innen an spannenden Wettbewerben</p>
            <UserInfo/>
            
        </div>
    );
}
export function UserInfo(){
 

    const { data: session,status } = useSession()

    if (session) {
        return (
            
            <div className="bg-blue-700 text-inherit p-20 text-center">
            
                Signed in with {session.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            
            </div>
        )
      }
    return (
        <>
          
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          
        </>
    )
}

   // const data = useContext(userInfo);

    // function setTemp(){
    //     if(userInfo != null){
    //         setTTemp(<UserInfo/>);
    //     }else{
    //         setTTemp(null);
    //     }
    // }
// 

//     return(
//         <div className="bg-blue-700 text-inherit p-20 text-center">
//             <p>User: {userInfo?.email} </p>
//         </div>
//     );
