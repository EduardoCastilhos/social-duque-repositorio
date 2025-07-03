import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { findByPhoneUseCase } from '../usecases/users/find-by-phone-usecase'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'

export class FindByIdController{
    async handle(req:FastifyRequest<{Params:{phone:string}}>, reply: FastifyReply){
        try{
            const usecase = new findByPhoneUseCase(new UsersRepository())
            const result = await usecase.execute(req.params.phone)
            return reply.send(result)
        }catch(error:any){
            return reply.status(404).send({ error: error.message})
        }
    }
}