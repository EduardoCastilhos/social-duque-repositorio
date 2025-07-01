import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

interface IRequest{
    id: string
    data: Partial<Omit<User, 'id'|'created_at'|'posts'|'comments'>>
}

export class updateUserUseCase{
    
    constructor(private usersRepository: IUsersRepository){}

    async execute({id, data}: IRequest):Promise<User>{
        const user = await this.usersRepository.findById(id)

        if(!user) {
            throw new Error('Usuário não encontrado')
        }

        const updatedUser = await this.usersRepository.update(id, data)
        return updatedUser
    }
}