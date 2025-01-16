import { integer, pgTable, varchar,text,primaryKey } from "drizzle-orm/pg-core";
import {relations } from "drizzle-orm";

export const competition = pgTable("competition", {
  id: integer().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
});

export const schoolYear = pgTable("schoolYear", {
//In Format YY/YY to show the year the school year started in and in which it ended -> Jahrgang
  id: integer().primaryKey(),
  years: varchar({length: 5}),

});

export const competitionYear = pgTable("competitionYear", {
  id: integer().primaryKey(),

  compYear: varchar({length: 5}),
  compId: integer(),

  }
);


//RELATIONS


export const compYearRelations = relations(competitionYear, ({ one }) => ({
  //Relation to the school year in which it takes place
  compYear: one(schoolYear, {
    fields: [competitionYear.compYear],
    references: [schoolYear.id],
  }),
  
  //Relation to which competition it belongs to
  compName: one(competition,{
    fields: [competitionYear.compId],
    references: [competition.id],
  })
}));

export const competitionRelations = relations(competition, ({ many }) => ({
	competitionYear: many(competitionYear),
}));

export const yearRelations = relations(schoolYear, ({ many }) => ({
	competitionYear: many(competitionYear),
}));