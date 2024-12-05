import type { School } from '~/domain/entities'

import type { Gateway } from '../gateway'

export interface SchoolGateway extends Gateway<School> {
  findById(id: string): Promise<School | null>
  findByEmail(email: string): Promise<School | null>
  findByPhone(phone: string): Promise<School | null>
  findByTaxId(taxId: string): Promise<School | null>
}
