import { IUsersRepository } from '../../repositories/users/IUsersRepositories'

interface IRequest {
    id: string
}

export class DeleteUserUseCase{

    constructor(private usersRepository: IUsersRepository) {}

    async execute({ id }: IRequest):Promise<void> {
        const user = await this.usersRepository.findById(id)

        if(!user) {
            throw new Error('Usuário não encontrado')
        }

        await this.usersRepository.delete(id)
    }
}