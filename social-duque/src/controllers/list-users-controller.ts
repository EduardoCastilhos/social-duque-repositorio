import { FastifyReply, FastifyRequest } from 'fastify'
import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { listUsersUseCase } from '../usecases/users/list-users-usecase'

const repo = new UsersRepository()

export class ListUsersController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        const usecase = new listUsersUseCase(repo)
        const result = await usecase.execute()
        return reply.status(200).send(result)
    }
}