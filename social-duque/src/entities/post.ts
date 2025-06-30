import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm'
import { User } from './user'
import { Comment } from './comment'

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn('uuid')
    id!: string
    @Column({type:'varchar'})
    content!: string
    @CreateDateColumn()
    created_at!: Date
    @ManyToOne(() => User, user => user.posts)
    author!: User
    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[]
}