import type { Usecase } from '../usecase'

export interface UserInput {
  name: string
  email: string
  phone: string
  password: string
}

export interface UserOutput {
  id: string
}

export interface UserUsecase extends Usecase<UserInput, UserOutput> {}
