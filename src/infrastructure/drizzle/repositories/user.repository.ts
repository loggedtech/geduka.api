import { eq } from 'drizzle-orm'

import { User } from '~/domain/entities'

import type { UserGateway } from '~/application/gateways'

import { db } from '~/infrastructure/drizzle'
import { users } from '~/infrastructure/drizzle/schemas'

export class UserRepository implements UserGateway {
  async findById(id: string): Promise<User | null> {
    const [data] = await db.select().from(users).where(eq(users.id, id))

    return data ? User.instance({ ...data }, data.id) : null
  }

  async findByEmail(email: string): Promise<User | null> {
    const [data] = await db.select().from(users).where(eq(users.email, email))

    return data ? User.instance({ ...data }, data.id) : null
  }

  async findByPhone(phone: string): Promise<User | null> {
    const [data] = await db.select().from(users).where(eq(users.phone, phone))

    return data ? User.instance({ ...data }, data.id) : null
  }

  async create(data: User): Promise<void> {
    await db.insert(users).values({ id: data.id, ...data.props })
  }
}
