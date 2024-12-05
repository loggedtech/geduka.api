import type { User } from '~/domain/entities'

import type { Gateway } from '../gateway'

export interface UserGateway extends Gateway<User> {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findByPhone(phone: string): Promise<User | null>
}
