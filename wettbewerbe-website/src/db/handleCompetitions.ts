"use server"
import { db } from './index';
import { addPrefBranch } from './handlePrefBranch';
import { competition,user,branch} from './schema';
import { eq,sql} from 'drizzle-orm';

export interface competitionStruct  {
  comp_id:number,
  name: string,
  description: string,
  lastRegistrationDate: Date,
  lowestGrade: number,
  prefBranch: string, 
  link: string,
  user_id: number,
}

export async function addCompetition(comp:competitionStruct,branches:number[]){

    if((await db.select().from(user).where(eq(user.user_id,comp.user_id))).length != 0){
        const comp_id = (await db.insert(competition).values({
            name: comp.name,
            description: comp.description,
            lastRegistrationDate: comp.lastRegistrationDate,
            lowestGrade: comp.lowestGrade, 
            link: comp.link,
            user_id: comp.user_id,
        }
        ).returning({id:competition.comp_id}))[0].id;
        
        for(var branch_id of branches){

            addPrefBranch({
                prefBranch_id: 0,
                branch_id: branch_id,
                comp_id:comp_id,
            })
        }
        return true;

    }
}

export async function removeCompetition(comp_id:number){
    await db.delete(competition).where(eq(competition.user_id, comp_id));
}

export async function getCompetition(comp_id : number){
    return await db.select().from(competition).where(eq(competition.comp_id,comp_id))
}
