import { relations } from 'drizzle-orm'
import { char, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

import { addresses } from './addresses.schema'
import { members } from './members.schema'

export const schools = pgTable('schools', {
  id: char('id', { length: 26 }).primaryKey(),
  image: text('image'),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  phone: char('phone', { length: 11 }).unique().notNull(),
  taxId: char('tax_id', { length: 14 }).unique().notNull(),
  addressId: char('address_id', { length: 26 })
    .references(() => addresses.id, {
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })
    .notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull(),
})

export const schoolsRelations = relations(schools, ({ one, many }) => ({
  address: one(addresses, {
    fields: [schools.addressId],
    references: [addresses.id],
  }),
  members: many(members),
}))
