import { app } from './http'

const server = Bun.serve({
  fetch: app.fetch,
  port: 3333,
})

console.log('Conventional commit test.')
console.info('Server is running on', server.url.origin)
