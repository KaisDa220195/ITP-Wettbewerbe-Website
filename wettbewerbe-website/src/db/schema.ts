import { integer, smallint, date, pgTable, varchar, text, primaryKey, timestamp, boolean } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";


export const competition = pgTable("competition", {
  comp_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  lastRegistrationDate: date("date", { mode: "date" }).notNull(),
  lowestGrade: smallint().notNull(),
  link: varchar().notNull(),
  user_id: text().references(() => user.id)
});

export const branch = pgTable("branch", {
  branch_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 50 }).notNull(),

});

// export const user = pgTable("user",{
//   user_id: integer().primaryKey().generatedAlwaysAsIdentity(),
//   email: varchar({length: 255}).notNull(),
//   password: varchar({length:255}).notNull(),

// });

export const teacher = pgTable("teacher", {
  user_id: text().references(() => user.id).primaryKey(),
  shortName: varchar({ length: 10 }).notNull()
});

export const student = pgTable("student", {
  user_id: text().references(() => user.id).primaryKey(),
  branch: integer().references(() => branch.branch_id).notNull(),
  class: varchar({ length: 10 }).notNull(),

});


export const interests = pgTable("interests", {
  int_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: text().references(() => user.id, { onDelete: 'cascade' }).notNull(),
  comp_id: integer().references(() => competition.comp_id, { onDelete: 'cascade' }).notNull(),
  sign_up_date: date("date", { mode: "date" }).notNull(),
});

export const prefBranch = pgTable("prefBranch", {
  prefBranch_id: integer().primaryKey().generatedAlwaysAsIdentity(),
  branch_id: integer().references(() => branch.branch_id, { onDelete: 'cascade' }),
  comp_id: integer().references(() => competition.comp_id, { onDelete: 'cascade' }),
});

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  class: text('class'),
  branch: integer('branch')
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' })
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at')
});


//RELATIONS

export const interestedRelations = relations(interests, ({ one }) => ({
  competition: one(competition, {
    fields: [interests.comp_id],
    references: [competition.comp_id],
  }),
  user: one(user, {
    fields: [interests.user_id],
    references: [user.id],
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

export const userRelation = relations(user, ({ one, many }) => ({
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

export const branchRelations = relations(branch, ({ many }) => ({
  students: many(student),
  competitions: many(prefBranch),
}))