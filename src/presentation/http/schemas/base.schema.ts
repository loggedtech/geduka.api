import { z } from '@hono/zod-openapi'

export const BaseSchema = z
  .object({
    app: z.string(),
    version: z.string(),
  })
  .openapi('Base')
