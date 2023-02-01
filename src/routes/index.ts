import {Router, Request, Response} from 'express'

const router = Router()

router.get('/',(req: Request, res: Response) =>{
    /*let pessoa = {
        name: 'mateus',
        idade: 21
    }
    */
    res.render('pages/home',{
        nome: "mateus",
        showWelcome: false
    })
})



//rota dinamica
router.get('/noticia/:lesma',(req: Request,res: Response) =>{
    let lesma: string = req.params.lesma
    res.send(`Noticia: ${lesma}`)
})

router.get('/voo/:origem-:destino',(req: Request,res: Response) =>{
    let{origem, destino} = req.params

    res.send(`Procurando voos de ${origem} até ${destino}`)
})

router.get('/avatar',(req: Request,res: Response) =>{
    res.render("pages/avatar")
})

router.get('/idade',(req: Request,res: Response) =>{
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
})

export default router