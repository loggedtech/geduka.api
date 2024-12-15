export interface HashAdapter {
  hash(payload: string): Promise<string>
  verify(payload: string, hashed: string): Promise<boolean>
}
