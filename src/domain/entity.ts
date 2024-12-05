import { createId } from '@paralleldrive/cuid2'

export abstract class Entity<T> {
  protected readonly _id: string
  public props: T

  constructor(props: T, id?: string) {
    this._id = id ?? createId()
    this.props = props
  }

  public get id() {
    return this._id
  }
}
