import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { FindByEmailUseCase } from '../usecases/users/find-by-email-usecase'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'

export class FindByEmailController{
    async handle(req:FastifyRequest<{Params:{email:string}}>, reply: FastifyReply){
        try{
            const usecase = new FindByEmailUseCase(new UsersRepository())
            const result = await usecase.execute(req.params.email)
            return reply.send(result)
        }catch(error:any){
            return reply.status(404).send({ error: error.message})
        }
    }
}