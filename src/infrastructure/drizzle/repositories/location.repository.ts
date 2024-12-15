import { eq } from 'drizzle-orm'

import { Location } from '~/domain/entities'

import type { LocationGateway } from '~/application/gateways'

import { db } from '~/infrastructure/drizzle'
import { locations } from '~/infrastructure/drizzle/schemas'

export class LocationRepository implements LocationGateway {
  async findByZip(zip: string): Promise<Location | null> {
    const [data] = await db
      .select()
      .from(locations)
      .where(eq(locations.zip, zip))

    return data ? Location.instance({ ...data }, data.id) : null
  }

  async create(data: Location): Promise<void> {
    await db.insert(locations).values({ id: data.id, ...data.props })
  }

  async update(data: Location): Promise<void> {
    await db
      .update(locations)
      .set({ ...data.props })
      .where(eq(locations.id, data.id))
  }

  async delete(data: Location): Promise<void> {
    await db.delete(locations).where(eq(locations.id, data.id))
  }
}
