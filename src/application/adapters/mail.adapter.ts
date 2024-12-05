interface MailProps {
  name: string
  email: string
}

export interface MailMessage {
  from: MailProps
  subject: string
  body: string
}

export interface MailAdapter {
  send(message: MailMessage): Promise<void>
}
