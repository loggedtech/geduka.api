import { School } from '~/domain/entities'

import { HttpCode } from '~/application/http'

import { RoleOption } from '~/domain/role'
import type { SchoolGateway } from '../gateways'
import type {
  AddressUsecase,
  SchoolInput,
  SchoolOutput,
  SchoolUsecase,
  UserUsecase,
} from '../usecases'

import { NotificationError } from '../notification'

export class CreateSchoolService implements SchoolUsecase {
  constructor(
    private readonly school: SchoolGateway,
    private readonly address: AddressUsecase,
    private readonly user: UserUsecase
  ) {}

  async execute(data: SchoolInput): Promise<SchoolOutput> {
    const { name, email, phone, taxId, password, address: location } = data

    const emailExists = await this.school.findByEmail(email)
    if (emailExists)
      throw new NotificationError(
        'School email already exists',
        HttpCode.CONFLICT
      )

    const phoneExists = await this.school.findByPhone(phone)
    if (phoneExists)
      throw new NotificationError(
        'School phone already exists',
        HttpCode.CONFLICT
      )

    const taxIdExists = await this.school.findByTaxId(taxId)
    if (taxIdExists) {
      throw new NotificationError(
        'School tax id already exists',
        HttpCode.CONFLICT
      )
    }

    const address = await this.address.execute({ ...location })

    const school = School.instance({
      name,
      email,
      phone,
      taxId,
      addressId: address.id,
    })
    await this.school.create(school)

    await this.user.execute({
      name,
      email,
      phone,
      password,
      role: RoleOption.TENANT,
      schoolId: school.id,
    })

    return { id: school.id }
  }
}
