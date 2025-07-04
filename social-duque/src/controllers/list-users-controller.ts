import { FastifyReply, FastifyRequest } from 'fastify'
import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { ListUsersUseCase } from '../usecases/users/list-users-usecase'

const repo = new UsersRepository()

export class ListUsersController{
    async handle(req:FastifyRequest, reply:FastifyReply){
        const usecase = new ListUsersUseCase(repo)
        const result = await usecase.execute()
        return reply.status(200).send(result)
    }
}