import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from './config/env'
import { User } from './entities/user'
import { Post } from './entities/post'
import { Comment } from './entities/comment'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: env.DATABASE_FILE,
    synchronize: false,
    logging: false,
    entities: [User, Post, Comment],
    migrations: ['./src/typeorm/migrations/*.ts']
})