import { userInfo } from "./page";

export default function Head(){
    var temp;
    if(userInfo != null){
        temp = <UserInfo/>
    }else{

        temp = null;
    }
    return(
        <div className="text-white">
            <Title />
            {temp}
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
        <a href="/test" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Test</a>
        <a href="/login" className="text-inherit p-5 hover:bg-blue-700 hover:rounded">Log-in</a>
    </div>
    );
} 

export function Title(){
    return(
        <div className="bg-blue-700 text-inherit p-20 text-center">
            
            <h1 className="m-0 text-3xl"><b>Wettbewerbfinder</b></h1>
            <p>Förderung der Teilnahme von Schüler*innen an spannenden Wettbewerben</p>
            
        </div>
    );
}
export function UserInfo(){
 
    
    return(
        <div className="bg-blue-700 text-inherit p-20 text-center">
            <p>User: {userInfo?.email} </p>
        </div>
    );
}