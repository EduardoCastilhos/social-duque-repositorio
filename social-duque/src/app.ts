import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import fastify from 'fastify'
import { usersRoutes } from './routes/user-routes'

export async function startApp(){
    const app = fastify()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de dados inicializado')
        }
    ).catch((ex)=>{
        console.log('Erro de conexão com o banco de dados',ex)
        process.exit(1)
    })

    app.register(usersRoutes)
    return app
}