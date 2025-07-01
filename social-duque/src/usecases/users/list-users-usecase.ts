import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

export class listUsersUseCase{

    constructor(private usersRepository: IUsersRepository) {}

    async execute():Promise<User[]>{
        const users = await this.usersRepository.findAll()
        return users
    }

}