import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

interface IRequest{
    id: string
}

export class findByIdUseCase {
    
    constructor(private usersRepository: IUsersRepository) {}

    async execute({ id }: IRequest):Promise<User>{
        const user = await this.usersRepository.findById(id)

        if(!user){
            throw new Error('Usuário não encontrado')
        }

        return user
    }
}