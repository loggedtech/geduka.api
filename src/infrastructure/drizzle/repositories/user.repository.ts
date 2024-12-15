import { eq } from 'drizzle-orm'

import { User } from '~/domain/entities'

import type { UserGateway, UserOptions } from '~/application/gateways'

import { db } from '~/infrastructure/drizzle'
import { members, users } from '~/infrastructure/drizzle/schemas'

export class UserRepository implements UserGateway {
  async findById(
    id: string,
    { schoolId, role }: UserOptions
  ): Promise<User | null> {
    const [data] = await db.select().from(users).where(eq(users.id, id))

    return data ? User.instance({ ...data, schoolId, role }, data.id) : null
  }

  async findByEmail(
    email: string,
    { schoolId, role }: UserOptions
  ): Promise<User | null> {
    const [data] = await db.select().from(users).where(eq(users.email, email))

    return data ? User.instance({ ...data, schoolId, role }, data.id) : null
  }

  async findByPhone(
    phone: string,
    { schoolId, role }: UserOptions
  ): Promise<User | null> {
    const [data] = await db.select().from(users).where(eq(users.phone, phone))

    return data ? User.instance({ ...data, schoolId, role }, data.id) : null
  }

  async create(data: User): Promise<void> {
    await db.transaction(async tx => {
      const [user] = await tx
        .insert(users)
        .values({ id: data.id, ...data.props })
        .returning()

      await tx.insert(members).values({
        userId: user.id,
        ...data.props,
      })
    })
  }

  async update(data: User): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async delete(data: User): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
