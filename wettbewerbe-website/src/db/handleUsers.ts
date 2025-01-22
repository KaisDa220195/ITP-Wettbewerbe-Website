"use server"
import { db } from './index';
import { user } from './schema';


export interface teacherStructure{
    email: string;
    password: string;
    shortName: string;
}

export interface studentStructure{
    email: string;
    password: string;
    branch: string;
    class:string;
}


export async function addStudent(student:studentStructure){

    const data = await db.insert(user).values(student).returning();
    console.log(data)
}

export async function addTeacher(teacher:teacherStructure){

    await db.insert(user).values(teacher);
}
