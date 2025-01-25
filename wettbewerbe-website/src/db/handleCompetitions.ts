"use server"
import { db } from './index';
import { competition} from './schema';
import { eq,sql} from 'drizzle-orm';

export interface competition  {
  name: string,
  description: string,
  lastRegistrationDate: Date,
  lowestGrade: number,
  prefBranch: string, 
  link: string,
  user_id: number,
}

export async function addCompetition(comp:competition){

}

export async function removeCompetition(comp_id:number){

}

export async function getCompetition(){
     
}
