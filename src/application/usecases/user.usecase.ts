import type { Usecase } from '../usecase'

export interface UserInput {
  name: string
  email: string
  phone: string
  password: string
  schoolId: string
  role: string
}

export interface UserOutput {
  id: string
}

export interface UserUsecase extends Usecase<UserInput, UserOutput> {}
