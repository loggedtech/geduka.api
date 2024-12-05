export class Notification {
  message: string
  status: number

  constructor(message: string, status: number) {
    this.message = message
    this.status = status
  }
}

export class NotificationError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}
