import { integer,smallint,date, pgTable, varchar,text,primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const competition = pgTable("competition", {
  comp_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  lastRegistrationDate: date("date", {mode: "date"}).notNull(),
  lowestGrade: smallint().notNull(),
  link: varchar().notNull(),
  user_id: integer().references(()=>user.user_id)
});

export const branch = pgTable("branch",{
  branch_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name:varchar({length:50}).notNull(),
  
});

export const user = pgTable("user",{
  user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({length: 255}).notNull(),
  password: varchar({length:255}).notNull(),
  
});

export const teacher = pgTable("teacher",{
  user_id: integer().references(()=>user.user_id).primaryKey(),
  shortName: varchar({length: 10}).notNull()
});

export const student = pgTable("student",{
  user_id: integer().references(()=>user.user_id).primaryKey(),
  branch: integer().references(() => branch.branch_id).notNull(),
  class: varchar({length:10}).notNull(),

});


export const interests = pgTable("interests",{
  int_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: integer().references(()=>user.user_id, {onDelete: 'cascade'}).notNull(),
  comp_id: integer().references(()=>competition.comp_id, {onDelete: 'cascade'}).notNull(),
  sign_up_date: date("date", {mode: "date"}).notNull(),
});

export const prefBranch = pgTable("prefBranch",{
  prefBranch_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  branch_id: integer().references(()=> branch.branch_id, {onDelete: 'cascade'}),
  comp_id: integer().references(()=>competition.comp_id, {onDelete: 'cascade'}),
});

//RELATIONS

export const interestedRelations = relations(interests, ({ one }) => ({
  competition: one(competition, {
    fields: [interests.comp_id],
    references: [competition.comp_id],
  }),
  user: one(user, {
    fields: [interests.user_id],
    references: [user.user_id],
  }),
}));

export const prefBranchRelations = relations(prefBranch, ({ one }) => ({
  competition: one(competition, {
    fields: [prefBranch.comp_id],
    references: [competition.comp_id],
  }),
  branch: one(branch, {
    fields: [prefBranch.branch_id],
    references: [branch.branch_id],
  }),
}));

export const userRelation = relations(user, ({ one,many }) => ({
	student: one(student),
  teacher: one(teacher),
  competitions: many(interests),

}));

export const studentRelations = relations(student, ({ one }) => ({
	user: one(user),
  branch: one(branch),
}));

export const teacherRelations = relations(teacher, ({ one }) => ({
	user: one(user),
}));

export const competitionRelations = relations(competition, ({ many }) => ({
	interested: many(interests),
  branches: many(prefBranch),
}));

export const branchRelations = relations(branch,({many}) => ({
  students: many(student),
  competitions: many(prefBranch),
}))