import { IUsersRepository } from '../../repositories/users/IUsersRepositories'
import { User } from '../../entities/user'
import { hash } from 'bcryptjs'
import { z } from 'zod'

const updateUserSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string().min(6).optional()
})

export type UpdateUserInput = z.infer<typeof updateUserSchema>

export class updateUserUseCase{
    
    constructor(private usersRepository: IUsersRepository){}

    async execute(id:string, data:UpdateUserInput): Promise<Omit<User, 'password'>>{
        const parsed = updateUserSchema.parse(data)

        if(parsed.password){
            parsed.password = await hash(parsed.password, 10)
        }

        const updated = await this.usersRepository.update(id, parsed)
        const { password, ...safeUser } = updated
        return safeUser
    }
}