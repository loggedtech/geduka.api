export interface Gateway<T> {
  create(data: T): Promise<void>
  update(data: T): Promise<void>
  dalete(data: T): Promise<void>
}
