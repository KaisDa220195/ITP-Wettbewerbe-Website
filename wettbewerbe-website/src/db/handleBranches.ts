"use server"
import { db } from './index';
import { branch} from './schema';
import { eq,sql} from 'drizzle-orm';


export interface branchStruct  {
    branch_id: number,
    name: string,
  
}

export async function addBranch(newBranch:branchStruct){
    await db.insert(branch).values(newBranch);
}

export async function removeBranch(branch_id:number){
    await db.delete(branch).where(eq(branch.branch_id,branch_id));
}

export async function getBranch(name:string){
    return (await db.select().from(branch).where(eq(branch.name,name)))[0]          
}

