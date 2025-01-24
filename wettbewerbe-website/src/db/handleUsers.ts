"use server"
import { db } from './index';
import { user,student ,teacher} from './schema';
import { eq ,sql} from 'drizzle-orm';

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


export async function addStudent(toBeStudent:studentStructure){
    // insert part of the given data into the user table. The rest goes into the student table wiht the same id
    const tid: {insertedid: number}[] = await db.insert(user).values({email:toBeStudent.email,password:toBeStudent.password}).returning({insertedid:user.user_id});
    const data = {
        user_id: tid[0].insertedid,
        branch: toBeStudent.branch,
        class: toBeStudent.class,
    }
    await db.insert(student).values(data);
}

export async function addTeacher(toBeTeacher:teacherStructure){
    const tid: {insertedid: number}[] = await db.insert(user).values({email:toBeTeacher.email,password:toBeTeacher.password}).returning({insertedid:user.user_id});
    const data = {
        user_id: tid[0].insertedid,
        shortName: toBeTeacher.shortName,
    }
    await db.insert(teacher).values(data);
}

export async function removeUser(user_id:number){
    await db.delete(student).where(eq(student.user_id, user_id));
    await db.delete(teacher).where(eq(teacher.user_id, user_id));
    await db.delete(user).where(eq(user.user_id, user_id));

}

export async function getUser(email:string){
    //const use = await db.select().from(user).where(eq(email,user.email));
    return await db.select().from(user).where(sql`${user.email} = email`);
    
}

