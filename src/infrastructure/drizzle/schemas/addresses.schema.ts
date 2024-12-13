import { relations } from 'drizzle-orm'
import { char, pgTable, varchar } from 'drizzle-orm/pg-core'

import { locations } from './locations.schema'

export const addresses = pgTable('addresses', {
  id: char('id', { length: 26 }).primaryKey(),
  locationId: char('location_id', { length: 26 })
    .references(() => locations.id, {
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })
    .notNull(),
  number: varchar('number', { length: 20 }).notNull(),
  complement: varchar('complement', { length: 60 }),
})

export const addressesRelations = relations(addresses, ({ one }) => ({
  location: one(locations, {
    fields: [addresses.locationId],
    references: [locations.id],
  }),
}))
