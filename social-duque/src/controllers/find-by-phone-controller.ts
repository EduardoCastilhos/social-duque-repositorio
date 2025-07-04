import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { FindByPhoneUseCase } from '../usecases/users/find-by-phone-usecase'
import fastify, { FastifyReply, FastifyRequest } from 'fastify'

export class FindByPhoneController{
    async handle(req:FastifyRequest<{Params:{phone:string}}>, reply: FastifyReply){
        try{
            const usecase = new FindByPhoneUseCase(new UsersRepository())
            const result = await usecase.execute(req.params.phone)
            return reply.send(result)
        }catch(error:any){
            return reply.status(404).send({ error: error.message})
        }
    }
}