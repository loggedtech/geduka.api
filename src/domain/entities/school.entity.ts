import { Entity } from '../entity'
import type { Replace } from '../replace'

export interface SchoolProps {
  name: string
  email: string
  phone: string
  taxId: string
  addressId: string
  createdAt: Date
}

export class School extends Entity<SchoolProps> {
  private constructor(props: SchoolProps, id?: string) {
    super(props, id)
  }

  public static instance(
    props: Replace<SchoolProps, { createdAt?: Date }>,
    id?: string
  ) {
    return new School(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id
    )
  }
}
