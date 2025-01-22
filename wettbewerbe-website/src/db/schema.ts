import { integer,serial,smallint,boolean,date, pgTable, varchar,text,primaryKey } from "drizzle-orm/pg-core";
import {relations } from "drizzle-orm";

export const competition = pgTable("competition", {
  comp_id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  lastRegistrationDate: date("date", {mode: "date"}).notNull(),
  lowestGrade: smallint(),
  prefBranch: varchar({length:20}),
  user_id: integer().references(()=>user.user_id)
});

export const user = pgTable("user",{
  user_id: serial().primaryKey(),
  email: varchar({length: 255}).notNull(),
  password: varchar({length:255}),
  
});

export const teacher = pgTable("teacher",{
  user_id: serial().references(()=>user.user_id).primaryKey(),
  shortName: varchar({length: 10})
});

export const student = pgTable("student",{
  user_id: serial().references(()=>user.user_id).primaryKey(),
  branch: varchar({length:50}),
  class: varchar({length:10}),

});

//RELATIONS

export const interests = pgTable("interests",{
  int_id: serial().primaryKey(),
  user_id: integer().references(()=>user.user_id),
  comp_id: integer().references(()=>competition.comp_id),
  sign_up_date: date("date", {mode: "date"}).notNull(),
});
