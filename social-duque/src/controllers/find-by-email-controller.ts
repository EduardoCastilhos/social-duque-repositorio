import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { findByEmailUseCase } from '../usecases/users/find-by-email-usecase'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'

export class FindByIdController{
    async handle(req:FastifyRequest<{Params:{email:string}}>, reply: FastifyReply){
        try{
            const usecase = new findByEmailUseCase(new UsersRepository())
            const result = await usecase.execute(req.params.email)
            return reply.send(result)
        }catch(error:any){
            return reply.status(404).send({ error: error.message})
        }
    }
}