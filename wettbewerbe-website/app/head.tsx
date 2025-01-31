"use client"

import { useState, createContext, useContext } from 'react';
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"
import logIn from './login/page';
import { Menu } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Head() {


    return (
        <div className="text-white">
            <Title />

            <NavBar />
        </div>

    );

}

function NavBar() {
    return (
        <div className="bg-blue-900 flex justify-around p-10 flex-row">
            <a href="#" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Kategorien</a>
            <a href="kalender.html" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Kalender</a>
            <a href="wettbewerbeEinreichen.html" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Wettbewerb einreichen</a>
            <a href="test" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Test</a>
        </div>
    );
}

export function Title() {
    return (
        <div className="bg-blue-700 text-inherit p-20 text-center">

            <h1 className="m-0 text-3xl"><b>Wettbewerbfinder</b></h1>
            <p>Förderung der Teilnahme von Schüler*innen an spannenden Wettbewerben</p>
            <div className="absolute right-0 top-16">
                <UserInfo />
            </div>

        </div>
    );
}
export function UserInfo() {


    const { data: session, status } = useSession()

    if (session) {
        return (

            <div className="bg-blue-700 text-inherit p-20 text-center">

                Signed in with  <br />
                
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Signed in</DropdownMenuLabel>
                        
                        <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><button onClick={async () => await signOut()}>Sign out</button></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem> 
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Not signed in</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><a href="/login" >Log-in</a></DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>

        </>
    )
}