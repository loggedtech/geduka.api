import type { User } from '~/domain/entities'

export interface UserOptions {
  schoolId: string
  role: string
}

export interface UserGateway {
  findById(id: string, { schoolId, role }: UserOptions): Promise<User | null>
  findByEmail(
    email: string,
    { schoolId, role }: UserOptions
  ): Promise<User | null>
  findByPhone(
    phone: string,
    { schoolId, role }: UserOptions
  ): Promise<User | null>
  create(data: User): Promise<void>
  update(data: User): Promise<void>
  delete(data: User): Promise<void>
}
