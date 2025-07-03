import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

interface IRequest{
    phone: string
}

export class FindByPhoneUseCase {

    constructor(private usersRepository: IUsersRepository) {}

    async execute({phone}: IRequest): Promise<User>{
        const user = await this.usersRepository.findByPhone(phone)

        if(!user){
            throw new Error('Usuário não encontrado')
        }

        return user
    }

}