import { and, eq } from 'drizzle-orm'

import { Address, type AddressProps } from '~/domain/entities'

import type { AddressGateway } from '~/application/gateways'

import { db } from '~/infrastructure/drizzle'
import { addresses } from '~/infrastructure/drizzle/schemas'

export class AddressRepository implements AddressGateway {
  async findByProps(data: AddressProps): Promise<Address | null> {
    const [location] = data.complement
      ? await db
          .select()
          .from(addresses)
          .where(
            and(
              eq(addresses.locationId, data.locationId),
              eq(addresses.number, data.number),
              eq(addresses.complement, data.complement)
            )
          )
      : await db
          .select()
          .from(addresses)
          .where(
            and(
              eq(addresses.locationId, data.locationId),
              eq(addresses.number, data.number)
            )
          )

    return location ? Address.instance({ ...location }, location.id) : null
  }

  async create(data: Address): Promise<void> {
    await db.insert(addresses).values({ id: data.id, ...data.props })
  }

  async update(data: Address): Promise<void> {
    await db
      .update(addresses)
      .set({ ...data.props })
      .where(eq(addresses.id, data.id))
  }

  async delete(data: Address): Promise<void> {
    await db.delete(addresses).where(eq(addresses.id, data.id))
  }
}
