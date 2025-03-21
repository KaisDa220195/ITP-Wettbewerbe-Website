"use client"

import { useState, createContext, useContext } from 'react';
import { useSession, signOut } from "@/lib/auth-client"

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
import { endpointServerChangedSubscribe } from 'next/dist/build/swc/generated-native';

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
        <div className="bg-blue-900 flex justify-around p-5 flex-row">
            <a href="/" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Wettbewerbe</a>
            <a href="calendar" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Kalender</a>
            <a href="addcompetition" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Add Competition</a>
            <a href="test" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Test</a>
        </div>
    );
}

export function Title() {
    return (
        <div className="bg-blue-700 text-inherit py-2 px-4 text-center"> 
            <h1 className="m-0 text-4xl font-extrabold">Wettbewerbfinder</h1>
            <p className="text-sm">Förderung der Teilnahme von Schüler*innen an spannenden Wettbewerben</p>
            <div className="absolute right-0 top-2">
                <UserInfo />
            </div>
        </div>
    );
}
export function UserInfo() {
    const { data: session } = useSession()

    if (session) {
        if(session.user.isTeacher == true){
            return (//Teacher dropdown bar

                <div className="bg-blue-700 text-inherit p-5 pr-16 text-center">
                    
                    <DropdownMenu>
    
                        <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                        <DropdownMenuContent>
    
                            <DropdownMenuLabel>Signed in</DropdownMenuLabel>
                            <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
    
                            <DropdownMenuSeparator />
    
                            <DropdownMenuItem><button onClick={async () => await signOut()}>Sign out</button></DropdownMenuItem>
    
                            <DropdownMenuSeparator />                        
    
                            <DropdownMenuItem>Wettbewerb hinzufügen</DropdownMenuItem> 
    
                        </DropdownMenuContent>
    
                    </DropdownMenu>
                </div>
            )
        }else
        {
            return (//other user dropdown bar

                <div className="bg-blue-700 text-inherit p-5 pr-16 text-center">
                
                    <DropdownMenu>

                        <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                        <DropdownMenuContent>

                            <DropdownMenuLabel>Signed in</DropdownMenuLabel>
                            <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem><button onClick={async () => await signOut()}>Sign out</button></DropdownMenuItem>

                        </DropdownMenuContent>

                    </DropdownMenu>
                </div>
            )};
    }
    return (
        <div className="bg-blue-700 text-inherit p-5 pr-16 text-center">
            <DropdownMenu>
                <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Not signed in</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><a href="/login" >Log-in</a></DropdownMenuItem>
                    <DropdownMenuLabel>Don't have an account?</DropdownMenuLabel>
                    <DropdownMenuItem><a href="/register">Sign-up</a></DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}