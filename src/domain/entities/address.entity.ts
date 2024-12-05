import { Entity } from '../entity'

export interface AddressProps {
  locationId: string
  number: string
  complement?: string
}

export class Address extends Entity<AddressProps> {
  private constructor(props: AddressProps, id?: string) {
    super(props, id)
  }

  public static instance(props: AddressProps, id?: string) {
    return new Address(props, id)
  }
}
