export interface NotificatioOptions {
  name: string
  message: string
}

export class NotificationError extends Error {
  statusCode: number

  constructor({ message, name }: NotificatioOptions, status: number) {
    super(message)
    this.name = name
    this.statusCode = status
  }
}
