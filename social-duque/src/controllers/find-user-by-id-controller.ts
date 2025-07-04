import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { FindByIdUseCase } from '../usecases/users/find-by-id-usecase'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'

export class FindByIdController{
    async handle(req:FastifyRequest<{Params:{id:string}}>, reply: FastifyReply){
        try{
            const usecase = new FindByIdUseCase(new UsersRepository())
            const result = await usecase.execute(req.params.id)
            return reply.send(result)
        }catch(error:any){
            return reply.status(404).send({ error: error.message})
        }
    }
}