import type { Usecase } from '../usecase'

export interface AddressInput {
  zip: string
  place: string
  number: string
  complement?: string | null
  district: string
  city: string
  state: string
}

export interface AddressOutput {
  id: string
}

export interface AddressUsecase extends Usecase<AddressInput, AddressOutput> {}
