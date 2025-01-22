import { integer,smallint,date, pgTable, varchar,text,primaryKey } from "drizzle-orm/pg-core";
import {relations } from "drizzle-orm";

export const competition = pgTable("competition", {
  comp_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  lastRegistrationDate: date("date", {mode: "date"}).notNull(),
  lowestGrade: smallint(),
  prefBranch: varchar({length:20}),
  user_id: integer().references(()=>user.user_id)
});

export const user = pgTable("user",{
  user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({length: 255}).notNull(),
  password: varchar({length:255}),
  
});

export const teacher = pgTable("teacher",{
  user_id: integer().references(()=>user.user_id).primaryKey(),
  shortName: varchar({length: 10})
});

export const student = pgTable("student",{
  user_id: integer().references(()=>user.user_id).primaryKey(),
  branch: varchar({length:50}),
  class: varchar({length:10}),

});

export const usersToCompetitions = pgTable('users_to_competitions',{
    user_id: integer('user_id')
      .notNull()
      .references(() => user.user_id),
    comp_id: integer('comp_id')
      .notNull()
      .references(() => competition.comp_id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.user_id, t.comp_id] }),
  })
);


//RELATIONS

export const usersToCompsRelations = relations(usersToCompetitions, ({ one }) => ({
  competition: one(competition, {
    fields: [usersToCompetitions.comp_id],
    references: [competition.comp_id],
  }),
  user: one(user, {
    fields: [usersToCompetitions.user_id],
    references: [user.user_id],
  }),
}));

export const userRelation = relations(user, ({ one }) => ({
	student: one(student),
  teacher: one(teacher),
}));

export const studentRelations = relations(student, ({ one }) => ({
	user: one(user),
}));

export const teacherRelations = relations(teacher, ({ one }) => ({
	user: one(user),
}));

export const competitionRelations = relations(competition, ({ many }) => ({
	interested: many(user),
}));

export const userRelations = relations(user, ({ many }) => ({
	competitions: many(user),
}));

export const interests = pgTable("interests",{
  int_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: integer().references(()=>user.user_id),
  comp_id: integer().references(()=>competition.comp_id),
  sign_up_date: date("date", {mode: "date"}).notNull(),
});
