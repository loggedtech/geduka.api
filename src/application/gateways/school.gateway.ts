import type { School } from '~/domain/entities'

export interface SchoolGateway {
  findById(id: string): Promise<School | null>
  findByEmail(email: string): Promise<School | null>
  findByPhone(phone: string): Promise<School | null>
  findByTaxId(taxId: string): Promise<School | null>
  create(data: School): Promise<void>
  update(data: School): Promise<void>
  delete(data: School): Promise<void>
}
