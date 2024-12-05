import type { Usecase } from '../usecase'
import type { SchoolInput, SchoolUsecase, UserUsecase } from '../usecases'

import { Notification } from '../notification'

export interface AccountInput extends SchoolInput {
  password: string
  role: string
}

export class CreateAccountService
  implements Usecase<AccountInput, Notification>
{
  constructor(
    private readonly school: SchoolUsecase,
    private readonly user: UserUsecase
  ) {}

  async execute(data: AccountInput): Promise<Notification> {
    const { name, email, phone, taxId, password, role, address } = data

    const school = await this.school.execute({
      name,
      email,
      phone,
      taxId,
      address,
    })

    await this.user.execute({
      name,
      email,
      phone,
      password,
      role,
      schoolId: school.id,
    })

    return new Notification('Account created successfully', 201)
  }
}
