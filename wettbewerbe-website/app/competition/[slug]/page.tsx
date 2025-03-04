import { getCompetition } from "@/src/db/handleCompetitions"

export default async function page({
    params,
} : {params: Promise<{ slug : string}>}

) {


    const { slug } = await params

    const comp = await getCompetition(parseInt(slug))

    if(comp == undefined){
        return(<div>
            <h1>ERROR: Competition Not Found</h1>
        </div>)
    }


    return(
        <div className="flex justify-center items-center  bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl border border-gray-200 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{comp.name}</h2>

                 {/* <p className="text-gray-600 text-lg mb-2">
                    <strong>Abteilungen:</strong> {comp.prefBranch}
                </p> */}
                <p className="text-gray-600 text-lg mb-2">
                    <strong>Frist:</strong> {comp.lastRegistrationDate.toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-lg mb-4">
                    <strong>Jahrgang:</strong> {comp.lowestGrade}+
                </p>
                <p className="text-gray-500 text-left leading-relaxed">
                    {comp.description}
                </p>
            </div>
        </div>
    );


    
}