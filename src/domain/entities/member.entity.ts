import type { RoleOptions } from '../role'

export interface MemberProps {
  userId: string
  schoolId: string
  role: RoleOptions
}

export class Member {
  public props: MemberProps

  private constructor(props: MemberProps) {
    this.props = props
  }

  public static instance(props: MemberProps) {
    return new Member(props)
  }
}
