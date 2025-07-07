import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controllers/create-user-controller'
import { ListUsersController } from '../controllers/list-users-controller'
import { FindByEmailController } from '../controllers/find-by-email-controller'
import { DeleteUserController } from '../controllers/delete-user-controller'
import { UpdateUserController } from '../controllers/update-user-controller'
import { FindByIdController } from '../controllers/find-user-by-id-controller'
import { FindByPhoneController } from '../controllers/find-by-phone-controller'

const createUserController = new CreateUserController()
const listUserController = new ListUsersController()
const findByEmailController = new FindByEmailController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
const findByIdController = new FindByIdController()
const findByPhoneController = new FindByPhoneController() 

export async function usersRoutes(app:FastifyInstance){

    app.post('/users', {
        schema: {
          summary: 'Cria um novo usuário',
          body: { $ref: 'UserInput#' },
          response: {
            201: {
              description: 'Usuário criado com sucesso',
              $ref: 'UserOutput#'
            },
            400: {
              description: 'Erro de validação ou dados duplicados'
            }
          }
        }
      }, createUserController.handle)
    
      app.get('/users', {
        schema: {
          summary: 'Lista todos usuários',
          response: {
            200: {
              description: 'Usuários listados',
              type: 'array',
              items: { $ref: 'UserOutput#' }
            },
            400: {
              description: 'Erro'
            }
          }
        }
      }, listUserController.handle)
    
      app.get('/users/id/:id', {
        schema: {
          summary: 'Busca usuário pelo ID',
          params: { $ref: 'UserIdParam#' },
          response: {
            200: { $ref: 'UserOutput#' },
            404: { description: 'Usuário não encontrado' }
          }
        }
      }, findByIdController.handle)
    
      app.get('/users/phone/:phone', {
        schema: {
          summary: 'Busca usuário pelo telefone',
          params: { $ref: 'UserPhoneParam#' },
          response: {
            200: { $ref: 'UserOutput#' },
            404: { description: 'Usuário não encontrado' }
          }
        }
      }, findByPhoneController.handle)
    
      app.get('/users/email/:email', {
        schema: {
          summary: 'Busca usuário pelo email',
          params: { $ref: 'UserEmailParam#' },
          response: {
            200: { $ref: 'UserOutput#' },
            404: { description: 'Usuário não encontrado' }
          }
        }
      }, findByEmailController.handle)
    
      app.put('/users/update/:id', {
        schema: {
          summary: 'Atualiza usuário pelo ID',
          params: { $ref: 'UserIdParam#' },
          body: { $ref: 'UserInput#' },
          response: {
            200: { $ref: 'UserOutput#' },
            400: { description: 'Erro de validação' },
            404: { description: 'Usuário não encontrado' }
          }
        }
      }, updateUserController.handle)
    
      app.delete('/users/update/:id', {
        schema: {
          summary: 'Deleta usuário pelo ID',
          params: { $ref: 'UserIdParam#' },
          response: {
            204: { description: 'Usuário deletado com sucesso' },
            404: { description: 'Usuário não encontrado' }
          }
        }
      }, deleteUserController.handle)
    }