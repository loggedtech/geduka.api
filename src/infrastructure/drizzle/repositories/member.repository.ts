import type { Member } from '~/domain/entities'

import type { MemberGateway } from '~/application/gateways'

import { db } from '..'
import { members } from '../schemas'

export class MemberRepository implements MemberGateway {
  async create(data: Member): Promise<void> {
    await db.insert(members).values({ ...data.props })
  }
}
