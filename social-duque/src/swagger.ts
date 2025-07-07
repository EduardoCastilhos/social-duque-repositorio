import { FastifyInstance } from 'fastify'

export function registerSchemas(app: FastifyInstance) {
  app.addSchema({
    $id: 'UserInput',
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string' },
      phone: { type: 'string' }
    },
    required: ['name', 'email', 'password', 'phone'],
    additionalProperties: false
  })

  app.addSchema({
    $id: 'UserOutput',
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      phone: { type: 'string' },
      created_at: { type: 'string', format: 'date-time' }
    },
    required: ['id', 'name', 'email', 'phone', 'created_at'],
    additionalProperties: false
  })

  app.addSchema({
    $id: 'UserIdParam',
    type: 'object',
    properties: {
      id: { type: 'string' }
    },
    required: ['id'],
    additionalProperties: false
  })

  app.addSchema({
    $id: 'UserPhoneParam',
    type: 'object',
    properties: {
      phone: { type: 'string' }
    },
    required: ['phone'],
    additionalProperties: false
  })

  app.addSchema({
    $id: 'UserEmailParam',
    type: 'object',
    properties: {
      email: { type: 'string', format: 'email' }
    },
    required: ['email'],
    additionalProperties: false
  })
}
