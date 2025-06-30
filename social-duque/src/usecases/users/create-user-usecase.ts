import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'

interface IRequest {
    name: string
    email: string
    password: string
}

export class createUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute({ name, email, password }: IRequest): Promise<User> {
        const existingUser = await this.usersRepository.findByEmail(email)
        if (existingUser) {
            throw new Error('Este usuário já existe')
        }

        const user = await this.usersRepository.create({
            name,
            email,
            password,
            id: '',
            phone: '',
            created_at: new Date(),
            posts: [],
            comments: []
        })

        return user
    }
}