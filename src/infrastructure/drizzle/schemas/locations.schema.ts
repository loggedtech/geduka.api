import { char, pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const locations = pgTable('locations', {
  id: char({ length: 26 }).primaryKey(),
  zip: char({ length: 8 }).notNull(),
  place: text().notNull(),
  district: varchar().notNull(),
  city: varchar().notNull(),
  state: char({ length: 2 }).notNull(),
})
