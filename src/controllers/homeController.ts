import {Request, Response} from 'express'

export const home = ((req:Request, res: Response) =>{
    res.render('pages/home',{
        nome: "mateus",
        showWelcome: false
    })
}) 