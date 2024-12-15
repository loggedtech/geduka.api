import { User } from '~/domain/entities'

import { HttpCode } from '~/application/http'

import type { HashAdapter } from '../adapters'
import type { SendEmailWhenCreatingUserEvent } from '../events'
import type { SchoolGateway, UserGateway } from '../gateways'
import type { UserInput, UserOutput, UserUsecase } from '../usecases'

import { NotificationError } from '../notification'

export class CreateUserService implements UserUsecase {
  constructor(
    private readonly crypto: HashAdapter,
    private readonly user: UserGateway,
    private readonly school: SchoolGateway,
    private readonly event: SendEmailWhenCreatingUserEvent
  ) {}

  async execute(data: UserInput): Promise<UserOutput> {
    const { name, email, phone, password } = data

    const emailExists = await this.user.findByEmail(email)
    if (emailExists)
      throw new NotificationError(
        'User email already exists',
        HttpCode.CONFLICT
      )

    const phoneExists = await this.user.findByPhone(phone)
    if (phoneExists)
      throw new NotificationError(
        'User phone already exists',
        HttpCode.CONFLICT
      )

    const school = await this.school.findById(schoolId)
    if (school === null)
      throw new NotificationError(
        'School not already exists',
        HttpCode.NOT_FOUND
      )

    const passwordHash = await this.crypto.hash(password)
    const user = User.instance({
      name,
      email,
      phone,
      password: passwordHash,
      schoolId: school.id,
      role,
    })

    await this.user.create(user)

    this.event.emit('send-email-when-creating-user', { name, email })

    return { id: user.id }
  }
}
