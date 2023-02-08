import express from 'express'
import {Server} from 'http'
import mainRoutes from './routes/index'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'

dotenv.config()
/*ultilizando metodo post */

//usar express
const server = express()

server.use(express.urlencoded({extended:true}))

server.set('view engine','mustache')

server.use(mainRoutes)

server.use(express.static(path.join(__dirname,'../public')))

server.set('views',path.join(__dirname,'views'))

server.engine('mustache',mustache())

server.use((req,res) =>{
    res.status(404).send("Página não encontrada")
})




//gerando o servidor na porta 3000
server.listen(process.env.PORT)
