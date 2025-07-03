import { FastifyRequest } from 'fastify'
import { DeleteUserUseCase } from '../usecases/users/delete-user-usecase'
import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'

export class DeleteUserController{
    async handle(request :FastifyRequest<{Params:{id:string}}>){
        try{
            const usecase = new DeleteUserUseCase(new UsersRepository)
            const result = usecase.execute(request.params.id)
            return reply.status(204).send()
        }catch (error:any){
            return reply.status(400).send({error: error.message})
        }
    }
}