import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import fastify from 'fastify'
import { usersRoutes } from './routes/user-routes'
import { registerSchemas } from './swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifySwagger from '@fastify/swagger'

export async function startApp(){
    const app = fastify()

    registerSchemas(app)

    await app.register(fastifySwagger, {
        openapi: {
            info: {
                title: 'API da rede social duque',
                version: '1.0.0',
                description: 'API desenvolvida para fins avaliativos'
            },
            servers:[
                {
                    url:'http://localhost:3333'
                }
            ],
        }
    }),

    await app.register(fastifySwaggerUi, {
        routePrefix: '/docs',
        staticCSP: true,
        transformStaticCSP: (header) => header
    })
    
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