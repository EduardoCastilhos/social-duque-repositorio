import { FastifyReply, FastifyRequest } from 'fastify'
import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { updateUserUseCase } from '../usecases/users/update-user-usecase'

type UpdateUserRequest = {
    Params: {id:string}
    Body: {
        name?: string
        email?: string
        phone?: string
        password?: string
    }
}

export class UpdateUserController{
    async handle(
        request: FastifyRequest<UpdateUserRequest>,
        reply: FastifyReply
    ){
        try{
            const usecase = new updateUserUseCase(new UsersRepository)
            const result = await usecase.execute(request.params.id, request.body)
            return reply.send(result)
        } catch (error:any) {
            return reply.status(400).send({error: error.message})
        }
    }
}