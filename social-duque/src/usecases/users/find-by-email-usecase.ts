import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

interface IRequest{
    email:string
}

export class findByEmailUseCase {

    constructor(private usersRepository: IUsersRepository) {}

    async execute({email}: IRequest): Promise<User> {
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new Error ('Usuário não encontrado')
        }

        return user
    }
}