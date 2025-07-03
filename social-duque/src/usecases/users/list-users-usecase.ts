import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

export class ListUsersUseCase{

    constructor(private usersRepository: IUsersRepository) {}

    async execute():Promise<Omit<User, 'password'>[]>{
        const users = await this.usersRepository.findAll()
        return users.map(({password, ...user})=>user)
    }

}