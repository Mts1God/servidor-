import express from 'express'
import {Server} from 'http'

//usar express
const server = express()

server.get('/',(req,res) =>{
    res.send("Olá Mundo!")
})
server.get('/naruto',(req,res) =>{
    res.send("narutin")
})

//rota dinamica
server.get('/noticia/:lesma',(req,res) =>{
    let lesma: string = req.params.lesma
    res.send(`Noticia: ${lesma}`)
})

server.get('/voo/:origem-:destino',(req,res) =>{
    let{origem, destino} = req.params

    res.send(`Procurando voos de ${origem} até ${destino}`)
})


//gerando o servidor na porta 3000
server.listen(3000)
