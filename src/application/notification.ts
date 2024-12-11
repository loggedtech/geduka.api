export class Notification<T = undefined> {
  message: string
  status: number
  data?: T

  constructor(message: string, status: number, data?: T) {
    this.message = message
    this.status = status
    this.data = data
  }
}

export class NotificationError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}
