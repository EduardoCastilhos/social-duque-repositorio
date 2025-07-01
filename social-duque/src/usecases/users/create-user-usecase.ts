import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'
import { CreateUserInput, createUserSchema } from '../../schemas/user-schema'
import { hash } from 'bcryptjs'
import { v4 as uuivd4 } from 'uuid'

export class createUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute({ input:CreateUserInput){
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