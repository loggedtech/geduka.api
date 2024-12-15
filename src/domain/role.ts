export type RoleOptions =
  | 'LANDLORD'
  | 'TENANT'
  | 'ADMINISTRATOR'
  | 'COORDINATOR'
  | 'TEACHER'
  | 'RESPONSIBLE'
  | 'STUDENT'

export const RoleOptions = {
  LANDLORD: 'LANDLORD' as RoleOptions,
  TENANT: 'TENANT' as RoleOptions,
  ADMINISTRATOR: 'ADMINISTRATOR' as RoleOptions,
  COORDINATOR: 'COORDINATOR' as RoleOptions,
  TEACHER: 'TEACHER' as RoleOptions,
  RESPONSIBLE: 'RESPONSIBLE' as RoleOptions,
  STUDENT: 'STUDENT' as RoleOptions,
}
