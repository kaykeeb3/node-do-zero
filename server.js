import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello World'
})

server.get('/hello', () => {
  return 'Hello rocktseat'
})

server.get('/node', () => {
  return 'Hello node'
})

server.listen({
  port: 3333,
})