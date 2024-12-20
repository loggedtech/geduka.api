interface MailProps {
  name: string
  email: string
}

export interface MailMessage {
  to: MailProps
  subject: string
  body: string
}

export interface MailAdapter {
  send(message: MailMessage): Promise<void>
}
