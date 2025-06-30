import 'reflect-metadata'
import { Column, PrimaryGeneratedColumn, CreateDateColumn, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './user'
import { Post } from './post'

@Entity('comments')
export class Comment{
    @PrimaryGeneratedColumn('uuid')
    id!: string
    @Column({type:'varchar'})
    content!: string
    @CreateDateColumn()
    created_at!: Date
    @ManyToOne(() => User, user => user.id)
    author!: User
    @ManyToOne(() => Post, post => post.id)
    post!: Post
}