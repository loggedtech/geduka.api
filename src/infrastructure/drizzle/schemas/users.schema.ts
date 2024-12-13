import { relations } from 'drizzle-orm'
import { char, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

import { members } from './members.schema'

export const users = pgTable('users', {
  id: char('id', { length: 26 }).primaryKey(),
  image: text('image'),
  name: varchar('name').notNull(),
  email: varchar('email').unique().notNull(),
  phone: char('phone', { length: 11 }).unique().notNull(),
  password: text('password').notNull(),
  activedAt: timestamp('actived_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
  members: many(members),
}))
