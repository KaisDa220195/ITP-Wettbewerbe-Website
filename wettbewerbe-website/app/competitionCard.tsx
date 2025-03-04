import { competitionStruct } from "@/src/db/handleCompetitions";
import competitionPage from "./competition/page";
import Link from 'next/link';

export default function competitionCard(comp:competitionStruct){

    return(
        <div className="flex justify-center items-center  bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md text-center border border-gray-200">
                {/* <a  onClick={() => navigate('/competition', { state: { comp } })} className="cursor-pointer">
                    <h3 className="text-2xl font-semibold text-gray-800">{comp.name}</h3>
                </a> */}
                {/* <Link to={`/competition?comp_id=${encodeURIComponent(comp.comp_id)}&name=${encodeURIComponent(comp.name)}`}>
                    <h3 className="text-2xl font-semibold text-gray-800">{comp.name}</h3>
                </Link> */}
                <Link href={`/competition/${comp.comp_id}`}>
                    <h3 className="text-2xl font-semibold text-gray-800 cursor-pointer">{comp.name}</h3>
                </Link>
                <p className="text-gray-600 mt-2"><strong>Abteilungen:</strong> Kunst</p>
                <p className="text-gray-600"><strong>Frist:</strong> {comp.lastRegistrationDate.toLocaleDateString()} </p>
                <p className="text-gray-600"><strong>Jahrgang:</strong> {comp.lowestGrade} +</p>
                <p className="text-gray-600">{comp.description.substring(0,50)}...</p>
            </div>
        </div>
        
    );

}
// #href={"/competition" +  comp.comp_id }