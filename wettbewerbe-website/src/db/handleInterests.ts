"use server"
import { db } from './index';
import { interests} from './schema';
import { eq } from 'drizzle-orm';


export interface interestsStruct  {
    int_id: number,
    user_id: number,
    comp_id: number,
    sign_up_date: Date,
}

export async function addPrefBranch(newInterest:interestsStruct){
    await db.insert(interests).values({
        user_id: newInterest.user_id,
        comp_id: newInterest.comp_id,
        sign_up_date: newInterest.sign_up_date
    });
}

export async function removeInterest(int_id:number){

    await db.delete(interests).where(eq(interests.int_id,int_id));
}

export async function getPrefBranch(int_id:number){
    return (await db.select().from(interests).where(
        eq(interests.int_id, int_id)))[0]          
}