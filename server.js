import { createServer } from 'node:http'

const server = createServer(() => {
  console.log('oi')
})

server.listen(3333)