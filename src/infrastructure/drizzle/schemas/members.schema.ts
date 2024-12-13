import { relations } from 'drizzle-orm'
import { char, pgTable, primaryKey, varchar } from 'drizzle-orm/pg-core'

import { schools } from './schools.schema'
import { users } from './users.schema'

export const members = pgTable(
  'members',
  {
    userId: char('user_id', { length: 26 })
      .references(() => users.id, {
        onUpdate: 'cascade',
        onDelete: 'cascade',
      })
      .notNull(),
    schoolId: char('school_id', { length: 26 })
      .references(() => schools.id, {
        onUpdate: 'cascade',
        onDelete: 'cascade',
      })
      .notNull(),
    role: varchar('role', {
      enum: [
        'LANDLORD',
        'TENANT',
        'ADMINISTRATOR',
        'COORDINATOR',
        'TEACHER',
        'RESPONSIBLE',
        'STUDENT',
      ],
    }).notNull(),
  },
  t => ({
    pk: primaryKey({ columns: [t.userId, t.schoolId] }),
  })
)

export const membersRelations = relations(members, ({ one }) => ({
  school: one(schools, {
    fields: [members.schoolId],
    references: [schools.id],
  }),
  user: one(users, {
    fields: [members.userId],
    references: [users.id],
  }),
}))
