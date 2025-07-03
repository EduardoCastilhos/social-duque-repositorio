import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

export class FindByPhoneUseCase {

    constructor(private usersRepository: IUsersRepository) {}

    async execute( phone:string ):Promise<Omit<User, 'password'>>{
        const user = await this.usersRepository.findByPhone(phone)

        if(!user){
            throw new Error('Usuário não encontrado')
        }
        const{password, ...safeUser} = user

        return safeUser
    }
}