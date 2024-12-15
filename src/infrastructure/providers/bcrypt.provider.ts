import { compare, hash } from 'bcrypt'

import type { HashAdapter } from '~/application/adapters'

export class BcryptProvider implements HashAdapter {
  async hash(payload: string): Promise<string> {
    return await hash(payload, 10)
  }

  async verify(payload: string, hashed: string): Promise<boolean> {
    return await compare(payload, hashed)
  }
}
