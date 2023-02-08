import {Request, Response} from 'express'



export const idade = (req:Request,res: Response) =>{

    res.render("pages/calculoidade")

}

export const idadeResultado = (req: Request,res: Response) =>{
    let anoNascimento: number = req.body.anoNascimento as unknown as number
    let resultado = 2023 - anoNascimento 
    res.render('pages/calculoidade',{
        resultado,anoNascimento
    })

}

export const avatar = (req: Request,res: Response) =>{
    res.render("pages/avatar")
}

export const nome = (req: Request,res: Response) =>{
    let nome:string = req.query.nome as string
    res.render("pages/nome",{
        nome
    })
}

export const idade1 = (req: Request,res: Response) =>{
    let idade: number = 18
    let mostrarIdade: boolean = false

    if (idade >= 13){
        mostrarIdade = true
    }
    res.render("pages/idade",{
        nome: "jj",
        mostrarIdade,
        products:[
            'mao',
            'mala',
            'sabao',
            'oleo',
            'jujuba',
        ]
        
    })
}

export const formulario = (req: Request,res: Response) =>{
    let nome: string = req.query.nome as string
    let idade: number = req.query.idade as unknown as number
    let telefone: string = req.query.telefone as string
    let endereco: string = req.query.endereco as string
    res.render("pages/obrayan",{
        nome,idade,telefone,endereco
    })
}