import { swaggerUI } from '@hono/swagger-ui'
import type { OpenAPIHono } from '@hono/zod-openapi'

export const openAPIObjectConfig = {
  openapi: '3.1.0',
  info: {
    title: 'Geduka Api',
    version: '1.0.0',
  },
  tags: [
    {
      name: 'Base',
      description: 'Base operation',
    },
  ],
}

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc('/doc', openAPIObjectConfig)
  app.get('/ui', swaggerUI({ url: '/doc' }))
}
