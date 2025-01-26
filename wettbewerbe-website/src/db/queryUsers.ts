"use server"
import { db } from './index';

const result = await db.query.user

export async function getStudents(max:number){
    return db.query.user.findMany({
        limit:max,
        with:{
            student:true,
        }
    })
}

export async function getTeachers(max:number){
    return db.query.user.findMany({
        limit:max,
        with:{
            teacher:true,
        }
    })
}


