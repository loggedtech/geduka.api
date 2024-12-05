import type { SchoolGateway } from '../gateways'
import type {
  AddressUsecase,
  SchoolInput,
  SchoolOutput,
  SchoolUsecase,
} from '../usecases'

import { School } from '~/domain/entities'
import { NotificationError } from '../notification'

export class CreateSchoolService implements SchoolUsecase {
  constructor(
    private readonly school: SchoolGateway,
    private readonly address: AddressUsecase
  ) {}

  async execute(data: SchoolInput): Promise<SchoolOutput> {
    const { name, email, phone, taxId, address: location } = data

    const emailExists = await this.school.findByEmail(email)
    if (emailExists) {
      throw new NotificationError(
        {
          name: 'EMAIL_ALREADY_EXISTS',
          message: 'School email already exists',
        },
        409
      )
    }

    const phoneExists = await this.school.findByPhone(phone)
    if (phoneExists) {
      throw new NotificationError(
        {
          name: 'PHONE_ALREADY_EXISTS',
          message: 'School phone already exists',
        },
        409
      )
    }

    const taxIdExists = await this.school.findByTaxId(taxId)
    if (taxIdExists) {
      throw new NotificationError(
        {
          name: 'TAXID_ALREADY_EXISTS',
          message: 'School tax id already exists',
        },
        409
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

    return { id: school.id }
  }
}
