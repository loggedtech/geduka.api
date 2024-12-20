import type { Address, AddressProps } from '~/domain/entities'

export interface AddressGateway {
  findByProps(data: AddressProps): Promise<Address | null>
  create(data: Address): Promise<void>
}
