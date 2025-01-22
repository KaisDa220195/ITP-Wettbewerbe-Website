"use server"
import { db } from './index';
import { user,student } from './schema';


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

    const data = {
        id: await db.insert(user).values({email:student.email,password:student.password}).returning({insertedid:user.user_id}),
        branch: student.branch,
        class: student.class,
    }
    await db.insert(student).values(data)
    console.log(data)
}

export async function addTeacher(teacher:teacherStructure){

    await db.insert(user).values(teacher);
}
