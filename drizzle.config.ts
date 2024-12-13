import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

import { env } from '~/infrastructure/env'

export default defineConfig({
  out: './src/infrastructure/drizzle/migrations',
  schema: './src/infrastructure/drizzle/schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
