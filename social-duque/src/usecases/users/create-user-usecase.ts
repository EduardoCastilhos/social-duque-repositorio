import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'
import { CreateUserInput, createUserSchema } from '../../schemas/user-schema'
import { hash } from 'bcryptjs'
import { v4 as uuivd4 } from 'uuid'

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(input:CreateUserInput){
        const data = createUserSchema.parse(input)

        const existingEmail = await this.usersRepository.findByEmail(data.email)

        if(existingEmail){
            throw new Error('Este e-mail já foi cadastrado')
        }

        const existingPhone = await this.usersRepository.findByPhone(data.phone)

        if(existingPhone){
            throw new Error('Este telefone já está cadastrado')
        }

        const hashedPassword = await hash(data.password, 10)

        const user: User = {
            id: uuivd4(),
            name: data.name,
            email: data.email,
            password: hashedPassword,
            phone: data.password,
            created_at: new Date(),
            posts: [],
            comments: []
        }

        await this.usersRepository.create(user)

        return user
    }
}