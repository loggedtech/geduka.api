export interface HashAdapter {
  hash(payload: string): Promise<string>
  varify(payload: string, hashed: string): Promise<boolean>
}
