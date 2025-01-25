"use server"
import { db } from './index';
import { prefBranch} from './schema';
import { eq } from 'drizzle-orm';


export interface prefBranchStruct  {
    prefBranch_id: number,
    branch_id: number,
    comp_id: number,
}

export async function addPrefBranch(newPrefBranch:prefBranchStruct){
    await db.insert(prefBranch).values({
        branch_id: newPrefBranch.branch_id,
        comp_id: newPrefBranch.comp_id,
    });
}

export async function removePrefBranch(prefBranch_id:number){

    await db.delete(prefBranch).where(eq(prefBranch.prefBranch_id,prefBranch_id));
}

export async function getPrefBranch(prefBranch_id:number){
    return (await db.select().from(prefBranch).where(
        eq(prefBranch.prefBranch_id, prefBranch_id)))[0]          
}