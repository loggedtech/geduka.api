import type { Notification } from '~/application/notification'

import type { Usecase } from '../usecase'
import type { AddressInput } from './address.usecase'

export interface SchoolInput {
  name: string
  email: string
  phone: string
  taxId: string
  password: string
  role: string
  address: AddressInput
}

export interface SchoolOutput {
  id: string
}

export interface SchoolUsecase
  extends Usecase<SchoolInput, Notification<SchoolOutput>> {}
