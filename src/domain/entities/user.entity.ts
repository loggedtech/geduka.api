import { Entity } from '../entity'
import type { Replace } from '../replace'

export interface UserProps {
  image?: string | null
  name: string
  email: string
  phone: string
  password: string
  activedAt?: Date | null
  createdAt: Date
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id)
  }

  public static instance(
    props: Replace<UserProps, { createdAt?: Date }>,
    id?: string
  ) {
    return new User({ ...props, createdAt: props.createdAt ?? new Date() }, id)
  }
}
