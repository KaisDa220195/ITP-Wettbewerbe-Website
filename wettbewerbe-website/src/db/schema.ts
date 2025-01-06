import { integer, pgTable, varchar,text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("Competition", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
});
