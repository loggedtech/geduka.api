import { init } from '@paralleldrive/cuid2'

const cuid = init({ length: 26 })

export abstract class Entity<T> {
  protected readonly _id: string
  public props: T

  constructor(props: T, id?: string) {
    this._id = id ?? cuid()
    this.props = props
  }

  public get id() {
    return this._id
  }
}
