import { Member, User } from '~/domain/entities'

import type { HashAdapter } from '~/application/adapters'
import type { MemberGateway, UserGateway } from '~/application/gateways'
import { HttpCode } from '~/application/http'
import { NotificationError } from '~/application/notification'
import type { UserInput, UserOutput, UserUsecase } from '~/application/usecases'

export class CreateUserService implements UserUsecase {
  constructor(
    private readonly crypto: HashAdapter,
    private readonly user: UserGateway,
    private readonly member: MemberGateway
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

    const passwordHash = await this.crypto.hash(password)
    const user = User.instance({
      name,
      email,
      phone,
      password: passwordHash,
    })

    await this.user.create(user)

    const member = Member.instance({ ...data, userId: user.id })
    await this.member.create(member)

    return { id: user.id }
  }
}
