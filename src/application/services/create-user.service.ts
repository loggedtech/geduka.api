import { User } from '~/domain/entities'

import type { HashAdapter } from '../adapters'
import type { SendEmailWhenCreatingUserEvent } from '../events'
import type { UserGateway } from '../gateways'
import type { UserInput, UserOutput, UserUsecase } from '../usecases'

import { NotificationError } from '../notification'

export class CreateUserService implements UserUsecase {
  constructor(
    private readonly crypto: HashAdapter,
    private readonly user: UserGateway,
    private readonly event: SendEmailWhenCreatingUserEvent
  ) {}

  async execute(data: UserInput): Promise<UserOutput> {
    const { name, email, phone, password } = data

    const emailExists = await this.user.findByEmail(email)
    if (emailExists) {
      throw new NotificationError(
        { name: 'EMAIL_ALREADY_EXISTS', message: 'User email already exists' },
        409
      )
    }

    const phoneExists = await this.user.findByPhone(phone)
    if (phoneExists) {
      throw new NotificationError(
        { name: 'PHONE_ALREADY_EXISTS', message: 'User phone already exists' },
        409
      )
    }

    const passwordHash = await this.crypto.hash(password)
    const user = User.instance({ name, email, phone, password: passwordHash })

    await this.user.create(user)

    this.event.emit('send-email-when-creating-user', { name, email })

    return { id: user.id }
  }
}
