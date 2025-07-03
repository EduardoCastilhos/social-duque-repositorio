import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'
import { CreateUserInput, createUserSchema } from '../../schemas/user-schema'
import { hash } from 'bcryptjs'
import { v4 as uuivd4 } from 'uuid'

export class createUserUseCase {
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
    }
}