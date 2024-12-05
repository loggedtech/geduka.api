import type { Address, AddressProps } from '~/domain/entities'

import type { Gateway } from '../gateway'

export interface AddressGateway extends Gateway<Address> {
  findByProps(data: AddressProps): Promise<Address | null>
}
