"use server"
import exp from 'constants';
import { db } from './index';
import { user,student ,teacher} from './schema';
import { eq,sql} from 'drizzle-orm';

export interface teacherStructure{
    user_id:number,
    email: string;
    password: string;
    shortName: string;
}

export interface studentStructure{
    user_id:number,
    email: string;
    password: string;
    branch: number;
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

export async function getUser(email:string) : Promise<studentStructure | teacherStructure | null>{
     
    const tempUser = await db.select().from(user).where(sql`${user.email} = ${email}`);

    const tempStudent = await db.select().from(student).where(sql`${student.user_id} = ${tempUser[0].user_id}`);

    if(tempStudent.length != 0){
        const retStudent = {
            user_id:tempUser[0].user_id,
            email: tempUser[0].email,
            password: tempUser[0].password,
            branch: tempStudent[0].branch,
            class: tempStudent[0].class,
        }
        return retStudent;
    }
    
    const tempTeacher = await db.select().from(teacher).where(sql`${teacher.user_id} = ${tempUser[0].user_id}`);

    if(tempTeacher.length != 0){
        const retTeacher = {
            user_id: tempUser[0].user_id,
            email: tempUser[0].email,
            password: tempUser[0].password,
            shortName: tempTeacher[0].shortName,
        }
        return retTeacher;


    }

    return null;
    
}

export async function getuserInfo(email:string) {
    const tempUser = getUser(email);
    
}

export async function loginUser(email:string,password:string){

    const tempUser = await getUser(email);

    if(tempUser == null){
        return null;
    }
    else if(tempUser.password == password){
        if((tempUser as teacherStructure).shortName != undefined){
            return {
                user_id:tempUser.user_id,
                email: tempUser.email,
                shortName: (tempUser as teacherStructure).shortName,
            }
        }
        else if((tempUser as studentStructure).class != undefined){
            return {
                user_id:tempUser.user_id,
                email: tempUser.email,
                branch: (tempUser as studentStructure).branch,
                class:(tempUser as studentStructure).class,
            }
        }
    }


}

export async function updateUser(updatedUser: studentStructure | teacherStructure){
    await db.update(user).set({ email: updatedUser.email,password: updatedUser.password }).where(eq(user.user_id, updatedUser.user_id));
    if((updatedUser as studentStructure).branch != undefined){
        await db.update(student).set({ branch: (updatedUser as studentStructure).branch,class: (updatedUser as studentStructure).class }).where(eq(student.user_id, updatedUser.user_id));
    }
    else if((updatedUser as teacherStructure).shortName != undefined){
        await db.update(teacher).set({ shortName: (updatedUser as teacherStructure).shortName}).where(eq(teacher.user_id, updatedUser.user_id));
    }
}


