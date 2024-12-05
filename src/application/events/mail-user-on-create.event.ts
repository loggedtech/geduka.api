import type { MailAdapter } from '../adapters'
import { Event } from '../event'

export interface MailProps {
  name: string
  email: string
}

export class MailUserOnCreateEvent extends Event<MailProps> {
  constructor(private readonly mail: MailAdapter) {
    super('mail-user-on-create')
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
