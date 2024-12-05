import type { Location } from '~/domain/entities'

import type { Gateway } from '../gateway'

export interface LocationGateway extends Gateway<Location> {
  findByZip(zip: string): Promise<Location | null>
}
