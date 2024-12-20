import type { Location } from '~/domain/entities'

export interface LocationGateway {
  findByZip(zip: string): Promise<Location | null>
  create(data: Location): Promise<void>
}
