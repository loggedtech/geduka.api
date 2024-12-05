import type { MailAdapter } from '../adapters'
import { Event } from '../event'

export interface MailProps {
  name: string
  email: string
}

export class SendEmailWhenCreatingUserEvent extends Event<MailProps> {
  constructor(private readonly mail: MailAdapter) {
    super('send-email-when-creating-user')
  }

  async process(data: MailProps): Promise<void> {
    const { name, email } = data

    await this.mail.send({
      from: { name, email },
      subject: 'User Activated Mail',
      body: 'Click link for activated user.',
    })
  }
}
