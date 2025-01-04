import { integer, pgTable, varchar,text,primaryKey } from "drizzle-orm/pg-core";
import {relations } from "drizzle-orm";

export const competition = pgTable("competition", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
});

export const schoolYear = pgTable("schoolYear", {
//In Format YY/YY to show the year the school year started in and in which it ended
  years: varchar({length: 5}).primaryKey(),

});

export const competitionYear = pgTable("competitionYear", {
  
  compYear: varchar({length: 5}),
  compName: varchar({length:255}),

  }, (table) => {//creates composite primar key out of the years it takes palce in and the name of the competition
    return [{
      pk: primaryKey({ columns: [table.compYear, table.compName] }),
      pkWithCustomName: primaryKey({ name: 'competitionYear', columns: [table.compYear, table.compName] }),
    }];
});




//RELATIONS


export const compYearRelations = relations(competitionYear, ({ one }) => ({
  //Relation to the school year in which it takes place
  compyear: one(schoolYear, {
    fields: [competitionYear.compYear],
    references: [schoolYear.years],
  }),
  
  //Relation to which competition it belongs to
  compName: one(competition,{
    fields: [competitionYear.compName],
    references: [competition.name],
  })
}));

export const competitionRelations = relations(competition, ({ many }) => ({
	competitionYear: many(competitionYear),
}));

export const yearRelations = relations(schoolYear, ({ many }) => ({
	competitionYear: many(competitionYear),
}));