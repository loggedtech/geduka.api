import type { Member } from '~/domain/entities'

export interface MemberGateway {
  create(data: Member): Promise<void>
}
