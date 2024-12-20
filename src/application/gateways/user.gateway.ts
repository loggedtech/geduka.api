import type { User } from '~/domain/entities'

export interface UserGateway {
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  findByPhone(phone: string): Promise<User | null>
  create(data: User): Promise<void>
}
