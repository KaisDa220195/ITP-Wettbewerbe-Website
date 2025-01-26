import { competition } from "@/src/db/handleCompetitions";


export default function competitionCard(comp:competition){
    return(
        <div >
            <h3>{comp.name}</h3>
            <p><strong>Abteilungen:</strong> Kunst</p>
            <p><strong>Frist:</strong> {comp.lastRegistrationDate.toLocaleDateString()} </p>
            <p><strong>Jahrgang:</strong> {comp.lowestGrade} +</p>
            <p>{comp.description.substring(0,50)}...</p>
        </div>
        
    );

}