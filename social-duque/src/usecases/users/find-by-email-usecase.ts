import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

export class findByEmailUseCase {

    constructor(private usersRepository: IUsersRepository) {}

    async execute(email:string): Promise<User> {
        const user = await this.usersRepository.findByEmail(email)

        if(!user){
            throw new Error ('Usuário não encontrado')
        }

        return user
    }
}