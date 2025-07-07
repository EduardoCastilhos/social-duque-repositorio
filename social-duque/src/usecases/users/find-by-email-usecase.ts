import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

export class FindByEmailUseCase {

    constructor(private usersRepository: IUsersRepository) {}

    async execute(email:string): Promise<Omit<User, 'password'>>{
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new Error ('Usuário não encontrado')
        }
        const{password, ...safeUser} = user

        return safeUser
    }
}